import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/防抖和节流.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/防抖和节流.html",
    'title': "防抖和节流",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>防抖和节流</h1>\n<ul>\n<li>相同：在不影响客户体验的前提下，将频繁的回调函数，进行次数缩减，避免大量计算导致页的页面卡顿。</li>\n<li>不同：防抖是将多次执行变为最后一次执行，节流是将多次执行变为在规定时间内只执行一次。</li>\n</ul>\n<h2 id="%E9%98%B2%E6%8A%96">防抖<a class="anchor" href="#%E9%98%B2%E6%8A%96">§</a></h2>\n<h3 id="%E5%AE%9A%E4%B9%89%E6%8C%87%E8%A7%A6%E5%8F%91%E4%BA%8B%E4%BB%B6%E5%90%8E%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E5%8F%AA%E8%83%BD%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%E5%A6%82%E6%9E%9C%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%8F%88%E8%A7%A6%E5%8F%91%E4%BA%86%E8%AF%A5%E4%BA%8B%E4%BB%B6%E5%88%99%E4%BC%9A%E9%87%8D%E6%96%B0%E5%BC%80%E5%A7%8B%E7%AE%97%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E7%AE%80%E8%80%8C%E8%A8%80%E4%B9%8B%E5%B0%B1%E6%98%AF%E5%BB%B6%E6%97%B6%E6%89%A7%E8%A1%8C">定义：指触发事件后在<strong>规定时间内</strong>回调函数<strong>只能执行一次</strong>，如果在规定时间内又触发了该事件，则会重新开始算规定时间。简而言之就是<strong>延时执行</strong>。<a class="anchor" href="#%E5%AE%9A%E4%B9%89%E6%8C%87%E8%A7%A6%E5%8F%91%E4%BA%8B%E4%BB%B6%E5%90%8E%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E5%8F%AA%E8%83%BD%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%E5%A6%82%E6%9E%9C%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%8F%88%E8%A7%A6%E5%8F%91%E4%BA%86%E8%AF%A5%E4%BA%8B%E4%BB%B6%E5%88%99%E4%BC%9A%E9%87%8D%E6%96%B0%E5%BC%80%E5%A7%8B%E7%AE%97%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E7%AE%80%E8%80%8C%E8%A8%80%E4%B9%8B%E5%B0%B1%E6%98%AF%E5%BB%B6%E6%97%B6%E6%89%A7%E8%A1%8C">§</a></h3>\n<h3 id="%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">应用场景<a class="anchor" href="#%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">§</a></h3>\n<p>两个条件：</p>\n<ol>\n<li>如果客户连续的操作会导致频繁的事件回调（可能引起页面卡顿）</li>\n<li>客户只关心“最后一次”操作（也可以理解为停止连续操作后）所返回的结果。</li>\n</ol>\n<p>例如：</p>\n<ul>\n<li>输入搜索联想，用户在不断输入值时，用防抖来节约请求资源。</li>\n<li>按钮点击： 收藏、点赞、爱心等。</li>\n</ul>\n<h3 id="%E5%8E%9F%E7%90%86">原理<a class="anchor" href="#%E5%8E%9F%E7%90%86">§</a></h3>\n<p>通过定时器将回调函数进行延时，如果在规定时间内继续回调，发现存在之前的定时器，则将该定时器清除，并重新设置定时器。这里有个细节，就是后面所有的回调函数都要能访问到之前设置的定时器，这时就需要用到闭包（详情见后边）</p>\n<p>防抖分为两种：</p>\n<ul>\n<li>非立即执行：事件触发-&gt;延时-&gt;执行回调函数；如果在延时中，继续触发事件，则会重新进行延时，在延时结束后执行回调函数。常见的例子：input搜索框，客户输完过一会就会自动搜索。</li>\n<li>立即执行：事件触发-&gt;执行回调函数-&gt;延时；如果在延时中，继续触发事件，则会重新进行延时。在延时结束后，并不会执行回调函数。常见的例子：对于按钮防点击，例如点赞，爱心，收藏等立即有反馈的按钮。</li>\n</ul>\n<p>实现思路：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 非立即执行</span>\n<span class="token comment">// 回调函数</span>\n<span class="token keyword">function</span> <span class="token function">showLog</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'Log: \'</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* 包装函数\n* 1.保存定时器标识\n* 2.返回闭包函数：\n*   1）对定时器的判断清除；\n*   2）一般还需要保存函数的参数（一般就是事件返回的对象）和上下文（定时器存在this隐式丢失：详情见【我不知*道的js 上】）\n* 不建议通过定义一个全局变量来替闭包保存定时器标识。\n*/</span>\n<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// let timer = null 保存定时器</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token comment">// 这里对定时器的设置有两种方法，第一种就是将定时器保存在函数（函数也是对象）的属性上</span>\n        <span class="token comment">// 这种写法很简便，但不常用</span>\n        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>fun<span class="token punctuation">.</span><span class="token property-access">timer</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        fun<span class="token punctuation">.</span><span class="token property-access">timer</span> <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            fun<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 另一种写法是比较常见的</span>\n        <span class="token comment">// if (timer) clearTimeout(timer); 相比上面的方法，这里多一个判断</span>\n        <span class="token comment">// timer = setTimeout(function() {</span>\n        <span class="token comment">//     fun.call(that, _args);</span>\n        <span class="token comment">// }, delay);</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 接着用变量保存debounce返回的带有延时功能的函数</span>\n<span class="token keyword">let</span> debounceShowLog <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>showLog<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 最后添加事件监听，回调debounceShowLog并传入事件返回的对象</span>\n<span class="token keyword">let</span> input <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'debounce\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">debounceShowLog</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">// 立即执行</span>\n<span class="token comment">// 定时器中不再包含回调函数，而是在回调函数执行后，仅起到延时和重置定时器标识的作用</span>\n<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">,</span> immediate<span class="token operator">=</span><span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span> <span class="token comment">// 保存定时器</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不管是否立即执行都需要先清空定时器</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果定时器不存在，则说明延时已过，可以立即执行函数</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 不管上一个延时是否完成，都需要重置定时器</span>\n                timer <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span> <span class="token comment">// 到时间后，定时器自动设为null，不仅方便判断定时器状态还能避免内存泄漏</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 如果是非立即执行，则重新设定定时器，并将回调函数放入其中</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                fun<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E8%8A%82%E6%B5%81">节流<a class="anchor" href="#%E8%8A%82%E6%B5%81">§</a></h2>\n<h3 id="%E5%AE%9A%E4%B9%89">定义<a class="anchor" href="#%E5%AE%9A%E4%B9%89">§</a></h3>\n<p>当持续触发事件时，在规定的时间段内只能调用一次回调函数。如果在规定的时间内又触发了该事件，则什么也不做，也不会重置定时器。</p>\n<h3 id="%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF-1">应用场景<a class="anchor" href="#%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF-1">§</a></h3>\n<p>两个条件:</p>\n<ol>\n<li>客户连续频繁地触发事件。</li>\n<li>客户不在关心“最后一次”操作后的结果，而是在操作过程中持续的反馈。</li>\n</ol>\n<p>例如：</p>\n<ul>\n<li>鼠标不断的点击触发，点击事件在规定时间内只触发一次（单位时间内只触发一次）。</li>\n<li>监听滚动事件，比如是否滑动到底部自动加载更多，用throttle来判断。</li>\n</ul>\n<p><strong>注意：连续频繁的触发事件是指事件触发的时间间隔比规定的时间要短。</strong></p>\n<h3 id="%E5%8E%9F%E7%90%86-1">原理<a class="anchor" href="#%E5%8E%9F%E7%90%86-1">§</a></h3>\n<p>节流的两种实现方式：</p>\n<ol>\n<li>\n<p>时间戳方式：通过闭包保存上一次的时间戳，然后与事件触发的时间戳比较，如果大于规定时间，则执行回调，否则就什么都不处理。</p>\n<p>特点：一般第一次会立即执行，之后连续频繁的触发事件，也是超过了规定事件才会执行一次。最后一次触发事件，也不会执行（如果最后一次触发时间大于规定时间，已经不算连续频繁触发了。）</p>\n</li>\n<li>\n<p>定时器方式：原理与防抖类似，通过闭包保存上一次定时器状态，然后事件触发时，如果定时器为null（即代表此时间间隔已经大于规定时间），则设置新的定时器，到时间后执行回调函数，并将定时器置为null。</p>\n<p>特点：当第一次触发事件时，不会立即执行函数，到了规定时间后才会执行。之后连续频繁地触发事件，也是到了规定时间才会执行一次（因为定时器）。当最后一次停止触发后，由于定时器的延时，还会执行一次回调函数（是上一次成功触发执行的回调，并不是最后一次触发产生的）。总之，就是延时回调，你看到的回调都是上次成功触发产生的，而不是此刻触发产生的。</p>\n</li>\n</ol>\n<p>两者最大的区别：时间戳版的函数触发是在规定时间开始的时候，定时器版的函数触发是在规定时间结束的时候。</p>\n<p>实现思路：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 时间戳版</span>\n<span class="token comment">// fun指回调函数</span>\n<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录上次触发的时间戳，这里初始设为0，是为了确保第一次触发产生回调</span>\n    \n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 记录此刻触发时间的时间戳</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous <span class="token operator">></span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            previous <span class="token operator">=</span> now<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 定时器版</span>\n<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> timer<span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果定时器不存在，则设置新的定时器，到时间后，才执行回调，并将定时器设为null</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                timer <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span>\n                fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 时间戳+定时器版：实现第一次触发可以立即响应，结束触发也能有响应（符合实际工作需求）</span>\n<span class="token comment">// 主体思路还是时间戳版，定时器的作用仅仅是执行最后一次回调</span>\n<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> remaining <span class="token operator">=</span> delay <span class="token operator">-</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 距离规定时间，还剩多少时间</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除之前设置的定时器</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            previous <span class="token operator">=</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> remaining<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 因为上面添加的clearTimeout，实际这个定时器只有最后一次才会执行</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u9632\u6296\u548C\u8282\u6D41"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li>相同：在不影响客户体验的前提下，将频繁的回调函数，进行次数缩减，避免大量计算导致页的页面卡顿。</li>\n<li>不同：防抖是将多次执行变为最后一次执行，节流是将多次执行变为在规定时间内只执行一次。</li>\n</ul>\n<h2 id="%E9%98%B2%E6%8A%96">防抖<a class="anchor" href="#%E9%98%B2%E6%8A%96">§</a></h2>\n<h3 id="%E5%AE%9A%E4%B9%89%E6%8C%87%E8%A7%A6%E5%8F%91%E4%BA%8B%E4%BB%B6%E5%90%8E%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E5%8F%AA%E8%83%BD%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%E5%A6%82%E6%9E%9C%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%8F%88%E8%A7%A6%E5%8F%91%E4%BA%86%E8%AF%A5%E4%BA%8B%E4%BB%B6%E5%88%99%E4%BC%9A%E9%87%8D%E6%96%B0%E5%BC%80%E5%A7%8B%E7%AE%97%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E7%AE%80%E8%80%8C%E8%A8%80%E4%B9%8B%E5%B0%B1%E6%98%AF%E5%BB%B6%E6%97%B6%E6%89%A7%E8%A1%8C">定义：指触发事件后在<strong>规定时间内</strong>回调函数<strong>只能执行一次</strong>，如果在规定时间内又触发了该事件，则会重新开始算规定时间。简而言之就是<strong>延时执行</strong>。<a class="anchor" href="#%E5%AE%9A%E4%B9%89%E6%8C%87%E8%A7%A6%E5%8F%91%E4%BA%8B%E4%BB%B6%E5%90%8E%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E5%8F%AA%E8%83%BD%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%E5%A6%82%E6%9E%9C%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%8F%88%E8%A7%A6%E5%8F%91%E4%BA%86%E8%AF%A5%E4%BA%8B%E4%BB%B6%E5%88%99%E4%BC%9A%E9%87%8D%E6%96%B0%E5%BC%80%E5%A7%8B%E7%AE%97%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E7%AE%80%E8%80%8C%E8%A8%80%E4%B9%8B%E5%B0%B1%E6%98%AF%E5%BB%B6%E6%97%B6%E6%89%A7%E8%A1%8C">§</a></h3>\n<h3 id="%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">应用场景<a class="anchor" href="#%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">§</a></h3>\n<p>两个条件：</p>\n<ol>\n<li>如果客户连续的操作会导致频繁的事件回调（可能引起页面卡顿）</li>\n<li>客户只关心“最后一次”操作（也可以理解为停止连续操作后）所返回的结果。</li>\n</ol>\n<p>例如：</p>\n<ul>\n<li>输入搜索联想，用户在不断输入值时，用防抖来节约请求资源。</li>\n<li>按钮点击： 收藏、点赞、爱心等。</li>\n</ul>\n<h3 id="%E5%8E%9F%E7%90%86">原理<a class="anchor" href="#%E5%8E%9F%E7%90%86">§</a></h3>\n<p>通过定时器将回调函数进行延时，如果在规定时间内继续回调，发现存在之前的定时器，则将该定时器清除，并重新设置定时器。这里有个细节，就是后面所有的回调函数都要能访问到之前设置的定时器，这时就需要用到闭包（详情见后边）</p>\n<p>防抖分为两种：</p>\n<ul>\n<li>非立即执行：事件触发-&gt;延时-&gt;执行回调函数；如果在延时中，继续触发事件，则会重新进行延时，在延时结束后执行回调函数。常见的例子：input搜索框，客户输完过一会就会自动搜索。</li>\n<li>立即执行：事件触发-&gt;执行回调函数-&gt;延时；如果在延时中，继续触发事件，则会重新进行延时。在延时结束后，并不会执行回调函数。常见的例子：对于按钮防点击，例如点赞，爱心，收藏等立即有反馈的按钮。</li>\n</ul>\n<p>实现思路：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 非立即执行</span>\n<span class="token comment">// 回调函数</span>\n<span class="token keyword">function</span> <span class="token function">showLog</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'Log: \'</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* 包装函数\n* 1.保存定时器标识\n* 2.返回闭包函数：\n*   1）对定时器的判断清除；\n*   2）一般还需要保存函数的参数（一般就是事件返回的对象）和上下文（定时器存在this隐式丢失：详情见【我不知*道的js 上】）\n* 不建议通过定义一个全局变量来替闭包保存定时器标识。\n*/</span>\n<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// let timer = null 保存定时器</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token comment">// 这里对定时器的设置有两种方法，第一种就是将定时器保存在函数（函数也是对象）的属性上</span>\n        <span class="token comment">// 这种写法很简便，但不常用</span>\n        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>fun<span class="token punctuation">.</span><span class="token property-access">timer</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        fun<span class="token punctuation">.</span><span class="token property-access">timer</span> <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            fun<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 另一种写法是比较常见的</span>\n        <span class="token comment">// if (timer) clearTimeout(timer); 相比上面的方法，这里多一个判断</span>\n        <span class="token comment">// timer = setTimeout(function() {</span>\n        <span class="token comment">//     fun.call(that, _args);</span>\n        <span class="token comment">// }, delay);</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 接着用变量保存debounce返回的带有延时功能的函数</span>\n<span class="token keyword">let</span> debounceShowLog <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>showLog<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 最后添加事件监听，回调debounceShowLog并传入事件返回的对象</span>\n<span class="token keyword">let</span> input <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'debounce\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">debounceShowLog</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">// 立即执行</span>\n<span class="token comment">// 定时器中不再包含回调函数，而是在回调函数执行后，仅起到延时和重置定时器标识的作用</span>\n<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">,</span> immediate<span class="token operator">=</span><span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span> <span class="token comment">// 保存定时器</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不管是否立即执行都需要先清空定时器</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果定时器不存在，则说明延时已过，可以立即执行函数</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 不管上一个延时是否完成，都需要重置定时器</span>\n                timer <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span> <span class="token comment">// 到时间后，定时器自动设为null，不仅方便判断定时器状态还能避免内存泄漏</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 如果是非立即执行，则重新设定定时器，并将回调函数放入其中</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                fun<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E8%8A%82%E6%B5%81">节流<a class="anchor" href="#%E8%8A%82%E6%B5%81">§</a></h2>\n<h3 id="%E5%AE%9A%E4%B9%89">定义<a class="anchor" href="#%E5%AE%9A%E4%B9%89">§</a></h3>\n<p>当持续触发事件时，在规定的时间段内只能调用一次回调函数。如果在规定的时间内又触发了该事件，则什么也不做，也不会重置定时器。</p>\n<h3 id="%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF-1">应用场景<a class="anchor" href="#%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF-1">§</a></h3>\n<p>两个条件:</p>\n<ol>\n<li>客户连续频繁地触发事件。</li>\n<li>客户不在关心“最后一次”操作后的结果，而是在操作过程中持续的反馈。</li>\n</ol>\n<p>例如：</p>\n<ul>\n<li>鼠标不断的点击触发，点击事件在规定时间内只触发一次（单位时间内只触发一次）。</li>\n<li>监听滚动事件，比如是否滑动到底部自动加载更多，用throttle来判断。</li>\n</ul>\n<p><strong>注意：连续频繁的触发事件是指事件触发的时间间隔比规定的时间要短。</strong></p>\n<h3 id="%E5%8E%9F%E7%90%86-1">原理<a class="anchor" href="#%E5%8E%9F%E7%90%86-1">§</a></h3>\n<p>节流的两种实现方式：</p>\n<ol>\n<li>\n<p>时间戳方式：通过闭包保存上一次的时间戳，然后与事件触发的时间戳比较，如果大于规定时间，则执行回调，否则就什么都不处理。</p>\n<p>特点：一般第一次会立即执行，之后连续频繁的触发事件，也是超过了规定事件才会执行一次。最后一次触发事件，也不会执行（如果最后一次触发时间大于规定时间，已经不算连续频繁触发了。）</p>\n</li>\n<li>\n<p>定时器方式：原理与防抖类似，通过闭包保存上一次定时器状态，然后事件触发时，如果定时器为null（即代表此时间间隔已经大于规定时间），则设置新的定时器，到时间后执行回调函数，并将定时器置为null。</p>\n<p>特点：当第一次触发事件时，不会立即执行函数，到了规定时间后才会执行。之后连续频繁地触发事件，也是到了规定时间才会执行一次（因为定时器）。当最后一次停止触发后，由于定时器的延时，还会执行一次回调函数（是上一次成功触发执行的回调，并不是最后一次触发产生的）。总之，就是延时回调，你看到的回调都是上次成功触发产生的，而不是此刻触发产生的。</p>\n</li>\n</ol>\n<p>两者最大的区别：时间戳版的函数触发是在规定时间开始的时候，定时器版的函数触发是在规定时间结束的时候。</p>\n<p>实现思路：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 时间戳版</span>\n<span class="token comment">// fun指回调函数</span>\n<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录上次触发的时间戳，这里初始设为0，是为了确保第一次触发产生回调</span>\n    \n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 记录此刻触发时间的时间戳</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous <span class="token operator">></span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            previous <span class="token operator">=</span> now<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 定时器版</span>\n<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> timer<span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果定时器不存在，则设置新的定时器，到时间后，才执行回调，并将定时器设为null</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                timer <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span>\n                fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 时间戳+定时器版：实现第一次触发可以立即响应，结束触发也能有响应（符合实际工作需求）</span>\n<span class="token comment">// 主体思路还是时间戳版，定时器的作用仅仅是执行最后一次回调</span>\n<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> remaining <span class="token operator">=</span> delay <span class="token operator">-</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 距离规定时间，还剩多少时间</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> _args <span class="token operator">=</span> args<span class="token punctuation">;</span>\n        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除之前设置的定时器</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            previous <span class="token operator">=</span> <span class="token known-class-name class-name">Date</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                fun<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> remaining<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 因为上面添加的clearTimeout，实际这个定时器只有最后一次才会执行</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E9%98%B2%E6%8A%96">防抖</a><ol><li><a href="#%E5%AE%9A%E4%B9%89%E6%8C%87%E8%A7%A6%E5%8F%91%E4%BA%8B%E4%BB%B6%E5%90%8E%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E5%8F%AA%E8%83%BD%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%E5%A6%82%E6%9E%9C%E5%9C%A8%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E5%86%85%E5%8F%88%E8%A7%A6%E5%8F%91%E4%BA%86%E8%AF%A5%E4%BA%8B%E4%BB%B6%E5%88%99%E4%BC%9A%E9%87%8D%E6%96%B0%E5%BC%80%E5%A7%8B%E7%AE%97%E8%A7%84%E5%AE%9A%E6%97%B6%E9%97%B4%E7%AE%80%E8%80%8C%E8%A8%80%E4%B9%8B%E5%B0%B1%E6%98%AF%E5%BB%B6%E6%97%B6%E6%89%A7%E8%A1%8C">定义：指触发事件后在规定时间内回调函数只能执行一次，如果在规定时间内又触发了该事件，则会重新开始算规定时间。简而言之就是延时执行。</a></li><li><a href="#%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">应用场景</a></li><li><a href="#%E5%8E%9F%E7%90%86">原理</a></li></ol></li><li><a href="#%E8%8A%82%E6%B5%81">节流</a><ol><li><a href="#%E5%AE%9A%E4%B9%89">定义</a></li><li><a href="#%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF-1">应用场景</a></li><li><a href="#%E5%8E%9F%E7%90%86-1">原理</a></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-25T10:51:54.000Z",
    'updated': "2021-01-26T03:09:41.000Z",
    'excerpt': " - 相同：在不影响客户体验的前提下，将频繁的回调函数，进行次数缩减，避免大量计算导致页的页面卡顿。 - 不同：防抖是将多次执行变为最后一次执行，节流是将多次执行变为在规定时间内只执行一次。 防抖 定义：指触发事件后在...",
    'cover': undefined,
    'categories': [
        "面试"
    ],
    'tags': [
        "面试",
        "防抖和节流",
        "学习笔记"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "updated": "2021-03-10T08:27:53.000Z",
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
                "name": "JavaScript",
                "count": 3
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
                "count": 20
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
