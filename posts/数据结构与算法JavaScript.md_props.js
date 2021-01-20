import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/数据结构与算法JavaScript.md.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/数据结构与算法JavaScript.md.html",
    'title': "数据结构与算法JavaScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>数据结构与算法JavaScript</h1>\n<h2 id="%E6%95%B0%E7%BB%84">数组<a class="anchor" href="#%E6%95%B0%E7%BB%84">§</a></h2>\n<p>JavaScript 中的数组是一种特殊的对象， 用来表示偏移量的索引是该对象的属性， 索引可\n能是整数。 然而， 这些数字索引在内部被转换为字符串类型， 这是因为 JavaScript 对象中\n的属性名必须是字符串。 数组在 JavaScript 中只是一种特殊的对象， 所以效率上不如其他\n语言中的数组高。\nJavaScript 中的数组， 严格来说应该称作对象， 是特殊的 JavaScript 对象， 在内部被归类为数\n组。 由于 Array 在 JavaScript 中被当作对象， 因此它有许多属性和方法可以在编程时使用。</p>\n<h2 id="%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84">使用数组<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84">§</a></h2>\n<h3 id="%E5%88%9B%E5%BB%BA%E6%95%B0%E7%BB%84">创建数组<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E6%95%B0%E7%BB%84">§</a></h3>\n<p>两种方式：</p>\n<ul>\n<li>通过[ ]操作符（推荐）</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// arr1.length显示0</span>\n<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// arr2.length显示4</span>\n</code></pre>\n<ul>\n<li>通过Array的构造函数</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">.</span><span class="token known-class-name class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr1.length显示0</span>\n<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">.</span><span class="token known-class-name class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr2.length显示3</span>\n<span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">.</span><span class="token known-class-name class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr3.length显示10</span>\n</code></pre>\n<p><em>特性：脚本语言中的元素不必是同一种数据类型。</em></p>\n<p>可通过Array.isArray()来判断一个对象是否是数组。</p>\n<h3 id="%E8%AF%BB%E5%86%99%E6%95%B0%E7%BB%84">读写数组<a class="anchor" href="#%E8%AF%BB%E5%86%99%E6%95%B0%E7%BB%84">§</a></h3>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5JavaScript"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E6%95%B0%E7%BB%84">数组<a class="anchor" href="#%E6%95%B0%E7%BB%84">§</a></h2>\n<p>JavaScript 中的数组是一种特殊的对象， 用来表示偏移量的索引是该对象的属性， 索引可\n能是整数。 然而， 这些数字索引在内部被转换为字符串类型， 这是因为 JavaScript 对象中\n的属性名必须是字符串。 数组在 JavaScript 中只是一种特殊的对象， 所以效率上不如其他\n语言中的数组高。\nJavaScript 中的数组， 严格来说应该称作对象， 是特殊的 JavaScript 对象， 在内部被归类为数\n组。 由于 Array 在 JavaScript 中被当作对象， 因此它有许多属性和方法可以在编程时使用。</p>\n<h2 id="%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84">使用数组<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84">§</a></h2>\n<h3 id="%E5%88%9B%E5%BB%BA%E6%95%B0%E7%BB%84">创建数组<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E6%95%B0%E7%BB%84">§</a></h3>\n<p>两种方式：</p>\n<ul>\n<li>通过[ ]操作符（推荐）</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// arr1.length显示0</span>\n<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// arr2.length显示4</span>\n</code></pre>\n<ul>\n<li>通过Array的构造函数</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">.</span><span class="token known-class-name class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr1.length显示0</span>\n<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">.</span><span class="token known-class-name class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr2.length显示3</span>\n<span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">.</span><span class="token known-class-name class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr3.length显示10</span>\n</code></pre>\n<p><em>特性：脚本语言中的元素不必是同一种数据类型。</em></p>\n<p>可通过Array.isArray()来判断一个对象是否是数组。</p>\n<h3 id="%E8%AF%BB%E5%86%99%E6%95%B0%E7%BB%84">读写数组<a class="anchor" href="#%E8%AF%BB%E5%86%99%E6%95%B0%E7%BB%84">§</a></h3>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%95%B0%E7%BB%84">数组</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84">使用数组</a><ol><li><a href="#%E5%88%9B%E5%BB%BA%E6%95%B0%E7%BB%84">创建数组</a></li><li><a href="#%E8%AF%BB%E5%86%99%E6%95%B0%E7%BB%84">读写数组</a></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-20T05:13:02.000Z",
    'updated': "2021-01-20T10:19:35.000Z",
    'excerpt': "数组 JavaScript 中的数组是一种特殊的对象， 用来表示偏移量的索引是该对象的属性， 索引可 能是整数。 然而， 这些数字索引在内部被转换为字符串类型， 这是因为 JavaScript 对象中 的属性名必须是字符串。 数组在 JavaScrip...",
    'cover': undefined,
    'categories': [
        "数据结构与算法"
    ],
    'tags': [
        "JavaScript",
        "数据结构与算法"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/数据结构与算法JavaScript.md.md",
                "title": "数据结构与算法JavaScript",
                "link": "posts/数据结构与算法JavaScript.md.html",
                "date": "2021-01-20T05:13:02.000Z",
                "updated": "2021-01-20T10:19:35.000Z",
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
