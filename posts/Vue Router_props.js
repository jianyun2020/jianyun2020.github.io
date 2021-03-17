import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/Vue Router.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/Vue Router.html",
    'title': "Vue Router",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue Router</h1>\n<h2 id="%E5%9F%BA%E7%A1%80">基础<a class="anchor" href="#%E5%9F%BA%E7%A1%80">§</a></h2>\n<h3 id="%E8%B5%B7%E6%AD%A5">起步<a class="anchor" href="#%E8%B5%B7%E6%AD%A5">§</a></h3>\n<p>用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：</p>\n<h4 id="html">HTML<a class="anchor" href="#html">§</a></h4>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><a class="token url-link" href="https://unpkg.com/vue/dist/vue.js">https://unpkg.com/vue/dist/vue.js</a><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><a class="token url-link" href="https://unpkg.com/vue-router/dist/vue-router.js">https://unpkg.com/vue-router/dist/vue-router.js</a><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello App!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- 使用 router-link 组件来导航. --></span>\n    <span class="token comment">&lt;!-- 通过传入 `to` 属性指定链接. --></span>\n    <span class="token comment">&lt;!-- &lt;router-link> 默认会被渲染成一个 `&lt;a>` 标签 --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go to Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go to Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- 路由出口 --></span>\n  <span class="token comment">&lt;!-- 路由匹配到的组件将渲染在这里 --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<h4 id="javascript">JavaScript<a class="anchor" href="#javascript">§</a></h4>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)</span>\n\n<span class="token comment">// 1. 定义 (路由) 组件。</span>\n<span class="token comment">// 可以从其他文件 import 进来</span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Foo</span> <span class="token operator">=</span> <span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">\'&lt;div>foo&lt;/div>\'</span> <span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Bar</span> <span class="token operator">=</span> <span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">\'&lt;div>bar&lt;/div>\'</span> <span class="token punctuation">}</span>\n\n<span class="token comment">// 2. 定义路由</span>\n<span class="token comment">// 每个路由应该映射一个组件。 其中"component" 可以是</span>\n<span class="token comment">// 通过 Vue.extend() 创建的组件构造器，</span>\n<span class="token comment">// 或者，只是一个组件配置对象。</span>\n<span class="token comment">// 我们晚点再讨论嵌套路由。</span>\n<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">\'/foo\'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token maybe-class-name">Foo</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">\'/bar\'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token maybe-class-name">Bar</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token comment">// 3. 创建 router 实例，然后传 `routes` 配置</span>\n<span class="token comment">// 你还可以传别的配置参数, 不过先这么简单着吧。</span>\n<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  routes <span class="token comment">// (缩写) 相当于 routes: routes</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 4. 创建和挂载根实例。</span>\n<span class="token comment">// 记得要通过 router 配置参数注入路由，</span>\n<span class="token comment">// 从而让整个应用都有路由功能</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  router\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">$mount</span><span class="token punctuation">(</span><span class="token string">\'#app\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 现在，应用已经启动了！</span>\n</code></pre>\n<p>通过注入路由器，我们可以在任何组件内通过 <code>this.$router</code> 访问路由器，也可以通过 <code>this.$route</code> 访问当前路由：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// Home.vue</span>\n<span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token punctuation">{</span>\n    computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">username</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 我们很快就会看到 `params` 是什么</span>\n            <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$route</span><span class="token punctuation">.</span><span class="token property-access">params</span><span class="token punctuation">.</span><span class="token property-access">username</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">goBack</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">history</span><span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$router</span><span class="token punctuation">.</span><span class="token method function property-access">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$router</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>要注意，当 <code>&lt;router-link&gt;</code> 对应的路由匹配成功，将自动设置 <code>class</code> 属性值 <code>.router-link-active</code>。</p>\n<h3 id="%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D">动态路由匹配<a class="anchor" href="#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D">§</a></h3>\n<p>我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 <code>User</code> 组件，对于所有 <code>ID</code> 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 <code>vue-router</code> 的路由路径中使用<code>“动态路径参数”(dynamic segment)</code> 来达到这个效果：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token maybe-class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token string">\'&lt;div>User&lt;/div>\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// 动态路径参数 以冒号开头</span>\n        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">\'/user/:id\'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token maybe-class-name">User</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p>现在呢，像 <code>/user/foo</code> 和 <code>/user/bar</code> 都将映射到相同的路由。</p>\n<p>一个“路径参数”使用冒号<code>:</code>标记。当匹配到一个路由时，参数值会被设置到 <code>this.$route.params</code>，可以在每个组件内使用。于是，我们可以更新 <code>User</code> 的模板，输出当前用户的 <code>ID：</code></p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token maybe-class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token string">\'&lt;div>{{ this.$route.params.id }}&lt;/div>\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>你可以在一个路由中设置多段“路径参数”，对应的值都会设置到<code>$route.params</code>中。例如：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>模式</th>\n<th>匹配路径</th>\n<th>$route.params</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>/user/:username</td>\n<td>/user/evan</td>\n<td>{ username: \'evan\'</td>\n</tr>\n<tr>\n<td>/user/:username/post/:post_id</td>\n<td>/user/evan/post/123</td>\n<td>{ username: \'evan\', post_id: \'123\' }</td>\n</tr>\n</tbody>\n</table></div>\n<p>除了<code>$route.params</code> 外，<code>$route</code> 对象还提供了其它有用的信息，例如，<code>$route.query</code> (如果 URL 中有查询参数)、<code>$route.hash</code> 等等。</p>\n<h4 id="%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96">响应路由参数的变化<a class="anchor" href="#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96">§</a></h4>\n<p>提醒一下，当使用路由参数时，例如从 <code>/user/foo</code> 导航到 <code>/user/bar</code>，<strong>原来的组件实例会被复用</strong>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。<strong>不过，这也意味着组件的生命周期钩子不会再被调用。</strong></p>\n<h4 id=""><a class="anchor" href="#">§</a></h4>\n<h4 id="-1"><a class="anchor" href="#-1">§</a></h4>\n<h4 id="-2"><a class="anchor" href="#-2">§</a></h4>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vue Router"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%9F%BA%E7%A1%80">基础<a class="anchor" href="#%E5%9F%BA%E7%A1%80">§</a></h2>\n<h3 id="%E8%B5%B7%E6%AD%A5">起步<a class="anchor" href="#%E8%B5%B7%E6%AD%A5">§</a></h3>\n<p>用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：</p>\n<h4 id="html">HTML<a class="anchor" href="#html">§</a></h4>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><a class="token url-link" href="https://unpkg.com/vue/dist/vue.js">https://unpkg.com/vue/dist/vue.js</a><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><a class="token url-link" href="https://unpkg.com/vue-router/dist/vue-router.js">https://unpkg.com/vue-router/dist/vue-router.js</a><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello App!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- 使用 router-link 组件来导航. --></span>\n    <span class="token comment">&lt;!-- 通过传入 `to` 属性指定链接. --></span>\n    <span class="token comment">&lt;!-- &lt;router-link> 默认会被渲染成一个 `&lt;a>` 标签 --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go to Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Go to Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- 路由出口 --></span>\n  <span class="token comment">&lt;!-- 路由匹配到的组件将渲染在这里 --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n<h4 id="javascript">JavaScript<a class="anchor" href="#javascript">§</a></h4>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)</span>\n\n<span class="token comment">// 1. 定义 (路由) 组件。</span>\n<span class="token comment">// 可以从其他文件 import 进来</span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Foo</span> <span class="token operator">=</span> <span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">\'&lt;div>foo&lt;/div>\'</span> <span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token maybe-class-name">Bar</span> <span class="token operator">=</span> <span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">\'&lt;div>bar&lt;/div>\'</span> <span class="token punctuation">}</span>\n\n<span class="token comment">// 2. 定义路由</span>\n<span class="token comment">// 每个路由应该映射一个组件。 其中"component" 可以是</span>\n<span class="token comment">// 通过 Vue.extend() 创建的组件构造器，</span>\n<span class="token comment">// 或者，只是一个组件配置对象。</span>\n<span class="token comment">// 我们晚点再讨论嵌套路由。</span>\n<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">\'/foo\'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token maybe-class-name">Foo</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">\'/bar\'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token maybe-class-name">Bar</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token comment">// 3. 创建 router 实例，然后传 `routes` 配置</span>\n<span class="token comment">// 你还可以传别的配置参数, 不过先这么简单着吧。</span>\n<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  routes <span class="token comment">// (缩写) 相当于 routes: routes</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 4. 创建和挂载根实例。</span>\n<span class="token comment">// 记得要通过 router 配置参数注入路由，</span>\n<span class="token comment">// 从而让整个应用都有路由功能</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  router\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">$mount</span><span class="token punctuation">(</span><span class="token string">\'#app\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 现在，应用已经启动了！</span>\n</code></pre>\n<p>通过注入路由器，我们可以在任何组件内通过 <code>this.$router</code> 访问路由器，也可以通过 <code>this.$route</code> 访问当前路由：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// Home.vue</span>\n<span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token punctuation">{</span>\n    computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">username</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 我们很快就会看到 `params` 是什么</span>\n            <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$route</span><span class="token punctuation">.</span><span class="token property-access">params</span><span class="token punctuation">.</span><span class="token property-access">username</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">goBack</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">history</span><span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$router</span><span class="token punctuation">.</span><span class="token method function property-access">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">$router</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>要注意，当 <code>&lt;router-link&gt;</code> 对应的路由匹配成功，将自动设置 <code>class</code> 属性值 <code>.router-link-active</code>。</p>\n<h3 id="%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D">动态路由匹配<a class="anchor" href="#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D">§</a></h3>\n<p>我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 <code>User</code> 组件，对于所有 <code>ID</code> 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 <code>vue-router</code> 的路由路径中使用<code>“动态路径参数”(dynamic segment)</code> 来达到这个效果：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token maybe-class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token string">\'&lt;div>User&lt;/div>\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// 动态路径参数 以冒号开头</span>\n        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">\'/user/:id\'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token maybe-class-name">User</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p>现在呢，像 <code>/user/foo</code> 和 <code>/user/bar</code> 都将映射到相同的路由。</p>\n<p>一个“路径参数”使用冒号<code>:</code>标记。当匹配到一个路由时，参数值会被设置到 <code>this.$route.params</code>，可以在每个组件内使用。于是，我们可以更新 <code>User</code> 的模板，输出当前用户的 <code>ID：</code></p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token maybe-class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    template<span class="token operator">:</span> <span class="token string">\'&lt;div>{{ this.$route.params.id }}&lt;/div>\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>你可以在一个路由中设置多段“路径参数”，对应的值都会设置到<code>$route.params</code>中。例如：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>模式</th>\n<th>匹配路径</th>\n<th>$route.params</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>/user/:username</td>\n<td>/user/evan</td>\n<td>{ username: \'evan\'</td>\n</tr>\n<tr>\n<td>/user/:username/post/:post_id</td>\n<td>/user/evan/post/123</td>\n<td>{ username: \'evan\', post_id: \'123\' }</td>\n</tr>\n</tbody>\n</table></div>\n<p>除了<code>$route.params</code> 外，<code>$route</code> 对象还提供了其它有用的信息，例如，<code>$route.query</code> (如果 URL 中有查询参数)、<code>$route.hash</code> 等等。</p>\n<h4 id="%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96">响应路由参数的变化<a class="anchor" href="#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96">§</a></h4>\n<p>提醒一下，当使用路由参数时，例如从 <code>/user/foo</code> 导航到 <code>/user/bar</code>，<strong>原来的组件实例会被复用</strong>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。<strong>不过，这也意味着组件的生命周期钩子不会再被调用。</strong></p>\n<h4 id=""><a class="anchor" href="#">§</a></h4>\n<h4 id="-1"><a class="anchor" href="#-1">§</a></h4>\n<h4 id="-2"><a class="anchor" href="#-2">§</a></h4>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%9F%BA%E7%A1%80">基础</a><ol><li><a href="#%E8%B5%B7%E6%AD%A5">起步</a><ol></ol></li><li><a href="#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D">动态路由匹配</a><ol></ol></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-03-17T08:01:47.000Z",
    'updated': "2021-03-17T08:25:14.000Z",
    'excerpt': "基础 起步 用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 V...",
    'cover': undefined,
    'categories': [
        "Vue"
    ],
    'tags': [
        "Vue Router",
        "学习笔记"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/Vue Router.md",
                "title": "Vue Router",
                "link": "posts/Vue Router.html",
                "date": "2021-03-17T08:01:47.000Z",
                "updated": "2021-03-17T08:25:14.000Z",
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
