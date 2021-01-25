import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/css_background.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/css_background.html",
    'title': "CSS的background属性详解",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>CSS的background属性详解</h1>\n<p>background是一中CSS简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attachment。</p>\n<p>对于所有简写属性，任何没有被指定的值都会被设定为它们的初始值。</p>\n<h2 id="%E8%AF%AD%E6%B3%95">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95">§</a></h2>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 使用&lt;background-color> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token color">green</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 使用&lt;bg-image>和&lt;repeat-style> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span> repeat-y<span class="token punctuation">;</span>\n\n<span class="token comment">/* 使用&lt;box>和&lt;background-color> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> border-box <span class="token color">red</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 将背景设为一张居中放大的图片 */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> no-repeat center/<span class="token number">80</span><span class="token unit">%</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>background属性被指定多个背景层时，使用逗号分隔每个背景层。</p>\n<p>每一层语法如下：</p>\n<ul>\n<li>在每一层中，下列的值可以出现0次或1次：\n<ul>\n<li><code>&lt;attachment&gt;</code></li>\n<li><code>&lt;bg-image&gt;</code></li>\n<li><code>&lt;position&gt;</code></li>\n<li><code>bg-size</code></li>\n<li><code>repeat-style</code></li>\n</ul>\n</li>\n<li><code>&lt;bg-size&gt;</code>只能紧接着<code>&lt;position&gt;</code>出现，以<code>/</code>分割，如：<code>center/80%</code>.</li>\n<li><code>&lt;box&gt;</code>可能出现0次、1次或2次。如果出现1次，它同时设定<code>background-origin</code>和<code>background-clip</code>。如果出现两次，第一次出现设置<code>background-origin</code>，第二次的出现设置<code>background-clip</code>。</li>\n<li><code>&lt;background-color&gt;</code>只能被包含在最后一层。</li>\n</ul>\n<p><strong>注意：<code>background-color</code>只能在<code>background</code>的最后一个属性上定义，因为整个元素只有一中背景颜色。</strong></p>\n<h2 id="%E5%80%BC">值<a class="anchor" href="#%E5%80%BC">§</a></h2>\n<p>下面的一个或多个值，可以按任意顺序放置：</p>\n<h3 id="attachment"><code>&lt;attachment&gt;</code><a class="anchor" href="#attachment">§</a></h3>\n<p><code>background-attachment</code>属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-1">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-1">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键 属性值 */</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> local<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%8F%96%E5%80%BC">取值<a class="anchor" href="#%E5%8F%96%E5%80%BC">§</a></h4>\n<p><code>fixed</code></p>\n<p>此关键属性值表示背景相对与视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。</p>\n<p><code>local</code></p>\n<p>此关键属性值表示背景相对与元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动，并且背景的绘制区域和定位区域是相对与可滚动的区域而不是包含它们的边框。</p>\n<p><code>scroll</code></p>\n<p>此关键属性值表示背景相对于元素本身固定，而不是随着它的内容滚动（对元素边框是有效的）。</p>\n<h4 id="%E5%A4%9A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%AF%E6%8C%81">多背景图支持<a class="anchor" href="#%E5%A4%9A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%AF%E6%8C%81">§</a></h4>\n<p>此属性支持多张背景图片。你可以用逗号分隔来为每一张背景图片指定不同的<code>&lt;attachment&gt;</code>属性。每一张背景图片顺序对应相应的 <code>attachment</code> 属性。</p>\n<h3 id="box"><code>&lt;box&gt;</code><a class="anchor" href="#box">§</a></h3>\n<p><code>background-clip</code>和<code>background-origin</code></p>\n<p><code>background-clip</code>设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。</p>\n<p>如果没有设置背景图片(<code>background-image</code>)或(<code>background-color</code>)，那么这个属性只有在边框(<code>border</code>)被设置为非固实（solid）、透明或半透明才能看到视觉效果（与<code>border-style</code>或<code>border-image</code>有关），否则，本属性产生的样式变化会被边框覆盖。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-2">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-2">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键 属性值 */</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%80%BC-1">值<a class="anchor" href="#%E5%80%BC-1">§</a></h4>\n<p><code>border-box</code></p>\n<p>背景延伸至边框外沿（但是在边框下层）。</p>\n<p><code>padding-box</code></p>\n<p>背景延伸至内边距（padding）外沿。不会绘制到边框处。</p>\n<p><code>content-box</code></p>\n<p>背景被裁剪至内容区（content box）外沿。</p>\n<p><code>text</code></p>\n<p>背景被裁剪成文字的前景色。</p>\n<p><code>background-origin</code>规定了背景图片<code>background-image</code>属性的原点位置的背景相对区域。</p>\n<p><em>注意：当使用<code>background-attachment</code>为<code>fixed</code>时,该属性将被忽略不起作用。</em></p>\n<h4 id="%E8%AF%AD%E6%B3%95-3">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-3">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token property">background-origin</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token property">background-origin</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-origin</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%B1%9E%E6%80%A7%E5%80%BC">属性值<a class="anchor" href="#%E5%B1%9E%E6%80%A7%E5%80%BC">§</a></h4>\n<p><code>border-box</code></p>\n<p>背景图片的摆放以border区域为参考</p>\n<p><code>padding-box</code></p>\n<p>背景图片的摆放以padding区域为参考</p>\n<p><code>content-box</code></p>\n<p>背景图片的摆放以content区域为参考</p>\n<h3 id="background-color"><code>&lt;background-color&gt;</code><a class="anchor" href="#background-color">§</a></h3>\n<p><code>background-color</code>会设置元素的背景色，属性的值为颜色值或关键字<code>transparent</code>二者选其一。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-4">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-4">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* Keyword values */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Hexadecimal value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode color">#bbff00</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* RGB value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">/* HSLA value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">hsla</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Special keyword values */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">transparent</span><span class="token punctuation">;</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "CSS\u7684background\u5C5E\u6027\u8BE6\u89E3"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>background是一中CSS简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attachment。</p>\n<p>对于所有简写属性，任何没有被指定的值都会被设定为它们的初始值。</p>\n<h2 id="%E8%AF%AD%E6%B3%95">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95">§</a></h2>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 使用&lt;background-color> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token color">green</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 使用&lt;bg-image>和&lt;repeat-style> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span> repeat-y<span class="token punctuation">;</span>\n\n<span class="token comment">/* 使用&lt;box>和&lt;background-color> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> border-box <span class="token color">red</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 将背景设为一张居中放大的图片 */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> no-repeat center/<span class="token number">80</span><span class="token unit">%</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>background属性被指定多个背景层时，使用逗号分隔每个背景层。</p>\n<p>每一层语法如下：</p>\n<ul>\n<li>在每一层中，下列的值可以出现0次或1次：\n<ul>\n<li><code>&lt;attachment&gt;</code></li>\n<li><code>&lt;bg-image&gt;</code></li>\n<li><code>&lt;position&gt;</code></li>\n<li><code>bg-size</code></li>\n<li><code>repeat-style</code></li>\n</ul>\n</li>\n<li><code>&lt;bg-size&gt;</code>只能紧接着<code>&lt;position&gt;</code>出现，以<code>/</code>分割，如：<code>center/80%</code>.</li>\n<li><code>&lt;box&gt;</code>可能出现0次、1次或2次。如果出现1次，它同时设定<code>background-origin</code>和<code>background-clip</code>。如果出现两次，第一次出现设置<code>background-origin</code>，第二次的出现设置<code>background-clip</code>。</li>\n<li><code>&lt;background-color&gt;</code>只能被包含在最后一层。</li>\n</ul>\n<p><strong>注意：<code>background-color</code>只能在<code>background</code>的最后一个属性上定义，因为整个元素只有一中背景颜色。</strong></p>\n<h2 id="%E5%80%BC">值<a class="anchor" href="#%E5%80%BC">§</a></h2>\n<p>下面的一个或多个值，可以按任意顺序放置：</p>\n<h3 id="attachment"><code>&lt;attachment&gt;</code><a class="anchor" href="#attachment">§</a></h3>\n<p><code>background-attachment</code>属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-1">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-1">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键 属性值 */</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> local<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%8F%96%E5%80%BC">取值<a class="anchor" href="#%E5%8F%96%E5%80%BC">§</a></h4>\n<p><code>fixed</code></p>\n<p>此关键属性值表示背景相对与视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。</p>\n<p><code>local</code></p>\n<p>此关键属性值表示背景相对与元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动，并且背景的绘制区域和定位区域是相对与可滚动的区域而不是包含它们的边框。</p>\n<p><code>scroll</code></p>\n<p>此关键属性值表示背景相对于元素本身固定，而不是随着它的内容滚动（对元素边框是有效的）。</p>\n<h4 id="%E5%A4%9A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%AF%E6%8C%81">多背景图支持<a class="anchor" href="#%E5%A4%9A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%AF%E6%8C%81">§</a></h4>\n<p>此属性支持多张背景图片。你可以用逗号分隔来为每一张背景图片指定不同的<code>&lt;attachment&gt;</code>属性。每一张背景图片顺序对应相应的 <code>attachment</code> 属性。</p>\n<h3 id="box"><code>&lt;box&gt;</code><a class="anchor" href="#box">§</a></h3>\n<p><code>background-clip</code>和<code>background-origin</code></p>\n<p><code>background-clip</code>设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。</p>\n<p>如果没有设置背景图片(<code>background-image</code>)或(<code>background-color</code>)，那么这个属性只有在边框(<code>border</code>)被设置为非固实（solid）、透明或半透明才能看到视觉效果（与<code>border-style</code>或<code>border-image</code>有关），否则，本属性产生的样式变化会被边框覆盖。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-2">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-2">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键 属性值 */</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%80%BC-1">值<a class="anchor" href="#%E5%80%BC-1">§</a></h4>\n<p><code>border-box</code></p>\n<p>背景延伸至边框外沿（但是在边框下层）。</p>\n<p><code>padding-box</code></p>\n<p>背景延伸至内边距（padding）外沿。不会绘制到边框处。</p>\n<p><code>content-box</code></p>\n<p>背景被裁剪至内容区（content box）外沿。</p>\n<p><code>text</code></p>\n<p>背景被裁剪成文字的前景色。</p>\n<p><code>background-origin</code>规定了背景图片<code>background-image</code>属性的原点位置的背景相对区域。</p>\n<p><em>注意：当使用<code>background-attachment</code>为<code>fixed</code>时,该属性将被忽略不起作用。</em></p>\n<h4 id="%E8%AF%AD%E6%B3%95-3">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-3">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token property">background-origin</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token property">background-origin</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-origin</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%B1%9E%E6%80%A7%E5%80%BC">属性值<a class="anchor" href="#%E5%B1%9E%E6%80%A7%E5%80%BC">§</a></h4>\n<p><code>border-box</code></p>\n<p>背景图片的摆放以border区域为参考</p>\n<p><code>padding-box</code></p>\n<p>背景图片的摆放以padding区域为参考</p>\n<p><code>content-box</code></p>\n<p>背景图片的摆放以content区域为参考</p>\n<h3 id="background-color"><code>&lt;background-color&gt;</code><a class="anchor" href="#background-color">§</a></h3>\n<p><code>background-color</code>会设置元素的背景色，属性的值为颜色值或关键字<code>transparent</code>二者选其一。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-4">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-4">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* Keyword values */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Hexadecimal value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode color">#bbff00</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* RGB value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">/* HSLA value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">hsla</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Special keyword values */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">transparent</span><span class="token punctuation">;</span>\n</code></pre>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E8%AF%AD%E6%B3%95">语法</a></li><li><a href="#%E5%80%BC">值</a><ol><li><a href="#attachment">&lt;attachment&gt;</a><ol></ol></li><li><a href="#box">&lt;box&gt;</a><ol></ol></li><li><a href="#background-color">&lt;background-color&gt;</a><ol></ol></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-25T07:07:55.000Z",
    'updated': null,
    'excerpt': "background是一中CSS简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attac...",
    'cover': undefined,
    'categories': [
        "CSS"
    ],
    'tags': [
        "CSS",
        "学习笔记",
        "background"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "name": "React",
                "count": 3
            },
            {
                "name": "数据结构与算法",
                "count": 2
            },
            {
                "name": "CSS",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "学习笔记",
                "count": 6
            },
            {
                "name": "JavaScript",
                "count": 5
            },
            {
                "name": "React",
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
                "name": "CSS",
                "count": 1
            }
        ]
    }
};
