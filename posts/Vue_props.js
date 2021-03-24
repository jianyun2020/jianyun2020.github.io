import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/Vue.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/Vue.html",
    'title': "Vue",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue</h1>\n<h1>Vue 实例</h1>\n<h2 id="%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAvue%E5%AE%9E%E4%BE%8B">创建一个Vue实例<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAvue%E5%AE%9E%E4%BE%8B">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// 选项</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p>所有的 <code>Vue</code> 组件都是 <code>Vue 实例</code>，并且接受相同的选项对象 (一些根实例特有的选项除外)。</p>\n<h2 id="%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95">数据与方法<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95">§</a></h2>\n<p>当一个 <code>Vue 实例</code>被创建时，它将 <code>data</code> 对象中的所有的 <code>property</code> 加入到 <code>Vue</code> 的响应式系统中。当这些 <code>property</code> 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 我们的数据对象</span>\n<span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>\n\n<span class="token comment">// 该对象被加入到一个Vue实例中</span>\n<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token operator">:</span> data\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 获得这个实例上的property</span>\n<span class="token comment">// 返回源数据中对应的字段</span>\nvm<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">==</span> data<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token comment">// true</span>\n\n<span class="token comment">// 设置property也会影响到原始数据</span>\nvm<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">=</span> <span class="token number">2</span>\ndata<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token comment">// 2</span>\n\n<span class="token comment">// 反之亦然</span>\ndata<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">=</span> <span class="token number">3</span>\nvm<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">=</span> <span class="token number">3</span>\n</code></pre>\n<p>当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 <code>data</code> 中的 <code>property</code> 才是响应式的。也就是说如果你添加一个新的 <code>property</code>，比如：</p>\n<pre class="language-js"><code class="language-js">vm<span class="token punctuation">.</span><span class="token property-access">b</span> <span class="token operator">=</span> <span class="token string">\'hi\'</span>\n</code></pre>\n<p>那么对 b 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个 <code>property</code>，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如：</p>\n<pre class="language-js"><code class="language-js">data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    newTodoText<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    visitCount<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    hideComponentedTodos<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    todos<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    error<span class="token operator">:</span> <span class="token keyword null nil">null</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>这里唯一的例外是使用 <code>Object.freeze()</code>，这会阻止修改现有的 <code>property</code>，也意味着响应系统无法再追踪变化。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    foo<span class="token operator">:</span> <span class="token string">\'bar\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n    data<span class="token operator">:</span> obj\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ foo }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- 这里的 `foo` 不会更新！ --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo = <span class="token punctuation">\'</span>baz<span class="token punctuation">\'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Change it<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>除了数据 <code>property</code>，<code>Vue</code> 实例还暴露了一些有用的实例 <code>property</code> 与方法。它们都有前缀 <code>$</code>，以便与用户定义的 <code>property</code> 区分开来。例如：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>\n<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">\'#example\'</span><span class="token punctuation">,</span>\n    data<span class="token operator">:</span> data\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nvm<span class="token punctuation">.</span><span class="token property-access">$data</span> <span class="token operator">===</span> data <span class="token comment">// true</span>\nvm<span class="token punctuation">.</span><span class="token property-access">$el</span> <span class="token operator">===</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n\n<span class="token comment">// $watch 是一个实例方法</span>\nvm<span class="token punctuation">.</span><span class="token method function property-access">$watch</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 这个回调将在 vm.a 改变后调用</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<h2 id="%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90">实例生命周期钩子<a class="anchor" href="#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90">§</a></h2>\n<p>每个 <code>Vue</code> 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 <code>DOM</code> 并在数据变化时更新 <code>DOM</code> 等。同时在这个过程中也会运行一些叫做<strong>生命周期钩子的函数</strong>，这给了用户在不同阶段添加自己的代码的机会。</p>\n<p>比如 <code>created</code> 钩子可以用来在一个实例被创建之后执行代码：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token operator">:</span> <span class="token punctuation">{</span>\n        a<span class="token operator">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// this指向vm实例</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'a is: \'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">a</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// a is: 1</span>\n</code></pre>\n<p>也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 <code>mounted</code>、<code>updated</code> 和 <code>destroyed</code>。生命周期钩子的 <code>this</code> 上下文指向调用它的 <code>Vue</code> 实例。</p>\n<blockquote>\n<p>不要在选项 property 或回调上使用箭头函数，比如 created: () =&gt; console.log(this.a) 或 vm.$watch(\'a\', newValue =&gt; this.myMethod())。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。</p>\n</blockquote>\n<h2 id="%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA">生命周期图示<a class="anchor" href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA">§</a></h2>\n<p><img src="images/vue_life.png" alt=""></p>\n<h1>模板语法</h1>\n<p><code>Vue.js</code> 使用了基于 <code>HTML</code> 的模板语法，允许开发者声明式地将 <code>DOM</code> 绑定至底层 <code>Vue</code> 实例的数据。所有 <code>Vue.js</code> 的模板都是合法的 <code>HTML</code>，所以能被遵循规范的浏览器和 <code>HTML</code> 解析器解析。</p>\n<p>在底层的实现上，<code>Vue</code> 将模板编译成虚拟 <code>DOM</code> 渲染函数。结合响应系统，<code>Vue</code> 能够智能地计算出最少需要重新渲染多少组件，并把 <code>DOM</code> 操作次数减到最少。</p>\n<p>如果你熟悉虚拟 <code>DOM</code> 并且偏爱 <code>JavaScript</code> 的原始力量，你也可以不用模板，直接写渲染 (render) 函数，使用可选的 <code>JSX</code> 语法。</p>\n<h2 id="%E6%8F%92%E5%80%BC">插值<a class="anchor" href="#%E6%8F%92%E5%80%BC">§</a></h2>\n<h3 id="%E6%96%87%E6%9C%AC">文本<a class="anchor" href="#%E6%96%87%E6%9C%AC">§</a></h3>\n<p>数据绑定最常见的形式就是使用“<code>Mustache</code>”语法 (双大括号) 的文本插值：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Message: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n</code></pre>\n<p><code>Mustache</code> 标签将会被替代为对应数据对象上 <code>msg property</code> 的值。无论何时，绑定的数据对象上 <code>msg property</code> 发生了改变，插值处的内容都会更新。</p>\n<p>通过使用 <code>v-once</code> 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-once</span><span class="token punctuation">></span></span>这个将不会改变：{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n</code></pre>\n<h3 id="%E5%8E%9F%E5%A7%8B-html">原始 HTML<a class="anchor" href="#%E5%8E%9F%E5%A7%8B-html">§</a></h3>\n<p>双大括号会将数据解释为普通文本，而非 <code>HTML</code> 代码。为了输出真正的 <code>HTML</code>，你需要使用 <code>v-html</code> 指令：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using mustaches: {{ rawHtml }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using v-html directive: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rawHtml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>Using mustaches: <span style="color: red">This should be red.</span>\nUsing v-html directive: This should be red.</p>\n<p>这个 <code>span</code> 的内容将会被替换成为 <code>property</code> 值 <code>rawHtml</code>，直接作为 <code>HTML</code>——会忽略解析 <code>property</code> 值中的数据绑定。注意，你不能使用 <code>v-html</code> 来复合局部模板，因为 <code>Vue</code> 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。</p>\n<blockquote>\n<p>你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。</p>\n</blockquote>\n<h3 id="attribute">Attribute<a class="anchor" href="#attribute">§</a></h3>\n<p><code>Mustache</code> 语法不能作用在 <code>HTML attribute</code> 上，遇到这种情况应该使用 <code>v-bind</code> 指令：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>对于布尔 <code>attribute</code> (它们只要存在就意味着值为 true)，<code>v-bind</code> 工作起来略有不同，在这个例子中：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isButtonDisabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>如果 <code>isButtonDisabled</code> 的值是 <code>null</code>、<code>undefined</code> 或 <code>false</code>，则 <code>disabled attribute</code> 甚至不会被包含在渲染出来的 <code>&lt;button&gt;</code> 元素中。</p>\n<h3 id="%E4%BD%BF%E7%94%A8-javascript-%E8%A1%A8%E8%BE%BE%E5%BC%8F">使用 JavaScript 表达式<a class="anchor" href="#%E4%BD%BF%E7%94%A8-javascript-%E8%A1%A8%E8%BE%BE%E5%BC%8F">§</a></h3>\n<p>迄今为止，在我们的模板中，我们一直都只绑定简单的 <code>property</code> 键值。但实际上，对于所有的数据绑定，<code>Vue.js</code> 都提供了完全的 <code>JavaScript</code> 表达式支持。</p>\n<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span><span class="token punctuation">{</span> number <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token punctuation">{</span><span class="token punctuation">{</span> ok <span class="token operator">?</span> <span class="token string">\'YES\'</span> <span class="token operator">:</span> <span class="token string">\'NO\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token punctuation">{</span><span class="token punctuation">{</span> message<span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">"\'list-\' + id"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n</code></pre>\n<p>这些表达式会在所属 <code>Vue</code> 实例的数据作用域下作为 <code>JavaScript</code> 被解析。有个限制就是，每个绑定都只能包含<strong>单个表达式</strong>，所以下面的例子都不会生效。</p>\n<pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 这是语句，不是表达式 <span class="token operator">--</span><span class="token operator">></span>\n<span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 流控制也不会生效，请使用三元表达式 <span class="token operator">--</span><span class="token operator">></span>\n<span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword control-flow">return</span> message <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre>\n<blockquote>\n<p>模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。</p>\n</blockquote>\n<h2 id="%E6%8C%87%E4%BB%A4">指令<a class="anchor" href="#%E6%8C%87%E4%BB%A4">§</a></h2>\n<p><code>指令 (Directives)</code> 是带有 <code>v-</code> 前缀的特殊 <code>attribute</code>。指令 <code>attribute</code> 的值预期是单个 <code>JavaScript</code> 表达式 (<code>v-for</code> 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 <code>DOM</code>。回顾我们在介绍中看到的例子：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>seen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>现在你看到我了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>这里，<code>v-if</code> 指令将根据表达式 <code>seen</code> 的值的真假来插入/移除 <code>&lt;p&gt;</code> 元素。</p>\n<h3 id="%E5%8F%82%E6%95%B0">参数<a class="anchor" href="#%E5%8F%82%E6%95%B0">§</a></h3>\n<p>一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，<code>v-bind</code> 指令可以用于响应式地更新 <code>HTML attribute</code>：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>在这里参数是监听的事件名。</p>\n<h3 id="%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0">动态参数<a class="anchor" href="#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0">§</a></h3>\n<p>从 2.6.0 开始，可以用方括号括起来的 <code>JavaScript</code> 表达式作为一个指令的参数：</p>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!--\n注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。\n--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[attributeName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>这里的 <code>attributeName</code> 会被作为一个 <code>JavaScript</code> 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 <code>Vue</code> 实例有一个 <code>data property attributeName</code>，其值为 &quot;<code>href</code>&quot;，那么这个绑定将等价于 <code>v-bind:href</code>。</p>\n<p>同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>[eventName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>在这个示例中，当 <code>eventName</code> 的值为 &quot;<code>focus</code>&quot; 时，<code>v-on:[eventName]</code> 将等价于 <code>v-on:focus</code>。</p>\n<p><strong>对动态参数的值的约束</strong></p>\n<p>动态参数预期会求出一个字符串，异常情况下值为 <code>null</code>。这个特殊的 <code>null</code> 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。</p>\n<p><strong>对动态参数表达式的约束</strong></p>\n<p>动态参数表达式有一些语法约束，因为某些字符，如<strong>空格</strong>和<strong>引号</strong>，放在 <code>HTML attribute</code> 名里是无效的。例如：</p>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 这会触发一个编译警告 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[\'foo\'</span> <span class="token attr-name">+</span> <span class="token attr-name">bar]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。</p>\n<p>在 <code>DOM</code> 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 <code>attribute</code> 名全部强制转为小写：</p>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!--\n在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。\n除非在实例中有一个名为“someattr”的 property，否则代码不会工作。\n--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[someAttr]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2 id="%E4%BF%AE%E9%A5%B0%E7%AC%A6">修饰符<a class="anchor" href="#%E4%BF%AE%E9%A5%B0%E7%AC%A6">§</a></h2>\n<p>修饰符 (modifier) 是以半角句号 <code>.</code> 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，<code>.prevent</code> 修饰符告诉 <code>v-on</code> 指令对于触发的事件调用 <code>event.preventDefault()</code>：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2 id="%E7%BC%A9%E5%86%99">缩写<a class="anchor" href="#%E7%BC%A9%E5%86%99">§</a></h2>\n<p><code>v-</code> 前缀作为一种视觉提示，用来识别模板中 <code>Vue</code> 特定的 <code>attribute</code>。当你在使用 <code>Vue.js</code> 为现有标签添加动态行为 (dynamic behavior) 时，<code>v-</code> 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 <code>Vue</code> 管理所有模板的单页面应用程序 (<code>SPA - single page application</code>) 时，<code>v-</code> 前缀也变得没那么重要了。因此，<code>Vue</code> 为 <code>v-bind</code> 和 <code>v-on</code> 这两个最常用的指令，提供了特定简写：</p>\n<h3 id="v-bind-%E7%BC%A9%E5%86%99">v-bind 缩写<a class="anchor" href="#v-bind-%E7%BC%A9%E5%86%99">§</a></h3>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 完整语法 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 缩写 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 动态参数的缩写 (2.6.0+) --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:[key]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<h3 id="v-on-%E7%BC%A9%E5%86%99">v-on 缩写<a class="anchor" href="#v-on-%E7%BC%A9%E5%86%99">§</a></h3>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 完整语法 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 缩写 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 动态参数的缩写 (2.6.0+) --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@[event]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>它们看起来可能与普通的 <code>HTML</code> 略有不同，但 <code>:</code> 与 <code>@</code> 对于 <code>attribute</code> 名来说都是合法字符，在所有支持 <code>Vue</code> 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。</p>\n<h1>计算属性和侦听器</h1>\n<p>模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  {{ message.split(\'\').reverse().join(\'\') }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。</p>\n<p>所以，对于任何复杂逻辑，你都应当使用计算属性。</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vue"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue 实例</h1>\n<h2 id="%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAvue%E5%AE%9E%E4%BE%8B">创建一个Vue实例<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAvue%E5%AE%9E%E4%BE%8B">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// 选项</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p>所有的 <code>Vue</code> 组件都是 <code>Vue 实例</code>，并且接受相同的选项对象 (一些根实例特有的选项除外)。</p>\n<h2 id="%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95">数据与方法<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95">§</a></h2>\n<p>当一个 <code>Vue 实例</code>被创建时，它将 <code>data</code> 对象中的所有的 <code>property</code> 加入到 <code>Vue</code> 的响应式系统中。当这些 <code>property</code> 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 我们的数据对象</span>\n<span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>\n\n<span class="token comment">// 该对象被加入到一个Vue实例中</span>\n<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token operator">:</span> data\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 获得这个实例上的property</span>\n<span class="token comment">// 返回源数据中对应的字段</span>\nvm<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">==</span> data<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token comment">// true</span>\n\n<span class="token comment">// 设置property也会影响到原始数据</span>\nvm<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">=</span> <span class="token number">2</span>\ndata<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token comment">// 2</span>\n\n<span class="token comment">// 反之亦然</span>\ndata<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">=</span> <span class="token number">3</span>\nvm<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">=</span> <span class="token number">3</span>\n</code></pre>\n<p>当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 <code>data</code> 中的 <code>property</code> 才是响应式的。也就是说如果你添加一个新的 <code>property</code>，比如：</p>\n<pre class="language-js"><code class="language-js">vm<span class="token punctuation">.</span><span class="token property-access">b</span> <span class="token operator">=</span> <span class="token string">\'hi\'</span>\n</code></pre>\n<p>那么对 b 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个 <code>property</code>，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如：</p>\n<pre class="language-js"><code class="language-js">data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    newTodoText<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    visitCount<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    hideComponentedTodos<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    todos<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    error<span class="token operator">:</span> <span class="token keyword null nil">null</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>这里唯一的例外是使用 <code>Object.freeze()</code>，这会阻止修改现有的 <code>property</code>，也意味着响应系统无法再追踪变化。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    foo<span class="token operator">:</span> <span class="token string">\'bar\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n    data<span class="token operator">:</span> obj\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ foo }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- 这里的 `foo` 不会更新！ --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo = <span class="token punctuation">\'</span>baz<span class="token punctuation">\'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Change it<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>除了数据 <code>property</code>，<code>Vue</code> 实例还暴露了一些有用的实例 <code>property</code> 与方法。它们都有前缀 <code>$</code>，以便与用户定义的 <code>property</code> 区分开来。例如：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>\n<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">\'#example\'</span><span class="token punctuation">,</span>\n    data<span class="token operator">:</span> data\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nvm<span class="token punctuation">.</span><span class="token property-access">$data</span> <span class="token operator">===</span> data <span class="token comment">// true</span>\nvm<span class="token punctuation">.</span><span class="token property-access">$el</span> <span class="token operator">===</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n\n<span class="token comment">// $watch 是一个实例方法</span>\nvm<span class="token punctuation">.</span><span class="token method function property-access">$watch</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 这个回调将在 vm.a 改变后调用</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<h2 id="%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90">实例生命周期钩子<a class="anchor" href="#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90">§</a></h2>\n<p>每个 <code>Vue</code> 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 <code>DOM</code> 并在数据变化时更新 <code>DOM</code> 等。同时在这个过程中也会运行一些叫做<strong>生命周期钩子的函数</strong>，这给了用户在不同阶段添加自己的代码的机会。</p>\n<p>比如 <code>created</code> 钩子可以用来在一个实例被创建之后执行代码：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token operator">:</span> <span class="token punctuation">{</span>\n        a<span class="token operator">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// this指向vm实例</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'a is: \'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">a</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// a is: 1</span>\n</code></pre>\n<p>也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 <code>mounted</code>、<code>updated</code> 和 <code>destroyed</code>。生命周期钩子的 <code>this</code> 上下文指向调用它的 <code>Vue</code> 实例。</p>\n<blockquote>\n<p>不要在选项 property 或回调上使用箭头函数，比如 created: () =&gt; console.log(this.a) 或 vm.$watch(\'a\', newValue =&gt; this.myMethod())。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。</p>\n</blockquote>\n<h2 id="%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA">生命周期图示<a class="anchor" href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA">§</a></h2>\n<p><img src="images/vue_life.png" alt=""></p>\n<h1>模板语法</h1>\n<p><code>Vue.js</code> 使用了基于 <code>HTML</code> 的模板语法，允许开发者声明式地将 <code>DOM</code> 绑定至底层 <code>Vue</code> 实例的数据。所有 <code>Vue.js</code> 的模板都是合法的 <code>HTML</code>，所以能被遵循规范的浏览器和 <code>HTML</code> 解析器解析。</p>\n<p>在底层的实现上，<code>Vue</code> 将模板编译成虚拟 <code>DOM</code> 渲染函数。结合响应系统，<code>Vue</code> 能够智能地计算出最少需要重新渲染多少组件，并把 <code>DOM</code> 操作次数减到最少。</p>\n<p>如果你熟悉虚拟 <code>DOM</code> 并且偏爱 <code>JavaScript</code> 的原始力量，你也可以不用模板，直接写渲染 (render) 函数，使用可选的 <code>JSX</code> 语法。</p>\n<h2 id="%E6%8F%92%E5%80%BC">插值<a class="anchor" href="#%E6%8F%92%E5%80%BC">§</a></h2>\n<h3 id="%E6%96%87%E6%9C%AC">文本<a class="anchor" href="#%E6%96%87%E6%9C%AC">§</a></h3>\n<p>数据绑定最常见的形式就是使用“<code>Mustache</code>”语法 (双大括号) 的文本插值：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Message: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n</code></pre>\n<p><code>Mustache</code> 标签将会被替代为对应数据对象上 <code>msg property</code> 的值。无论何时，绑定的数据对象上 <code>msg property</code> 发生了改变，插值处的内容都会更新。</p>\n<p>通过使用 <code>v-once</code> 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-once</span><span class="token punctuation">></span></span>这个将不会改变：{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n</code></pre>\n<h3 id="%E5%8E%9F%E5%A7%8B-html">原始 HTML<a class="anchor" href="#%E5%8E%9F%E5%A7%8B-html">§</a></h3>\n<p>双大括号会将数据解释为普通文本，而非 <code>HTML</code> 代码。为了输出真正的 <code>HTML</code>，你需要使用 <code>v-html</code> 指令：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using mustaches: {{ rawHtml }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using v-html directive: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rawHtml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>Using mustaches: <span style="color: red">This should be red.</span>\nUsing v-html directive: This should be red.</p>\n<p>这个 <code>span</code> 的内容将会被替换成为 <code>property</code> 值 <code>rawHtml</code>，直接作为 <code>HTML</code>——会忽略解析 <code>property</code> 值中的数据绑定。注意，你不能使用 <code>v-html</code> 来复合局部模板，因为 <code>Vue</code> 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。</p>\n<blockquote>\n<p>你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。</p>\n</blockquote>\n<h3 id="attribute">Attribute<a class="anchor" href="#attribute">§</a></h3>\n<p><code>Mustache</code> 语法不能作用在 <code>HTML attribute</code> 上，遇到这种情况应该使用 <code>v-bind</code> 指令：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>对于布尔 <code>attribute</code> (它们只要存在就意味着值为 true)，<code>v-bind</code> 工作起来略有不同，在这个例子中：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isButtonDisabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>如果 <code>isButtonDisabled</code> 的值是 <code>null</code>、<code>undefined</code> 或 <code>false</code>，则 <code>disabled attribute</code> 甚至不会被包含在渲染出来的 <code>&lt;button&gt;</code> 元素中。</p>\n<h3 id="%E4%BD%BF%E7%94%A8-javascript-%E8%A1%A8%E8%BE%BE%E5%BC%8F">使用 JavaScript 表达式<a class="anchor" href="#%E4%BD%BF%E7%94%A8-javascript-%E8%A1%A8%E8%BE%BE%E5%BC%8F">§</a></h3>\n<p>迄今为止，在我们的模板中，我们一直都只绑定简单的 <code>property</code> 键值。但实际上，对于所有的数据绑定，<code>Vue.js</code> 都提供了完全的 <code>JavaScript</code> 表达式支持。</p>\n<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span><span class="token punctuation">{</span> number <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token punctuation">{</span><span class="token punctuation">{</span> ok <span class="token operator">?</span> <span class="token string">\'YES\'</span> <span class="token operator">:</span> <span class="token string">\'NO\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token punctuation">{</span><span class="token punctuation">{</span> message<span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">"\'list-\' + id"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n</code></pre>\n<p>这些表达式会在所属 <code>Vue</code> 实例的数据作用域下作为 <code>JavaScript</code> 被解析。有个限制就是，每个绑定都只能包含<strong>单个表达式</strong>，所以下面的例子都不会生效。</p>\n<pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 这是语句，不是表达式 <span class="token operator">--</span><span class="token operator">></span>\n<span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 流控制也不会生效，请使用三元表达式 <span class="token operator">--</span><span class="token operator">></span>\n<span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword control-flow">return</span> message <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre>\n<blockquote>\n<p>模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。</p>\n</blockquote>\n<h2 id="%E6%8C%87%E4%BB%A4">指令<a class="anchor" href="#%E6%8C%87%E4%BB%A4">§</a></h2>\n<p><code>指令 (Directives)</code> 是带有 <code>v-</code> 前缀的特殊 <code>attribute</code>。指令 <code>attribute</code> 的值预期是单个 <code>JavaScript</code> 表达式 (<code>v-for</code> 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 <code>DOM</code>。回顾我们在介绍中看到的例子：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>seen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>现在你看到我了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>这里，<code>v-if</code> 指令将根据表达式 <code>seen</code> 的值的真假来插入/移除 <code>&lt;p&gt;</code> 元素。</p>\n<h3 id="%E5%8F%82%E6%95%B0">参数<a class="anchor" href="#%E5%8F%82%E6%95%B0">§</a></h3>\n<p>一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，<code>v-bind</code> 指令可以用于响应式地更新 <code>HTML attribute</code>：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>在这里参数是监听的事件名。</p>\n<h3 id="%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0">动态参数<a class="anchor" href="#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0">§</a></h3>\n<p>从 2.6.0 开始，可以用方括号括起来的 <code>JavaScript</code> 表达式作为一个指令的参数：</p>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!--\n注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。\n--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[attributeName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>这里的 <code>attributeName</code> 会被作为一个 <code>JavaScript</code> 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 <code>Vue</code> 实例有一个 <code>data property attributeName</code>，其值为 &quot;<code>href</code>&quot;，那么这个绑定将等价于 <code>v-bind:href</code>。</p>\n<p>同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>[eventName]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>在这个示例中，当 <code>eventName</code> 的值为 &quot;<code>focus</code>&quot; 时，<code>v-on:[eventName]</code> 将等价于 <code>v-on:focus</code>。</p>\n<p><strong>对动态参数的值的约束</strong></p>\n<p>动态参数预期会求出一个字符串，异常情况下值为 <code>null</code>。这个特殊的 <code>null</code> 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。</p>\n<p><strong>对动态参数表达式的约束</strong></p>\n<p>动态参数表达式有一些语法约束，因为某些字符，如<strong>空格</strong>和<strong>引号</strong>，放在 <code>HTML attribute</code> 名里是无效的。例如：</p>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 这会触发一个编译警告 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[\'foo\'</span> <span class="token attr-name">+</span> <span class="token attr-name">bar]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。</p>\n<p>在 <code>DOM</code> 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 <code>attribute</code> 名全部强制转为小写：</p>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!--\n在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。\n除非在实例中有一个名为“someattr”的 property，否则代码不会工作。\n--></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[someAttr]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2 id="%E4%BF%AE%E9%A5%B0%E7%AC%A6">修饰符<a class="anchor" href="#%E4%BF%AE%E9%A5%B0%E7%AC%A6">§</a></h2>\n<p>修饰符 (modifier) 是以半角句号 <code>.</code> 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，<code>.prevent</code> 修饰符告诉 <code>v-on</code> 指令对于触发的事件调用 <code>event.preventDefault()</code>：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2 id="%E7%BC%A9%E5%86%99">缩写<a class="anchor" href="#%E7%BC%A9%E5%86%99">§</a></h2>\n<p><code>v-</code> 前缀作为一种视觉提示，用来识别模板中 <code>Vue</code> 特定的 <code>attribute</code>。当你在使用 <code>Vue.js</code> 为现有标签添加动态行为 (dynamic behavior) 时，<code>v-</code> 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 <code>Vue</code> 管理所有模板的单页面应用程序 (<code>SPA - single page application</code>) 时，<code>v-</code> 前缀也变得没那么重要了。因此，<code>Vue</code> 为 <code>v-bind</code> 和 <code>v-on</code> 这两个最常用的指令，提供了特定简写：</p>\n<h3 id="v-bind-%E7%BC%A9%E5%86%99">v-bind 缩写<a class="anchor" href="#v-bind-%E7%BC%A9%E5%86%99">§</a></h3>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 完整语法 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 缩写 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 动态参数的缩写 (2.6.0+) --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:[key]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<h3 id="v-on-%E7%BC%A9%E5%86%99">v-on 缩写<a class="anchor" href="#v-on-%E7%BC%A9%E5%86%99">§</a></h3>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 完整语法 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 缩写 --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 动态参数的缩写 (2.6.0+) --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@[event]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>它们看起来可能与普通的 <code>HTML</code> 略有不同，但 <code>:</code> 与 <code>@</code> 对于 <code>attribute</code> 名来说都是合法字符，在所有支持 <code>Vue</code> 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。</p>\n<h1>计算属性和侦听器</h1>\n<p>模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  {{ message.split(\'\').reverse().join(\'\') }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。</p>\n<p>所以，对于任何复杂逻辑，你都应当使用计算属性。</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAvue%E5%AE%9E%E4%BE%8B">创建一个Vue实例</a></li><li><a href="#%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95">数据与方法</a></li><li><a href="#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90">实例生命周期钩子</a></li><li><a href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA">生命周期图示</a></li><li><a href="#%E6%8F%92%E5%80%BC">插值</a><ol><li><a href="#%E6%96%87%E6%9C%AC">文本</a></li><li><a href="#%E5%8E%9F%E5%A7%8B-html">原始 HTML</a></li><li><a href="#attribute">Attribute</a></li><li><a href="#%E4%BD%BF%E7%94%A8-javascript-%E8%A1%A8%E8%BE%BE%E5%BC%8F">使用 JavaScript 表达式</a></li></ol></li><li><a href="#%E6%8C%87%E4%BB%A4">指令</a><ol><li><a href="#%E5%8F%82%E6%95%B0">参数</a></li><li><a href="#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0">动态参数</a></li></ol></li><li><a href="#%E4%BF%AE%E9%A5%B0%E7%AC%A6">修饰符</a></li><li><a href="#%E7%BC%A9%E5%86%99">缩写</a><ol><li><a href="#v-bind-%E7%BC%A9%E5%86%99">v-bind 缩写</a></li><li><a href="#v-on-%E7%BC%A9%E5%86%99">v-on 缩写</a></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-03-24T12:28:00.000Z",
    'updated': null,
    'excerpt': "Vue 实例 创建一个Vue实例 var vm = new Vue({ // 选项 }) 所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。 数据与方法 当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入...",
    'cover': "images/vue_life.png",
    'categories': [
        "Vue"
    ],
    'tags': [
        "Vue",
        "学习笔记"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/Vue.md",
                "title": "Vue",
                "link": "posts/Vue.html",
                "date": "2021-03-24T12:28:00.000Z",
                "updated": null,
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "学习笔记"
                ],
                "excerpt": "Vue 实例 创建一个Vue实例 var vm = new Vue({ // 选项 }) 所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。 数据与方法 当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入...",
                "cover": "images/vue_life.png"
            },
            {
                "pagePath": "posts/Vue Router.md",
                "title": "Vue Router",
                "link": "posts/Vue Router.html",
                "date": "2021-03-17T08:01:47.000Z",
                "updated": "2021-03-22T09:30:18.000Z",
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
                "title": "Vue",
                "link": "posts/111.html",
                "date": "2021-03-04T13:28:28.000Z",
                "updated": "2021-03-23T05:44:05.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "学习笔记"
                ],
                "excerpt": ""
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
                "name": "Vue",
                "count": 4
            },
            {
                "name": "HTML",
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
                "count": 23
            },
            {
                "name": "面试",
                "count": 10
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
                "name": "Vue",
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
                "name": "原型链",
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
