import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/标题.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/标题.html",
    'title': "博客的标题d",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>博客的标题d</h1>\n<p>博客的正文</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u535A\u5BA2\u7684\u6807\u9898d"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>博客的正文</p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-01-19T03:43:40.163Z",
    'updated': null,
    'excerpt': "博客的正文",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "代码质量",
        "代码复杂度"
    ],
    'blog': {
        "isPost": true,
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
