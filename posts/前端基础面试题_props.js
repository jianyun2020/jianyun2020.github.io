import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/前端基础面试题.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/前端基础面试题.html",
    'title': "HTML篇",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>HTML篇</h1>\n<h2 id="%E8%AF%B4%E8%AF%B4title%E5%92%8Calt%E5%B1%9E%E6%80%A7">说说title和alt属性<a class="anchor" href="#%E8%AF%B4%E8%AF%B4title%E5%92%8Calt%E5%B1%9E%E6%80%A7">§</a></h2>\n<h2 id="html5%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7%E7%A7%BB%E9%99%A4%E4%BA%86%E5%93%AA%E4%BA%9B%E5%85%83%E7%B4%A0">HTML5有哪些新特性、移除了哪些元素<a class="anchor" href="#html5%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7%E7%A7%BB%E9%99%A4%E4%BA%86%E5%93%AA%E4%BA%9B%E5%85%83%E7%B4%A0">§</a></h2>\n<h2 id="iframe%E6%9C%89%E9%82%A3%E4%BA%9B%E7%BC%BA%E7%82%B9">iframe有那些缺点？<a class="anchor" href="#iframe%E6%9C%89%E9%82%A3%E4%BA%9B%E7%BC%BA%E7%82%B9">§</a></h2>\n<h2 id="html-w3c%E7%9A%84%E6%A0%87%E5%87%86">HTML W3C的标准<a class="anchor" href="#html-w3c%E7%9A%84%E6%A0%87%E5%87%86">§</a></h2>\n<h2 id="doctype%E4%BD%9C%E7%94%A8-%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%B7%B7%E6%9D%82%E6%A8%A1%E5%BC%8F%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E5%AE%83%E4%BB%AC%E6%9C%89%E4%BD%95%E6%84%8F%E4%B9%89">Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?<a class="anchor" href="#doctype%E4%BD%9C%E7%94%A8-%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%B7%B7%E6%9D%82%E6%A8%A1%E5%BC%8F%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E5%AE%83%E4%BB%AC%E6%9C%89%E4%BD%95%E6%84%8F%E4%B9%89">§</a></h2>\n<h2 id="html%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7global-attribute%E6%9C%89%E5%93%AA%E4%BA%9B">HTML全局属性(global attribute)有哪些<a class="anchor" href="#html%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7global-attribute%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<h2 id="viewport%E7%9A%84content%E5%B1%9E%E6%80%A7%E4%BD%9C%E7%94%A8">viewport的content属性作用<a class="anchor" href="#viewport%E7%9A%84content%E5%B1%9E%E6%80%A7%E4%BD%9C%E7%94%A8">§</a></h2>\n<h2 id="divcss%E7%9A%84%E5%B8%83%E5%B1%80%E8%BE%83table%E5%B8%83%E5%B1%80%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E7%82%B9">div+css的布局较table布局有什么优点<a class="anchor" href="#divcss%E7%9A%84%E5%B8%83%E5%B1%80%E8%BE%83table%E5%B8%83%E5%B1%80%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E7%82%B9">§</a></h2>\n<h2 id="src%E4%B8%8Ehref%E7%9A%84%E5%8C%BA%E5%88%AB">src与href的区别<a class="anchor" href="#src%E4%B8%8Ehref%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<h1>CSS篇</h1>\n<h2 id="link-%E4%B8%8E-import-%E7%9A%84%E5%8C%BA%E5%88%AB">link 与 @import 的区别<a class="anchor" href="#link-%E4%B8%8E-import-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<h2 id="bfc-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8">BFC 有什么用<a class="anchor" href="#bfc-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8">§</a></h2>\n<h2 id=""><a class="anchor" href="#">§</a></h2>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "HTML\u7BC7"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E8%AF%B4%E8%AF%B4title%E5%92%8Calt%E5%B1%9E%E6%80%A7">说说title和alt属性<a class="anchor" href="#%E8%AF%B4%E8%AF%B4title%E5%92%8Calt%E5%B1%9E%E6%80%A7">§</a></h2>\n<h2 id="html5%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7%E7%A7%BB%E9%99%A4%E4%BA%86%E5%93%AA%E4%BA%9B%E5%85%83%E7%B4%A0">HTML5有哪些新特性、移除了哪些元素<a class="anchor" href="#html5%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7%E7%A7%BB%E9%99%A4%E4%BA%86%E5%93%AA%E4%BA%9B%E5%85%83%E7%B4%A0">§</a></h2>\n<h2 id="iframe%E6%9C%89%E9%82%A3%E4%BA%9B%E7%BC%BA%E7%82%B9">iframe有那些缺点？<a class="anchor" href="#iframe%E6%9C%89%E9%82%A3%E4%BA%9B%E7%BC%BA%E7%82%B9">§</a></h2>\n<h2 id="html-w3c%E7%9A%84%E6%A0%87%E5%87%86">HTML W3C的标准<a class="anchor" href="#html-w3c%E7%9A%84%E6%A0%87%E5%87%86">§</a></h2>\n<h2 id="doctype%E4%BD%9C%E7%94%A8-%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%B7%B7%E6%9D%82%E6%A8%A1%E5%BC%8F%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E5%AE%83%E4%BB%AC%E6%9C%89%E4%BD%95%E6%84%8F%E4%B9%89">Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?<a class="anchor" href="#doctype%E4%BD%9C%E7%94%A8-%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%B7%B7%E6%9D%82%E6%A8%A1%E5%BC%8F%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E5%AE%83%E4%BB%AC%E6%9C%89%E4%BD%95%E6%84%8F%E4%B9%89">§</a></h2>\n<h2 id="html%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7global-attribute%E6%9C%89%E5%93%AA%E4%BA%9B">HTML全局属性(global attribute)有哪些<a class="anchor" href="#html%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7global-attribute%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<h2 id="viewport%E7%9A%84content%E5%B1%9E%E6%80%A7%E4%BD%9C%E7%94%A8">viewport的content属性作用<a class="anchor" href="#viewport%E7%9A%84content%E5%B1%9E%E6%80%A7%E4%BD%9C%E7%94%A8">§</a></h2>\n<h2 id="divcss%E7%9A%84%E5%B8%83%E5%B1%80%E8%BE%83table%E5%B8%83%E5%B1%80%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E7%82%B9">div+css的布局较table布局有什么优点<a class="anchor" href="#divcss%E7%9A%84%E5%B8%83%E5%B1%80%E8%BE%83table%E5%B8%83%E5%B1%80%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E7%82%B9">§</a></h2>\n<h2 id="src%E4%B8%8Ehref%E7%9A%84%E5%8C%BA%E5%88%AB">src与href的区别<a class="anchor" href="#src%E4%B8%8Ehref%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<h1>CSS篇</h1>\n<h2 id="link-%E4%B8%8E-import-%E7%9A%84%E5%8C%BA%E5%88%AB">link 与 @import 的区别<a class="anchor" href="#link-%E4%B8%8E-import-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<h2 id="bfc-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8">BFC 有什么用<a class="anchor" href="#bfc-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8">§</a></h2>\n<h2 id=""><a class="anchor" href="#">§</a></h2>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E8%AF%B4%E8%AF%B4title%E5%92%8Calt%E5%B1%9E%E6%80%A7">说说title和alt属性</a></li><li><a href="#html5%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7%E7%A7%BB%E9%99%A4%E4%BA%86%E5%93%AA%E4%BA%9B%E5%85%83%E7%B4%A0">HTML5有哪些新特性、移除了哪些元素</a></li><li><a href="#iframe%E6%9C%89%E9%82%A3%E4%BA%9B%E7%BC%BA%E7%82%B9">iframe有那些缺点？</a></li><li><a href="#html-w3c%E7%9A%84%E6%A0%87%E5%87%86">HTML W3C的标准</a></li><li><a href="#doctype%E4%BD%9C%E7%94%A8-%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%B7%B7%E6%9D%82%E6%A8%A1%E5%BC%8F%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E5%AE%83%E4%BB%AC%E6%9C%89%E4%BD%95%E6%84%8F%E4%B9%89">Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?</a></li><li><a href="#html%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7global-attribute%E6%9C%89%E5%93%AA%E4%BA%9B">HTML全局属性(global attribute)有哪些</a></li><li><a href="#viewport%E7%9A%84content%E5%B1%9E%E6%80%A7%E4%BD%9C%E7%94%A8">viewport的content属性作用</a></li><li><a href="#divcss%E7%9A%84%E5%B8%83%E5%B1%80%E8%BE%83table%E5%B8%83%E5%B1%80%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E7%82%B9">div+css的布局较table布局有什么优点</a></li><li><a href="#src%E4%B8%8Ehref%E7%9A%84%E5%8C%BA%E5%88%AB">src与href的区别</a></li><li><a href="#link-%E4%B8%8E-import-%E7%9A%84%E5%8C%BA%E5%88%AB">link 与 @import 的区别</a></li><li><a href="#bfc-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8">BFC 有什么用</a></li><li><a href="#"></a></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-27T07:14:50.000Z",
    'updated': "2021-02-01T04:46:51.000Z",
    'excerpt': "说说title和alt属性 HTML5有哪些新特性、移除了哪些元素 iframe有那些缺点？ HTML W3C的标准 Doctype作用? 严格模式与混杂模式如何区分？它们有何意义? HTML全局属性(global attribute)有哪些 viewport的content属性作用 div+c...",
    'cover': undefined,
    'categories': [
        "面试"
    ],
    'tags': [
        "面试",
        "HTML",
        "CSS",
        "JavaScript"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-02-08T03:22:15.000Z",
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
                "excerpt": " 1. 常用快捷键 2. 变更路线节点：Reroute Node 3. Execute Console Command命令 1. 设置分辨率r.setRes 1920x1080 UE4像素流送系统 特点： 1. 流送并非播放预先录制的视频片段，而是播放虚幻引擎实时生成的渲染帧和音频。 2. ...",
                "cover": "images/shortcut_key1.png"
            },
            {
                "pagePath": "posts/React笔记.md",
                "title": "React学习笔记",
                "link": "posts/React笔记.html",
                "date": "2021-01-29T14:58:22.000Z",
                "updated": "2021-02-09T02:25:34.000Z",
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
                "pagePath": "posts/2021-1-29.md",
                "title": "每日总结",
                "link": "posts/2021-1-29.html",
                "date": "2021-01-29T11:38:40.000Z",
                "updated": "2021-01-31T15:15:06.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "每日总结"
                ],
                "tags": [
                    "每日总结"
                ],
                "excerpt": "周末时间利用"
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
                "name": "数据结构与算法",
                "count": 2
            },
            {
                "name": "UE4",
                "count": 1
            },
            {
                "name": "每日总结",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "学习笔记",
                "count": 13
            },
            {
                "name": "JavaScript",
                "count": 6
            },
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
                "count": 3
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
                "name": "每日总结",
                "count": 1
            },
            {
                "name": "渐变",
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
