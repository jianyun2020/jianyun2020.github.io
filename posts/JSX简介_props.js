import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/JSX简介.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/JSX简介.html",
    'title': "React-JSX简介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>React-JSX简介</h1>\n<p>考虑如下变量声明：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, world!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。</p>\n<h2 id="%E5%9C%A8jsx%E4%B8%AD%E5%B5%8C%E5%85%A5%E8%A1%A8%E8%BE%BE%E5%BC%8F">在JSX中嵌入表达式<a class="anchor" href="#%E5%9C%A8jsx%E4%B8%AD%E5%B5%8C%E5%85%A5%E8%A1%A8%E8%BE%BE%E5%BC%8F">§</a></h2>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">\'Bob\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>在JSX语法中，你可以在大括号内放置任何有效的JavaScript表达式。</p>\n<h2 id="jsx%E4%B9%9F%E6%98%AF%E4%B8%80%E4%B8%AA%E8%A1%A8%E8%BE%BE%E5%BC%8F">JSX也是一个表达式<a class="anchor" href="#jsx%E4%B9%9F%E6%98%AF%E4%B8%80%E4%B8%AA%E8%A1%A8%E8%BE%BE%E5%BC%8F">§</a></h2>\n<p>在编译之后，JSX表达式会被转换为普通JavaScript函数调用，并且对其取值后得到JavaScript对象。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">getGreeting</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token maybe-class-name">Hello</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span><span class="token method function property-access">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token maybe-class-name">Hello</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Stranger</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>JSX特定属性</p>\n<p>你可以通过使用引号，来将属性值指定为字符串字面量:</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>也可以使用大括号，来在属性值中插入一个JavaScript表达式：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span><span class="token property-access">avatarUrl</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。</p>\n<blockquote>\n<p>警告：</p>\n<p>因为因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。\n例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。</p>\n</blockquote>\n<h2 id="%E4%BD%BF%E7%94%A8jsx%E6%8C%87%E5%AE%9A%E5%AD%90%E5%85%83%E7%B4%A0">使用JSX指定子元素<a class="anchor" href="#%E4%BD%BF%E7%94%A8jsx%E6%8C%87%E5%AE%9A%E5%AD%90%E5%85%83%E7%B4%A0">§</a></h2>\n<p>假如一个标签里没有内容，你可以使用/&gt; 来闭合标签，就像XML语法一样：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span><span class="token property-access">avatarUrl</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>JSX 标签里能够包含很多子元素:</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Good to see you here.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jsx%E9%98%B2%E6%AD%A2%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB">JSX防止注入攻击<a class="anchor" href="#jsx%E9%98%B2%E6%AD%A2%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB">§</a></h2>\n<p>你可以安全地在JSX当中插入用户输入内容:</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> title <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token property-access">potentiallyMaliciousInput</span><span class="token punctuation">;</span>\n<span class="token comment">// 直接使用是安全的</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。</p>\n<h2 id="jsx%E8%A1%A8%E7%A4%BA%E5%AF%B9%E8%B1%A1">JSX表示对象<a class="anchor" href="#jsx%E8%A1%A8%E7%A4%BA%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>Babel会把JSX转译成一个名为React.createElement()函数调用。\n以下两种示例代码完全等效：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>greeting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        Hello, World!\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">createElement</span><span class="token punctuation">(</span>\n    <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>className<span class="token operator">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">\'Hello, World!\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token comment">// 注意：这是简化过的结构</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n    props<span class="token operator">:</span> <span class="token punctuation">{</span>\n        className<span class="token operator">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token string">\'Hello, World!\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "React-JSX\u7B80\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>考虑如下变量声明：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, world!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。</p>\n<h2 id="%E5%9C%A8jsx%E4%B8%AD%E5%B5%8C%E5%85%A5%E8%A1%A8%E8%BE%BE%E5%BC%8F">在JSX中嵌入表达式<a class="anchor" href="#%E5%9C%A8jsx%E4%B8%AD%E5%B5%8C%E5%85%A5%E8%A1%A8%E8%BE%BE%E5%BC%8F">§</a></h2>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">\'Bob\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>在JSX语法中，你可以在大括号内放置任何有效的JavaScript表达式。</p>\n<h2 id="jsx%E4%B9%9F%E6%98%AF%E4%B8%80%E4%B8%AA%E8%A1%A8%E8%BE%BE%E5%BC%8F">JSX也是一个表达式<a class="anchor" href="#jsx%E4%B9%9F%E6%98%AF%E4%B8%80%E4%B8%AA%E8%A1%A8%E8%BE%BE%E5%BC%8F">§</a></h2>\n<p>在编译之后，JSX表达式会被转换为普通JavaScript函数调用，并且对其取值后得到JavaScript对象。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">getGreeting</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token maybe-class-name">Hello</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span><span class="token method function property-access">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token maybe-class-name">Hello</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Stranger</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>JSX特定属性</p>\n<p>你可以通过使用引号，来将属性值指定为字符串字面量:</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>也可以使用大括号，来在属性值中插入一个JavaScript表达式：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span><span class="token property-access">avatarUrl</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。</p>\n<blockquote>\n<p>警告：</p>\n<p>因为因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。\n例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。</p>\n</blockquote>\n<h2 id="%E4%BD%BF%E7%94%A8jsx%E6%8C%87%E5%AE%9A%E5%AD%90%E5%85%83%E7%B4%A0">使用JSX指定子元素<a class="anchor" href="#%E4%BD%BF%E7%94%A8jsx%E6%8C%87%E5%AE%9A%E5%AD%90%E5%85%83%E7%B4%A0">§</a></h2>\n<p>假如一个标签里没有内容，你可以使用/&gt; 来闭合标签，就像XML语法一样：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span><span class="token property-access">avatarUrl</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>JSX 标签里能够包含很多子元素:</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">Good to see you here.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="jsx%E9%98%B2%E6%AD%A2%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB">JSX防止注入攻击<a class="anchor" href="#jsx%E9%98%B2%E6%AD%A2%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB">§</a></h2>\n<p>你可以安全地在JSX当中插入用户输入内容:</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> title <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token property-access">potentiallyMaliciousInput</span><span class="token punctuation">;</span>\n<span class="token comment">// 直接使用是安全的</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。</p>\n<h2 id="jsx%E8%A1%A8%E7%A4%BA%E5%AF%B9%E8%B1%A1">JSX表示对象<a class="anchor" href="#jsx%E8%A1%A8%E7%A4%BA%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>Babel会把JSX转译成一个名为React.createElement()函数调用。\n以下两种示例代码完全等效：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>greeting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        Hello, World!\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">createElement</span><span class="token punctuation">(</span>\n    <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>className<span class="token operator">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">\'Hello, World!\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：</p>\n<pre class="language-jsx"><code class="language-jsx"><span class="token comment">// 注意：这是简化过的结构</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n    props<span class="token operator">:</span> <span class="token punctuation">{</span>\n        className<span class="token operator">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token string">\'Hello, World!\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%9C%A8jsx%E4%B8%AD%E5%B5%8C%E5%85%A5%E8%A1%A8%E8%BE%BE%E5%BC%8F">在JSX中嵌入表达式</a></li><li><a href="#jsx%E4%B9%9F%E6%98%AF%E4%B8%80%E4%B8%AA%E8%A1%A8%E8%BE%BE%E5%BC%8F">JSX也是一个表达式</a></li><li><a href="#%E4%BD%BF%E7%94%A8jsx%E6%8C%87%E5%AE%9A%E5%AD%90%E5%85%83%E7%B4%A0">使用JSX指定子元素</a></li><li><a href="#jsx%E9%98%B2%E6%AD%A2%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB">JSX防止注入攻击</a></li><li><a href="#jsx%E8%A1%A8%E7%A4%BA%E5%AF%B9%E8%B1%A1">JSX表示对象</a></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-21T07:25:11.000Z",
    'updated': null,
    'excerpt': "考虑如下变量声明： const element = <h1>Hello, world!</h1>; 这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。 在JSX中嵌入表达式 const name = 'Bob'; const element = <h1>Hello...",
    'cover': undefined,
    'categories': [
        "React"
    ],
    'tags': [
        "JavaScript",
        "学习笔记",
        "React"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-02-02T04:59:50.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "UE4"
                ],
                "tags": [
                    "UE4",
                    "学习笔记"
                ],
                "excerpt": " 1. 常用快捷键 2. 变更路线节点：Reroute Node",
                "cover": "images/shortcut_key1.png"
            },
            {
                "pagePath": "posts/React笔记.md",
                "title": "React学习笔记",
                "link": "posts/React笔记.html",
                "date": "2021-01-29T14:58:22.000Z",
                "updated": "2021-02-02T10:50:23.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "React",
                    "学习笔记"
                ],
                "excerpt": " 1. 在html中简易使用jsx语法时，需要引入babel插件，同时设置<script type=\"text/babel\"></script> 2. js语法创建虚拟DOM：React.createElement('h1', {id: 'test'}, 'Hello, React') 3. 关于虚拟DOM： 1. 本质就是Object类型..."
            },
            {
                "pagePath": "posts/2021-1-29.md",
                "title": "每日总结",
                "link": "posts/2021-1-29.html",
                "date": "2021-01-29T11:38:40.000Z",
                "updated": "2021-01-31T15:15:06.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "每日总结"
                ],
                "tags": [
                    "每日总结"
                ],
                "excerpt": "周末时间利用"
            },
            {
                "pagePath": "posts/前端基础面试题.md",
                "title": "HTML篇",
                "link": "posts/前端基础面试题.html",
                "date": "2021-01-27T07:14:50.000Z",
                "updated": "2021-02-01T04:46:51.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
                "excerpt": "说说title和alt属性 HTML5有哪些新特性、移除了哪些元素 iframe有那些缺点？ HTML W3C的标准 Doctype作用? 严格模式与混杂模式如何区分？它们有何意义? HTML全局属性(global attribute)有哪些 viewport的content属性作用 div+c..."
            },
            {
                "pagePath": "posts/前端本地存储.md",
                "title": "前端本地存储",
                "link": "posts/前端本地存储.html",
                "date": "2021-01-27T03:51:39.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "学习笔记",
                    "前端本地存储"
                ],
                "excerpt": "cookie 作用 cookie是纯文本，没有可执行代码。存储数据，当用户访问了某个网站（网页）的时候，我们就可以通过cookie来向访问者电脑上存储数据，或者某些网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（..."
            },
            {
                "pagePath": "posts/跨域及常见解决办法.md",
                "title": "跨域及常见解决方法",
                "link": "posts/跨域及常见解决办法.html",
                "date": "2021-01-26T10:06:49.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "学习笔记",
                    "跨域"
                ],
                "excerpt": "什么是跨域 跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的。 广义的跨域： 1. 资源跳转：A链接、重定向、表单提交 2. 资源嵌入：<link>、<script>、<img>、<frame>等dom标签，还有样式中backgrou..."
            },
            {
                "pagePath": "posts/垃圾回收机制.md",
                "title": "垃圾回收机制",
                "link": "posts/垃圾回收机制.html",
                "date": "2021-01-26T03:09:41.000Z",
                "updated": "2021-01-26T06:08:48.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "学习笔记",
                    "垃圾回收机制"
                ],
                "excerpt": "JavaScript具有自动垃圾收集机制(GC:GarbageCollection)，也就是说，执行环境会负责管理代码执行过程中使用的内存。开发人员不用再关心内存使用问题，所需内存的分配以及无用内存的回收完全实现了自动管理。 内存生命周期 JS环...",
                "cover": "./images/markandsweep.png"
            },
            {
                "pagePath": "posts/防抖和节流.md",
                "title": "防抖和节流",
                "link": "posts/防抖和节流.html",
                "date": "2021-01-25T10:51:54.000Z",
                "updated": "2021-01-26T03:09:41.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "防抖和节流",
                    "学习笔记"
                ],
                "excerpt": " - 相同：在不影响客户体验的前提下，将频繁的回调函数，进行次数缩减，避免大量计算导致页的页面卡顿。 - 不同：防抖是将多次执行变为最后一次执行，节流是将多次执行变为在规定时间内只执行一次。 防抖 定义：指触发事件后在..."
            },
            {
                "pagePath": "posts/css_渐变.md",
                "title": "CSS渐变",
                "link": "posts/css_渐变.html",
                "date": "2021-01-25T09:32:57.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "CSS"
                ],
                "tags": [
                    "CSS",
                    "学习笔记",
                    "渐变"
                ],
                "excerpt": "CSS渐变<image>类型的一种特殊类型<gradient>表示，由两种或多种颜色之间的渐进过渡组成。有三种类型的渐变： - 线性（由linear-gradient()函数创建） - 径向（由radial-gradient()函数创建） - 圆锥（由conic-gradient()函数创...",
                "cover": "./images/deg.png"
            },
            {
                "pagePath": "posts/Hook.md",
                "title": "Hook",
                "link": "posts/Hook.html",
                "date": "2021-01-25T07:07:55.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "JavaScript",
                    "学习笔记",
                    "React"
                ],
                "excerpt": "16.8版本新增特性。可以在不编写class的情况下使用state以及其它的React特性。 import React, { useState } from 'react'; function Example() { // 声明一个新的叫做“count”的state变量 const [count, setCount] = useState..."
            },
            {
                "pagePath": "posts/css_background.md",
                "title": "CSS的background属性详解",
                "link": "posts/css_background.html",
                "date": "2021-01-25T07:07:55.000Z",
                "updated": "2021-01-25T08:30:22.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "CSS"
                ],
                "tags": [
                    "CSS",
                    "学习笔记",
                    "background"
                ],
                "excerpt": "background是一中CSS简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attac..."
            },
            {
                "pagePath": "posts/List.md",
                "title": "数据结构与算法JavaScript-列表",
                "link": "posts/List.html",
                "date": "2021-01-22T08:08:14.000Z",
                "updated": "2021-01-25T02:27:19.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "数据结构与算法"
                ],
                "tags": [
                    "JavaScript",
                    "数据结构与算法",
                    "学习笔记"
                ],
                "excerpt": "列表的抽象数据类型定义 方法和方法 说明 listSize(属性) 列表的元素个数 pos(属性) 列表的当前位置 length(属性) 返回列表中元素的个数 clear(方法) 清空列表中的所有元素 toString(方法) 返回列表的字符串形式 getElement(方..."
            },
            {
                "pagePath": "posts/元素渲染.md",
                "title": "React-元素渲染",
                "link": "posts/元素渲染.html",
                "date": "2021-01-22T08:08:14.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "JavaScript",
                    "学习笔记",
                    "React"
                ],
                "excerpt": "元素是构成React应用的最小砖块，其描述了你在屏幕上想看到的内容。 const element = <h1>Hello, World</h1>; 与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一..."
            },
            {
                "pagePath": "posts/JSX简介.md",
                "title": "React-JSX简介",
                "link": "posts/JSX简介.html",
                "date": "2021-01-21T07:25:11.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "JavaScript",
                    "学习笔记",
                    "React"
                ],
                "excerpt": "考虑如下变量声明： const element = <h1>Hello, world!</h1>; 这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。 在JSX中嵌入表达式 const name = 'Bob'; const element = <h1>Hello..."
            },
            {
                "pagePath": "posts/Array.md",
                "title": "数据结构与算法JavaScript-数组",
                "link": "posts/Array.html",
                "date": "2021-01-20T05:13:02.000Z",
                "updated": "2021-01-21T06:40:51.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "数据结构与算法"
                ],
                "tags": [
                    "JavaScript",
                    "数据结构与算法",
                    "学习笔记"
                ],
                "excerpt": "数组 JavaScript 中的数组是一种特殊的对象， 用来表示偏移量的索引是该对象的属性， 索引可 能是整数。 然而， 这些数字索引在内部被转换为字符串类型， 这是因为 JavaScript 对象中 的属性名必须是字符串。 数组在 JavaScrip..."
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
                "name": "CSS",
                "count": 2
            },
            {
                "name": "数据结构与算法",
                "count": 2
            },
            {
                "name": "UE4",
                "count": 1
            },
            {
                "name": "每日总结",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "学习笔记",
                "count": 13
            },
            {
                "name": "JavaScript",
                "count": 6
            },
            {
                "name": "面试",
                "count": 5
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
                "name": "每日总结",
                "count": 1
            },
            {
                "name": "渐变",
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
