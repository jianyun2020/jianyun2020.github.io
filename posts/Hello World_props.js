import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/Hello World.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/Hello World.html",
    'title': "Blog",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Blog</h1>\n<p>测试中</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Blog"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>测试中</p>'
        } }),
    'toc': null,
    'author': "sujianyun",
    'contributors': [
        "sujianyun",
        "jianyun2020"
    ],
    'date': "2021-01-19T06:40:10.000Z",
    'updated': "2021-01-19T07:00:02.000Z",
    'excerpt': "测试中",
    'cover': undefined,
    'categories': [
        "测试"
    ],
    'tags': [
        "pagic",
        "blog"
    ],
    'blog': {
        "isPost": true,
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
