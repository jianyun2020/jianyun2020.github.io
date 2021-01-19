import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "archives/README.md",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "archives/index.html",
    'title': "归档",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>归档</h1>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5F52\u6863"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "sujianyun",
    'contributors': [
        "sujianyun",
        "jianyun2020"
    ],
    'date': "2021-01-19T04:34:29.000Z",
    'updated': "2021-01-19T07:00:02.000Z",
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/没用.md",
                "title": "为什么",
                "link": "posts/没用.html",
                "date": "2021-01-19T06:40:10.000Z",
                "updated": "2021-01-19T07:25:37.000Z",
                "author": "sujianyun",
                "contributors": [
                    "sujianyun",
                    "jianyun2020"
                ],
                "categories": [
                    "测试"
                ],
                "tags": [
                    "pagic",
                    "blog"
                ],
                "excerpt": "没有效果"
            },
            {
                "pagePath": "posts/Hello World.md",
                "title": "Blog",
                "link": "posts/Hello World.html",
                "date": "2021-01-19T06:40:10.000Z",
                "updated": "2021-01-19T07:00:02.000Z",
                "author": "sujianyun",
                "contributors": [
                    "sujianyun",
                    "jianyun2020"
                ],
                "categories": [
                    "测试"
                ],
                "tags": [
                    "pagic",
                    "blog"
                ],
                "excerpt": "测试中"
            },
            {
                "pagePath": "posts/测试中.md",
                "title": "Blog",
                "link": "posts/测试中.html",
                "date": "2021-01-19T06:40:10.000Z",
                "updated": "2021-01-19T10:04:04.000Z",
                "author": "sujianyun",
                "contributors": [
                    "sujianyun",
                    "jianyun2020"
                ],
                "categories": [
                    "测试"
                ],
                "tags": [
                    "pagic",
                    "blog"
                ],
                "excerpt": "测试中"
            }
        ],
        "categories": [
            {
                "name": "测试",
                "count": 3
            }
        ],
        "tags": [
            {
                "name": "blog",
                "count": 3
            },
            {
                "name": "pagic",
                "count": 3
            }
        ]
    }
};
