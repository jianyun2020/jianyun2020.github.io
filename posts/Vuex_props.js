import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/Vuex.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/Vuex.html",
    'title': "Vuex",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vuex</h1>\n<p>Vuex 是一个专为 Vue.js 应用程序开发的<strong>状态管理模式</strong>。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p>\n<p>每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的<strong>状态 (state)</strong>。Vuex 和单纯的全局对象有以下两点不同：</p>\n<ol>\n<li>\n<p>Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</p>\n</li>\n<li>\n<p>你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地<strong>提交 (commit) mutation</strong>。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。</p>\n</li>\n</ol>\n<h1>最简单的 Store</h1>\n<pre class="language-js"><code class="language-js"><span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">Vue</span></span> <span class="token keyword module">from</span> <span class="token string">\'vue\'</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">Vuex</span></span> <span class="token keyword module">from</span> <span class="token string">\'vuex\'</span>\n\n<span class="token maybe-class-name">Vue</span><span class="token punctuation">.</span><span class="token method function property-access">use</span><span class="token punctuation">(</span><span class="token maybe-class-name">Vuex</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    state<span class="token operator">:</span> <span class="token punctuation">{</span>\n        count<span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    mutations<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            state<span class="token punctuation">.</span><span class="token property-access">count</span><span class="token operator">++</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 现在，你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：</span>\nstore<span class="token punctuation">.</span><span class="token method function property-access">commit</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">)</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">count</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n\n<span class="token comment">// 为了在 Vue 组件中访问 this.$store property，你需要为 Vue 实例提供创建好的 store。Vuex 提供了一个从根组件向所有子组件，以 store 选项的方式“注入”该 store 的机制：</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n    store<span class="token operator">:</span> store\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 如果使用 ES6，你也可以以 ES6 对象的 property 简写 (用在对象某个 property 的 key 和被传入的变量同名时)：</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n  store\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 现在我们可以从组件的方法提交一个变更：</span>\nmethods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$store</span><span class="token punctuation">.</span><span class="token method function property-access">commit</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">)</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$store</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">count</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><em>再次强调，我们通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。</em></p>\n<p>由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在<strong>计算属性</strong>中返回即可。触发变化也仅仅是在组件的 <strong>methods 中提交 mutation</strong>。</p>\n<h1>state</h1>\n<h2 id="%E5%8D%95%E4%B8%80%E7%8A%B6%E6%80%81%E6%A0%91">单一状态树<a class="anchor" href="#%E5%8D%95%E4%B8%80%E7%8A%B6%E6%80%81%E6%A0%91">§</a></h2>\n<p>Vuex 使用<strong>单一状态树</strong>——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。</p>\n<h2 id="%E5%9C%A8-vue-%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%BE%97-vuex-%E7%8A%B6%E6%80%81">在 Vue 组件中获得 Vuex 状态<a class="anchor" href="#%E5%9C%A8-vue-%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%BE%97-vuex-%E7%8A%B6%E6%80%81">§</a></h2>\n<p>由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在<strong>计算属性</strong>中返回某个状态：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 创建一个Counter组件</span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Counter</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>{{ count }}&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> store<span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">count</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>每当<code>store.state.count</code>变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。</p>\n<p>然而，这种模式导致组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 state 的组件中需要频繁地导入，并且在测试组件时需要模拟状态。</p>\n<p>Vuex 通过 <code>store</code> 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 <code>Vue.use(Vuex)</code>）：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件</span>\n    store<span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Counter</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n        &lt;div class="app">\n            &lt;Counter>&lt;/Counter>\n        &lt;/div>\n    </span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p>通过在根实例中注册 <code>store</code> 选项，该 <code>store</code> 实例会注入到根组件下的所有子组件中，且子组件能通过 <code>this.$store</code> 访问到。让我们更新下 Counter 的实现：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token maybe-class-name">Counter</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>{{ count }}&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$store</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">count</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0">mapState 辅助函数<a class="anchor" href="#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0">§</a></h2>\n<p>当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 <code>mapState</code> 辅助函数帮助我们生成计算属性，让你少按几次键：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 在单独构建的版本中辅助函数为Vuex.mapState</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> mapState <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'vuex\'</span>\n\n<span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    computed<span class="token operator">:</span> <span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token comment">// 箭头函数可使代码更简练</span>\n        <span class="token function-variable function">count</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token arrow operator">=></span> state<span class="token punctuation">.</span><span class="token property-access">count</span><span class="token punctuation">,</span>\n        <span class="token comment">// 传字符串参数 \'count\' 等同于 `state => state.count`</span>\n        countAlias<span class="token operator">:</span> <span class="token string">\'count\'</span><span class="token punctuation">,</span>\n        <span class="token comment">// 为了能够使用 `this` 获取局部状态，必须使用常规函数</span>\n        <span class="token function">countPlusLocalState</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> state<span class="token punctuation">.</span><span class="token property-access">count</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">localCount</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>当映射的计算属性的名称与 <code>state</code> 的子节点名称相同时，我们也可以给 <code>mapState</code> 传一个字符串数组。</p>\n<pre class="language-js"><code class="language-js">computed<span class="token operator">:</span> <span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token comment">// 映射 this.count 为 store.state.count</span>\n    <span class="token string">\'count\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n<h2 id="%E5%AF%B9%E8%B1%A1%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6">对象展开运算符<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6">§</a></h2>\n<p><code>mapState</code> 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 <code>computed</code> 属性。但是自从有了对象展开运算符，我们可以极大地简化写法：</p>\n<pre class="language-js"><code class="language-js">computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token function">localComputed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 使用对象展开运算符将此对象混入到外部对象中</span>\n  <span class="token spread operator">...</span><span class="token method function property-access">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h1>Getter</h1>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vuex"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Vuex 是一个专为 Vue.js 应用程序开发的<strong>状态管理模式</strong>。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p>\n<p>每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的<strong>状态 (state)</strong>。Vuex 和单纯的全局对象有以下两点不同：</p>\n<ol>\n<li>\n<p>Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</p>\n</li>\n<li>\n<p>你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地<strong>提交 (commit) mutation</strong>。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。</p>\n</li>\n</ol>\n<h1>最简单的 Store</h1>\n<pre class="language-js"><code class="language-js"><span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">Vue</span></span> <span class="token keyword module">from</span> <span class="token string">\'vue\'</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">Vuex</span></span> <span class="token keyword module">from</span> <span class="token string">\'vuex\'</span>\n\n<span class="token maybe-class-name">Vue</span><span class="token punctuation">.</span><span class="token method function property-access">use</span><span class="token punctuation">(</span><span class="token maybe-class-name">Vuex</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    state<span class="token operator">:</span> <span class="token punctuation">{</span>\n        count<span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    mutations<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            state<span class="token punctuation">.</span><span class="token property-access">count</span><span class="token operator">++</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 现在，你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：</span>\nstore<span class="token punctuation">.</span><span class="token method function property-access">commit</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">)</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">count</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n\n<span class="token comment">// 为了在 Vue 组件中访问 this.$store property，你需要为 Vue 实例提供创建好的 store。Vuex 提供了一个从根组件向所有子组件，以 store 选项的方式“注入”该 store 的机制：</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n    store<span class="token operator">:</span> store\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 如果使用 ES6，你也可以以 ES6 对象的 property 简写 (用在对象某个 property 的 key 和被传入的变量同名时)：</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n  store\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 现在我们可以从组件的方法提交一个变更：</span>\nmethods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$store</span><span class="token punctuation">.</span><span class="token method function property-access">commit</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">)</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$store</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">count</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><em>再次强调，我们通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。</em></p>\n<p>由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在<strong>计算属性</strong>中返回即可。触发变化也仅仅是在组件的 <strong>methods 中提交 mutation</strong>。</p>\n<h1>state</h1>\n<h2 id="%E5%8D%95%E4%B8%80%E7%8A%B6%E6%80%81%E6%A0%91">单一状态树<a class="anchor" href="#%E5%8D%95%E4%B8%80%E7%8A%B6%E6%80%81%E6%A0%91">§</a></h2>\n<p>Vuex 使用<strong>单一状态树</strong>——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。</p>\n<h2 id="%E5%9C%A8-vue-%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%BE%97-vuex-%E7%8A%B6%E6%80%81">在 Vue 组件中获得 Vuex 状态<a class="anchor" href="#%E5%9C%A8-vue-%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%BE%97-vuex-%E7%8A%B6%E6%80%81">§</a></h2>\n<p>由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在<strong>计算属性</strong>中返回某个状态：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 创建一个Counter组件</span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Counter</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>{{ count }}&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> store<span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">count</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>每当<code>store.state.count</code>变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。</p>\n<p>然而，这种模式导致组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 state 的组件中需要频繁地导入，并且在测试组件时需要模拟状态。</p>\n<p>Vuex 通过 <code>store</code> 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 <code>Vue.use(Vuex)</code>）：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件</span>\n    store<span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Counter</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n        &lt;div class="app">\n            &lt;Counter>&lt;/Counter>\n        &lt;/div>\n    </span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p>通过在根实例中注册 <code>store</code> 选项，该 <code>store</code> 实例会注入到根组件下的所有子组件中，且子组件能通过 <code>this.$store</code> 访问到。让我们更新下 Counter 的实现：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token maybe-class-name">Counter</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>{{ count }}&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$store</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">count</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0">mapState 辅助函数<a class="anchor" href="#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0">§</a></h2>\n<p>当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 <code>mapState</code> 辅助函数帮助我们生成计算属性，让你少按几次键：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 在单独构建的版本中辅助函数为Vuex.mapState</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> mapState <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'vuex\'</span>\n\n<span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    computed<span class="token operator">:</span> <span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token comment">// 箭头函数可使代码更简练</span>\n        <span class="token function-variable function">count</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token arrow operator">=></span> state<span class="token punctuation">.</span><span class="token property-access">count</span><span class="token punctuation">,</span>\n        <span class="token comment">// 传字符串参数 \'count\' 等同于 `state => state.count`</span>\n        countAlias<span class="token operator">:</span> <span class="token string">\'count\'</span><span class="token punctuation">,</span>\n        <span class="token comment">// 为了能够使用 `this` 获取局部状态，必须使用常规函数</span>\n        <span class="token function">countPlusLocalState</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> state<span class="token punctuation">.</span><span class="token property-access">count</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">localCount</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>当映射的计算属性的名称与 <code>state</code> 的子节点名称相同时，我们也可以给 <code>mapState</code> 传一个字符串数组。</p>\n<pre class="language-js"><code class="language-js">computed<span class="token operator">:</span> <span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token comment">// 映射 this.count 为 store.state.count</span>\n    <span class="token string">\'count\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n<h2 id="%E5%AF%B9%E8%B1%A1%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6">对象展开运算符<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6">§</a></h2>\n<p><code>mapState</code> 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 <code>computed</code> 属性。但是自从有了对象展开运算符，我们可以极大地简化写法：</p>\n<pre class="language-js"><code class="language-js">computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token function">localComputed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 使用对象展开运算符将此对象混入到外部对象中</span>\n  <span class="token spread operator">...</span><span class="token method function property-access">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h1>Getter</h1>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%8D%95%E4%B8%80%E7%8A%B6%E6%80%81%E6%A0%91">单一状态树</a></li><li><a href="#%E5%9C%A8-vue-%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%BE%97-vuex-%E7%8A%B6%E6%80%81">在 Vue 组件中获得 Vuex 状态</a></li><li><a href="#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0">mapState 辅助函数</a></li><li><a href="#%E5%AF%B9%E8%B1%A1%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6">对象展开运算符</a></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-03-15T02:10:17.000Z",
    'updated': "2021-03-15T05:16:50.000Z",
    'excerpt': "Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容...",
    'cover': undefined,
    'categories': [
        "Vuex"
    ],
    'tags': [
        "Vuex",
        "学习笔记"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/Vuex.md",
                "title": "Vuex",
                "link": "posts/Vuex.html",
                "date": "2021-03-15T02:10:17.000Z",
                "updated": "2021-03-15T05:16:50.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "Vuex"
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
                "name": "Vuex",
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
                "count": 21
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
