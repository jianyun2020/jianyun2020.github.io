import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/css_background.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/css_background.html",
    'title': "CSS的background属性详解",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>CSS的background属性详解</h1>\n<p>background是一中CSS简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attachment。</p>\n<p>对于所有简写属性，任何没有被指定的值都会被设定为它们的初始值。</p>\n<h2 id="%E8%AF%AD%E6%B3%95">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95">§</a></h2>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 使用&lt;background-color> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token color">green</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 使用&lt;bg-image>和&lt;repeat-style> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span> repeat-y<span class="token punctuation">;</span>\n\n<span class="token comment">/* 使用&lt;box>和&lt;background-color> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> border-box <span class="token color">red</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 将背景设为一张居中放大的图片 */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> no-repeat center/<span class="token number">80</span><span class="token unit">%</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>background属性被指定多个背景层时，使用逗号分隔每个背景层。</p>\n<p>每一层语法如下：</p>\n<ul>\n<li>在每一层中，下列的值可以出现0次或1次：\n<ul>\n<li><code>&lt;attachment&gt;</code></li>\n<li><code>&lt;bg-image&gt;</code></li>\n<li><code>&lt;position&gt;</code></li>\n<li><code>bg-size</code></li>\n<li><code>repeat-style</code></li>\n</ul>\n</li>\n<li><code>&lt;bg-size&gt;</code>只能紧接着<code>&lt;position&gt;</code>出现，以<code>/</code>分割，如：<code>center/80%</code>.</li>\n<li><code>&lt;box&gt;</code>可能出现0次、1次或2次。如果出现1次，它同时设定<code>background-origin</code>和<code>background-clip</code>。如果出现两次，第一次出现设置<code>background-origin</code>，第二次的出现设置<code>background-clip</code>。</li>\n<li><code>&lt;background-color&gt;</code>只能被包含在最后一层。</li>\n</ul>\n<p><strong>注意：<code>background-color</code>只能在<code>background</code>的最后一个属性上定义，因为整个元素只有一中背景颜色。</strong></p>\n<h2 id="%E5%80%BC">值<a class="anchor" href="#%E5%80%BC">§</a></h2>\n<p>下面的一个或多个值，可以按任意顺序放置：</p>\n<h3 id="attachment"><code>&lt;attachment&gt;</code><a class="anchor" href="#attachment">§</a></h3>\n<p><code>background-attachment</code>属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-1">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-1">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键 属性值 */</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> local<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%8F%96%E5%80%BC">取值<a class="anchor" href="#%E5%8F%96%E5%80%BC">§</a></h4>\n<p><code>fixed</code></p>\n<p>此关键属性值表示背景相对与视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。</p>\n<p><code>local</code></p>\n<p>此关键属性值表示背景相对与元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动，并且背景的绘制区域和定位区域是相对与可滚动的区域而不是包含它们的边框。</p>\n<p><code>scroll</code></p>\n<p>此关键属性值表示背景相对于元素本身固定，而不是随着它的内容滚动（对元素边框是有效的）。</p>\n<h4 id="%E5%A4%9A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%AF%E6%8C%81">多背景图支持<a class="anchor" href="#%E5%A4%9A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%AF%E6%8C%81">§</a></h4>\n<p>此属性支持多张背景图片。你可以用逗号分隔来为每一张背景图片指定不同的<code>&lt;attachment&gt;</code>属性。每一张背景图片顺序对应相应的 <code>attachment</code> 属性。</p>\n<h3 id="box"><code>&lt;box&gt;</code><a class="anchor" href="#box">§</a></h3>\n<p><code>background-clip</code>和<code>background-origin</code></p>\n<p><code>background-clip</code>设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。</p>\n<p>如果没有设置背景图片(<code>background-image</code>)或(<code>background-color</code>)，那么这个属性只有在边框(<code>border</code>)被设置为非固实（solid）、透明或半透明才能看到视觉效果（与<code>border-style</code>或<code>border-image</code>有关），否则，本属性产生的样式变化会被边框覆盖。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-2">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-2">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键 属性值 */</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%80%BC-1">值<a class="anchor" href="#%E5%80%BC-1">§</a></h4>\n<p><code>border-box</code></p>\n<p>背景延伸至边框外沿（但是在边框下层）。</p>\n<p><code>padding-box</code></p>\n<p>背景延伸至内边距（padding）外沿。不会绘制到边框处。</p>\n<p><code>content-box</code></p>\n<p>背景被裁剪至内容区（content box）外沿。</p>\n<p><code>text</code></p>\n<p>背景被裁剪成文字的前景色。</p>\n<p><code>background-origin</code>规定了背景图片<code>background-image</code>属性的原点位置的背景相对区域。</p>\n<p><em>注意：当使用<code>background-attachment</code>为<code>fixed</code>时,该属性将被忽略不起作用。</em></p>\n<h4 id="%E8%AF%AD%E6%B3%95-3">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-3">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token property">background-origin</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token property">background-origin</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-origin</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%B1%9E%E6%80%A7%E5%80%BC">属性值<a class="anchor" href="#%E5%B1%9E%E6%80%A7%E5%80%BC">§</a></h4>\n<p><code>border-box</code></p>\n<p>背景图片的摆放以border区域为参考</p>\n<p><code>padding-box</code></p>\n<p>背景图片的摆放以padding区域为参考</p>\n<p><code>content-box</code></p>\n<p>背景图片的摆放以content区域为参考</p>\n<h3 id="background-color"><code>&lt;background-color&gt;</code><a class="anchor" href="#background-color">§</a></h3>\n<p><code>background-color</code>会设置元素的背景色，属性的值为颜色值或关键字<code>transparent</code>二者选其一。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-4">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-4">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* Keyword values */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Hexadecimal value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode color">#bbff00</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* RGB value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">/* HSLA value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">hsla</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Special keyword values */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">transparent</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="bg-image"><code>&lt;bg-image&gt;</code><a class="anchor" href="#bg-image">§</a></h3>\n<p><code>background-image</code>属性用于为一个元素设置一个或多个背景图像。</p>\n<p>在绘制时，图像以Z方向堆叠的方式进行。先指定的图像会在之后指定的图像上面绘制。因此指定的第一个图像“最接近用户”。</p>\n<p>然后元素的边框border会在它们之上被绘制，而<code>background-color</code>会在它们之下绘制。图像的绘制与盒子以及盒子的边框的关系，需要在CSS属性<code>background-clip</code>和<code>background-origin</code>中定义。</p>\n<p>如果一个指定的图像无法被绘制（比如，被指定的URI所表示的文件无法被加载），浏览器会将此等情况等同于其值被设为<code>none</code>。</p>\n<p><strong>注意： 即使图像是不透明的，背景色在通常情况下并不会被显示，web开发者仍然应该指定<code>background-color</code> 属性。如果图像无法被加载—例如，在网络连接断开的情况下—背景色就会被绘制。</strong></p>\n<h4 id="%E8%AF%AD%E6%B3%95-5">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-5">§</a></h4>\n<p>每个背景图像被明确规定为关键字<code>none</code>或是一个<code>&lt;image&gt;</code>值。</p>\n<p>可以提供由逗号分隔的多个值来指定多个背景图像：</p>\n<pre class="language-css"><code class="language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> <span class="token color"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token color"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0.5</span><span class="token punctuation">)</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%8F%96%E5%80%BC-1">取值<a class="anchor" href="#%E5%8F%96%E5%80%BC-1">§</a></h4>\n<p><code>none</code></p>\n<p>是一个表示无背景图的关键字。</p>\n<p><code>&lt;image&gt;</code></p>\n<p><code>&lt;image&gt;</code>用来标记将要显示的图片，支持多背景设置，背景之间以逗号隔开。</p>\n<h3 id="position"><code>&lt;position&gt;</code><a class="anchor" href="#position">§</a></h3>\n<p><code>background-position</code>为每一个背景图片设置初始位置。这个位置是相对于由<code>background-origin</code>定义的位置图层的。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-6">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-6">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* Keyword values */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n\n<span class="token comment">/* &lt;percentage> values */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">%</span> <span class="token number">0</span><span class="token unit">%</span><span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n\n<span class="token comment">/* &lt;length> values */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">cm</span> <span class="token number">2</span><span class="token unit">cm</span><span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">ch</span> <span class="token number">8</span><span class="token unit">em</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Multiple images */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">,</span> center<span class="token punctuation">;</span>\n\n<span class="token comment">/* Edge offsets values */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> bottom <span class="token number">10</span><span class="token unit">px</span> right <span class="token number">20</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> right <span class="token number">3</span><span class="token unit">em</span> bottom <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> bottom <span class="token number">10</span><span class="token unit">px</span> right<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> top right <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%80%BC-2">值<a class="anchor" href="#%E5%80%BC-2">§</a></h4>\n<ul>\n<li>关键字<code>center</code>，用来居中背景图片。</li>\n<li>关键字<code>top, left, bottom, right</code>中的一个。用来指定把这个item放在哪一个边缘。另一个维度被设置成50%,所以这个item被放在指定边缘的中间位置。</li>\n<li><code>&lt;length&gt;</code>和<code>&lt;percentage&gt;</code>。指定相对于左边缘的x坐标，y坐标被设置成50%。</li>\n<li>如果一个值为<code>top</code>或<code>bottom</code>，那么另一个值不应该是<code>top</code>或<code>bottom</code>。</li>\n<li>如果一个值为<code>left</code>或<code>right</code>，那么另一个值不应该是<code>left</code>或<code>right</code>。</li>\n<li>+50px（将图片的左边界对齐容器中的中线）</li>\n<li>0px（图片的左边界与容器左边界重合）</li>\n<li>-100px（将图片相对容器左移100px，这意味着图片中部的100px内容将出现在容器中）</li>\n<li>-200px（将图片相对容器左移200px，这意味着图片右部分的100px内容将出现在容器中）</li>\n<li>-250px（将图片相对容器左移250px，这意味着图片的右边界对齐容器的中线）</li>\n</ul>\n<p>另外需要注意，如果背景图片的大小和容器大小一样，那设置的百分比的值将永远无效，因为“容器和图片的差”为0（图片永远填满容器，并且图片的相对位置和容器的相对位置永远重合）。在这种情况下，需要为偏移使用绝对值（例如px）。</p>\n<p><code>&lt;position&gt;</code></p>\n<p>一个<code>&lt;position&gt;</code>定义一组x/y坐标（相对于一个元素盒子模型的边缘），来放置这个item。它可以被定义为一个值或者两个值。如果被定义为两个值，那么第一个值代表水平位置，第二个值代表垂直位置。如果只指定一个值，那么第二个值默认为center。</p>\n<h3 id="repeat-style"><code>&lt;repeat-style&gt;</code><a class="anchor" href="#repeat-style">§</a></h3>\n<p><code>background-repeat</code>属性定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复。</p>\n<p>默认情况下，重复的图像被裁剪为元素的大小，但它们可以缩放（使用round）或者均匀的分布（使用space）。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-7">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-7">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 单值语法 */</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-y<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> space<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>\n\n<span class="token comment">/* 双值语法：水平horizontal | 垂直vertical */</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat space<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat repeat<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> round space<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat round<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%80%BC-3">值<a class="anchor" href="#%E5%80%BC-3">§</a></h4>\n<p><code>repeat-style</code></p>\n<p>单值语法是完整的双值语法的简写：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>单值</th>\n<th>等价于双值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>repeat-x</td>\n<td>repeat no-repeat</td>\n</tr>\n<tr>\n<td>repeat-y</td>\n<td>no-repeat repeat</td>\n</tr>\n<tr>\n<td>repeat</td>\n<td>repeat repeat</td>\n</tr>\n<tr>\n<td>space</td>\n<td>space space</td>\n</tr>\n<tr>\n<td>round</td>\n<td>round round</td>\n</tr>\n<tr>\n<td>no-repeat</td>\n<td>no-repeat no-repeat</td>\n</tr>\n</tbody>\n</table></div>\n<p>在双值语法中，第一个值表示水平重复行为，第二个值表示垂直重复行为。下面是关于每一个值是怎么工作的具体说明：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>repeat</td>\n<td>图像会按需重复来覆盖整个背景图片所在的区域，最后一个图像会被裁剪，如果它的大小不合适</td>\n</tr>\n<tr>\n<td>space</td>\n<td>图像会尽可能得重复，但是不会裁剪，第一个和最后一个图像会被固定在元素得相应的边上，同时空白会均匀地分布在图像之间。<code>background-position</code>属性会被忽视，除非只有一个图像能被无裁剪地显示。只在一种情况下裁剪会发生，那就是图像太大了以至于没有足够的空间来完整显示一个图像</td>\n</tr>\n<tr>\n<td>round</td>\n<td>随着允许的空间在尺寸上的增长, 被重复的图像将会伸展(没有空隙), 直到有足够的空间来添加一个图像. 当下一个图像被添加后, 所有的当前的图像会被压缩来腾出空间. 例如, 一个图像原始大小是260px, 重复三次之后, 可能会被伸展到300px, 直到另一个图像被加进来. 这样他们就可能被压缩到225px.</td>\n</tr>\n<tr>\n<td>no-repeat</td>\n<td>图像不会被重复（因为背景图像所在的区域将可能没有完全覆盖），那个没有被重复的背景图像的位置是由<code>background-position</code>属性来决定的。</td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="bg-size"><code>&lt;bg-size&gt;</code><a class="anchor" href="#bg-size">§</a></h3>\n<p><code>background-size</code>设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持原有比例的同时缩放到元素的可用空间尺寸。</p>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键字 */</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>\n\n<span class="token comment">/* 一个值：这个值指定图片的宽度，图片的高度隐式的为auto */</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token unit">em</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n\n<span class="token comment">/* 两个值 */</span>\n<span class="token comment">/* 第一个值指定图片的宽度，第二个值指定图片的高度 */</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span> auto<span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token unit">em</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> auto <span class="token number">6</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> auto auto<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n\n<span class="token comment">/* 逗号分隔的多个值：设置多重背景 */</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> auto<span class="token punctuation">,</span> auto<span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token unit">px</span><span class="token punctuation">,</span> auto<span class="token punctuation">,</span> contain<span class="token punctuation">;</span>\n</code></pre>\n<p><strong>注意：没有被背景图片覆盖的背景区域仍然会显示用background-color属性设置的背景颜色。此外，如果背景图片设置了透明或者半透明属性，衬在背景图片后面的背景色也会显示出来。</strong></p>\n<h4 id="%E8%AF%AD%E6%B3%95-8">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-8">§</a></h4>\n<p>单张图片的背景大小可以使用以下三种方法中的一种来规定：</p>\n<ul>\n<li>使用关键词<code>contain</code></li>\n<li>使用关键词<code>cover</code></li>\n<li>设定宽度和高度值</li>\n</ul>\n<p>当通过宽度和高度值来设定尺寸时，你可以提供一个或两个数值：</p>\n<ul>\n<li>如果仅有一个数值被给定，这个数值作为宽度值大小，高度值将被设定为auto</li>\n<li>如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。</li>\n</ul>\n<h4 id="%E5%80%BC-4">值<a class="anchor" href="#%E5%80%BC-4">§</a></h4>\n<p><code>&lt;length&gt;</code></p>\n<p>指定背景图片大小，不能为负值。</p>\n<p><code>&lt;percentage&gt;</code></p>\n<p>指定背景图片相对背景区的百分比。背景区由<code>background-origin</code>设置，默认为盒模型内容区与内边距，也可设置为只有内容区，或者还包括边框。如果<code>attachment</code>为fixed，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。</p>\n<p><code>auto</code></p>\n<p>以背景图片的比例缩放背景图片。</p>\n<p><code>cover</code></p>\n<p>缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和contain值相反，cover值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的左/右或者上/下部分会被裁剪。</p>\n<p><code>contain</code></p>\n<p>缩放背景图片以完全装入背景区，可能背景区部分空白。contain尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小不同时，容器的空白区域（上/下或者左/右）会显示右<code>background-color</code>设置的背景颜色。</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "CSS\u7684background\u5C5E\u6027\u8BE6\u89E3"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>background是一中CSS简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attachment。</p>\n<p>对于所有简写属性，任何没有被指定的值都会被设定为它们的初始值。</p>\n<h2 id="%E8%AF%AD%E6%B3%95">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95">§</a></h2>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 使用&lt;background-color> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token color">green</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 使用&lt;bg-image>和&lt;repeat-style> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span> repeat-y<span class="token punctuation">;</span>\n\n<span class="token comment">/* 使用&lt;box>和&lt;background-color> */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> border-box <span class="token color">red</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 将背景设为一张居中放大的图片 */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> no-repeat center/<span class="token number">80</span><span class="token unit">%</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>background属性被指定多个背景层时，使用逗号分隔每个背景层。</p>\n<p>每一层语法如下：</p>\n<ul>\n<li>在每一层中，下列的值可以出现0次或1次：\n<ul>\n<li><code>&lt;attachment&gt;</code></li>\n<li><code>&lt;bg-image&gt;</code></li>\n<li><code>&lt;position&gt;</code></li>\n<li><code>bg-size</code></li>\n<li><code>repeat-style</code></li>\n</ul>\n</li>\n<li><code>&lt;bg-size&gt;</code>只能紧接着<code>&lt;position&gt;</code>出现，以<code>/</code>分割，如：<code>center/80%</code>.</li>\n<li><code>&lt;box&gt;</code>可能出现0次、1次或2次。如果出现1次，它同时设定<code>background-origin</code>和<code>background-clip</code>。如果出现两次，第一次出现设置<code>background-origin</code>，第二次的出现设置<code>background-clip</code>。</li>\n<li><code>&lt;background-color&gt;</code>只能被包含在最后一层。</li>\n</ul>\n<p><strong>注意：<code>background-color</code>只能在<code>background</code>的最后一个属性上定义，因为整个元素只有一中背景颜色。</strong></p>\n<h2 id="%E5%80%BC">值<a class="anchor" href="#%E5%80%BC">§</a></h2>\n<p>下面的一个或多个值，可以按任意顺序放置：</p>\n<h3 id="attachment"><code>&lt;attachment&gt;</code><a class="anchor" href="#attachment">§</a></h3>\n<p><code>background-attachment</code>属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-1">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-1">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键 属性值 */</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n<span class="token property">background-attachment</span><span class="token punctuation">:</span> local<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%8F%96%E5%80%BC">取值<a class="anchor" href="#%E5%8F%96%E5%80%BC">§</a></h4>\n<p><code>fixed</code></p>\n<p>此关键属性值表示背景相对与视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。</p>\n<p><code>local</code></p>\n<p>此关键属性值表示背景相对与元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动，并且背景的绘制区域和定位区域是相对与可滚动的区域而不是包含它们的边框。</p>\n<p><code>scroll</code></p>\n<p>此关键属性值表示背景相对于元素本身固定，而不是随着它的内容滚动（对元素边框是有效的）。</p>\n<h4 id="%E5%A4%9A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%AF%E6%8C%81">多背景图支持<a class="anchor" href="#%E5%A4%9A%E8%83%8C%E6%99%AF%E5%9B%BE%E6%94%AF%E6%8C%81">§</a></h4>\n<p>此属性支持多张背景图片。你可以用逗号分隔来为每一张背景图片指定不同的<code>&lt;attachment&gt;</code>属性。每一张背景图片顺序对应相应的 <code>attachment</code> 属性。</p>\n<h3 id="box"><code>&lt;box&gt;</code><a class="anchor" href="#box">§</a></h3>\n<p><code>background-clip</code>和<code>background-origin</code></p>\n<p><code>background-clip</code>设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。</p>\n<p>如果没有设置背景图片(<code>background-image</code>)或(<code>background-color</code>)，那么这个属性只有在边框(<code>border</code>)被设置为非固实（solid）、透明或半透明才能看到视觉效果（与<code>border-style</code>或<code>border-image</code>有关），否则，本属性产生的样式变化会被边框覆盖。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-2">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-2">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键 属性值 */</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n<span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%80%BC-1">值<a class="anchor" href="#%E5%80%BC-1">§</a></h4>\n<p><code>border-box</code></p>\n<p>背景延伸至边框外沿（但是在边框下层）。</p>\n<p><code>padding-box</code></p>\n<p>背景延伸至内边距（padding）外沿。不会绘制到边框处。</p>\n<p><code>content-box</code></p>\n<p>背景被裁剪至内容区（content box）外沿。</p>\n<p><code>text</code></p>\n<p>背景被裁剪成文字的前景色。</p>\n<p><code>background-origin</code>规定了背景图片<code>background-image</code>属性的原点位置的背景相对区域。</p>\n<p><em>注意：当使用<code>background-attachment</code>为<code>fixed</code>时,该属性将被忽略不起作用。</em></p>\n<h4 id="%E8%AF%AD%E6%B3%95-3">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-3">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token property">background-origin</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token property">background-origin</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n<span class="token property">background-origin</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%B1%9E%E6%80%A7%E5%80%BC">属性值<a class="anchor" href="#%E5%B1%9E%E6%80%A7%E5%80%BC">§</a></h4>\n<p><code>border-box</code></p>\n<p>背景图片的摆放以border区域为参考</p>\n<p><code>padding-box</code></p>\n<p>背景图片的摆放以padding区域为参考</p>\n<p><code>content-box</code></p>\n<p>背景图片的摆放以content区域为参考</p>\n<h3 id="background-color"><code>&lt;background-color&gt;</code><a class="anchor" href="#background-color">§</a></h3>\n<p><code>background-color</code>会设置元素的背景色，属性的值为颜色值或关键字<code>transparent</code>二者选其一。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-4">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-4">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* Keyword values */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Hexadecimal value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode color">#bbff00</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* RGB value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">/* HSLA value */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color"><span class="token function">hsla</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Special keyword values */</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>\n<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token color">transparent</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="bg-image"><code>&lt;bg-image&gt;</code><a class="anchor" href="#bg-image">§</a></h3>\n<p><code>background-image</code>属性用于为一个元素设置一个或多个背景图像。</p>\n<p>在绘制时，图像以Z方向堆叠的方式进行。先指定的图像会在之后指定的图像上面绘制。因此指定的第一个图像“最接近用户”。</p>\n<p>然后元素的边框border会在它们之上被绘制，而<code>background-color</code>会在它们之下绘制。图像的绘制与盒子以及盒子的边框的关系，需要在CSS属性<code>background-clip</code>和<code>background-origin</code>中定义。</p>\n<p>如果一个指定的图像无法被绘制（比如，被指定的URI所表示的文件无法被加载），浏览器会将此等情况等同于其值被设为<code>none</code>。</p>\n<p><strong>注意： 即使图像是不透明的，背景色在通常情况下并不会被显示，web开发者仍然应该指定<code>background-color</code> 属性。如果图像无法被加载—例如，在网络连接断开的情况下—背景色就会被绘制。</strong></p>\n<h4 id="%E8%AF%AD%E6%B3%95-5">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-5">§</a></h4>\n<p>每个背景图像被明确规定为关键字<code>none</code>或是一个<code>&lt;image&gt;</code>值。</p>\n<p>可以提供由逗号分隔的多个值来指定多个背景图像：</p>\n<pre class="language-css"><code class="language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> <span class="token color"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token color"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0.5</span><span class="token punctuation">)</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">\'test.jpg\'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%8F%96%E5%80%BC-1">取值<a class="anchor" href="#%E5%8F%96%E5%80%BC-1">§</a></h4>\n<p><code>none</code></p>\n<p>是一个表示无背景图的关键字。</p>\n<p><code>&lt;image&gt;</code></p>\n<p><code>&lt;image&gt;</code>用来标记将要显示的图片，支持多背景设置，背景之间以逗号隔开。</p>\n<h3 id="position"><code>&lt;position&gt;</code><a class="anchor" href="#position">§</a></h3>\n<p><code>background-position</code>为每一个背景图片设置初始位置。这个位置是相对于由<code>background-origin</code>定义的位置图层的。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-6">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-6">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* Keyword values */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n\n<span class="token comment">/* &lt;percentage> values */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">%</span> <span class="token number">0</span><span class="token unit">%</span><span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n\n<span class="token comment">/* &lt;length> values */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">cm</span> <span class="token number">2</span><span class="token unit">cm</span><span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">ch</span> <span class="token number">8</span><span class="token unit">em</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Multiple images */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">,</span> center<span class="token punctuation">;</span>\n\n<span class="token comment">/* Edge offsets values */</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> bottom <span class="token number">10</span><span class="token unit">px</span> right <span class="token number">20</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> right <span class="token number">3</span><span class="token unit">em</span> bottom <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> bottom <span class="token number">10</span><span class="token unit">px</span> right<span class="token punctuation">;</span>\n<span class="token property">background-position</span><span class="token punctuation">:</span> top right <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%80%BC-2">值<a class="anchor" href="#%E5%80%BC-2">§</a></h4>\n<ul>\n<li>关键字<code>center</code>，用来居中背景图片。</li>\n<li>关键字<code>top, left, bottom, right</code>中的一个。用来指定把这个item放在哪一个边缘。另一个维度被设置成50%,所以这个item被放在指定边缘的中间位置。</li>\n<li><code>&lt;length&gt;</code>和<code>&lt;percentage&gt;</code>。指定相对于左边缘的x坐标，y坐标被设置成50%。</li>\n<li>如果一个值为<code>top</code>或<code>bottom</code>，那么另一个值不应该是<code>top</code>或<code>bottom</code>。</li>\n<li>如果一个值为<code>left</code>或<code>right</code>，那么另一个值不应该是<code>left</code>或<code>right</code>。</li>\n<li>+50px（将图片的左边界对齐容器中的中线）</li>\n<li>0px（图片的左边界与容器左边界重合）</li>\n<li>-100px（将图片相对容器左移100px，这意味着图片中部的100px内容将出现在容器中）</li>\n<li>-200px（将图片相对容器左移200px，这意味着图片右部分的100px内容将出现在容器中）</li>\n<li>-250px（将图片相对容器左移250px，这意味着图片的右边界对齐容器的中线）</li>\n</ul>\n<p>另外需要注意，如果背景图片的大小和容器大小一样，那设置的百分比的值将永远无效，因为“容器和图片的差”为0（图片永远填满容器，并且图片的相对位置和容器的相对位置永远重合）。在这种情况下，需要为偏移使用绝对值（例如px）。</p>\n<p><code>&lt;position&gt;</code></p>\n<p>一个<code>&lt;position&gt;</code>定义一组x/y坐标（相对于一个元素盒子模型的边缘），来放置这个item。它可以被定义为一个值或者两个值。如果被定义为两个值，那么第一个值代表水平位置，第二个值代表垂直位置。如果只指定一个值，那么第二个值默认为center。</p>\n<h3 id="repeat-style"><code>&lt;repeat-style&gt;</code><a class="anchor" href="#repeat-style">§</a></h3>\n<p><code>background-repeat</code>属性定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复。</p>\n<p>默认情况下，重复的图像被裁剪为元素的大小，但它们可以缩放（使用round）或者均匀的分布（使用space）。</p>\n<h4 id="%E8%AF%AD%E6%B3%95-7">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-7">§</a></h4>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 单值语法 */</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-y<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> space<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>\n\n<span class="token comment">/* 双值语法：水平horizontal | 垂直vertical */</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat space<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat repeat<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> round space<span class="token punctuation">;</span>\n<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat round<span class="token punctuation">;</span>\n</code></pre>\n<h4 id="%E5%80%BC-3">值<a class="anchor" href="#%E5%80%BC-3">§</a></h4>\n<p><code>repeat-style</code></p>\n<p>单值语法是完整的双值语法的简写：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>单值</th>\n<th>等价于双值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>repeat-x</td>\n<td>repeat no-repeat</td>\n</tr>\n<tr>\n<td>repeat-y</td>\n<td>no-repeat repeat</td>\n</tr>\n<tr>\n<td>repeat</td>\n<td>repeat repeat</td>\n</tr>\n<tr>\n<td>space</td>\n<td>space space</td>\n</tr>\n<tr>\n<td>round</td>\n<td>round round</td>\n</tr>\n<tr>\n<td>no-repeat</td>\n<td>no-repeat no-repeat</td>\n</tr>\n</tbody>\n</table></div>\n<p>在双值语法中，第一个值表示水平重复行为，第二个值表示垂直重复行为。下面是关于每一个值是怎么工作的具体说明：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>repeat</td>\n<td>图像会按需重复来覆盖整个背景图片所在的区域，最后一个图像会被裁剪，如果它的大小不合适</td>\n</tr>\n<tr>\n<td>space</td>\n<td>图像会尽可能得重复，但是不会裁剪，第一个和最后一个图像会被固定在元素得相应的边上，同时空白会均匀地分布在图像之间。<code>background-position</code>属性会被忽视，除非只有一个图像能被无裁剪地显示。只在一种情况下裁剪会发生，那就是图像太大了以至于没有足够的空间来完整显示一个图像</td>\n</tr>\n<tr>\n<td>round</td>\n<td>随着允许的空间在尺寸上的增长, 被重复的图像将会伸展(没有空隙), 直到有足够的空间来添加一个图像. 当下一个图像被添加后, 所有的当前的图像会被压缩来腾出空间. 例如, 一个图像原始大小是260px, 重复三次之后, 可能会被伸展到300px, 直到另一个图像被加进来. 这样他们就可能被压缩到225px.</td>\n</tr>\n<tr>\n<td>no-repeat</td>\n<td>图像不会被重复（因为背景图像所在的区域将可能没有完全覆盖），那个没有被重复的背景图像的位置是由<code>background-position</code>属性来决定的。</td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="bg-size"><code>&lt;bg-size&gt;</code><a class="anchor" href="#bg-size">§</a></h3>\n<p><code>background-size</code>设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持原有比例的同时缩放到元素的可用空间尺寸。</p>\n<pre class="language-css"><code class="language-css"><span class="token comment">/* 关键字 */</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>\n\n<span class="token comment">/* 一个值：这个值指定图片的宽度，图片的高度隐式的为auto */</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token unit">em</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n\n<span class="token comment">/* 两个值 */</span>\n<span class="token comment">/* 第一个值指定图片的宽度，第二个值指定图片的高度 */</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span> auto<span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token unit">em</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> auto <span class="token number">6</span><span class="token unit">px</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> auto auto<span class="token punctuation">;</span> <span class="token comment">/* 初始值 */</span>\n\n<span class="token comment">/* 逗号分隔的多个值：设置多重背景 */</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> auto<span class="token punctuation">,</span> auto<span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token unit">%</span><span class="token punctuation">;</span>\n<span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token unit">px</span><span class="token punctuation">,</span> auto<span class="token punctuation">,</span> contain<span class="token punctuation">;</span>\n</code></pre>\n<p><strong>注意：没有被背景图片覆盖的背景区域仍然会显示用background-color属性设置的背景颜色。此外，如果背景图片设置了透明或者半透明属性，衬在背景图片后面的背景色也会显示出来。</strong></p>\n<h4 id="%E8%AF%AD%E6%B3%95-8">语法<a class="anchor" href="#%E8%AF%AD%E6%B3%95-8">§</a></h4>\n<p>单张图片的背景大小可以使用以下三种方法中的一种来规定：</p>\n<ul>\n<li>使用关键词<code>contain</code></li>\n<li>使用关键词<code>cover</code></li>\n<li>设定宽度和高度值</li>\n</ul>\n<p>当通过宽度和高度值来设定尺寸时，你可以提供一个或两个数值：</p>\n<ul>\n<li>如果仅有一个数值被给定，这个数值作为宽度值大小，高度值将被设定为auto</li>\n<li>如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。</li>\n</ul>\n<h4 id="%E5%80%BC-4">值<a class="anchor" href="#%E5%80%BC-4">§</a></h4>\n<p><code>&lt;length&gt;</code></p>\n<p>指定背景图片大小，不能为负值。</p>\n<p><code>&lt;percentage&gt;</code></p>\n<p>指定背景图片相对背景区的百分比。背景区由<code>background-origin</code>设置，默认为盒模型内容区与内边距，也可设置为只有内容区，或者还包括边框。如果<code>attachment</code>为fixed，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。</p>\n<p><code>auto</code></p>\n<p>以背景图片的比例缩放背景图片。</p>\n<p><code>cover</code></p>\n<p>缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和contain值相反，cover值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的左/右或者上/下部分会被裁剪。</p>\n<p><code>contain</code></p>\n<p>缩放背景图片以完全装入背景区，可能背景区部分空白。contain尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小不同时，容器的空白区域（上/下或者左/右）会显示右<code>background-color</code>设置的背景颜色。</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E8%AF%AD%E6%B3%95">语法</a></li><li><a href="#%E5%80%BC">值</a><ol><li><a href="#attachment">&lt;attachment&gt;</a><ol></ol></li><li><a href="#box">&lt;box&gt;</a><ol></ol></li><li><a href="#background-color">&lt;background-color&gt;</a><ol></ol></li><li><a href="#bg-image">&lt;bg-image&gt;</a><ol></ol></li><li><a href="#position">&lt;position&gt;</a><ol></ol></li><li><a href="#repeat-style">&lt;repeat-style&gt;</a><ol></ol></li><li><a href="#bg-size">&lt;bg-size&gt;</a><ol></ol></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-25T07:07:55.000Z",
    'updated': "2021-01-25T08:30:22.000Z",
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
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-02-08T03:22:15.000Z",
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
                "excerpt": " 1. 常用快捷键 2. 变更路线节点：Reroute Node 3. Execute Console Command命令 1. 设置分辨率r.setRes 1920x1080 UE4像素流送系统 特点： 1. 流送并非播放预先录制的视频片段，而是播放虚幻引擎实时生成的渲染帧和音频。 2. ...",
                "cover": "images/shortcut_key1.png"
            },
            {
                "pagePath": "posts/React笔记.md",
                "title": "React学习笔记",
                "link": "posts/React笔记.html",
                "date": "2021-01-29T14:58:22.000Z",
                "updated": "2021-02-09T10:39:49.000Z",
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
