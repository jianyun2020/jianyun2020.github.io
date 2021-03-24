import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "categories/Vue/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "categories/Vue/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "Vue",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/Vue.md",
                "title": "Vue",
                "link": "posts/Vue.html",
                "date": "2021-03-24T12:28:00.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "学习笔记"
                ],
                "excerpt": "Vue 实例 创建一个Vue实例 var vm = new Vue({ // 选项 }) 所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。 数据与方法 当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入...",
                "cover": "images/vue_life.png"
            },
            {
                "pagePath": "posts/Vue Router.md",
                "title": "Vue Router",
                "link": "posts/Vue Router.html",
                "date": "2021-03-17T08:01:47.000Z",
                "updated": "2021-03-22T09:30:18.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue Router",
                    "学习笔记"
                ],
                "excerpt": "基础 起步 用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 V..."
            },
            {
                "pagePath": "posts/Vuex.md",
                "title": "Vuex",
                "link": "posts/Vuex.html",
                "date": "2021-03-15T02:10:17.000Z",
                "updated": "2021-03-17T08:00:55.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vuex",
                    "学习笔记"
                ],
                "excerpt": "Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容..."
            },
            {
                "pagePath": "posts/111.md",
                "title": "Vue",
                "link": "posts/111.html",
                "date": "2021-03-04T13:28:28.000Z",
                "updated": "2021-03-23T05:44:05.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "学习笔记"
                ],
                "excerpt": ""
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
