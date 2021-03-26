import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/继承.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/继承.html",
    'title': "继承",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>继承</h1>\n<h2 id="%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF">原型链继承<a class="anchor" href="#%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">\'kevin\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token method function property-access">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// kevin</span>\n</code></pre>\n<p><strong>问题</strong></p>\n<ol>\n<li>引用类数据类型的属性被所有实例共享：</li>\n</ol>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">names</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'daisy\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchild1<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'Bob\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "dasiy", "Bob"]</span>\n\n<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "dasiy", "Bob"]</span>\n</code></pre>\n<ol start="2">\n<li>在创建Child的实例时，不能向Parent传参</li>\n</ol>\n<h2 id="%E5%80%9F%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%8F%E5%85%B8%E7%BB%A7%E6%89%BF">借用构造函数（经典继承）<a class="anchor" href="#%E5%80%9F%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%8F%E5%85%B8%E7%BB%A7%E6%89%BF">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">names</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'daisy\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchild1<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'Bob\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "daisy", "Bob"]</span>\n\n<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "daisy"]</span>\n</code></pre>\n<p><strong>优点：</strong></p>\n<ol>\n<li>避免了引用类型的属性被所有实例共享</li>\n<li>可以在Child中向Parent传参</li>\n</ol>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kevin</span>\n\n<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'dasiy\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// daisy</span>\n</code></pre>\n<p><strong>缺点：</strong></p>\n<p>方法都在构造函数中定义，每次创建实例都会创建一遍方法</p>\n<h2 id="%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF">组合继承<a class="anchor" href="#%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF">§</a></h2>\n<p>原型链继承和经典继承组合</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'red\'</span><span class="token punctuation">,</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span> <span class="token string">\'green\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> <span class="token maybe-class-name">Child</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'18\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchild1<span class="token punctuation">.</span><span class="token property-access">colors</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'black\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kevin</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">age</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">colors</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [\'red\', \'blue\', \'green\', \'black\']</span>\n\n<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'daisy\'</span><span class="token punctuation">,</span> <span class="token string">\'20\'</span><span class="token punctuation">)</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// daisy</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">age</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">colors</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["red", "blue", "green"]</span>\n</code></pre>\n<p><strong>优点：</strong></p>\n<p>融合原型链继承和构造函数的优点，是JavaScript中最常用的继承方式。</p>\n<h2 id="%E5%8E%9F%E5%9E%8B%E5%BC%8F%E7%BB%A7%E6%89%BF">原型式继承<a class="anchor" href="#%E5%8E%9F%E5%9E%8B%E5%BC%8F%E7%BB%A7%E6%89%BF">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">createObj</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token constant">F</span><span class="token punctuation">.</span><span class="token property-access">prorotype</span> <span class="token operator">=</span> o<span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>就是ES5中Object.create的模拟实现，将传入的对象最为创建的对象的原型</p>\n<p><strong>缺点：</strong></p>\n<p>包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'kevin\'</span><span class="token punctuation">,</span>\n    friends<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'daisy\'</span><span class="token punctuation">,</span> <span class="token string">\'kelly\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token function">crateObj</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token function">createObj</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nperson1<span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">\'person1\'</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kevin</span>\n\nperson1<span class="token punctuation">.</span><span class="token property-access">friends</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'taylor\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span><span class="token property-access">friends</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["daisy", "kelly", "taylor"]</span>\n</code></pre>\n<p><strong>注意：</strong></p>\n<p>修改<code>person1.name</code>的值，<code>person2.name</code>的值并未发生改变，并不是因为<code>person1</code>和<code>person2</code>有独立的name值，而是因为<code>person1.name = \'person1\'</code>，给<code>person1</code>添加了name值，并非修改了原型上的name值。</p>\n<h2 id="%E5%AF%84%E7%94%9F%E5%BC%8F%E7%BB%A7%E6%89%BF">寄生式继承<a class="anchor" href="#%E5%AF%84%E7%94%9F%E5%BC%8F%E7%BB%A7%E6%89%BF">§</a></h2>\n<p>创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">createObj</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> clone <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    clone<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'hi\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> clone<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><strong>缺点：</strong></p>\n<p>跟借用构造函数模式一样，每次创建对象都会创建一遍方法。</p>\n<h2 id="%E5%AF%84%E7%94%9F%E7%BB%84%E5%90%88%E5%BC%8F%E7%BB%A7%E6%89%BF">寄生组合式继承<a class="anchor" href="#%E5%AF%84%E7%94%9F%E7%BB%84%E5%90%88%E5%BC%8F%E7%BB%A7%E6%89%BF">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'red\'</span><span class="token punctuation">,</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span> <span class="token string">\'green\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'18\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span>\n</code></pre>\n<p>组合式继承最大的缺点是会调用两次父构造函数。</p>\n<p>一次是设置了子类型实例的原型的时候：</p>\n<pre class="language-js"><code class="language-js"><span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>一次在创建子类型实例的时候：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'19\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>回想一下new的模拟实现，其实在这句中，我们会执行：</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>在这里，我们又会调用了一次 Parent 构造函数。</p>\n<p>所以，在这个例子中，如果我们打印 child1 对象，我们会发现 <code>Child.prototype</code> 和 child1 都有一个属性为<code>colors</code>，属性值为<code>[\'red\', \'blue\', \'green\']</code>。</p>\n<p>那么我们该如何精益求精，避免这一次重复调用呢？</p>\n<p>如果我们不使用 <code>Child.prototype = new Parent()</code> ，而是间接的让 <code>Child.prototype</code> 访问到 <code>Parent.prototype</code> 呢？</p>\n<p>看看如何实现：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'red\'</span><span class="token punctuation">,</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span> <span class="token string">\'green\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 关键的三步</span>\n<span class="token keyword">var</span> <span class="token function-variable function"><span class="token maybe-class-name">F</span></span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token class-name">F</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">;</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'18\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>最后我们封装一下这个继承方法：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token class-name">F</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> o<span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">prototype</span><span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> prototype <span class="token operator">=</span> <span class="token function">object</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    prototype<span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> child<span class="token punctuation">;</span>\n    child<span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> prototype<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 当我们使用的时候：</span>\n<span class="token function">prototype</span><span class="token punctuation">(</span><span class="token maybe-class-name">Child</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Parent</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>引用《JavaScript高级程序设计》中对寄生组合式继承的夸赞就是：</p>\n<p>这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7EE7\u627F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF">原型链继承<a class="anchor" href="#%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">\'kevin\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token method function property-access">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// kevin</span>\n</code></pre>\n<p><strong>问题</strong></p>\n<ol>\n<li>引用类数据类型的属性被所有实例共享：</li>\n</ol>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">names</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'daisy\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchild1<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'Bob\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "dasiy", "Bob"]</span>\n\n<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "dasiy", "Bob"]</span>\n</code></pre>\n<ol start="2">\n<li>在创建Child的实例时，不能向Parent传参</li>\n</ol>\n<h2 id="%E5%80%9F%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%8F%E5%85%B8%E7%BB%A7%E6%89%BF">借用构造函数（经典继承）<a class="anchor" href="#%E5%80%9F%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%8F%E5%85%B8%E7%BB%A7%E6%89%BF">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">names</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'daisy\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchild1<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'Bob\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "daisy", "Bob"]</span>\n\n<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">names</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "daisy"]</span>\n</code></pre>\n<p><strong>优点：</strong></p>\n<ol>\n<li>避免了引用类型的属性被所有实例共享</li>\n<li>可以在Child中向Parent传参</li>\n</ol>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kevin</span>\n\n<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'dasiy\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// daisy</span>\n</code></pre>\n<p><strong>缺点：</strong></p>\n<p>方法都在构造函数中定义，每次创建实例都会创建一遍方法</p>\n<h2 id="%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF">组合继承<a class="anchor" href="#%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF">§</a></h2>\n<p>原型链继承和经典继承组合</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'red\'</span><span class="token punctuation">,</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span> <span class="token string">\'green\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> <span class="token maybe-class-name">Child</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'18\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchild1<span class="token punctuation">.</span><span class="token property-access">colors</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'black\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kevin</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">age</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token property-access">colors</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [\'red\', \'blue\', \'green\', \'black\']</span>\n\n<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'daisy\'</span><span class="token punctuation">,</span> <span class="token string">\'20\'</span><span class="token punctuation">)</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// daisy</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">age</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span><span class="token property-access">colors</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["red", "blue", "green"]</span>\n</code></pre>\n<p><strong>优点：</strong></p>\n<p>融合原型链继承和构造函数的优点，是JavaScript中最常用的继承方式。</p>\n<h2 id="%E5%8E%9F%E5%9E%8B%E5%BC%8F%E7%BB%A7%E6%89%BF">原型式继承<a class="anchor" href="#%E5%8E%9F%E5%9E%8B%E5%BC%8F%E7%BB%A7%E6%89%BF">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">createObj</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token constant">F</span><span class="token punctuation">.</span><span class="token property-access">prorotype</span> <span class="token operator">=</span> o<span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>就是ES5中Object.create的模拟实现，将传入的对象最为创建的对象的原型</p>\n<p><strong>缺点：</strong></p>\n<p>包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'kevin\'</span><span class="token punctuation">,</span>\n    friends<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'daisy\'</span><span class="token punctuation">,</span> <span class="token string">\'kelly\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token function">crateObj</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token function">createObj</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nperson1<span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">\'person1\'</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kevin</span>\n\nperson1<span class="token punctuation">.</span><span class="token property-access">friends</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">\'taylor\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span><span class="token property-access">friends</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["daisy", "kelly", "taylor"]</span>\n</code></pre>\n<p><strong>注意：</strong></p>\n<p>修改<code>person1.name</code>的值，<code>person2.name</code>的值并未发生改变，并不是因为<code>person1</code>和<code>person2</code>有独立的name值，而是因为<code>person1.name = \'person1\'</code>，给<code>person1</code>添加了name值，并非修改了原型上的name值。</p>\n<h2 id="%E5%AF%84%E7%94%9F%E5%BC%8F%E7%BB%A7%E6%89%BF">寄生式继承<a class="anchor" href="#%E5%AF%84%E7%94%9F%E5%BC%8F%E7%BB%A7%E6%89%BF">§</a></h2>\n<p>创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">createObj</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> clone <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    clone<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'hi\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> clone<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><strong>缺点：</strong></p>\n<p>跟借用构造函数模式一样，每次创建对象都会创建一遍方法。</p>\n<h2 id="%E5%AF%84%E7%94%9F%E7%BB%84%E5%90%88%E5%BC%8F%E7%BB%A7%E6%89%BF">寄生组合式继承<a class="anchor" href="#%E5%AF%84%E7%94%9F%E7%BB%84%E5%90%88%E5%BC%8F%E7%BB%A7%E6%89%BF">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'red\'</span><span class="token punctuation">,</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span> <span class="token string">\'green\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'18\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span>\n</code></pre>\n<p>组合式继承最大的缺点是会调用两次父构造函数。</p>\n<p>一次是设置了子类型实例的原型的时候：</p>\n<pre class="language-js"><code class="language-js"><span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>一次在创建子类型实例的时候：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'19\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>回想一下new的模拟实现，其实在这句中，我们会执行：</p>\n<pre class="language-js"><code class="language-js"><span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>在这里，我们又会调用了一次 Parent 构造函数。</p>\n<p>所以，在这个例子中，如果我们打印 child1 对象，我们会发现 <code>Child.prototype</code> 和 child1 都有一个属性为<code>colors</code>，属性值为<code>[\'red\', \'blue\', \'green\']</code>。</p>\n<p>那么我们该如何精益求精，避免这一次重复调用呢？</p>\n<p>如果我们不使用 <code>Child.prototype = new Parent()</code> ，而是间接的让 <code>Child.prototype</code> 访问到 <code>Parent.prototype</code> 呢？</p>\n<p>看看如何实现：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'red\'</span><span class="token punctuation">,</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span> <span class="token string">\'green\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 关键的三步</span>\n<span class="token keyword">var</span> <span class="token function-variable function"><span class="token maybe-class-name">F</span></span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token class-name">F</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">;</span>\n\n<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">\'kevin\'</span><span class="token punctuation">,</span> <span class="token string">\'18\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>最后我们封装一下这个继承方法：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token class-name">F</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> o<span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">prototype</span><span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> prototype <span class="token operator">=</span> <span class="token function">object</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    prototype<span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> child<span class="token punctuation">;</span>\n    child<span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> prototype<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 当我们使用的时候：</span>\n<span class="token function">prototype</span><span class="token punctuation">(</span><span class="token maybe-class-name">Child</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Parent</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>引用《JavaScript高级程序设计》中对寄生组合式继承的夸赞就是：</p>\n<p>这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF">原型链继承</a></li><li><a href="#%E5%80%9F%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%8F%E5%85%B8%E7%BB%A7%E6%89%BF">借用构造函数（经典继承）</a></li><li><a href="#%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF">组合继承</a></li><li><a href="#%E5%8E%9F%E5%9E%8B%E5%BC%8F%E7%BB%A7%E6%89%BF">原型式继承</a></li><li><a href="#%E5%AF%84%E7%94%9F%E5%BC%8F%E7%BB%A7%E6%89%BF">寄生式继承</a></li><li><a href="#%E5%AF%84%E7%94%9F%E7%BB%84%E5%90%88%E5%BC%8F%E7%BB%A7%E6%89%BF">寄生组合式继承</a></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-03-04T13:28:28.000Z",
    'updated': "2021-03-08T13:18:57.000Z",
    'excerpt': "原型链继承 function Parent() { this.name = 'kevin'; } Parent.prototype.getName = function() { console.log(this.name); } function Child() { } Child.prototype = new Parent(); var child1 = new Child(); console.log...",
    'cover': undefined,
    'categories': [
        "JavaScript"
    ],
    'tags': [
        "学习笔记",
        "继承",
        "面试"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/Vue.md",
                "title": "Vue",
                "link": "posts/Vue.html",
                "date": "2021-03-24T12:28:00.000Z",
                "updated": "2021-03-26T08:25:10.000Z",
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
