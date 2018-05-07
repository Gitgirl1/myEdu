本周知识点：
echo 插件实现图片懒加载
1、
    splice()方法：
    splice(index,howmany,[])
    方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
2、
    var coords = el.getBoundingClientRect();
    // 返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的CSS 边框集合 。
    // top left right bottom 都是相对于左上