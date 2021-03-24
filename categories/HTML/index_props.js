import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "categories/HTML/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "categories/HTML/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "HTML",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/history和hash两种路由.md",
                "title": "history和hash两种路由",
                "link": "posts/history和hash两种路由.html",
                "date": "2021-03-11T04:59:20.000Z",
                "updated": "2021-03-11T05:40:11.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "HTML"
                ],
                "tags": [
                    "面试",
                    "路由",
                    "学习笔记"
                ],
                "excerpt": "什么是SPA SPA 是 single page web application 的简称，译为单页Web应用。 简单的说 SPA 就是一个WEB项目只有一个 HTML 页面，一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转。 取而代之的是利用 JS 动...",
                "cover": "images/chuantong.png"
            },
            {
                "pagePath": "posts/跨浏览器标签页通信.md",
                "title": "跨浏览器标签页通信",
                "link": "posts/跨浏览器标签页通信.html",
                "date": "2021-03-11T04:59:20.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "HTML"
                ],
                "tags": [
                    "面试",
                    "跨页面通信",
                    "学习笔记"
                ],
                "excerpt": "在浏览器中，我们可以同时打开多个Tab页，每个Tab页可以粗略理解为一个“独立”的运行环境，即使是全局对象也不会在多个Tab间共享。然而有些时候，我们希望能在这些“独立”的Tab页面之间同步页面的数据、信息或状态。 正如下面...",
                "cover": "../posts/images/html.gif"
            },
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
                "name": "Vue",
                "count": 4
            },
            {
                "name": "HTML",
                "count": 3
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
                "name": "UE4",
                "count": 1
            },
            {
                "name": "微信的坑",
                "count": 1
            },
            {
                "name": "算法",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "学习笔记",
                "count": 23
            },
            {
                "name": "面试",
                "count": 10
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
                "name": "Vue",
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
                "name": "Vue Router",
                "count": 1
            },
            {
                "name": "Vuex",
                "count": 1
            },
            {
                "name": "前端本地存储",
                "count": 1
            },
            {
                "name": "动态规划",
                "count": 1
            },
            {
                "name": "原型链",
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
                "name": "继承",
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
                "name": "跨页面通信",
                "count": 1
            },
            {
                "name": "路由",
                "count": 1
            },
            {
                "name": "防抖和节流",
                "count": 1
            }
        ]
    }
};
