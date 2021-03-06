import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "categories/JavaScript/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "categories/JavaScript/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "JavaScript",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/继承.md",
                "title": "继承",
                "link": "posts/继承.html",
                "date": "2021-03-04T13:28:28.000Z",
                "updated": "2021-03-06T15:24:01.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "JavaScript"
                ],
                "tags": [
                    "学习笔记",
                    "继承",
                    "面试"
                ],
                "excerpt": ""
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
                "name": "JavaScript",
                "count": 3
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
                "count": 17
            },
            {
                "name": "面试",
                "count": 8
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
                "name": "防抖和节流",
                "count": 1
            }
        ]
    }
};
