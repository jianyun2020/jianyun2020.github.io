import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/UE4.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/UE4.html",
    'title': "UE4学习笔记",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>UE4学习笔记</h1>\n<ol>\n<li>常用快捷键</li>\n</ol>\n<p><img src="images/shortcut_key1.png" alt=""></p>\n<p><img src="images/shortcut_key2.png" alt=""></p>\n<p><img src="images/shortcut_key3.png" alt=""></p>\n<ol start="2">\n<li>\n<p>变更路线节点：<code>Reroute Node</code></p>\n</li>\n<li>\n<p><code>Execute Console Command</code>命令</p>\n<ol>\n<li>设置分辨率<code>r.setRes 1920x1080</code></li>\n</ol>\n</li>\n</ol>\n<h2 id="ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">UE4像素流送系统<a class="anchor" href="#ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">§</a></h2>\n<h3 id="%E7%89%B9%E7%82%B9">特点：<a class="anchor" href="#%E7%89%B9%E7%82%B9">§</a></h3>\n<ol>\n<li>流送并非播放预先录制的视频片段，而是播放虚幻引擎实时生成的渲染帧和音频。</li>\n<li>用户可通过自己的浏览器对体验进行控制，将键盘、鼠标、触摸事件和播放器网页发出的自定义事件发送回虚幻引擎。</li>\n</ol>\n<h3 id="%E4%BC%98%E7%82%B9">优点：<a class="anchor" href="#%E4%BC%98%E7%82%B9">§</a></h3>\n<h2 id="%E5%87%BD%E6%95%B0">函数<a class="anchor" href="#%E5%87%BD%E6%95%B0">§</a></h2>\n<ol>\n<li><code>Set Timer by Event</code>：设定一个计时器来执行事件委托，设置已经存在的计时器（如设置自身）将会更新参数。</li>\n<li><code>Clear and Invalidate Timer by Handle</code>：手动清除设置的定时器</li>\n<li><code>Quit Game</code>：退出游戏</li>\n<li><code>Is Valid</code>：如果对象可用（不为<code>null</code>或者<code>not pending kill</code>则返回<code>true</code></li>\n<li><code>Get Player Camera Manager</code>：返回指定玩家索引的玩家摄像机管理器</li>\n<li><code>Get Camera Rotation</code>：返回相机的当前旋转</li>\n<li><code>Break Rotator</code>：将旋转器分解为以度为单位的侧倾角（Roll），俯仰角（Pitch）和偏航角（Yaw）</li>\n<li><code>Set Render Transform Angle</code>：设置渲染变换角度</li>\n<li><code>Set Style</code>：设置按钮的样式</li>\n<li><code>Play Animation</code>：播放动画</li>\n<li><code>Load Stream Level</code>：加载流送关卡</li>\n<li><code>Unload Stream Level</code>：卸载流送关卡</li>\n</ol>\n<h2 id="%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">关卡流送（Level Streaming)<a class="anchor" href="#%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">§</a></h2>\n<p>在游戏时异步加载和卸载关卡，降低内存使用率，创建无缝的世界场景。</p>\n<h3 id="%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">世界场景构成（World Composition）<a class="anchor" href="#%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">§</a></h3>\n<p>世界场景构成用于创建大型场景的特定关卡流送形式。关卡分布在平面网格中，并在玩家靠近时流入。</p>\n<h4 id="%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90">激活世界场景构成<a class="anchor" href="#%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90">§</a></h4>\n<ol>\n<li>启用<code>世界场景设置(World Settings)</code>中的<code>启用世界场景构成(Enable World Composition)</code>标记来激活</li>\n<li>禁用<code>世界场景原点移位(World origin shifting)</code>：关闭<code>启用世界场景构成(Enable World Composition)</code></li>\n</ol>\n<p><img src="images/worldcomposition1.png" alt=""></p>\n<h4 id="%E5%85%B3%E5%8D%A1%E5%B1%82%E7%BA%A7levels-hierarchy">关卡层级(Levels Hierarchy)<a class="anchor" href="#%E5%85%B3%E5%8D%A1%E5%B1%82%E7%BA%A7levels-hierarchy">§</a></h4>\n<p>&quot;关卡&quot;窗口中的条目表示世界场景的层级。</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "UE4\u5B66\u4E60\u7B14\u8BB0"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ol>\n<li>常用快捷键</li>\n</ol>\n<p><img src="images/shortcut_key1.png" alt=""></p>\n<p><img src="images/shortcut_key2.png" alt=""></p>\n<p><img src="images/shortcut_key3.png" alt=""></p>\n<ol start="2">\n<li>\n<p>变更路线节点：<code>Reroute Node</code></p>\n</li>\n<li>\n<p><code>Execute Console Command</code>命令</p>\n<ol>\n<li>设置分辨率<code>r.setRes 1920x1080</code></li>\n</ol>\n</li>\n</ol>\n<h2 id="ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">UE4像素流送系统<a class="anchor" href="#ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">§</a></h2>\n<h3 id="%E7%89%B9%E7%82%B9">特点：<a class="anchor" href="#%E7%89%B9%E7%82%B9">§</a></h3>\n<ol>\n<li>流送并非播放预先录制的视频片段，而是播放虚幻引擎实时生成的渲染帧和音频。</li>\n<li>用户可通过自己的浏览器对体验进行控制，将键盘、鼠标、触摸事件和播放器网页发出的自定义事件发送回虚幻引擎。</li>\n</ol>\n<h3 id="%E4%BC%98%E7%82%B9">优点：<a class="anchor" href="#%E4%BC%98%E7%82%B9">§</a></h3>\n<h2 id="%E5%87%BD%E6%95%B0">函数<a class="anchor" href="#%E5%87%BD%E6%95%B0">§</a></h2>\n<ol>\n<li><code>Set Timer by Event</code>：设定一个计时器来执行事件委托，设置已经存在的计时器（如设置自身）将会更新参数。</li>\n<li><code>Clear and Invalidate Timer by Handle</code>：手动清除设置的定时器</li>\n<li><code>Quit Game</code>：退出游戏</li>\n<li><code>Is Valid</code>：如果对象可用（不为<code>null</code>或者<code>not pending kill</code>则返回<code>true</code></li>\n<li><code>Get Player Camera Manager</code>：返回指定玩家索引的玩家摄像机管理器</li>\n<li><code>Get Camera Rotation</code>：返回相机的当前旋转</li>\n<li><code>Break Rotator</code>：将旋转器分解为以度为单位的侧倾角（Roll），俯仰角（Pitch）和偏航角（Yaw）</li>\n<li><code>Set Render Transform Angle</code>：设置渲染变换角度</li>\n<li><code>Set Style</code>：设置按钮的样式</li>\n<li><code>Play Animation</code>：播放动画</li>\n<li><code>Load Stream Level</code>：加载流送关卡</li>\n<li><code>Unload Stream Level</code>：卸载流送关卡</li>\n</ol>\n<h2 id="%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">关卡流送（Level Streaming)<a class="anchor" href="#%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">§</a></h2>\n<p>在游戏时异步加载和卸载关卡，降低内存使用率，创建无缝的世界场景。</p>\n<h3 id="%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">世界场景构成（World Composition）<a class="anchor" href="#%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">§</a></h3>\n<p>世界场景构成用于创建大型场景的特定关卡流送形式。关卡分布在平面网格中，并在玩家靠近时流入。</p>\n<h4 id="%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90">激活世界场景构成<a class="anchor" href="#%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90">§</a></h4>\n<ol>\n<li>启用<code>世界场景设置(World Settings)</code>中的<code>启用世界场景构成(Enable World Composition)</code>标记来激活</li>\n<li>禁用<code>世界场景原点移位(World origin shifting)</code>：关闭<code>启用世界场景构成(Enable World Composition)</code></li>\n</ol>\n<p><img src="images/worldcomposition1.png" alt=""></p>\n<h4 id="%E5%85%B3%E5%8D%A1%E5%B1%82%E7%BA%A7levels-hierarchy">关卡层级(Levels Hierarchy)<a class="anchor" href="#%E5%85%B3%E5%8D%A1%E5%B1%82%E7%BA%A7levels-hierarchy">§</a></h4>\n<p>&quot;关卡&quot;窗口中的条目表示世界场景的层级。</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">UE4像素流送系统</a><ol><li><a href="#%E7%89%B9%E7%82%B9">特点：</a></li><li><a href="#%E4%BC%98%E7%82%B9">优点：</a></li></ol></li><li><a href="#%E5%87%BD%E6%95%B0">函数</a></li><li><a href="#%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">关卡流送（Level Streaming)</a><ol><li><a href="#%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">世界场景构成（World Composition）</a><ol></ol></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-02-01T04:46:51.000Z",
    'updated': "2021-02-08T03:22:15.000Z",
    'excerpt': " 1. 常用快捷键 2. 变更路线节点：Reroute Node 3. Execute Console Command命令 1. 设置分辨率r.setRes 1920x1080 UE4像素流送系统 特点： 1. 流送并非播放预先录制的视频片段，而是播放虚幻引擎实时生成的渲染帧和音频。 2. ...",
    'cover': "images/shortcut_key1.png",
    'categories': [
        "UE4"
    ],
    'tags': [
        "UE4",
        "学习笔记"
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
                "updated": "2021-02-09T10:39:49.000Z",
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