import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "tags/README.md",
    'layoutPath': "tags/_layout.tsx",
    'outputPath': "tags/index.html",
    'title': "分类",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>分类</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5206\u7C7B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-01-19T03:43:40.163Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/标题.md",
                "title": "博客的标题d",
                "link": "posts/标题.html",
                "date": "2021-01-19T03:43:40.163Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "代码质量",
                    "代码复杂度"
                ],
                "excerpt": "博客的正文"
            }
        ],
        "categories": [
            {
                "name": "编程世界",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "代码复杂度",
                "count": 1
            },
            {
                "name": "代码质量",
                "count": 1
            }
        ]
    }
};
