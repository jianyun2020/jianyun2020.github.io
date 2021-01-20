import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/JavaScript/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/JavaScript/index.html",
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
                "pagePath": "posts/数据结构与算法JavaScript.md.md",
                "title": "数据结构与算法JavaScript",
                "link": "posts/数据结构与算法JavaScript.md.html",
                "date": "2021-01-20T05:13:02.000Z",
                "updated": "2021-01-20T10:56:10.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "数据结构与算法"
                ],
                "tags": [
                    "JavaScript",
                    "数据结构与算法"
                ],
                "excerpt": "数组 JavaScript 中的数组是一种特殊的对象， 用来表示偏移量的索引是该对象的属性， 索引可 能是整数。 然而， 这些数字索引在内部被转换为字符串类型， 这是因为 JavaScript 对象中 的属性名必须是字符串。 数组在 JavaScrip..."
            }
        ],
        "categories": [
            {
                "name": "数据结构与算法",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "JavaScript",
                "count": 1
            },
            {
                "name": "数据结构与算法",
                "count": 1
            }
        ]
    }
};
