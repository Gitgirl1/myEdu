// how.js

// 1、html5shiv.js
// 让ie6-8支持html5标签
// 在页面head中添加如下代码即可
// <!--[if lt IE 9]>
// <script type="text/javascript" src="js/html5shiv.js"></script>
// <![endif]-->

// 2、response.js
// 让ie支持兼容响应式布局
// <!--[if lt IE 9]><script src = "http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script><![endif]-->  

// 3、ie-css3.htc
// 让ie支持css3的圆角和阴影
// .box {
//     -moz-border-radius: 15px;                /* Firefox */
//     -webkit-border-radius: 15px;             /* Safari and Chrome */
//     border-radius: 15px;                     /* Opera 10.5+, future browsers, and now also Internet Explorer 6+ using IE-CSS3 */
 
//     -moz-box-shadow: 10px 10px 20px #000;     Firefox 
//     -webkit-box-shadow: 10px 10px 20px #000; /* Safari and Chrome */
//     box-shadow: 10px 10px 20px #000;         /* Opera 10.5+, future browsers and IE6+ using IE-CSS3 */
 
//     behavior: url(ie-css3.htc);              /* This lets IE know to call the script on all elements which get the 'box' class */
// }
// 其中url里为htc文件的相对路径
// if(window.update_css3_fix) update_css3_fix(el);
// 动态更新后调整