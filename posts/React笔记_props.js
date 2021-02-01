import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/React笔记.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/React笔记.html",
    'title': "React学习笔记",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>React学习笔记</h1>\n<ol>\n<li>在html中简易使用jsx语法时，需要引入babel插件，同时设置<code>&lt;script type=&quot;text/babel&quot;&gt;&lt;/script&gt;</code></li>\n<li>js语法创建虚拟DOM：<code>React.createElement(\'h1\', {id: \'test\'}, \'Hello, React\')</code></li>\n<li>关于虚拟DOM：\n<ol>\n<li>本质就是Object类型的对象</li>\n<li>虚拟DOM是React内部用，无需真实DOM上那么多属性</li>\n<li>虚拟DOM最终会被转换为真实DOM</li>\n</ol>\n</li>\n<li>JSX语法规则：\n<ol>\n<li>定义虚拟DOM时，不要加引号，如<code>&lt;h1&gt;我是虚拟DOM&lt;/h1&gt;</code></li>\n<li>标签中混入<strong>js表达式</strong>时需要用<code>{}</code></li>\n<li>添加类名时需要用小驼峰<code>className</code>，不要用<code>class</code></li>\n<li>使用内联样式<code>style</code>时，需要使用<code>{{}}</code>，里边的<code>{}</code>表示对象。如<code>{{color: \'red\'; fontSize: \'px\'}}</code>，里边的属性需要使用小驼峰替代<code>-</code>的写法</li>\n<li>只能有一个跟标签</li>\n<li>标签必须闭合</li>\n<li>标签的首字母：\n<ol>\n<li>如果是小写字母开头，则将标签转为html中同名标签，如果html中没有对应标签，则报错</li>\n<li>如果是大写字母开头，react就去渲染对应组件，若组件未定义，则报错</li>\n</ol>\n</li>\n</ol>\n</li>\n<li>js语句（代码）与js表达式\n<ol>\n<li>js语句：\n<ol>\n<li><code>if () {}</code></li>\n<li><code>for () {}</code></li>\n<li><code>switch () {}</code></li>\n<li>...</li>\n</ol>\n</li>\n<li>js表达式\n<ol>\n<li><code>a</code></li>\n<li><code>a+b</code></li>\n<li><code>arr.map()</code></li>\n<li><code>function test () {}</code></li>\n</ol>\n</li>\n<li>总结：js表达式有返回值，能直接赋值给变量</li>\n</ol>\n</li>\n<li>函数定义的组件：执行<code>ReactDOM.render(&lt;MyComponent /&gt;, ...)</code>之后发生了什么？\n<ol>\n<li>React解析组件标签，找到了<code>MyComponent</code>组件</li>\n<li>发现组件使用函数定义，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中</li>\n</ol>\n</li>\n<li>类定义的组件：执行<code>ReactDOM.render(&lt;MyComponent /&gt;, ...)</code>之后发生了什么？\n<ol>\n<li>React解析组件标签，找到了<code>MyComponent</code>组件</li>\n<li>发现组件使用类定义，随后<code>new</code>出来该类的实例，并通过实例调用原型上的<code>render()</code>方法</li>\n<li>将render返回的虚拟DOM转为真实DOM，随后呈现在页面中</li>\n</ol>\n</li>\n<li>组件<code>实例</code>的三大核心属性：\n<ol>\n<li><code>state</code>:\n<ol>\n<li>不可直接更改，需要借助内置的API<code>setState({})</code></li>\n</ol>\n</li>\n</ol>\n</li>\n</ol>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "React\u5B66\u4E60\u7B14\u8BB0"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ol>\n<li>在html中简易使用jsx语法时，需要引入babel插件，同时设置<code>&lt;script type=&quot;text/babel&quot;&gt;&lt;/script&gt;</code></li>\n<li>js语法创建虚拟DOM：<code>React.createElement(\'h1\', {id: \'test\'}, \'Hello, React\')</code></li>\n<li>关于虚拟DOM：\n<ol>\n<li>本质就是Object类型的对象</li>\n<li>虚拟DOM是React内部用，无需真实DOM上那么多属性</li>\n<li>虚拟DOM最终会被转换为真实DOM</li>\n</ol>\n</li>\n<li>JSX语法规则：\n<ol>\n<li>定义虚拟DOM时，不要加引号，如<code>&lt;h1&gt;我是虚拟DOM&lt;/h1&gt;</code></li>\n<li>标签中混入<strong>js表达式</strong>时需要用<code>{}</code></li>\n<li>添加类名时需要用小驼峰<code>className</code>，不要用<code>class</code></li>\n<li>使用内联样式<code>style</code>时，需要使用<code>{{}}</code>，里边的<code>{}</code>表示对象。如<code>{{color: \'red\'; fontSize: \'px\'}}</code>，里边的属性需要使用小驼峰替代<code>-</code>的写法</li>\n<li>只能有一个跟标签</li>\n<li>标签必须闭合</li>\n<li>标签的首字母：\n<ol>\n<li>如果是小写字母开头，则将标签转为html中同名标签，如果html中没有对应标签，则报错</li>\n<li>如果是大写字母开头，react就去渲染对应组件，若组件未定义，则报错</li>\n</ol>\n</li>\n</ol>\n</li>\n<li>js语句（代码）与js表达式\n<ol>\n<li>js语句：\n<ol>\n<li><code>if () {}</code></li>\n<li><code>for () {}</code></li>\n<li><code>switch () {}</code></li>\n<li>...</li>\n</ol>\n</li>\n<li>js表达式\n<ol>\n<li><code>a</code></li>\n<li><code>a+b</code></li>\n<li><code>arr.map()</code></li>\n<li><code>function test () {}</code></li>\n</ol>\n</li>\n<li>总结：js表达式有返回值，能直接赋值给变量</li>\n</ol>\n</li>\n<li>函数定义的组件：执行<code>ReactDOM.render(&lt;MyComponent /&gt;, ...)</code>之后发生了什么？\n<ol>\n<li>React解析组件标签，找到了<code>MyComponent</code>组件</li>\n<li>发现组件使用函数定义，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中</li>\n</ol>\n</li>\n<li>类定义的组件：执行<code>ReactDOM.render(&lt;MyComponent /&gt;, ...)</code>之后发生了什么？\n<ol>\n<li>React解析组件标签，找到了<code>MyComponent</code>组件</li>\n<li>发现组件使用类定义，随后<code>new</code>出来该类的实例，并通过实例调用原型上的<code>render()</code>方法</li>\n<li>将render返回的虚拟DOM转为真实DOM，随后呈现在页面中</li>\n</ol>\n</li>\n<li>组件<code>实例</code>的三大核心属性：\n<ol>\n<li><code>state</code>:\n<ol>\n<li>不可直接更改，需要借助内置的API<code>setState({})</code></li>\n</ol>\n</li>\n</ol>\n</li>\n</ol>'
        } }),
    'toc': null,
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-29T14:58:22.000Z",
    'updated': "2021-01-31T15:13:26.000Z",
    'excerpt': " 1. 在html中简易使用jsx语法时，需要引入babel插件，同时设置<script type=\"text/babel\"></script> 2. js语法创建虚拟DOM：React.createElement('h1', {id: 'test'}, 'Hello, React') 3. 关于虚拟DOM： 1. 本质就是Object类型...",
    'cover': undefined,
    'categories': [
        "React"
    ],
    'tags': [
        "React",
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
                "updated": null,
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
                "excerpt": " 1. 常用快捷键 ",
                "cover": "images/shortcut_key1.png"
            },
            {
                "pagePath": "posts/React笔记.md",
                "title": "React学习笔记",
                "link": "posts/React笔记.html",
                "date": "2021-01-29T14:58:22.000Z",
                "updated": "2021-01-31T15:13:26.000Z",
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
                "excerpt": " 1. 在html中简易使用jsx语法时，需要引入babel插件，同时设置<script type=\"text/babel\"></script> 2. js语法创建虚拟DOM：React.createElement('h1', {id: 'test'}, 'Hello, React') 3. 关于虚拟DOM： 1. 本质就是Object类型..."
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
