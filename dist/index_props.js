import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "jianyun",
    'contributors': [
        "jianyun",
        "sujianyun"
    ],
    'date': "2021-01-19T03:54:31.000Z",
    'updated': "2021-01-19T03:56:57.000Z",
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/Hello World.md",
                "title": "Blog",
                "link": "posts/Hello World.html",
                "date": "2021-01-19T06:38:33.791Z",
                "updated": null,
                "contributors": [],
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
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "blog",
                "count": 1
            },
            {
                "name": "pagic",
                "count": 1
            }
        ]
    }
};
