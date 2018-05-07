/*!
 *  Echo v1.4.0
 *  Lazy-loading with data-* attributes, offsets and throttle options
 *  Project: https://github.com/toddmotto/echo
 *  by Todd Motto: http://toddmotto.com
 *  Copyright. MIT licensed.
 */
window.Echo = (function(window, document, undefined) {

    'use strict';

    var store = [],
    offset,
    throttle,
    poll;

    var _inView = function(el) {
        // 返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的CSS 边框集合 。
        // top left right bottom 都是相对于左上
        var coords = el.getBoundingClientRect();
        return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
    };

    var _pollImages = function() {
        for (var i = store.length; i--;) {
            var self = store[i];
            // 当图片出现在视野里
            if (_inView(self)) {
                self.src = self.getAttribute('data-echo');
                // splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
                store.splice(i, 1);
            }
        }
    };

    var _throttle = function() {
        clearTimeout(poll);
        poll = setTimeout(_pollImages, throttle);
    };

    var init = function(obj) {
        debugger
        var nodes = document.querySelectorAll('[data-echo]');
        var opts = obj || {};
        offset = opts.offset || 0;
        throttle = opts.throttle || 250;

        for (var i = 0; i < nodes.length; i++) {
            store.push(nodes[i]);
        }

        _throttle();

        if (document.addEventListener) {
            window.addEventListener('scroll', _throttle, false);
        } else {
            window.attachEvent('onscroll', _throttle);
        }
    };

    return {
        init: init,
        render: _throttle
    };

})(window, document);