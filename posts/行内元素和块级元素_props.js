import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/行内元素和块级元素.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/行内元素和块级元素.html",
    'title': "行内元素和块级元素",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>行内元素和块级元素</h1>\n<h2 id="%E5%B8%B8%E7%94%A8%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0">常用行内元素<a class="anchor" href="#%E5%B8%B8%E7%94%A8%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0">§</a></h2>\n<ul>\n<li>a：锚点</li>\n<li>span：常用内联容器，定义文本内区块</li>\n<li>label：表格标签</li>\n<li>strong：粗体强调</li>\n<li>em：强调</li>\n<li>br：换行</li>\n<li>img：图片</li>\n<li>input：输入框</li>\n<li>select：项目选择</li>\n<li>textarea：多行文本输入框</li>\n<li>cite：引用</li>\n</ul>\n<h2 id="%E5%B8%B8%E7%94%A8%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0">常用块级元素<a class="anchor" href="#%E5%B8%B8%E7%94%A8%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0">§</a></h2>\n<ul>\n<li>div：常用块级容器，也是css layout的主要标签</li>\n<li>h1~h6：1~6级标题</li>\n<li>p：段落</li>\n<li>form：交互表单</li>\n<li>ul：无序列表</li>\n<li>li：用于表示列表(ul/ol)里的条目</li>\n<li>ol：有序列表</li>\n<li>dl：定义列表</li>\n<li>address： 地址</li>\n<li>hr：水平分隔线</li>\n<li>table：表格</li>\n<li>fieldset：</li>\n</ul>\n<h2 id="%E5%8C%BA%E5%88%AB">区别<a class="anchor" href="#%E5%8C%BA%E5%88%AB">§</a></h2>\n<ol>\n<li>块级元素会独占一行，其宽度自动填满其父元素宽度，行内元素不会独占一行，相邻的行内元素会排列在同一行里（默认会有小间隙），直到一行排不下，才会换行，其宽度随元素的内容而变化</li>\n<li>块级元素可以设置 width, height属性，【注意：块级元素即使设置了宽度，仍然是独占一行的】，行内元素设置width，height无效;</li>\n<li>块级元素可以设置margin 和 padding.行内元素的水平方向的padding-left,padding-right,margin-left,margin-right 都产生边距效果，但是竖直方向的padding-top,padding-bottom,margin-top,margin-bottom都不会产生边距效果。（水平方向有效，竖直方向无效）</li>\n<li>行内元素与块级元素直观上的区别，行内元素会在一条直线上排列，都是同一行的，水平方向排列，块级元素各占据一行，垂直方向排列。块级元素从新行开始结束接着一个断行。</li>\n<li>块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素。</li>\n<li>行内元素与块级元素属性的不同，主要是盒模型属性上，行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效</li>\n</ol>\n<pre class="language-css"><code class="language-css">    display：inline 行内元素/内联元素\n    <span class="token property">display</span><span class="token punctuation">:</span>block 块级元素\n    <span class="token property">display</span><span class="token punctuation">:</span>inline-block 设置成行内块级元素。\n</code></pre>\n<blockquote>\n<p>行内块级元素:和其他元素同一行（行内元素特点），可以设置元素的宽高等（块级元&gt; 素特点）；这样的元素有img input；它们为行内元素，但可以改变宽和高；</p>\n</blockquote>\n<ol start="7">\n<li>行内元素属性标签的宽度是直接由内部的文字或者图片等内容撑开的</li>\n<li>行内元素属性标签内部不能嵌套行属性标签（a链接内不能嵌套其他链接）</li>\n<li>块级元素属性标签的宽度假如不做设置，会直接默认为父元素宽度的100%</li>\n<li>块级元素属性标签是可以直接嵌套的</li>\n<li>p标签中不能嵌套div标签</li>\n</ol>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u884C\u5185\u5143\u7D20\u548C\u5757\u7EA7\u5143\u7D20"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%B8%B8%E7%94%A8%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0">常用行内元素<a class="anchor" href="#%E5%B8%B8%E7%94%A8%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0">§</a></h2>\n<ul>\n<li>a：锚点</li>\n<li>span：常用内联容器，定义文本内区块</li>\n<li>label：表格标签</li>\n<li>strong：粗体强调</li>\n<li>em：强调</li>\n<li>br：换行</li>\n<li>img：图片</li>\n<li>input：输入框</li>\n<li>select：项目选择</li>\n<li>textarea：多行文本输入框</li>\n<li>cite：引用</li>\n</ul>\n<h2 id="%E5%B8%B8%E7%94%A8%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0">常用块级元素<a class="anchor" href="#%E5%B8%B8%E7%94%A8%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0">§</a></h2>\n<ul>\n<li>div：常用块级容器，也是css layout的主要标签</li>\n<li>h1~h6：1~6级标题</li>\n<li>p：段落</li>\n<li>form：交互表单</li>\n<li>ul：无序列表</li>\n<li>li：用于表示列表(ul/ol)里的条目</li>\n<li>ol：有序列表</li>\n<li>dl：定义列表</li>\n<li>address： 地址</li>\n<li>hr：水平分隔线</li>\n<li>table：表格</li>\n<li>fieldset：</li>\n</ul>\n<h2 id="%E5%8C%BA%E5%88%AB">区别<a class="anchor" href="#%E5%8C%BA%E5%88%AB">§</a></h2>\n<ol>\n<li>块级元素会独占一行，其宽度自动填满其父元素宽度，行内元素不会独占一行，相邻的行内元素会排列在同一行里（默认会有小间隙），直到一行排不下，才会换行，其宽度随元素的内容而变化</li>\n<li>块级元素可以设置 width, height属性，【注意：块级元素即使设置了宽度，仍然是独占一行的】，行内元素设置width，height无效;</li>\n<li>块级元素可以设置margin 和 padding.行内元素的水平方向的padding-left,padding-right,margin-left,margin-right 都产生边距效果，但是竖直方向的padding-top,padding-bottom,margin-top,margin-bottom都不会产生边距效果。（水平方向有效，竖直方向无效）</li>\n<li>行内元素与块级元素直观上的区别，行内元素会在一条直线上排列，都是同一行的，水平方向排列，块级元素各占据一行，垂直方向排列。块级元素从新行开始结束接着一个断行。</li>\n<li>块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素。</li>\n<li>行内元素与块级元素属性的不同，主要是盒模型属性上，行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效</li>\n</ol>\n<pre class="language-css"><code class="language-css">    display：inline 行内元素/内联元素\n    <span class="token property">display</span><span class="token punctuation">:</span>block 块级元素\n    <span class="token property">display</span><span class="token punctuation">:</span>inline-block 设置成行内块级元素。\n</code></pre>\n<blockquote>\n<p>行内块级元素:和其他元素同一行（行内元素特点），可以设置元素的宽高等（块级元&gt; 素特点）；这样的元素有img input；它们为行内元素，但可以改变宽和高；</p>\n</blockquote>\n<ol start="7">\n<li>行内元素属性标签的宽度是直接由内部的文字或者图片等内容撑开的</li>\n<li>行内元素属性标签内部不能嵌套行属性标签（a链接内不能嵌套其他链接）</li>\n<li>块级元素属性标签的宽度假如不做设置，会直接默认为父元素宽度的100%</li>\n<li>块级元素属性标签是可以直接嵌套的</li>\n<li>p标签中不能嵌套div标签</li>\n</ol>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%B8%B8%E7%94%A8%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0">常用行内元素</a></li><li><a href="#%E5%B8%B8%E7%94%A8%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0">常用块级元素</a></li><li><a href="#%E5%8C%BA%E5%88%AB">区别</a></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-03-04T13:28:28.000Z",
    'updated': null,
    'excerpt': "常用行内元素 - a：锚点 - span：常用内联容器，定义文本内区块 - label：表格标签 - strong：粗体强调 - em：强调 - br：换行 - img：图片 - input：输入框 - select：项目选择 - textarea：多行文本输入框 - cite：引用 常用...",
    'cover': undefined,
    'categories': [
        "HTML"
    ],
    'tags': [
        "行内元素和块级元素"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/行内元素和块级元素.md",
                "title": "行内元素和块级元素",
                "link": "posts/行内元素和块级元素.html",
                "date": "2021-03-04T13:28:28.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "HTML"
                ],
                "tags": [
                    "行内元素和块级元素"
                ],
                "excerpt": "常用行内元素 - a：锚点 - span：常用内联容器，定义文本内区块 - label：表格标签 - strong：粗体强调 - em：强调 - br：换行 - img：图片 - input：输入框 - select：项目选择 - textarea：多行文本输入框 - cite：引用 常用..."
            },
            {
                "pagePath": "posts/111.md",
                "title": "每日总结",
                "link": "posts/111.html",
                "date": "2021-03-04T13:28:28.000Z",
                "updated": "2021-03-04T13:37:41.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "JavaScript"
                ],
                "tags": [
                    "面试",
                    "原型链",
                    "学习笔记"
                ],
                "excerpt": "周末时间利用"
            },
            {
                "pagePath": "posts/微信内置浏览器播放视频.md",
                "title": "微信内置X5内核浏览器播放视频相关问题",
                "link": "posts/微信内置浏览器播放视频.html",
                "date": "2021-03-03T12:50:17.000Z",
                "updated": "2021-03-03T13:18:54.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "微信的坑"
                ],
                "tags": [
                    "视频播放"
                ],
                "excerpt": "官网 原生video标签 <video id=\"vid\" src=\"./assets/test.mp4\" poster=\"./assets/test.png\" controls></video> X5内核视频两种播放形态 1. 页面内播放 X5内核视频在用户点击后默认会进入全屏播放，前端可以设置video的x5-plays...",
                "cover": "images/wx01.png"
            },
            {
                "pagePath": "posts/Golang基础.md",
                "title": "Golang基础",
                "link": "posts/Golang基础.html",
                "date": "2021-02-26T04:55:47.000Z",
                "updated": "2021-02-26T05:36:43.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Golang"
                ],
                "tags": [
                    "学习笔记"
                ],
                "excerpt": "基本语法 package main import \"fmt\" func main() { // 此括号不能写在单独行 fmt.Println(\"Hello Go~\") } 格式化字符串 Go语言使用fmt.Sprintf格式化字符串并赋值给新串 package main import \"fmt\" func main() { // %d表示整..."
            },
            {
                "pagePath": "posts/原型链.md",
                "title": "原型链",
                "link": "posts/原型链.html",
                "date": "2021-02-25T14:45:38.000Z",
                "updated": "2021-03-04T13:37:41.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "JavaScript"
                ],
                "tags": [
                    "面试",
                    "原型链",
                    "学习笔记"
                ],
                "excerpt": "构造函数 本质就是函数，与普通函数一样，一般命名首字母大写来与普通函数区分，用new关键字调用。 **每个函数再创建时，会自动创建prototype属性，它指向一个对象，这个对象正是调用该构造函数而创建的实例的原型。**每一个Ja..."
            },
            {
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-03-05T03:10:12.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "UE4"
                ],
                "tags": [
                    "UE4",
                    "学习笔记"
                ],
                "excerpt": " 1. 常用快捷键 2. 变更路线节点：Reroute Node 3. Execute Console Command命令 1. 设置分辨率r.setRes 1920x1080 2. r.ScreenPercentage 200：双倍渲染 UE4像素流送系统 特点： 1. 流送并非播放预先录制的视频片段，而是播放...",
                "cover": "images/shortcut_key1.png"
            },
            {
                "pagePath": "posts/React笔记.md",
                "title": "React学习笔记",
                "link": "posts/React笔记.html",
                "date": "2021-01-29T14:58:22.000Z",
                "updated": "2021-02-21T23:30:13.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "React",
                    "学习笔记"
                ],
                "excerpt": " 1. 在html中简易使用jsx语法时，需要引入babel插件，同时设置<script type=\"text/babel\"></script> 2. js语法创建虚拟DOM：React.createElement('h1', {id: 'test'}, 'Hello, React') 3. 关于虚拟DOM： 1. 本质就是Object类型...",
                "cover": "images/lifeold.png"
            },
            {
                "pagePath": "posts/前端基础面试题.md",
                "title": "HTML篇",
                "link": "posts/前端基础面试题.html",
                "date": "2021-01-27T07:14:50.000Z",
                "updated": "2021-02-01T04:46:51.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
                "excerpt": "说说title和alt属性 HTML5有哪些新特性、移除了哪些元素 iframe有那些缺点？ HTML W3C的标准 Doctype作用? 严格模式与混杂模式如何区分？它们有何意义? HTML全局属性(global attribute)有哪些 viewport的content属性作用 div+c..."
            },
            {
                "pagePath": "posts/前端本地存储.md",
                "title": "前端本地存储",
                "link": "posts/前端本地存储.html",
                "date": "2021-01-27T03:51:39.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "学习笔记",
                    "前端本地存储"
                ],
                "excerpt": "cookie 作用 cookie是纯文本，没有可执行代码。存储数据，当用户访问了某个网站（网页）的时候，我们就可以通过cookie来向访问者电脑上存储数据，或者某些网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（..."
            },
            {
                "pagePath": "posts/跨域及常见解决办法.md",
                "title": "跨域及常见解决方法",
                "link": "posts/跨域及常见解决办法.html",
                "date": "2021-01-26T10:06:49.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "学习笔记",
                    "跨域"
                ],
                "excerpt": "什么是跨域 跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的。 广义的跨域： 1. 资源跳转：A链接、重定向、表单提交 2. 资源嵌入：<link>、<script>、<img>、<frame>等dom标签，还有样式中backgrou..."
            },
            {
                "pagePath": "posts/垃圾回收机制.md",
                "title": "垃圾回收机制",
                "link": "posts/垃圾回收机制.html",
                "date": "2021-01-26T03:09:41.000Z",
                "updated": "2021-01-26T06:08:48.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "学习笔记",
                    "垃圾回收机制"
                ],
                "excerpt": "JavaScript具有自动垃圾收集机制(GC:GarbageCollection)，也就是说，执行环境会负责管理代码执行过程中使用的内存。开发人员不用再关心内存使用问题，所需内存的分配以及无用内存的回收完全实现了自动管理。 内存生命周期 JS环...",
                "cover": "./images/markandsweep.png"
            },
            {
                "pagePath": "posts/防抖和节流.md",
                "title": "防抖和节流",
                "link": "posts/防抖和节流.html",
                "date": "2021-01-25T10:51:54.000Z",
                "updated": "2021-01-26T03:09:41.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "防抖和节流",
                    "学习笔记"
                ],
                "excerpt": " - 相同：在不影响客户体验的前提下，将频繁的回调函数，进行次数缩减，避免大量计算导致页的页面卡顿。 - 不同：防抖是将多次执行变为最后一次执行，节流是将多次执行变为在规定时间内只执行一次。 防抖 定义：指触发事件后在..."
            },
            {
                "pagePath": "posts/css_渐变.md",
                "title": "CSS渐变",
                "link": "posts/css_渐变.html",
                "date": "2021-01-25T09:32:57.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "CSS"
                ],
                "tags": [
                    "CSS",
                    "学习笔记",
                    "渐变"
                ],
                "excerpt": "CSS渐变<image>类型的一种特殊类型<gradient>表示，由两种或多种颜色之间的渐进过渡组成。有三种类型的渐变： - 线性（由linear-gradient()函数创建） - 径向（由radial-gradient()函数创建） - 圆锥（由conic-gradient()函数创...",
                "cover": "./images/deg.png"
            },
            {
                "pagePath": "posts/css_background.md",
                "title": "CSS的background属性详解",
                "link": "posts/css_background.html",
                "date": "2021-01-25T07:07:55.000Z",
                "updated": "2021-01-25T08:30:22.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "CSS"
                ],
                "tags": [
                    "CSS",
                    "学习笔记",
                    "background"
                ],
                "excerpt": "background是一中CSS简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attac..."
            },
            {
                "pagePath": "posts/Hook.md",
                "title": "Hook",
                "link": "posts/Hook.html",
                "date": "2021-01-25T07:07:55.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "JavaScript",
                    "学习笔记",
                    "React"
                ],
                "excerpt": "16.8版本新增特性。可以在不编写class的情况下使用state以及其它的React特性。 import React, { useState } from 'react'; function Example() { // 声明一个新的叫做“count”的state变量 const [count, setCount] = useState..."
            },
            {
                "pagePath": "posts/元素渲染.md",
                "title": "React-元素渲染",
                "link": "posts/元素渲染.html",
                "date": "2021-01-22T08:08:14.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "JavaScript",
                    "学习笔记",
                    "React"
                ],
                "excerpt": "元素是构成React应用的最小砖块，其描述了你在屏幕上想看到的内容。 const element = <h1>Hello, World</h1>; 与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一..."
            },
            {
                "pagePath": "posts/List.md",
                "title": "数据结构与算法JavaScript-列表",
                "link": "posts/List.html",
                "date": "2021-01-22T08:08:14.000Z",
                "updated": "2021-01-25T02:27:19.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "数据结构与算法"
                ],
                "tags": [
                    "JavaScript",
                    "数据结构与算法",
                    "学习笔记"
                ],
                "excerpt": "列表的抽象数据类型定义 方法和方法 说明 listSize(属性) 列表的元素个数 pos(属性) 列表的当前位置 length(属性) 返回列表中元素的个数 clear(方法) 清空列表中的所有元素 toString(方法) 返回列表的字符串形式 getElement(方..."
            },
            {
                "pagePath": "posts/JSX简介.md",
                "title": "React-JSX简介",
                "link": "posts/JSX简介.html",
                "date": "2021-01-21T07:25:11.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "JavaScript",
                    "学习笔记",
                    "React"
                ],
                "excerpt": "考虑如下变量声明： const element = <h1>Hello, world!</h1>; 这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。 在JSX中嵌入表达式 const name = 'Bob'; const element = <h1>Hello..."
            },
            {
                "pagePath": "posts/Array.md",
                "title": "数据结构与算法JavaScript-数组",
                "link": "posts/Array.html",
                "date": "2021-01-20T05:13:02.000Z",
                "updated": "2021-01-21T06:40:51.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "数据结构与算法"
                ],
                "tags": [
                    "JavaScript",
                    "数据结构与算法",
                    "学习笔记"
                ],
                "excerpt": "数组 JavaScript 中的数组是一种特殊的对象， 用来表示偏移量的索引是该对象的属性， 索引可 能是整数。 然而， 这些数字索引在内部被转换为字符串类型， 这是因为 JavaScript 对象中 的属性名必须是字符串。 数组在 JavaScrip..."
            }
        ],
        "categories": [
            {
                "name": "面试",
                "count": 5
            },
            {
                "name": "React",
                "count": 4
            },
            {
                "name": "CSS",
                "count": 2
            },
            {
                "name": "JavaScript",
                "count": 2
            },
            {
                "name": "数据结构与算法",
                "count": 2
            },
            {
                "name": "Golang",
                "count": 1
            },
            {
                "name": "HTML",
                "count": 1
            },
            {
                "name": "UE4",
                "count": 1
            },
            {
                "name": "微信的坑",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "学习笔记",
                "count": 16
            },
            {
                "name": "面试",
                "count": 7
            },
            {
                "name": "JavaScript",
                "count": 6
            },
            {
                "name": "React",
                "count": 4
            },
            {
                "name": "CSS",
                "count": 3
            },
            {
                "name": "原型链",
                "count": 2
            },
            {
                "name": "数据结构与算法",
                "count": 2
            },
            {
                "name": "background",
                "count": 1
            },
            {
                "name": "HTML",
                "count": 1
            },
            {
                "name": "UE4",
                "count": 1
            },
            {
                "name": "前端本地存储",
                "count": 1
            },
            {
                "name": "垃圾回收机制",
                "count": 1
            },
            {
                "name": "渐变",
                "count": 1
            },
            {
                "name": "行内元素和块级元素",
                "count": 1
            },
            {
                "name": "视频播放",
                "count": 1
            },
            {
                "name": "跨域",
                "count": 1
            },
            {
                "name": "防抖和节流",
                "count": 1
            }
        ]
    }
};
