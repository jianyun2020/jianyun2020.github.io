import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/css_渐变.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/css_渐变.html",
    'title': "CSS渐变",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>CSS渐变</h1>\n<p>CSS渐变<code>&lt;image&gt;</code>类型的一种特殊类型<code>&lt;gradient&gt;</code>表示，由两种或多种颜色之间的渐进过渡组成。有三种类型的渐变：</p>\n<ul>\n<li>线性（由<code>linear-gradient()</code>函数创建）</li>\n<li>径向（由<code>radial-gradient()</code>函数创建）</li>\n<li>圆锥（由<code>conic-gradient()</code>函数创建）</li>\n</ul>\n<p>还可以使用<code>repeating-linear-gradient</code>和<code>repeating-radial-gradient</code>函数创建重复渐变</p>\n<p>渐变可以在任何使用<code>&lt;image&gt;</code>的地方使用，例如在背景中。由于渐变是动态生成的，因此它们可以消除对传统用于实现类似效果的栅格图像文件的需求。此外，由于渐变是由浏览器生成的，因此在放大时它们看起来比栅格图像更好，并且可以动态调整大小。</p>\n<h2 id="%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">线性渐变<a class="anchor" href="#%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">§</a></h2>\n<h3 id="%E5%9F%BA%E7%A1%80%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">基础线性渐变<a class="anchor" href="#%E5%9F%BA%E7%A1%80%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">§</a></h3>\n<p>指定的颜色被称为<strong>色标</strong>，可指定两个或多个色标。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.simple-linear</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token color">blue</span><span class="token punctuation">,</span> <span class="token color">pink</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E6%94%B9%E5%8F%98%E6%B8%90%E5%8F%98%E6%96%B9%E5%90%91">改变渐变方向<a class="anchor" href="#%E6%94%B9%E5%8F%98%E6%B8%90%E5%8F%98%E6%96%B9%E5%90%91">§</a></h3>\n<p>默认情况下，线性渐变的方向是从上到下，可以指定一个值来改变渐进方向。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.horizontal-gradient</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> <span class="token color">blue</span><span class="token punctuation">,</span> park<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%AF%B9%E8%A7%92%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">对角线性渐变<a class="anchor" href="#%E5%AF%B9%E8%A7%92%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">§</a></h3>\n<p>可以设置渐变方向从一个对角到另一个对角。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.diagonal-gradient</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom right<span class="token punctuation">,</span> <span class="token color">blue</span><span class="token punctuation">,</span> <span class="token color">pink</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E8%AE%BE%E7%BD%AE%E6%B8%90%E5%8F%98%E8%A7%92%E5%BA%A6">设置渐变角度<a class="anchor" href="#%E8%AE%BE%E7%BD%AE%E6%B8%90%E5%8F%98%E8%A7%92%E5%BA%A6">§</a></h3>\n<p>通过设置一个具体的角度来更精确的控制渐变方向。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.angled-gradient</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token unit">deg</span><span class="token punctuation">,</span> <span class="token color">blue</span><span class="token punctuation">,</span> <span class="token color">pink</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>在使用角度的时候，<code>0deg</code>代表渐变方向从上到下，<code>90deg</code>代表渐变方向从左至右，诸如此类正角度都属于顺时针方向。而负角度意味着逆时针方向。</p>\n<p><img src="./images/deg.png" alt=""></p>\n<h3 id="%E9%A2%9C%E8%89%B2%E7%BB%88%E6%AD%A2%E4%BD%8D%E7%BD%AE">颜色终止位置<a class="anchor" href="#%E9%A2%9C%E8%89%B2%E7%BB%88%E6%AD%A2%E4%BD%8D%E7%BD%AE">§</a></h3>\n<p>可以通过给每个颜色设置0， 1%或者2%或者其它的绝对数值来调整它们的位置。如果将位置设置为百分数，0%表示起始点，而100%表示终点，但是如果需要的话你也可以设置这个范围之外的其它值来达到想要的效果。如果有些位置你没有明确设置，那么它会被自动计算，第一种颜色会在0%处停止，而最后一种颜色是100%，至于其它颜色则是在它邻近的两种颜色的中间停止。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.multicolor-linear</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left<span class="token punctuation">,</span> <span class="token color">lime</span> <span class="token number">28</span><span class="token unit">px</span><span class="token punctuation">,</span> <span class="token color">red</span> <span class="token number">77</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token color">cyan</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%88%9B%E5%BB%BA%E5%AE%9E%E7%BA%BF">创建实线<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E5%AE%9E%E7%BA%BF">§</a></h3>\n<p>要在两种颜色之间创建一条硬线，即创建一个条纹而不是逐渐过渡，可以将相邻的颜色停止设置为相同的位置。在此示例中，两种颜色在50%标记处共享一个颜色停止点，即渐变的一半：</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.striped</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom left<span class="token punctuation">,</span> <span class="token color">cyan</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token color">palegoldenrod</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><img src="./images/striped.png" alt=""></p>\n<h3 id="%E6%B8%90%E5%8F%98%E6%8F%90%E7%A4%BA">渐变提示<a class="anchor" href="#%E6%B8%90%E5%8F%98%E6%8F%90%E7%A4%BA">§</a></h3>\n<p>默认情况下，渐变会平滑地从一种颜色过渡到另一种颜色。可以通过设置一个值来将渐变的中心点移动到指定位置。如下例中，我们将渐变的中心点由50%设为10%:</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.color-hint</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token color">blue</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token color">pink</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><img src="./images/hint.png" alt=""></p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "CSS\u6E10\u53D8"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>CSS渐变<code>&lt;image&gt;</code>类型的一种特殊类型<code>&lt;gradient&gt;</code>表示，由两种或多种颜色之间的渐进过渡组成。有三种类型的渐变：</p>\n<ul>\n<li>线性（由<code>linear-gradient()</code>函数创建）</li>\n<li>径向（由<code>radial-gradient()</code>函数创建）</li>\n<li>圆锥（由<code>conic-gradient()</code>函数创建）</li>\n</ul>\n<p>还可以使用<code>repeating-linear-gradient</code>和<code>repeating-radial-gradient</code>函数创建重复渐变</p>\n<p>渐变可以在任何使用<code>&lt;image&gt;</code>的地方使用，例如在背景中。由于渐变是动态生成的，因此它们可以消除对传统用于实现类似效果的栅格图像文件的需求。此外，由于渐变是由浏览器生成的，因此在放大时它们看起来比栅格图像更好，并且可以动态调整大小。</p>\n<h2 id="%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">线性渐变<a class="anchor" href="#%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">§</a></h2>\n<h3 id="%E5%9F%BA%E7%A1%80%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">基础线性渐变<a class="anchor" href="#%E5%9F%BA%E7%A1%80%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">§</a></h3>\n<p>指定的颜色被称为<strong>色标</strong>，可指定两个或多个色标。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.simple-linear</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token color">blue</span><span class="token punctuation">,</span> <span class="token color">pink</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E6%94%B9%E5%8F%98%E6%B8%90%E5%8F%98%E6%96%B9%E5%90%91">改变渐变方向<a class="anchor" href="#%E6%94%B9%E5%8F%98%E6%B8%90%E5%8F%98%E6%96%B9%E5%90%91">§</a></h3>\n<p>默认情况下，线性渐变的方向是从上到下，可以指定一个值来改变渐进方向。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.horizontal-gradient</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> <span class="token color">blue</span><span class="token punctuation">,</span> park<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%AF%B9%E8%A7%92%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">对角线性渐变<a class="anchor" href="#%E5%AF%B9%E8%A7%92%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">§</a></h3>\n<p>可以设置渐变方向从一个对角到另一个对角。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.diagonal-gradient</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom right<span class="token punctuation">,</span> <span class="token color">blue</span><span class="token punctuation">,</span> <span class="token color">pink</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E8%AE%BE%E7%BD%AE%E6%B8%90%E5%8F%98%E8%A7%92%E5%BA%A6">设置渐变角度<a class="anchor" href="#%E8%AE%BE%E7%BD%AE%E6%B8%90%E5%8F%98%E8%A7%92%E5%BA%A6">§</a></h3>\n<p>通过设置一个具体的角度来更精确的控制渐变方向。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.angled-gradient</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token unit">deg</span><span class="token punctuation">,</span> <span class="token color">blue</span><span class="token punctuation">,</span> <span class="token color">pink</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>在使用角度的时候，<code>0deg</code>代表渐变方向从上到下，<code>90deg</code>代表渐变方向从左至右，诸如此类正角度都属于顺时针方向。而负角度意味着逆时针方向。</p>\n<p><img src="./images/deg.png" alt=""></p>\n<h3 id="%E9%A2%9C%E8%89%B2%E7%BB%88%E6%AD%A2%E4%BD%8D%E7%BD%AE">颜色终止位置<a class="anchor" href="#%E9%A2%9C%E8%89%B2%E7%BB%88%E6%AD%A2%E4%BD%8D%E7%BD%AE">§</a></h3>\n<p>可以通过给每个颜色设置0， 1%或者2%或者其它的绝对数值来调整它们的位置。如果将位置设置为百分数，0%表示起始点，而100%表示终点，但是如果需要的话你也可以设置这个范围之外的其它值来达到想要的效果。如果有些位置你没有明确设置，那么它会被自动计算，第一种颜色会在0%处停止，而最后一种颜色是100%，至于其它颜色则是在它邻近的两种颜色的中间停止。</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.multicolor-linear</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left<span class="token punctuation">,</span> <span class="token color">lime</span> <span class="token number">28</span><span class="token unit">px</span><span class="token punctuation">,</span> <span class="token color">red</span> <span class="token number">77</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token color">cyan</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%88%9B%E5%BB%BA%E5%AE%9E%E7%BA%BF">创建实线<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E5%AE%9E%E7%BA%BF">§</a></h3>\n<p>要在两种颜色之间创建一条硬线，即创建一个条纹而不是逐渐过渡，可以将相邻的颜色停止设置为相同的位置。在此示例中，两种颜色在50%标记处共享一个颜色停止点，即渐变的一半：</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.striped</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom left<span class="token punctuation">,</span> <span class="token color">cyan</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token color">palegoldenrod</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><img src="./images/striped.png" alt=""></p>\n<h3 id="%E6%B8%90%E5%8F%98%E6%8F%90%E7%A4%BA">渐变提示<a class="anchor" href="#%E6%B8%90%E5%8F%98%E6%8F%90%E7%A4%BA">§</a></h3>\n<p>默认情况下，渐变会平滑地从一种颜色过渡到另一种颜色。可以通过设置一个值来将渐变的中心点移动到指定位置。如下例中，我们将渐变的中心点由50%设为10%:</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.color-hint</span></span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token color">blue</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token color">pink</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><img src="./images/hint.png" alt=""></p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">线性渐变</a><ol><li><a href="#%E5%9F%BA%E7%A1%80%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">基础线性渐变</a></li><li><a href="#%E6%94%B9%E5%8F%98%E6%B8%90%E5%8F%98%E6%96%B9%E5%90%91">改变渐变方向</a></li><li><a href="#%E5%AF%B9%E8%A7%92%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98">对角线性渐变</a></li><li><a href="#%E8%AE%BE%E7%BD%AE%E6%B8%90%E5%8F%98%E8%A7%92%E5%BA%A6">设置渐变角度</a></li><li><a href="#%E9%A2%9C%E8%89%B2%E7%BB%88%E6%AD%A2%E4%BD%8D%E7%BD%AE">颜色终止位置</a></li><li><a href="#%E5%88%9B%E5%BB%BA%E5%AE%9E%E7%BA%BF">创建实线</a></li><li><a href="#%E6%B8%90%E5%8F%98%E6%8F%90%E7%A4%BA">渐变提示</a></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-25T09:32:57.000Z",
    'updated': null,
    'excerpt': "CSS渐变<image>类型的一种特殊类型<gradient>表示，由两种或多种颜色之间的渐进过渡组成。有三种类型的渐变： - 线性（由linear-gradient()函数创建） - 径向（由radial-gradient()函数创建） - 圆锥（由conic-gradient()函数创...",
    'cover': "./images/deg.png",
    'categories': [
        "CSS"
    ],
    'tags': [
        "CSS",
        "学习笔记",
        "渐变"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/Vue Router.md",
                "title": "Vue Router",
                "link": "posts/Vue Router.html",
                "date": "2021-03-17T08:01:47.000Z",
                "updated": "2021-03-18T07:46:24.000Z",
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
                "pagePath": "posts/跨浏览器标签页通信.md",
                "title": "跨浏览器标签页通信",
                "link": "posts/跨浏览器标签页通信.html",
                "date": "2021-03-11T04:59:20.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "HTML"
                ],
                "tags": [
                    "面试",
                    "跨页面通信",
                    "学习笔记"
                ],
                "excerpt": "在浏览器中，我们可以同时打开多个Tab页，每个Tab页可以粗略理解为一个“独立”的运行环境，即使是全局对象也不会在多个Tab间共享。然而有些时候，我们希望能在这些“独立”的Tab页面之间同步页面的数据、信息或状态。 正如下面...",
                "cover": "../posts/images/html.gif"
            },
            {
                "pagePath": "posts/动态规划.md",
                "title": "动态规划",
                "link": "posts/动态规划.html",
                "date": "2021-03-11T04:59:20.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "算法"
                ],
                "tags": [
                    "面试",
                    "动态规划",
                    "学习笔记"
                ],
                "excerpt": "动态规划（英语：Dynamic programming，简称 DP）是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。 动态规划常常适用于有重叠子问题和最优子结..."
            },
            {
                "pagePath": "posts/history和hash两种路由.md",
                "title": "history和hash两种路由",
                "link": "posts/history和hash两种路由.html",
                "date": "2021-03-11T04:59:20.000Z",
                "updated": "2021-03-11T05:40:11.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "HTML"
                ],
                "tags": [
                    "面试",
                    "路由",
                    "学习笔记"
                ],
                "excerpt": "什么是SPA SPA 是 single page web application 的简称，译为单页Web应用。 简单的说 SPA 就是一个WEB项目只有一个 HTML 页面，一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转。 取而代之的是利用 JS 动...",
                "cover": "images/chuantong.png"
            },
            {
                "pagePath": "posts/行内元素和块级元素.md",
                "title": "行内元素和块级元素",
                "link": "posts/行内元素和块级元素.html",
                "date": "2021-03-04T13:28:28.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "HTML"
                ],
                "tags": [
                    "行内元素和块级元素"
                ],
                "excerpt": "常用行内元素 - a：锚点 - span：常用内联容器，定义文本内区块 - label：表格标签 - strong：粗体强调 - em：强调 - br：换行 - img：图片 - input：输入框 - select：项目选择 - textarea：多行文本输入框 - cite：引用 常用..."
            },
            {
                "pagePath": "posts/继承.md",
                "title": "继承",
                "link": "posts/继承.html",
                "date": "2021-03-04T13:28:28.000Z",
                "updated": "2021-03-08T13:18:57.000Z",
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
                "excerpt": "原型链继承 function Parent() { this.name = 'kevin'; } Parent.prototype.getName = function() { console.log(this.name); } function Child() { } Child.prototype = new Parent(); var child1 = new Child(); console.log..."
            },
            {
                "pagePath": "posts/111.md",
                "title": "每日总结",
                "link": "posts/111.html",
                "date": "2021-03-04T13:28:28.000Z",
                "updated": "2021-03-17T08:00:55.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "面试",
                    "原型链",
                    "学习笔记"
                ],
                "excerpt": "周末时间利用"
            },
            {
                "pagePath": "posts/微信内置浏览器播放视频.md",
                "title": "微信内置X5内核浏览器播放视频相关问题",
                "link": "posts/微信内置浏览器播放视频.html",
                "date": "2021-03-03T12:50:17.000Z",
                "updated": "2021-03-03T13:18:54.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "微信的坑"
                ],
                "tags": [
                    "视频播放"
                ],
                "excerpt": "官网 原生video标签 <video id=\"vid\" src=\"./assets/test.mp4\" poster=\"./assets/test.png\" controls></video> X5内核视频两种播放形态 1. 页面内播放 X5内核视频在用户点击后默认会进入全屏播放，前端可以设置video的x5-plays...",
                "cover": "images/wx01.png"
            },
            {
                "pagePath": "posts/Golang基础.md",
                "title": "Golang基础",
                "link": "posts/Golang基础.html",
                "date": "2021-02-26T04:55:47.000Z",
                "updated": "2021-02-26T05:36:43.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Golang"
                ],
                "tags": [
                    "学习笔记"
                ],
                "excerpt": "基本语法 package main import \"fmt\" func main() { // 此括号不能写在单独行 fmt.Println(\"Hello Go~\") } 格式化字符串 Go语言使用fmt.Sprintf格式化字符串并赋值给新串 package main import \"fmt\" func main() { // %d表示整..."
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
            },
            {
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-03-11T09:31:40.000Z",
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
                "excerpt": " 1. 常用快捷键 2. 变更路线节点：Reroute Node 3. Execute Console Command命令 1. 设置分辨率r.setRes 1920x1080 2. r.ScreenPercentage 200：双倍渲染 UE4像素流送系统 特点： 1. 流送并非播放预先录制的视频片段，而是播放...",
                "cover": "images/shortcut_key1.png"
            },
            {
                "pagePath": "posts/React笔记.md",
                "title": "React学习笔记",
                "link": "posts/React笔记.html",
                "date": "2021-01-29T14:58:22.000Z",
                "updated": "2021-02-21T23:30:13.000Z",
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
                "excerpt": " 1. 在html中简易使用jsx语法时，需要引入babel插件，同时设置<script type=\"text/babel\"></script> 2. js语法创建虚拟DOM：React.createElement('h1', {id: 'test'}, 'Hello, React') 3. 关于虚拟DOM： 1. 本质就是Object类型...",
                "cover": "images/lifeold.png"
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
                "name": "HTML",
                "count": 3
            },
            {
                "name": "Vue",
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
                "count": 22
            },
            {
                "name": "面试",
                "count": 11
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
