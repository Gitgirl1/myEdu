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
3、
    转义字符：
    字符	十进制	转义字符
    "	    &#34;	&quot;
    &	    &#38;	&amp;
    <	    &#60;	&lt;
    >	    &#62;	&gt;
            &#160;	&nbsp;

1、
    sourceMap的生成
    //@ sourceMappingURL=jquery.min.map
        java -jar compiler.jar \ 
　　　　--js script.js \
　　　　--create_source_map ./script-min.js.map \
　　　　--source_map_format=V3 \
　　　　--js_output_file script-min.js

　  - js： 转换前的代码文件
　　- create_source_map： 生成的source map文件
　　- source_map_format：source map的版本，目前一律采用V3。
　　- js_output_file： 转换后的代码文件