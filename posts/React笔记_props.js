import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/React笔记.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/React笔记.html",
    'title': "React学习笔记",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>React学习笔记</h1>\n<ol>\n<li>在html中简易使用jsx语法时，需要引入babel插件，同时设置<code>&lt;script type=&quot;text/babel&quot;&gt;&lt;/script&gt;</code></li>\n<li>js语法创建虚拟DOM：<code>React.createElement(\'h1\', {id: \'test\'}, \'Hello, React\')</code></li>\n<li>关于虚拟DOM：\n<ol>\n<li>本质就是Object类型的对象</li>\n<li>虚拟DOM是React内部用，无需真实DOM上那么多属性</li>\n<li>虚拟DOM最终会被转换为真实DOM</li>\n</ol>\n</li>\n<li>JSX语法规则：\n<ol>\n<li>定义虚拟DOM时，不要加引号，如<code>&lt;h1&gt;我是虚拟DOM&lt;/h1&gt;</code></li>\n<li>标签中混入<strong>js表达式</strong>时需要用<code>{}</code></li>\n<li>添加类名时需要用小驼峰<code>className</code>，不要用<code>class</code></li>\n<li>使用内联样式<code>style</code>时，需要使用<code>{{}}</code>，里边的<code>{}</code>表示对象。如<code>{{color: \'red\'; fontSize: \'px\'}}</code>，里边的属性需要使用小驼峰替代<code>-</code>的写法</li>\n<li>只能有一个跟标签</li>\n<li>标签必须闭合</li>\n<li>标签的首字母：\n<ol>\n<li>如果是小写字母开头，则将标签转为html中同名标签，如果html中没有对应标签，则报错</li>\n<li>如果是大写字母开头，react就去渲染对应组件，若组件未定义，则报错</li>\n</ol>\n</li>\n</ol>\n</li>\n<li>js语句（代码）与js表达式\n<ol>\n<li>js语句：\n<ol>\n<li><code>if () {}</code></li>\n<li><code>for () {}</code></li>\n<li><code>switch () {}</code></li>\n<li>...</li>\n</ol>\n</li>\n<li>js表达式\n<ol>\n<li><code>a</code></li>\n<li><code>a+b</code></li>\n<li><code>arr.map()</code></li>\n<li><code>function test () {}</code></li>\n</ol>\n</li>\n<li>总结：js表达式有返回值，能直接赋值给变量</li>\n</ol>\n</li>\n<li>函数定义的组件：执行<code>ReactDOM.render(&lt;MyComponent /&gt;, ...)</code>之后发生了什么？\n<ol>\n<li>React解析组件标签，找到了<code>MyComponent</code>组件</li>\n<li>发现组件使用函数定义，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中</li>\n</ol>\n</li>\n<li>类定义的组件：执行<code>ReactDOM.render(&lt;MyComponent /&gt;, ...)</code>之后发生了什么？\n<ol>\n<li>React解析组件标签，找到了<code>MyComponent</code>组件</li>\n<li>发现组件使用类定义，随后<code>new</code>出来该类的实例，并通过实例调用原型上的<code>render()</code>方法</li>\n<li>将render返回的虚拟DOM转为真实DOM，随后呈现在页面中</li>\n</ol>\n</li>\n<li>组件<code>实例</code>的三大核心属性：\n<ol>\n<li><code>state</code>:\n<ol>\n<li>初始化状态（不用构造器）：<code>state = {}</code></li>\n<li>不可直接更改，需要借助内置的API：<code>setState({})</code></li>\n</ol>\n</li>\n<li><code>props</code>\n<ol>\n<li>批量传递标签属性：<code>{...p}</code>\n2.对props进行限制：</li>\n</ol>\n<pre class="language-jsx"><code class="language-jsx">  <span class="token comment">// prop-types.js</span>\n  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n     name<span class="token operator">:</span> <span class="token maybe-class-name">PropTypes</span><span class="token punctuation">.</span><span class="token property-access">string</span><span class="token punctuation">.</span><span class="token property-access">isRequired</span><span class="token punctuation">,</span>\n     age<span class="token operator">:</span> <span class="token maybe-class-name">PropTypes</span><span class="token punctuation">.</span><span class="token property-access">number</span><span class="token punctuation">,</span>\n     fun<span class="token operator">:</span> <span class="token maybe-class-name">PropTypes</span><span class="token punctuation">.</span><span class="token property-access">func</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n     age<span class="token operator">:</span> <span class="token number">18</span>\n  <span class="token punctuation">}</span>\n\n</code></pre>\n<ol start="3">\n<li>props是只读的，不能更改</li>\n<li>构造器是否接受<code>props</code>,是否传给<code>super</code>,取决于：是否希望在构造器中通过<code>this</code>访问<code>props</code></li>\n</ol>\n</li>\n<li><code>refs</code>\n<ol>\n<li>字符串形式的<code>ref</code>：<code>&lt;input ref=\'input1\' /&gt;</code> (效率不高，不推荐，可能废弃)</li>\n<li>回调函数形式<code>ref</code>：<code>&lt;input ref={(currentNode) =&gt; {this.input1 = currentNode}}/&gt;</code>\n<ul>\n<li>回调函数执行次数问题\n<ul>\n<li>内联函数：更新过程会被执行两次, 第一次传参<code>null</code>, 第二次传参<code>DOM元素</code>, 这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的</li>\n<li>class的绑定函数可以避免上述问题</li>\n</ul>\n<pre class="language-jsx"><code class="language-jsx">   <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token parameter">c</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">input1</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;input ref={this.func} /></span><span class="token template-punctuation string">`</span></span>\n</code></pre>\n</li>\n</ul>\n</li>\n<li><code>createRef</code></li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token comment">// React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是“专人专用”的</span>\n   myRef <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   <span class="token function-variable function">showData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">myRef</span><span class="token punctuation">.</span><span class="token property-access">current</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n</code></pre>\n</li>\n</ol>\n</li>\n<li>展开运算符: <code>...</code>常用的几种用法\n<ol>\n<li>在数组中使用</li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token spread operator">...</span>arr1<span class="token punctuation">,</span> <span class="token spread operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 连接数组 [1, 2, 3, 4, 5, 6]</span>\n</code></pre>\n<ol start="2">\n<li>在函数中使用</li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token spread operator">...</span>numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword control-flow">return</span> numbers<span class="token punctuation">.</span><span class="token method function property-access">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">preValue<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n         <span class="token keyword control-flow">return</span> preValue <span class="token operator">+</span> currentValue<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n</code></pre>\n<ol start="3">\n<li>构造字面量对象时使用展开语法</li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">\'tom\'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token spread operator">...</span>person<span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token comment">// console.log(...person); // 报错，展开运算符不能展开对象</span>\n   person<span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">\'jerry\'</span><span class="token punctuation">;</span>\n   <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: \'tom\', age: 19}</span>\n   <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: \'jerry\', age: 19}</span>\n\n   <span class="token comment">// 合并</span>\n   <span class="token keyword">let</span> person3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token spread operator">...</span>person<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">\'jack\'</span><span class="token punctuation">,</span> address<span class="token operator">:</span> <span class="token string">\'地球\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: \'jack\', age: 19, address: \'地球\'}</span>\n</code></pre>\n</li>\n<li>React中的事件处理</li>\n</ol>\n<ul>\n<li>通过onXxx属性指定事件处理函数（注意大小写）\n<ul>\n<li>React使用的是自定义（合成）事件，而不是使用的原生DOM事件————为了更好的兼容性</li>\n<li>React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）————为了更高效</li>\n</ul>\n</li>\n<li>通过event.target得到发生事件的DOM元素对象————不要过渡的使用ref</li>\n</ul>\n<pre class="language-js"><code class="language-js">   <span class="token function-variable function">showData</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token operator">&lt;</span>input onBlur<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showData</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n<ol start="11">\n<li>受控组件和非受控组件</li>\n</ol>\n<ul>\n<li>非受控组件：现用现取</li>\n<li>受控组件：随着输入维护状态(State)--推荐</li>\n</ul>\n<ol start="12">\n<li>高阶函数和函数柯里化</li>\n</ol>\n<ul>\n<li>高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数\n<ul>\n<li>若A函数接收的<code>参数是一个函数</code>，那么A就可以称为高阶函数</li>\n<li>若A函数，调用的<code>返回值依然是一个函数</code>，那么A就可以称为高阶函数</li>\n<li>常见的高阶函数：<code>Promise</code>,<code>setTimeout</code>,<code>arr.map()</code></li>\n</ul>\n</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 柯里化方式</span>\n<span class="token function">handleFormData</span><span class="token punctuation">(</span><span class="token parameter">dataType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n         <span class="token punctuation">[</span>dataType<span class="token punctuation">]</span><span class="token operator">:</span> event<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleFormData</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"username"</span><span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleFormData</span><span class="token punctuation">(</span><span class="token string">\'password\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"password"</span> name<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">/</span><span class="token operator">></span>\n\n<span class="token comment">// 非柯里化方式</span>\n<span class="token function">handleFormData</span><span class="token punctuation">(</span><span class="token parameter">dataType<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>dataType<span class="token punctuation">]</span><span class="token operator">:</span> event<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">event</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleFormData</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"username"</span><span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">event</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleFormData</span><span class="token punctuation">(</span><span class="token string">\'password\'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"password"</span> name<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n<ul>\n<li>函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式</li>\n</ul>\n<ol start="13">\n<li>React的生命周期</li>\n</ol>\n<p>生命周期回调函数 &lt;=&gt; 生命周期钩子函数 &lt;=&gt; 生命周期函数 &lt;=&gt; 生命周期钩子</p>\n<p><strong>卸载组件：</strong>\n<code>React.unmountComponentAtNode(document.getElementById(\'root\'))</code></p>\n<p><img src="images/lifeold.png" alt=""></p>\n<ul>\n<li>初始化阶段：由<code>React.render()</code>触发---初次渲染\n<ul>\n<li><code>constructor()</code></li>\n<li><code>componentWillMount()</code></li>\n<li><code>render()</code></li>\n<li><code>componentDidMount()</code>===&gt;常用：一般在这个钩子中做一些初始化的事，例如：开启定时器、订阅消息、发送网络请求</li>\n</ul>\n</li>\n<li>更新阶段：由组件内部<code>this.setState()</code>或<code>父组件render</code>触发\n<ul>\n<li><code>shouldComponentUpdate()</code></li>\n<li><code>componentWillUpdate()</code></li>\n<li><code>render()</code>===&gt;必须使用</li>\n<li><code>componentDidUpdate()</code></li>\n</ul>\n</li>\n<li>卸载阶段：由<code>React.unmountComponentAtNode()</code>触发\n<ul>\n<li><code>componentWillUnmount()</code>===&gt;常用：一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅</li>\n</ul>\n</li>\n</ul>\n<p><img src="images/lifenew.png" alt=""></p>\n<ul>\n<li>初始化阶段：由<code>React.render()</code>触发---初次渲染\n<ul>\n<li><code>constructor()</code></li>\n<li><code>getDerivedStateFromProps()</code></li>\n<li><code>render()</code></li>\n<li><code>componentDidMount()</code>===&gt;常用：一般在这个钩子中做一些初始化的事，例如：开启定时器、订阅消息、发送网络请求</li>\n</ul>\n</li>\n<li>更新阶段：由组件内部<code>this.setState()</code>或<code>父组件render</code>触发\n<ul>\n<li><code>shouldComponentUpdate()</code></li>\n<li><code>getDerivedStateFromProps()</code></li>\n<li><code>render()</code>===&gt;必须使用</li>\n<li><code>getSnapshotBeforeUpdate()</code></li>\n<li><code>componentDidUpdate()</code></li>\n</ul>\n</li>\n<li>卸载阶段：由<code>React.unmountComponentAtNode()</code>触发\n<ul>\n<li><code>componentWillUnmount()</code>===&gt;常用：一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅</li>\n</ul>\n</li>\n</ul>\n<ol start="14">\n<li>DOM的Diffing算法</li>\n</ol>\n<p>经典面试题：</p>\n<ol>\n<li>React/Vue中的key有什么作用？（key的内部原理是什么？）</li>\n<li>为什么遍历时，key最好不用index？</li>\n</ol>\n<ul>\n<li>虚拟DOM中key的作用：\n<ul>\n<li>简单地说：key是虚拟DOM的标识，在更新显示时key起着极其重要的作用</li>\n<li>详细的说：当状态中的数据发生变化时，React会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：\n<ul>\n<li>旧虚拟DOM中找到了与新虚拟DOM相同的key：\n<ul>\n<li>若虚拟DOM中内容没变，则使用之前的真实DOM</li>\n<li>若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM</li>\n</ul>\n</li>\n<li>旧虚拟DOM中没有找到与新虚拟DOM相同的key：\n<ul>\n<li>根据数据创建新的真实DOM，随后渲染到页面中</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>用index作为key可能会引发的问题：\n<ul>\n<li>若对数据进行：逆序添加、逆序删除等破坏顺序的操作：会产生不必要的真实DOM更新===&gt;界面效果没问题，但效率低</li>\n<li>如果结构中还包含输入类的DOM：会产生错误的DOM更新===&gt;界面有问题</li>\n<li>注意，如果不存在数据的逆序添加、逆序删除等破坏顺序的操作，仅用于显示列表用于展示，使用index作为key是没有问题的</li>\n</ul>\n</li>\n<li>开发中如何选择key？\n<ul>\n<li>最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一标识</li>\n<li>如果确定只是简单的展示数据，用index也是可以的</li>\n</ul>\n</li>\n</ul>\n<ol start="15">\n<li>\n<p>安装React脚手架：<code>npm install -g create-react-app</code></p>\n</li>\n<li>\n<p><code>uuid</code>和<code>nanoid</code>库，用于生成唯一的ID值</p>\n</li>\n<li>\n<p>todoList案例相关知识点：</p>\n<ol>\n<li>拆分组件、实现静态组件，注意：<code>className</code>、<code>style</code>的写法</li>\n<li>动态初始化列表，如果确定将数据放在哪个组件的<code>state</code>中?\n<ol>\n<li>某个组件使用：放在其自身的<code>state</code>中</li>\n<li>某些组件使用：放在他们共同的父组件<code>state</code>中（官方称为：状态提升）</li>\n</ol>\n</li>\n<li>关于父子组件之间通信：\n<ol>\n<li>父组件给子组件传递数据：通过<code>props</code>传递</li>\n<li>子组件给父组件传递数据：通过<code>props</code>传递，要求父组件提前给子组件传递一个函数</li>\n</ol>\n</li>\n<li>注意<code>defaultChecked</code>和<code>checked</code>的区别，类似的还有<code>defaultValue</code>和<code>value</code>：<code>default</code>开头的只在初次渲染起作用。</li>\n<li>状态在哪里，操作状态的方法就在哪里</li>\n</ol>\n</li>\n<li>\n<p><code>axios</code></p>\n<ol>\n<li>封装<code>XmlHttpRequest</code>对象的<code>ajax</code></li>\n<li><code>promise</code>风格</li>\n<li>可以在浏览器端和node服务端使用</li>\n</ol>\n</li>\n<li>\n<p>React配置代理</p>\n<ol>\n<li>\n<p>方式一:</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// package.json</span>\n<span class="token string">"proxy"</span><span class="token operator">:</span> <span class="token string">"<a class="token url-link" href="http://localhost:5000">http://localhost:5000</a>"</span>  <span class="token comment">// 3000端口没有的才转发给5000</span>\n</code></pre>\n</li>\n<li>\n<p>方式二：</p>\n<pre class="language-js"><code class="language-js">   <span class="token comment">// src/setupProxy.js</span>\n   <span class="token comment">// common js</span>\n   <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'http-proxy-middleware\'</span><span class="token punctuation">)</span>\n\n   module<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      app<span class="token punctuation">.</span><span class="token method function property-access">use</span><span class="token punctuation">(</span>\n         <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token operator">/</span>api1<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            target<span class="token operator">:</span> <span class="token string">\'<a class="token url-link" href="http://localhost:5000">http://localhost:5000</a>\'</span><span class="token punctuation">,</span>\n            changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制服务器收到的请求头中Host字段的值</span>\n            pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">\'^/api1\'</span><span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span>\n         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n         <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token operator">/</span>api2<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            target<span class="token operator">:</span> <span class="token string">\'<a class="token url-link" href="http://localhost:5001">http://localhost:5001</a>\'</span><span class="token punctuation">,</span>\n            changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">\'^/api2\'</span><span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span>\n         <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">)</span>\n   <span class="token punctuation">}</span>\n</code></pre>\n</li>\n</ol>\n</li>\n<li>\n<p>连续解构赋值</p>\n</li>\n</ol>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> obj  <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token punctuation">{</span>b<span class="token operator">:</span> <span class="token punctuation">{</span>c<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token punctuation">{</span>b<span class="token operator">:</span><span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span> <span class="token comment">// c: 1</span>\n\n<span class="token comment">// 同时重命名</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token punctuation">{</span>b<span class="token operator">:</span><span class="token punctuation">{</span>c<span class="token operator">:</span>data<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span> <span class="token comment">// data: 1</span>\n</code></pre>\n<ol start="21">\n<li>\n<p>消息订阅与发布机制：<code>PubSubJS</code></p>\n<ol>\n<li><code>npm install pubsub-js</code></li>\n<li><code>import PubSub from \'pubsub-js\'</code></li>\n<li>订阅消息<code>let token = PubSub.subscribe(\'msgName\', (data) =&gt; {...})</code></li>\n<li>发布消息<code>PubSub.publish(\'msgName\', data)</code></li>\n<li>取消订阅<code>PubSub.unsubscribe(token)</code></li>\n</ol>\n</li>\n<li>\n<p><code>Fetch</code>:原生函数，不再使用<code>XmlHttpRequest</code>对象提交<code>ajax</code>请求，老版本浏览器可能不支持（关注分离的设计思想）</p>\n</li>\n<li>\n<p>React路由：</p>\n<ol>\n<li><code>react-router-dom</code></li>\n<li>明确好界面的导航区和展示区</li>\n<li>导航区的a标签改为<code>&lt;Link to=&quot;/xxx&quot;&gt;Demo&lt;/Link&gt;</code>,<code>&lt;NavLink activeClassName={active-style}&gt;&lt;/NavLink&gt;</code></li>\n<li>展示区写<code>Route</code>标签进行路径匹配:<code>&lt;Route path=&quot;/xxx\' component={Demo} /&gt;</code></li>\n<li>在<code>&lt;App /&gt;</code>的最外侧包裹<code>&lt;BrowserRouter&gt;</code>或<code>&lt;HashRouter&gt;</code></li>\n</ol>\n</li>\n<li>\n<p>一般组件和路由组件</p>\n<ol>\n<li>写法不同：\n<ol>\n<li>一般组件：<code>&lt;Demo /&gt;</code></li>\n<li>路由组件：<code>&lt;Route path=&quot;/demo&quot; component={Demo}&gt;</code></li>\n</ol>\n</li>\n<li>存放位置不同\n<ol>\n<li>一般组件：<code>components</code></li>\n<li>路由组件：<code>pages</code></li>\n</ol>\n</li>\n<li>接收到的<code>props</code>不同\n<ol>\n<li>一般组件：写组件标签时传递了什么，就能收到什么</li>\n<li>路由组件：接收到三个固定的属性<pre class="language-autoit"><code class="language-autoit">history<span class="token punctuation">:</span>\n   go<span class="token punctuation">:</span> f <span class="token function">go</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n   goBack<span class="token punctuation">:</span> f <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   goForward<span class="token punctuation">:</span> f <span class="token function">goForWard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   push<span class="token punctuation">:</span> f <span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n   replace<span class="token punctuation">:</span> f <span class="token function">replace</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n\nlocation<span class="token punctuation">:</span> \n   pathname<span class="token punctuation">:</span> <span class="token string">"/about"</span>\n   search<span class="token punctuation">:</span> <span class="token string">""</span>\n   state<span class="token punctuation">:</span> undefined\n\nmatch<span class="token punctuation">:</span> \n   params<span class="token punctuation">:</span> {}\n   path<span class="token punctuation">:</span> <span class="token string">"/about"</span>\n   url<span class="token punctuation">:</span> <span class="token string">"/about"</span>\n</code></pre>\n</li>\n</ol>\n</li>\n</ol>\n</li>\n<li>\n<p>解决多级路径刷新页面样式丢失问题</p>\n<ol>\n<li>public/index.html中引入样式不用相对路径<code>./</code>,而是用绝对路径<code>/</code>（常用）</li>\n<li>public/index.html中引入样式用<code>%PUBLIC_URL%</code>(常用)</li>\n<li>使用<code>HashRouter</code></li>\n</ol>\n</li>\n<li>\n<p><code>&lt;Switch&gt;&lt;/Switch&gt;</code>解决路由多次匹配问题（单一匹配，提高效率）</p>\n</li>\n<li>\n<p>封装<code>&lt;MyNavLink&gt;&lt;/MyNavLink&gt;</code>: <code>this.props.children</code>,<code>{...props}</code></p>\n</li>\n<li>\n<p>路由的模糊匹配和严格匹配（<code>exact</code>）</p>\n<ol>\n<li>默认使用模糊匹配（输入的路径和必须包含匹配的路径，且顺序要一致）</li>\n<li>开启严格匹配<code>&lt;Route exact path=&quot;/demo&quot; component={Demo} /&gt;</code></li>\n<li>严格模式不要随便开启，需要再开启，有些时候开启会导致无法继续匹配二级路由</li>\n</ol>\n</li>\n<li>\n<p><code>&lt;Redirect&gt;</code>的使用</p>\n<ol>\n<li>一般卸载所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由</li>\n<li></li>\n</ol>\n</li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token operator">&lt;</span><span class="token maybe-class-name">Switch</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token maybe-class-name">Route</span> path<span class="token operator">=</span><span class="token string">"/about"</span> components<span class="token operator">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">About</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token maybe-class-name">Route</span> path<span class="token operator">=</span><span class="token string">"/home"</span> components<span class="token operator">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">Home</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token maybe-class-name">Redirect</span> to<span class="token operator">=</span><span class="token string">"/about"</span> <span class="token operator">/</span><span class="token operator">></span>\n   <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token maybe-class-name">Switch</span><span class="token operator">></span>\n</code></pre>\n<ol start="30">\n<li>嵌套路由</li>\n</ol>\n<ul>\n<li>注册子路由时要写上父路由的<code>path</code></li>\n<li>路由的匹配是按照路由注册的顺序进行的</li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "React\u5B66\u4E60\u7B14\u8BB0"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ol>\n<li>在html中简易使用jsx语法时，需要引入babel插件，同时设置<code>&lt;script type=&quot;text/babel&quot;&gt;&lt;/script&gt;</code></li>\n<li>js语法创建虚拟DOM：<code>React.createElement(\'h1\', {id: \'test\'}, \'Hello, React\')</code></li>\n<li>关于虚拟DOM：\n<ol>\n<li>本质就是Object类型的对象</li>\n<li>虚拟DOM是React内部用，无需真实DOM上那么多属性</li>\n<li>虚拟DOM最终会被转换为真实DOM</li>\n</ol>\n</li>\n<li>JSX语法规则：\n<ol>\n<li>定义虚拟DOM时，不要加引号，如<code>&lt;h1&gt;我是虚拟DOM&lt;/h1&gt;</code></li>\n<li>标签中混入<strong>js表达式</strong>时需要用<code>{}</code></li>\n<li>添加类名时需要用小驼峰<code>className</code>，不要用<code>class</code></li>\n<li>使用内联样式<code>style</code>时，需要使用<code>{{}}</code>，里边的<code>{}</code>表示对象。如<code>{{color: \'red\'; fontSize: \'px\'}}</code>，里边的属性需要使用小驼峰替代<code>-</code>的写法</li>\n<li>只能有一个跟标签</li>\n<li>标签必须闭合</li>\n<li>标签的首字母：\n<ol>\n<li>如果是小写字母开头，则将标签转为html中同名标签，如果html中没有对应标签，则报错</li>\n<li>如果是大写字母开头，react就去渲染对应组件，若组件未定义，则报错</li>\n</ol>\n</li>\n</ol>\n</li>\n<li>js语句（代码）与js表达式\n<ol>\n<li>js语句：\n<ol>\n<li><code>if () {}</code></li>\n<li><code>for () {}</code></li>\n<li><code>switch () {}</code></li>\n<li>...</li>\n</ol>\n</li>\n<li>js表达式\n<ol>\n<li><code>a</code></li>\n<li><code>a+b</code></li>\n<li><code>arr.map()</code></li>\n<li><code>function test () {}</code></li>\n</ol>\n</li>\n<li>总结：js表达式有返回值，能直接赋值给变量</li>\n</ol>\n</li>\n<li>函数定义的组件：执行<code>ReactDOM.render(&lt;MyComponent /&gt;, ...)</code>之后发生了什么？\n<ol>\n<li>React解析组件标签，找到了<code>MyComponent</code>组件</li>\n<li>发现组件使用函数定义，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中</li>\n</ol>\n</li>\n<li>类定义的组件：执行<code>ReactDOM.render(&lt;MyComponent /&gt;, ...)</code>之后发生了什么？\n<ol>\n<li>React解析组件标签，找到了<code>MyComponent</code>组件</li>\n<li>发现组件使用类定义，随后<code>new</code>出来该类的实例，并通过实例调用原型上的<code>render()</code>方法</li>\n<li>将render返回的虚拟DOM转为真实DOM，随后呈现在页面中</li>\n</ol>\n</li>\n<li>组件<code>实例</code>的三大核心属性：\n<ol>\n<li><code>state</code>:\n<ol>\n<li>初始化状态（不用构造器）：<code>state = {}</code></li>\n<li>不可直接更改，需要借助内置的API：<code>setState({})</code></li>\n</ol>\n</li>\n<li><code>props</code>\n<ol>\n<li>批量传递标签属性：<code>{...p}</code>\n2.对props进行限制：</li>\n</ol>\n<pre class="language-jsx"><code class="language-jsx">  <span class="token comment">// prop-types.js</span>\n  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n     name<span class="token operator">:</span> <span class="token maybe-class-name">PropTypes</span><span class="token punctuation">.</span><span class="token property-access">string</span><span class="token punctuation">.</span><span class="token property-access">isRequired</span><span class="token punctuation">,</span>\n     age<span class="token operator">:</span> <span class="token maybe-class-name">PropTypes</span><span class="token punctuation">.</span><span class="token property-access">number</span><span class="token punctuation">,</span>\n     fun<span class="token operator">:</span> <span class="token maybe-class-name">PropTypes</span><span class="token punctuation">.</span><span class="token property-access">func</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n     age<span class="token operator">:</span> <span class="token number">18</span>\n  <span class="token punctuation">}</span>\n\n</code></pre>\n<ol start="3">\n<li>props是只读的，不能更改</li>\n<li>构造器是否接受<code>props</code>,是否传给<code>super</code>,取决于：是否希望在构造器中通过<code>this</code>访问<code>props</code></li>\n</ol>\n</li>\n<li><code>refs</code>\n<ol>\n<li>字符串形式的<code>ref</code>：<code>&lt;input ref=\'input1\' /&gt;</code> (效率不高，不推荐，可能废弃)</li>\n<li>回调函数形式<code>ref</code>：<code>&lt;input ref={(currentNode) =&gt; {this.input1 = currentNode}}/&gt;</code>\n<ul>\n<li>回调函数执行次数问题\n<ul>\n<li>内联函数：更新过程会被执行两次, 第一次传参<code>null</code>, 第二次传参<code>DOM元素</code>, 这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的</li>\n<li>class的绑定函数可以避免上述问题</li>\n</ul>\n<pre class="language-jsx"><code class="language-jsx">   <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token parameter">c</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">input1</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;input ref={this.func} /></span><span class="token template-punctuation string">`</span></span>\n</code></pre>\n</li>\n</ul>\n</li>\n<li><code>createRef</code></li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token comment">// React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是“专人专用”的</span>\n   myRef <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   <span class="token function-variable function">showData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">myRef</span><span class="token punctuation">.</span><span class="token property-access">current</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n</code></pre>\n</li>\n</ol>\n</li>\n<li>展开运算符: <code>...</code>常用的几种用法\n<ol>\n<li>在数组中使用</li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token spread operator">...</span>arr1<span class="token punctuation">,</span> <span class="token spread operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 连接数组 [1, 2, 3, 4, 5, 6]</span>\n</code></pre>\n<ol start="2">\n<li>在函数中使用</li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token spread operator">...</span>numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword control-flow">return</span> numbers<span class="token punctuation">.</span><span class="token method function property-access">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">preValue<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n         <span class="token keyword control-flow">return</span> preValue <span class="token operator">+</span> currentValue<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n</code></pre>\n<ol start="3">\n<li>构造字面量对象时使用展开语法</li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">\'tom\'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token spread operator">...</span>person<span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token comment">// console.log(...person); // 报错，展开运算符不能展开对象</span>\n   person<span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">\'jerry\'</span><span class="token punctuation">;</span>\n   <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: \'tom\', age: 19}</span>\n   <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: \'jerry\', age: 19}</span>\n\n   <span class="token comment">// 合并</span>\n   <span class="token keyword">let</span> person3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token spread operator">...</span>person<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">\'jack\'</span><span class="token punctuation">,</span> address<span class="token operator">:</span> <span class="token string">\'地球\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: \'jack\', age: 19, address: \'地球\'}</span>\n</code></pre>\n</li>\n<li>React中的事件处理</li>\n</ol>\n<ul>\n<li>通过onXxx属性指定事件处理函数（注意大小写）\n<ul>\n<li>React使用的是自定义（合成）事件，而不是使用的原生DOM事件————为了更好的兼容性</li>\n<li>React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）————为了更高效</li>\n</ul>\n</li>\n<li>通过event.target得到发生事件的DOM元素对象————不要过渡的使用ref</li>\n</ul>\n<pre class="language-js"><code class="language-js">   <span class="token function-variable function">showData</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token operator">&lt;</span>input onBlur<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showData</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n<ol start="11">\n<li>受控组件和非受控组件</li>\n</ol>\n<ul>\n<li>非受控组件：现用现取</li>\n<li>受控组件：随着输入维护状态(State)--推荐</li>\n</ul>\n<ol start="12">\n<li>高阶函数和函数柯里化</li>\n</ol>\n<ul>\n<li>高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数\n<ul>\n<li>若A函数接收的<code>参数是一个函数</code>，那么A就可以称为高阶函数</li>\n<li>若A函数，调用的<code>返回值依然是一个函数</code>，那么A就可以称为高阶函数</li>\n<li>常见的高阶函数：<code>Promise</code>,<code>setTimeout</code>,<code>arr.map()</code></li>\n</ul>\n</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 柯里化方式</span>\n<span class="token function">handleFormData</span><span class="token punctuation">(</span><span class="token parameter">dataType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n         <span class="token punctuation">[</span>dataType<span class="token punctuation">]</span><span class="token operator">:</span> event<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleFormData</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"username"</span><span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleFormData</span><span class="token punctuation">(</span><span class="token string">\'password\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"password"</span> name<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">/</span><span class="token operator">></span>\n\n<span class="token comment">// 非柯里化方式</span>\n<span class="token function">handleFormData</span><span class="token punctuation">(</span><span class="token parameter">dataType<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>dataType<span class="token punctuation">]</span><span class="token operator">:</span> event<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">event</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleFormData</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"username"</span><span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">event</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleFormData</span><span class="token punctuation">(</span><span class="token string">\'password\'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"password"</span> name<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n<ul>\n<li>函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式</li>\n</ul>\n<ol start="13">\n<li>React的生命周期</li>\n</ol>\n<p>生命周期回调函数 &lt;=&gt; 生命周期钩子函数 &lt;=&gt; 生命周期函数 &lt;=&gt; 生命周期钩子</p>\n<p><strong>卸载组件：</strong>\n<code>React.unmountComponentAtNode(document.getElementById(\'root\'))</code></p>\n<p><img src="images/lifeold.png" alt=""></p>\n<ul>\n<li>初始化阶段：由<code>React.render()</code>触发---初次渲染\n<ul>\n<li><code>constructor()</code></li>\n<li><code>componentWillMount()</code></li>\n<li><code>render()</code></li>\n<li><code>componentDidMount()</code>===&gt;常用：一般在这个钩子中做一些初始化的事，例如：开启定时器、订阅消息、发送网络请求</li>\n</ul>\n</li>\n<li>更新阶段：由组件内部<code>this.setState()</code>或<code>父组件render</code>触发\n<ul>\n<li><code>shouldComponentUpdate()</code></li>\n<li><code>componentWillUpdate()</code></li>\n<li><code>render()</code>===&gt;必须使用</li>\n<li><code>componentDidUpdate()</code></li>\n</ul>\n</li>\n<li>卸载阶段：由<code>React.unmountComponentAtNode()</code>触发\n<ul>\n<li><code>componentWillUnmount()</code>===&gt;常用：一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅</li>\n</ul>\n</li>\n</ul>\n<p><img src="images/lifenew.png" alt=""></p>\n<ul>\n<li>初始化阶段：由<code>React.render()</code>触发---初次渲染\n<ul>\n<li><code>constructor()</code></li>\n<li><code>getDerivedStateFromProps()</code></li>\n<li><code>render()</code></li>\n<li><code>componentDidMount()</code>===&gt;常用：一般在这个钩子中做一些初始化的事，例如：开启定时器、订阅消息、发送网络请求</li>\n</ul>\n</li>\n<li>更新阶段：由组件内部<code>this.setState()</code>或<code>父组件render</code>触发\n<ul>\n<li><code>shouldComponentUpdate()</code></li>\n<li><code>getDerivedStateFromProps()</code></li>\n<li><code>render()</code>===&gt;必须使用</li>\n<li><code>getSnapshotBeforeUpdate()</code></li>\n<li><code>componentDidUpdate()</code></li>\n</ul>\n</li>\n<li>卸载阶段：由<code>React.unmountComponentAtNode()</code>触发\n<ul>\n<li><code>componentWillUnmount()</code>===&gt;常用：一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅</li>\n</ul>\n</li>\n</ul>\n<ol start="14">\n<li>DOM的Diffing算法</li>\n</ol>\n<p>经典面试题：</p>\n<ol>\n<li>React/Vue中的key有什么作用？（key的内部原理是什么？）</li>\n<li>为什么遍历时，key最好不用index？</li>\n</ol>\n<ul>\n<li>虚拟DOM中key的作用：\n<ul>\n<li>简单地说：key是虚拟DOM的标识，在更新显示时key起着极其重要的作用</li>\n<li>详细的说：当状态中的数据发生变化时，React会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：\n<ul>\n<li>旧虚拟DOM中找到了与新虚拟DOM相同的key：\n<ul>\n<li>若虚拟DOM中内容没变，则使用之前的真实DOM</li>\n<li>若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM</li>\n</ul>\n</li>\n<li>旧虚拟DOM中没有找到与新虚拟DOM相同的key：\n<ul>\n<li>根据数据创建新的真实DOM，随后渲染到页面中</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>用index作为key可能会引发的问题：\n<ul>\n<li>若对数据进行：逆序添加、逆序删除等破坏顺序的操作：会产生不必要的真实DOM更新===&gt;界面效果没问题，但效率低</li>\n<li>如果结构中还包含输入类的DOM：会产生错误的DOM更新===&gt;界面有问题</li>\n<li>注意，如果不存在数据的逆序添加、逆序删除等破坏顺序的操作，仅用于显示列表用于展示，使用index作为key是没有问题的</li>\n</ul>\n</li>\n<li>开发中如何选择key？\n<ul>\n<li>最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一标识</li>\n<li>如果确定只是简单的展示数据，用index也是可以的</li>\n</ul>\n</li>\n</ul>\n<ol start="15">\n<li>\n<p>安装React脚手架：<code>npm install -g create-react-app</code></p>\n</li>\n<li>\n<p><code>uuid</code>和<code>nanoid</code>库，用于生成唯一的ID值</p>\n</li>\n<li>\n<p>todoList案例相关知识点：</p>\n<ol>\n<li>拆分组件、实现静态组件，注意：<code>className</code>、<code>style</code>的写法</li>\n<li>动态初始化列表，如果确定将数据放在哪个组件的<code>state</code>中?\n<ol>\n<li>某个组件使用：放在其自身的<code>state</code>中</li>\n<li>某些组件使用：放在他们共同的父组件<code>state</code>中（官方称为：状态提升）</li>\n</ol>\n</li>\n<li>关于父子组件之间通信：\n<ol>\n<li>父组件给子组件传递数据：通过<code>props</code>传递</li>\n<li>子组件给父组件传递数据：通过<code>props</code>传递，要求父组件提前给子组件传递一个函数</li>\n</ol>\n</li>\n<li>注意<code>defaultChecked</code>和<code>checked</code>的区别，类似的还有<code>defaultValue</code>和<code>value</code>：<code>default</code>开头的只在初次渲染起作用。</li>\n<li>状态在哪里，操作状态的方法就在哪里</li>\n</ol>\n</li>\n<li>\n<p><code>axios</code></p>\n<ol>\n<li>封装<code>XmlHttpRequest</code>对象的<code>ajax</code></li>\n<li><code>promise</code>风格</li>\n<li>可以在浏览器端和node服务端使用</li>\n</ol>\n</li>\n<li>\n<p>React配置代理</p>\n<ol>\n<li>\n<p>方式一:</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// package.json</span>\n<span class="token string">"proxy"</span><span class="token operator">:</span> <span class="token string">"<a class="token url-link" href="http://localhost:5000">http://localhost:5000</a>"</span>  <span class="token comment">// 3000端口没有的才转发给5000</span>\n</code></pre>\n</li>\n<li>\n<p>方式二：</p>\n<pre class="language-js"><code class="language-js">   <span class="token comment">// src/setupProxy.js</span>\n   <span class="token comment">// common js</span>\n   <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'http-proxy-middleware\'</span><span class="token punctuation">)</span>\n\n   module<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      app<span class="token punctuation">.</span><span class="token method function property-access">use</span><span class="token punctuation">(</span>\n         <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token operator">/</span>api1<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            target<span class="token operator">:</span> <span class="token string">\'<a class="token url-link" href="http://localhost:5000">http://localhost:5000</a>\'</span><span class="token punctuation">,</span>\n            changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制服务器收到的请求头中Host字段的值</span>\n            pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">\'^/api1\'</span><span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span>\n         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n         <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token operator">/</span>api2<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            target<span class="token operator">:</span> <span class="token string">\'<a class="token url-link" href="http://localhost:5001">http://localhost:5001</a>\'</span><span class="token punctuation">,</span>\n            changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">\'^/api2\'</span><span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span>\n         <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">)</span>\n   <span class="token punctuation">}</span>\n</code></pre>\n</li>\n</ol>\n</li>\n<li>\n<p>连续解构赋值</p>\n</li>\n</ol>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> obj  <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token punctuation">{</span>b<span class="token operator">:</span> <span class="token punctuation">{</span>c<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token punctuation">{</span>b<span class="token operator">:</span><span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span> <span class="token comment">// c: 1</span>\n\n<span class="token comment">// 同时重命名</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token punctuation">{</span>b<span class="token operator">:</span><span class="token punctuation">{</span>c<span class="token operator">:</span>data<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span> <span class="token comment">// data: 1</span>\n</code></pre>\n<ol start="21">\n<li>\n<p>消息订阅与发布机制：<code>PubSubJS</code></p>\n<ol>\n<li><code>npm install pubsub-js</code></li>\n<li><code>import PubSub from \'pubsub-js\'</code></li>\n<li>订阅消息<code>let token = PubSub.subscribe(\'msgName\', (data) =&gt; {...})</code></li>\n<li>发布消息<code>PubSub.publish(\'msgName\', data)</code></li>\n<li>取消订阅<code>PubSub.unsubscribe(token)</code></li>\n</ol>\n</li>\n<li>\n<p><code>Fetch</code>:原生函数，不再使用<code>XmlHttpRequest</code>对象提交<code>ajax</code>请求，老版本浏览器可能不支持（关注分离的设计思想）</p>\n</li>\n<li>\n<p>React路由：</p>\n<ol>\n<li><code>react-router-dom</code></li>\n<li>明确好界面的导航区和展示区</li>\n<li>导航区的a标签改为<code>&lt;Link to=&quot;/xxx&quot;&gt;Demo&lt;/Link&gt;</code>,<code>&lt;NavLink activeClassName={active-style}&gt;&lt;/NavLink&gt;</code></li>\n<li>展示区写<code>Route</code>标签进行路径匹配:<code>&lt;Route path=&quot;/xxx\' component={Demo} /&gt;</code></li>\n<li>在<code>&lt;App /&gt;</code>的最外侧包裹<code>&lt;BrowserRouter&gt;</code>或<code>&lt;HashRouter&gt;</code></li>\n</ol>\n</li>\n<li>\n<p>一般组件和路由组件</p>\n<ol>\n<li>写法不同：\n<ol>\n<li>一般组件：<code>&lt;Demo /&gt;</code></li>\n<li>路由组件：<code>&lt;Route path=&quot;/demo&quot; component={Demo}&gt;</code></li>\n</ol>\n</li>\n<li>存放位置不同\n<ol>\n<li>一般组件：<code>components</code></li>\n<li>路由组件：<code>pages</code></li>\n</ol>\n</li>\n<li>接收到的<code>props</code>不同\n<ol>\n<li>一般组件：写组件标签时传递了什么，就能收到什么</li>\n<li>路由组件：接收到三个固定的属性<pre class="language-autoit"><code class="language-autoit">history<span class="token punctuation">:</span>\n   go<span class="token punctuation">:</span> f <span class="token function">go</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n   goBack<span class="token punctuation">:</span> f <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   goForward<span class="token punctuation">:</span> f <span class="token function">goForWard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   push<span class="token punctuation">:</span> f <span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n   replace<span class="token punctuation">:</span> f <span class="token function">replace</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span>\n\nlocation<span class="token punctuation">:</span> \n   pathname<span class="token punctuation">:</span> <span class="token string">"/about"</span>\n   search<span class="token punctuation">:</span> <span class="token string">""</span>\n   state<span class="token punctuation">:</span> undefined\n\nmatch<span class="token punctuation">:</span> \n   params<span class="token punctuation">:</span> {}\n   path<span class="token punctuation">:</span> <span class="token string">"/about"</span>\n   url<span class="token punctuation">:</span> <span class="token string">"/about"</span>\n</code></pre>\n</li>\n</ol>\n</li>\n</ol>\n</li>\n<li>\n<p>解决多级路径刷新页面样式丢失问题</p>\n<ol>\n<li>public/index.html中引入样式不用相对路径<code>./</code>,而是用绝对路径<code>/</code>（常用）</li>\n<li>public/index.html中引入样式用<code>%PUBLIC_URL%</code>(常用)</li>\n<li>使用<code>HashRouter</code></li>\n</ol>\n</li>\n<li>\n<p><code>&lt;Switch&gt;&lt;/Switch&gt;</code>解决路由多次匹配问题（单一匹配，提高效率）</p>\n</li>\n<li>\n<p>封装<code>&lt;MyNavLink&gt;&lt;/MyNavLink&gt;</code>: <code>this.props.children</code>,<code>{...props}</code></p>\n</li>\n<li>\n<p>路由的模糊匹配和严格匹配（<code>exact</code>）</p>\n<ol>\n<li>默认使用模糊匹配（输入的路径和必须包含匹配的路径，且顺序要一致）</li>\n<li>开启严格匹配<code>&lt;Route exact path=&quot;/demo&quot; component={Demo} /&gt;</code></li>\n<li>严格模式不要随便开启，需要再开启，有些时候开启会导致无法继续匹配二级路由</li>\n</ol>\n</li>\n<li>\n<p><code>&lt;Redirect&gt;</code>的使用</p>\n<ol>\n<li>一般卸载所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由</li>\n<li></li>\n</ol>\n</li>\n</ol>\n<pre class="language-js"><code class="language-js">   <span class="token operator">&lt;</span><span class="token maybe-class-name">Switch</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token maybe-class-name">Route</span> path<span class="token operator">=</span><span class="token string">"/about"</span> components<span class="token operator">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">About</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token maybe-class-name">Route</span> path<span class="token operator">=</span><span class="token string">"/home"</span> components<span class="token operator">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">Home</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token maybe-class-name">Redirect</span> to<span class="token operator">=</span><span class="token string">"/about"</span> <span class="token operator">/</span><span class="token operator">></span>\n   <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token maybe-class-name">Switch</span><span class="token operator">></span>\n</code></pre>\n<ol start="30">\n<li>嵌套路由</li>\n</ol>\n<ul>\n<li>注册子路由时要写上父路由的<code>path</code></li>\n<li>路由的匹配是按照路由注册的顺序进行的</li>\n</ul>'
        } }),
    'toc': null,
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-29T14:58:22.000Z",
    'updated': "2021-02-04T01:41:47.000Z",
    'excerpt': " 1. 在html中简易使用jsx语法时，需要引入babel插件，同时设置<script type=\"text/babel\"></script> 2. js语法创建虚拟DOM：React.createElement('h1', {id: 'test'}, 'Hello, React') 3. 关于虚拟DOM： 1. 本质就是Object类型...",
    'cover': "images/lifeold.png",
    'categories': [
        "React"
    ],
    'tags': [
        "React",
        "学习笔记"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-02-05T10:33:45.000Z",
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
                "updated": "2021-02-04T01:41:47.000Z",
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
