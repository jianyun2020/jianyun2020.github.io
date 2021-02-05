import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/前端本地存储.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/前端本地存储.html",
    'title': "前端本地存储",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前端本地存储</h1>\n<h2 id="cookie">cookie<a class="anchor" href="#cookie">§</a></h2>\n<p><strong>作用</strong></p>\n<p><code>cookie</code>是纯文本，没有可执行代码。存储数据，当用户访问了某个网站（网页）的时候，我们就可以通过cookie来向访问者电脑上存储数据，或者某些网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（通常经过加密）</p>\n<p><strong>如何工作</strong></p>\n<p>当网页要发http请求时，浏览器会先检查是否有相应的cookie，有则自动添加在request header中的cookie字段中。这些是浏览器自动帮我们做的，而且每一次http请求浏览器都会自动帮我们做。这个特点很重要，因为这关系到“什么样的数据适合存储在cookie中”。</p>\n<p>存储在cookie中的数据，每次都会被浏览器自动放在http请求中，如果这些数据并不是每个请求都需要发给服务端的数据，浏览器这设置自动处理无疑增加了网络开销；但如果这些数据是每个请求都需要发给服务端的数据（比如身份认证信息），浏览器这设置自动处理就大大免去了重复添加操作。所以对于那种设置“每次请求都要携带的信息（最典型的就是身份认证信息）”就特别适合放在cookie中，其他类型的数据就不适合了。</p>\n<p><strong>特征</strong></p>\n<ol>\n<li>不同的浏览器cookie存放的位置不一样，也不能通用。</li>\n<li>cookie的存储是以域名形式进行区分的，不同的域下存储的cookie是独立的。</li>\n<li>我们可以设置cookie生效的域（当前设置cookie所在域的子域），也就是说，我们能够操作的cookie是当前域以及当前域下的所有子域。</li>\n<li>一个域名下存放的cookie的个数是有限制的，不同的浏览器存放的个数不一样,一般为20个。</li>\n<li>每个cookie存放的内容大小也是有限制的，不同的浏览器存放大小不一样，一般为4KB。</li>\n<li>cookie也可以设置过期的时间，默认是会话结束的时候，当时间到期自动销毁。</li>\n</ol>\n<p><strong>Cookie主要用于以下三个方面：</strong></p>\n<ul>\n<li>会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）</li>\n<li>个性化设置（如用户自定义设置、主题等）</li>\n<li>浏览器行为跟踪（如跟踪分析用户行为等）</li>\n</ul>\n<p><strong>设置</strong></p>\n<ul>\n<li>客户端设置:</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token comment">// document.cookie = \'名字=值\';</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">cookie</span> <span class="token operator">=</span> <span class="token string">\'username=David; domain=baike.baidu.com\'</span>    <span class="token comment">//并且设置了生效域,在设置这些属性时，属性之间由一个分号和一个空格隔开。</span>\n\n<span class="token comment">//当我们需要设置多个cookie时</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">cookie</span> <span class="token operator">=</span> <span class="token string">"name=Bob"</span><span class="token punctuation">;</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">cookie</span> <span class="token operator">=</span> <span class="token string">"age=18"</span><span class="token punctuation">;</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">cookie</span> <span class="token operator">=</span> <span class="token string">"class=A2"</span><span class="token punctuation">;</span>\n</code></pre>\n<p><em>注意： 客户端可以设置cookie下列选项：expires(过期时间)、domain(服务器域名)、path(域名下的哪些路径可以接受Cookie)、secure（有条件：只有在https协议的网页中，客户端设置secure类型的 cookie 才能成功），但无法设置HttpOnly选项。</em></p>\n<ul>\n<li>服务器端设置:</li>\n</ul>\n<p>不管你是请求一个资源文件（如 html/js/css/图片），还是发送一个ajax请求，服务端都会返回response。而response header中有一项叫<code>set-cookie</code>，是服务端专门用来设置cookie的。</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// Set-Cookie 消息头是一个字符串，其格式如下（中括号中的部分是可选的）</span>\n<span class="token known-class-name class-name">Set</span><span class="token operator">-</span><span class="token maybe-class-name">Cookie</span><span class="token operator">:</span> value<span class="token punctuation">[</span><span class="token punctuation">;</span> expires<span class="token operator">=</span>date<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span> domain<span class="token operator">=</span>domain<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span> path<span class="token operator">=</span>path<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span> secure<span class="token punctuation">]</span>\n</code></pre>\n<p><em>注意：一个set-Cookie字段只能设置一个cookie，当你要想设置多个 cookie，需要添加同样多的set-Cookie字段。 \n服务端可以设置cookie 的所有选项：<code>expires、domain、path、secure、HttpOnly</code>\n通过 Set-Cookie 指定的这些可选项只会在浏览器端使用，而不会被发送至服务器端。</em></p>\n<p><strong>读取</strong></p>\n<p>我们通过<code>document.cookie</code>来获取当前网站下的cookie的时候，得到的字符串形式的值，它包含了当前网站下所有的cookie（为避免跨域脚本(xss)攻击，这个方法只能获取非 <code>HttpOnly</code> 类型的cookie）。它会把所有的cookie通过一个分号+空格的形式串联起来，例如username=David; job=coding</p>\n<p><strong>修改cookie</strong></p>\n<p>要想修改一个cookie，只需要重新赋值就行，旧的值会被新的值覆盖。 但要注意一点，在设置新cookie时，path/domain这几个选项一定要旧cookie 保持一样。否则不会修改旧值，而是添加了一个新的 cookie。</p>\n<p><strong>删除</strong></p>\n<p>把要删除的cookie的过期时间设置成已过去的时间,path/domain/这几个选项一定要旧cookie 保持一样。</p>\n<p><strong>注意</strong></p>\n<ul>\n<li>cookie虽然是个字符串，但这个字符串中<code>逗号、分号、空格</code>被当做了特殊符号。所以当cookie的 key 和 value 中含有这3个特殊字符时，需要对其进行额外编码，可以用<code>encodeURIComponent/decodeURIComponent</code>或者<code>encodeURI/decodeURI</code>，至于<code>escape</code>和<code>unescape</code>已被废弃。</li>\n<li>什么时候 cookie 会被覆盖：name/domain/path 这3个字段都相同的时候；</li>\n</ul>\n<h3 id="expires">expires<a class="anchor" href="#expires">§</a></h3>\n<p><code>expires</code>选项用来设置“cookie 什么时间内有效”。<strong>expires其实是cookie失效日期</strong>，expires必须是 <code>GMT 格式</code>的时间（可以通过 <code>new Date().toGMTString()</code>或者<code>new Date().toUTCString()</code> 来获得 ）。</p>\n<p>如expires=Thu, 25 Feb 2016 04:18:00 GMT表示cookie讲在2016年2月25日4:18分之后失效，对于失效的cookie浏览器会清空。如果没有设置该选项，则默认有效期为session，即会话cookie。这种cookie在浏览器关闭后就没有了。</p>\n<blockquote>\n<p><code>expires</code> 是 <code>http/1.0</code>协议中的选项，在新的<code>http/1.1</code>协议中expires已经由 <code>max-age</code> 选项代替，两者的作用都是限制cookie 的有效时间。expires的值是一个时间点（cookie失效时刻= expires），而max-age 的值是一个以<code>秒为单位</code>时间段（<code>cookie失效时刻= 创建时刻 + max-age</code>）。另外，max-age 的默认值是 -1(即有效期为 session )；若max-age有三种可能值：负数、0、正数。负数：有效期session；0：删除cookie；正数：有效期为创建时刻+ max-age</p>\n</blockquote>\n<h3 id="domain-%E5%92%8C-path">domain 和 path<a class="anchor" href="#domain-%E5%92%8C-path">§</a></h3>\n<p><code>domain</code>是域名，<code>path</code>是路径，两者加起来就构成了 <code>URL</code>，domain和path一起来限制 cookie 能被哪些 URL 访问。</p>\n<p>一句话概括：某cookie的 domain为“<a href="http://baidu.com">baidu.com</a>”, path为“/ ”，若请求的URL(URL 可以是js/html/img/css资源请求，但不包括 XHR 请求)的域名是“<a href="http://baidu.com">baidu.com</a>”或其子域如“<a href="http://api.baidu.com">api.baidu.com</a>”、“<a href="http://dev.api.baidu.com">dev.api.baidu.com</a>”，且 URL 的路径是“/ ”或子路径“/home”、“/home/login”，则浏览器会将此 cookie 添加到该请求的 cookie 头部中。</p>\n<p>所以domain和path这2个选项共同决定了cookie何时被浏览器自动添加到请求头部中发送出去。如果没有设置这两个选项，则会使用默认值。domain的默认值为设置该cookie的网页所在的域名，path默认值为设置该cookie的网页所在的目录。</p>\n<h3 id="secure">secure<a class="anchor" href="#secure">§</a></h3>\n<p>通常 cookie 信息都是使用HTTP连接传递数据，这种传递方式很容易被查看，所以 cookie 存储的信息容易被窃取。假如 cookie 中所传递的内容比较重要，那么就要求使用加密的数据传输。</p>\n<p>secure选项用来设置cookie只在确保安全的请求中才会发送。当请求是HTTPS或者其他安全协议时，包含 secure 选项的 cookie 才能被发送至服务器。</p>\n<p><code>document.cookie = &quot;username=David; secure&quot;</code></p>\n<p>把cookie设置为secure，只保证 cookie 与服务器之间的数据传输过程加密，而保存在本地的 cookie文件并不加密。就算设置了secure 属性也并不代表他人不能看到你机器本地保存的 cookie 信息。 机密且敏感的信息绝不应该在 cookie 中存储或传输，因为 cookie 的整个机制原本都是不安全的</p>\n<p>注意：如果想在客户端即网页中通过 js 去设置secure类型的 cookie，必须保证网页是https协议的。在http协议的网页中是无法设置secure类型cookie的。</p>\n<h3 id="httponly">httpOnly<a class="anchor" href="#httponly">§</a></h3>\n<p>这个选项用来设置cookie是否能通过 js 去访问。默认情况下，cookie不会带httpOnly选项(即为空)，所以默认情况下，客户端是可以通过js代码去访问（包括读取、修改、删除等）这个cookie的。当cookie带httpOnly选项时，客户端则无法通过js代码去访问（包括读取、修改、删除等）这个cookie, 避免跨域脚本(xss)攻击，此时只能通过服务端来设置。</p>\n<h3 id="%E7%AC%AC%E4%B8%89%E6%96%B9cookie">第三方cookie<a class="anchor" href="#%E7%AC%AC%E4%B8%89%E6%96%B9cookie">§</a></h3>\n<p>通常cookie的域和浏览器地址的域匹配，这被称为第一方cookie。那么第三方cookie就是cookie的域和地址栏中的域不匹配，这种cookie通常被用在第三方广告网站。为了跟踪用户的浏览记录，并且根据收集的用户的浏览习惯，给用户推送相关的广告。</p>\n<h3 id="session%E5%92%8Ccookie%E5%8C%BA%E5%88%AB">session和cookie区别<a class="anchor" href="#session%E5%92%8Ccookie%E5%8C%BA%E5%88%AB">§</a></h3>\n<ul>\n<li>session保存在服务器，cookie保存在客户端</li>\n<li>session中保存的时对象，cookie保存的是字符串</li>\n<li>session不能区分路径，同一个用户访问一个网站期间，所有的session在任何一个地方都可以访问</li>\n<li>cookie如果设置路径，则在某些地方不能访问</li>\n<li>session需要借助cookie才能正常工作，如果禁用cookie,session则失效</li>\n<li>客户端会在发送请求的时候，自动将本地存活的cookie封装在信息头发送给服务器</li>\n</ul>\n<h2 id="session%E5%92%8Ccookie%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">session和cookie应用场景<a class="anchor" href="#session%E5%92%8Ccookie%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">§</a></h2>\n<ul>\n<li>session上下文机制，针对每一个用户，通过sessionid来区分不同客户</li>\n<li>session是以cookie或url重写为基础的，默认使用cookie实现，系统会创造一个名为sessionid的输出cookie</li>\n<li>重要状态走session,不重要走cookie,登陆信息用session，购物车用cookie</li>\n</ul>\n<h2 id="localstorage%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8">localStorage（本地存储）<a class="anchor" href="#localstorage%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8">§</a></h2>\n<p>HTML5新方法，仅IE8及以上浏览器兼容。</p>\n<p><strong>特点</strong></p>\n<ul>\n<li>生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。</li>\n<li>存储的信息在同一域中是共享的。</li>\n<li>当本页操作（新增、修改、删除）了localStorage的时候，本页面不会触发storage事件,但是别的页面会触发storage事件。</li>\n<li>大小：据说是5M（跟浏览器厂商有关系）</li>\n<li>在非IE下的浏览中可以本地打开。IE浏览器要在服务器中打开。</li>\n<li>localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡</li>\n<li>localStorage受同源策略的限制</li>\n</ul>\n<p><strong>设置</strong></p>\n<pre class="language-js"><code class="language-js"><span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">setItem</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">,</span> <span class="token string">\'David\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>获取</strong></p>\n<pre class="language-js"><code class="language-js"><span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">getItem</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 也可以获取键名  </span>\n<span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">key</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 获取第一个键名</span>\n</code></pre>\n<p><strong>删除</strong></p>\n<pre class="language-js"><code class="language-js"><span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">removeItem</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 也可以一次性清除所有存储</span>\n<span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>storage事件</strong></p>\n<p>当storage发生改变的时候触发。</p>\n<p>注意： 当前页面对storage的操作会触发其他页面的storage事件  事件的回调函数中有一个参数event,是一个StorageEvent对象，提供了一些实用的属性,如下表：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>key</td>\n<td>String</td>\n<td>添加，删除或修改的命名密钥</td>\n</tr>\n<tr>\n<td>oldValue</td>\n<td>Any</td>\n<td>先前的值（现已覆盖）；如果添加了新项目，则为null</td>\n</tr>\n<tr>\n<td>newValue</td>\n<td>Any</td>\n<td>新值；如果添加了项目，则为null</td>\n</tr>\n<tr>\n<td>url/uri</td>\n<td>String</td>\n<td>调用触发此更改的方法的页面</td>\n</tr>\n</tbody>\n</table></div>\n<p>补充:js跨页面触发事件，利用storage监听事件 触发storage事件的条件：</p>\n<ul>\n<li>同一浏览器打开了两个同源页面</li>\n<li>其中一个页面修改了localStorage</li>\n<li>另一个网页注册了这个事件</li>\n</ul>\n<h2 id="sessionstorage">sessionStorage<a class="anchor" href="#sessionstorage">§</a></h2>\n<p>跟localStorage差不多，也是本地存储，会话本地存储</p>\n<p><strong>特点</strong></p>\n<ul>\n<li>用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一页面，数据仍然存在。关闭窗口后，sessionStorage即被销毁，或者在新窗口打开同源的另一个页面，sessionStorage也是没有的。</li>\n</ul>\n<h2 id="cookielocalstoragesessionstorage%E5%8C%BA%E5%88%AB">cookie、localStorage、sessionStorage区别<a class="anchor" href="#cookielocalstoragesessionstorage%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>相同：在本地（浏览器端）存储数据</li>\n<li>不同：\n<ul>\n<li>localStorage只要在相同的协议、相同的主机名、相同的端口下，就能读取/修改到同一份localStorage数据。</li>\n<li>sessionStorage比localStorage更严苛一点，除了协议、主机名、端口外，还要求在同一窗口（也就是浏览器的标签页）下。</li>\n<li>localStorage是永久存储，除非手动删除。</li>\n<li>sessionStorage当会话结束（当前页面关闭的时候，自动销毁）</li>\n<li>cookie的数据会在每一次发送http请求的时候，同时发送给服务器而localStorage、sessionStorage不会。</li>\n</ul>\n</li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u524D\u7AEF\u672C\u5730\u5B58\u50A8"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="cookie">cookie<a class="anchor" href="#cookie">§</a></h2>\n<p><strong>作用</strong></p>\n<p><code>cookie</code>是纯文本，没有可执行代码。存储数据，当用户访问了某个网站（网页）的时候，我们就可以通过cookie来向访问者电脑上存储数据，或者某些网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（通常经过加密）</p>\n<p><strong>如何工作</strong></p>\n<p>当网页要发http请求时，浏览器会先检查是否有相应的cookie，有则自动添加在request header中的cookie字段中。这些是浏览器自动帮我们做的，而且每一次http请求浏览器都会自动帮我们做。这个特点很重要，因为这关系到“什么样的数据适合存储在cookie中”。</p>\n<p>存储在cookie中的数据，每次都会被浏览器自动放在http请求中，如果这些数据并不是每个请求都需要发给服务端的数据，浏览器这设置自动处理无疑增加了网络开销；但如果这些数据是每个请求都需要发给服务端的数据（比如身份认证信息），浏览器这设置自动处理就大大免去了重复添加操作。所以对于那种设置“每次请求都要携带的信息（最典型的就是身份认证信息）”就特别适合放在cookie中，其他类型的数据就不适合了。</p>\n<p><strong>特征</strong></p>\n<ol>\n<li>不同的浏览器cookie存放的位置不一样，也不能通用。</li>\n<li>cookie的存储是以域名形式进行区分的，不同的域下存储的cookie是独立的。</li>\n<li>我们可以设置cookie生效的域（当前设置cookie所在域的子域），也就是说，我们能够操作的cookie是当前域以及当前域下的所有子域。</li>\n<li>一个域名下存放的cookie的个数是有限制的，不同的浏览器存放的个数不一样,一般为20个。</li>\n<li>每个cookie存放的内容大小也是有限制的，不同的浏览器存放大小不一样，一般为4KB。</li>\n<li>cookie也可以设置过期的时间，默认是会话结束的时候，当时间到期自动销毁。</li>\n</ol>\n<p><strong>Cookie主要用于以下三个方面：</strong></p>\n<ul>\n<li>会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）</li>\n<li>个性化设置（如用户自定义设置、主题等）</li>\n<li>浏览器行为跟踪（如跟踪分析用户行为等）</li>\n</ul>\n<p><strong>设置</strong></p>\n<ul>\n<li>客户端设置:</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token comment">// document.cookie = \'名字=值\';</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">cookie</span> <span class="token operator">=</span> <span class="token string">\'username=David; domain=baike.baidu.com\'</span>    <span class="token comment">//并且设置了生效域,在设置这些属性时，属性之间由一个分号和一个空格隔开。</span>\n\n<span class="token comment">//当我们需要设置多个cookie时</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">cookie</span> <span class="token operator">=</span> <span class="token string">"name=Bob"</span><span class="token punctuation">;</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">cookie</span> <span class="token operator">=</span> <span class="token string">"age=18"</span><span class="token punctuation">;</span>\n<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">cookie</span> <span class="token operator">=</span> <span class="token string">"class=A2"</span><span class="token punctuation">;</span>\n</code></pre>\n<p><em>注意： 客户端可以设置cookie下列选项：expires(过期时间)、domain(服务器域名)、path(域名下的哪些路径可以接受Cookie)、secure（有条件：只有在https协议的网页中，客户端设置secure类型的 cookie 才能成功），但无法设置HttpOnly选项。</em></p>\n<ul>\n<li>服务器端设置:</li>\n</ul>\n<p>不管你是请求一个资源文件（如 html/js/css/图片），还是发送一个ajax请求，服务端都会返回response。而response header中有一项叫<code>set-cookie</code>，是服务端专门用来设置cookie的。</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// Set-Cookie 消息头是一个字符串，其格式如下（中括号中的部分是可选的）</span>\n<span class="token known-class-name class-name">Set</span><span class="token operator">-</span><span class="token maybe-class-name">Cookie</span><span class="token operator">:</span> value<span class="token punctuation">[</span><span class="token punctuation">;</span> expires<span class="token operator">=</span>date<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span> domain<span class="token operator">=</span>domain<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span> path<span class="token operator">=</span>path<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span> secure<span class="token punctuation">]</span>\n</code></pre>\n<p><em>注意：一个set-Cookie字段只能设置一个cookie，当你要想设置多个 cookie，需要添加同样多的set-Cookie字段。 \n服务端可以设置cookie 的所有选项：<code>expires、domain、path、secure、HttpOnly</code>\n通过 Set-Cookie 指定的这些可选项只会在浏览器端使用，而不会被发送至服务器端。</em></p>\n<p><strong>读取</strong></p>\n<p>我们通过<code>document.cookie</code>来获取当前网站下的cookie的时候，得到的字符串形式的值，它包含了当前网站下所有的cookie（为避免跨域脚本(xss)攻击，这个方法只能获取非 <code>HttpOnly</code> 类型的cookie）。它会把所有的cookie通过一个分号+空格的形式串联起来，例如username=David; job=coding</p>\n<p><strong>修改cookie</strong></p>\n<p>要想修改一个cookie，只需要重新赋值就行，旧的值会被新的值覆盖。 但要注意一点，在设置新cookie时，path/domain这几个选项一定要旧cookie 保持一样。否则不会修改旧值，而是添加了一个新的 cookie。</p>\n<p><strong>删除</strong></p>\n<p>把要删除的cookie的过期时间设置成已过去的时间,path/domain/这几个选项一定要旧cookie 保持一样。</p>\n<p><strong>注意</strong></p>\n<ul>\n<li>cookie虽然是个字符串，但这个字符串中<code>逗号、分号、空格</code>被当做了特殊符号。所以当cookie的 key 和 value 中含有这3个特殊字符时，需要对其进行额外编码，可以用<code>encodeURIComponent/decodeURIComponent</code>或者<code>encodeURI/decodeURI</code>，至于<code>escape</code>和<code>unescape</code>已被废弃。</li>\n<li>什么时候 cookie 会被覆盖：name/domain/path 这3个字段都相同的时候；</li>\n</ul>\n<h3 id="expires">expires<a class="anchor" href="#expires">§</a></h3>\n<p><code>expires</code>选项用来设置“cookie 什么时间内有效”。<strong>expires其实是cookie失效日期</strong>，expires必须是 <code>GMT 格式</code>的时间（可以通过 <code>new Date().toGMTString()</code>或者<code>new Date().toUTCString()</code> 来获得 ）。</p>\n<p>如expires=Thu, 25 Feb 2016 04:18:00 GMT表示cookie讲在2016年2月25日4:18分之后失效，对于失效的cookie浏览器会清空。如果没有设置该选项，则默认有效期为session，即会话cookie。这种cookie在浏览器关闭后就没有了。</p>\n<blockquote>\n<p><code>expires</code> 是 <code>http/1.0</code>协议中的选项，在新的<code>http/1.1</code>协议中expires已经由 <code>max-age</code> 选项代替，两者的作用都是限制cookie 的有效时间。expires的值是一个时间点（cookie失效时刻= expires），而max-age 的值是一个以<code>秒为单位</code>时间段（<code>cookie失效时刻= 创建时刻 + max-age</code>）。另外，max-age 的默认值是 -1(即有效期为 session )；若max-age有三种可能值：负数、0、正数。负数：有效期session；0：删除cookie；正数：有效期为创建时刻+ max-age</p>\n</blockquote>\n<h3 id="domain-%E5%92%8C-path">domain 和 path<a class="anchor" href="#domain-%E5%92%8C-path">§</a></h3>\n<p><code>domain</code>是域名，<code>path</code>是路径，两者加起来就构成了 <code>URL</code>，domain和path一起来限制 cookie 能被哪些 URL 访问。</p>\n<p>一句话概括：某cookie的 domain为“<a href="http://baidu.com">baidu.com</a>”, path为“/ ”，若请求的URL(URL 可以是js/html/img/css资源请求，但不包括 XHR 请求)的域名是“<a href="http://baidu.com">baidu.com</a>”或其子域如“<a href="http://api.baidu.com">api.baidu.com</a>”、“<a href="http://dev.api.baidu.com">dev.api.baidu.com</a>”，且 URL 的路径是“/ ”或子路径“/home”、“/home/login”，则浏览器会将此 cookie 添加到该请求的 cookie 头部中。</p>\n<p>所以domain和path这2个选项共同决定了cookie何时被浏览器自动添加到请求头部中发送出去。如果没有设置这两个选项，则会使用默认值。domain的默认值为设置该cookie的网页所在的域名，path默认值为设置该cookie的网页所在的目录。</p>\n<h3 id="secure">secure<a class="anchor" href="#secure">§</a></h3>\n<p>通常 cookie 信息都是使用HTTP连接传递数据，这种传递方式很容易被查看，所以 cookie 存储的信息容易被窃取。假如 cookie 中所传递的内容比较重要，那么就要求使用加密的数据传输。</p>\n<p>secure选项用来设置cookie只在确保安全的请求中才会发送。当请求是HTTPS或者其他安全协议时，包含 secure 选项的 cookie 才能被发送至服务器。</p>\n<p><code>document.cookie = &quot;username=David; secure&quot;</code></p>\n<p>把cookie设置为secure，只保证 cookie 与服务器之间的数据传输过程加密，而保存在本地的 cookie文件并不加密。就算设置了secure 属性也并不代表他人不能看到你机器本地保存的 cookie 信息。 机密且敏感的信息绝不应该在 cookie 中存储或传输，因为 cookie 的整个机制原本都是不安全的</p>\n<p>注意：如果想在客户端即网页中通过 js 去设置secure类型的 cookie，必须保证网页是https协议的。在http协议的网页中是无法设置secure类型cookie的。</p>\n<h3 id="httponly">httpOnly<a class="anchor" href="#httponly">§</a></h3>\n<p>这个选项用来设置cookie是否能通过 js 去访问。默认情况下，cookie不会带httpOnly选项(即为空)，所以默认情况下，客户端是可以通过js代码去访问（包括读取、修改、删除等）这个cookie的。当cookie带httpOnly选项时，客户端则无法通过js代码去访问（包括读取、修改、删除等）这个cookie, 避免跨域脚本(xss)攻击，此时只能通过服务端来设置。</p>\n<h3 id="%E7%AC%AC%E4%B8%89%E6%96%B9cookie">第三方cookie<a class="anchor" href="#%E7%AC%AC%E4%B8%89%E6%96%B9cookie">§</a></h3>\n<p>通常cookie的域和浏览器地址的域匹配，这被称为第一方cookie。那么第三方cookie就是cookie的域和地址栏中的域不匹配，这种cookie通常被用在第三方广告网站。为了跟踪用户的浏览记录，并且根据收集的用户的浏览习惯，给用户推送相关的广告。</p>\n<h3 id="session%E5%92%8Ccookie%E5%8C%BA%E5%88%AB">session和cookie区别<a class="anchor" href="#session%E5%92%8Ccookie%E5%8C%BA%E5%88%AB">§</a></h3>\n<ul>\n<li>session保存在服务器，cookie保存在客户端</li>\n<li>session中保存的时对象，cookie保存的是字符串</li>\n<li>session不能区分路径，同一个用户访问一个网站期间，所有的session在任何一个地方都可以访问</li>\n<li>cookie如果设置路径，则在某些地方不能访问</li>\n<li>session需要借助cookie才能正常工作，如果禁用cookie,session则失效</li>\n<li>客户端会在发送请求的时候，自动将本地存活的cookie封装在信息头发送给服务器</li>\n</ul>\n<h2 id="session%E5%92%8Ccookie%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">session和cookie应用场景<a class="anchor" href="#session%E5%92%8Ccookie%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">§</a></h2>\n<ul>\n<li>session上下文机制，针对每一个用户，通过sessionid来区分不同客户</li>\n<li>session是以cookie或url重写为基础的，默认使用cookie实现，系统会创造一个名为sessionid的输出cookie</li>\n<li>重要状态走session,不重要走cookie,登陆信息用session，购物车用cookie</li>\n</ul>\n<h2 id="localstorage%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8">localStorage（本地存储）<a class="anchor" href="#localstorage%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8">§</a></h2>\n<p>HTML5新方法，仅IE8及以上浏览器兼容。</p>\n<p><strong>特点</strong></p>\n<ul>\n<li>生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。</li>\n<li>存储的信息在同一域中是共享的。</li>\n<li>当本页操作（新增、修改、删除）了localStorage的时候，本页面不会触发storage事件,但是别的页面会触发storage事件。</li>\n<li>大小：据说是5M（跟浏览器厂商有关系）</li>\n<li>在非IE下的浏览中可以本地打开。IE浏览器要在服务器中打开。</li>\n<li>localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡</li>\n<li>localStorage受同源策略的限制</li>\n</ul>\n<p><strong>设置</strong></p>\n<pre class="language-js"><code class="language-js"><span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">setItem</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">,</span> <span class="token string">\'David\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>获取</strong></p>\n<pre class="language-js"><code class="language-js"><span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">getItem</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 也可以获取键名  </span>\n<span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">key</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 获取第一个键名</span>\n</code></pre>\n<p><strong>删除</strong></p>\n<pre class="language-js"><code class="language-js"><span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">removeItem</span><span class="token punctuation">(</span><span class="token string">\'username\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 也可以一次性清除所有存储</span>\n<span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><strong>storage事件</strong></p>\n<p>当storage发生改变的时候触发。</p>\n<p>注意： 当前页面对storage的操作会触发其他页面的storage事件  事件的回调函数中有一个参数event,是一个StorageEvent对象，提供了一些实用的属性,如下表：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>key</td>\n<td>String</td>\n<td>添加，删除或修改的命名密钥</td>\n</tr>\n<tr>\n<td>oldValue</td>\n<td>Any</td>\n<td>先前的值（现已覆盖）；如果添加了新项目，则为null</td>\n</tr>\n<tr>\n<td>newValue</td>\n<td>Any</td>\n<td>新值；如果添加了项目，则为null</td>\n</tr>\n<tr>\n<td>url/uri</td>\n<td>String</td>\n<td>调用触发此更改的方法的页面</td>\n</tr>\n</tbody>\n</table></div>\n<p>补充:js跨页面触发事件，利用storage监听事件 触发storage事件的条件：</p>\n<ul>\n<li>同一浏览器打开了两个同源页面</li>\n<li>其中一个页面修改了localStorage</li>\n<li>另一个网页注册了这个事件</li>\n</ul>\n<h2 id="sessionstorage">sessionStorage<a class="anchor" href="#sessionstorage">§</a></h2>\n<p>跟localStorage差不多，也是本地存储，会话本地存储</p>\n<p><strong>特点</strong></p>\n<ul>\n<li>用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一页面，数据仍然存在。关闭窗口后，sessionStorage即被销毁，或者在新窗口打开同源的另一个页面，sessionStorage也是没有的。</li>\n</ul>\n<h2 id="cookielocalstoragesessionstorage%E5%8C%BA%E5%88%AB">cookie、localStorage、sessionStorage区别<a class="anchor" href="#cookielocalstoragesessionstorage%E5%8C%BA%E5%88%AB">§</a></h2>\n<ul>\n<li>相同：在本地（浏览器端）存储数据</li>\n<li>不同：\n<ul>\n<li>localStorage只要在相同的协议、相同的主机名、相同的端口下，就能读取/修改到同一份localStorage数据。</li>\n<li>sessionStorage比localStorage更严苛一点，除了协议、主机名、端口外，还要求在同一窗口（也就是浏览器的标签页）下。</li>\n<li>localStorage是永久存储，除非手动删除。</li>\n<li>sessionStorage当会话结束（当前页面关闭的时候，自动销毁）</li>\n<li>cookie的数据会在每一次发送http请求的时候，同时发送给服务器而localStorage、sessionStorage不会。</li>\n</ul>\n</li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#cookie">cookie</a><ol><li><a href="#expires">expires</a></li><li><a href="#domain-%E5%92%8C-path">domain 和 path</a></li><li><a href="#secure">secure</a></li><li><a href="#httponly">httpOnly</a></li><li><a href="#%E7%AC%AC%E4%B8%89%E6%96%B9cookie">第三方cookie</a></li><li><a href="#session%E5%92%8Ccookie%E5%8C%BA%E5%88%AB">session和cookie区别</a></li></ol></li><li><a href="#session%E5%92%8Ccookie%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">session和cookie应用场景</a></li><li><a href="#localstorage%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8">localStorage（本地存储）</a></li><li><a href="#sessionstorage">sessionStorage</a></li><li><a href="#cookielocalstoragesessionstorage%E5%8C%BA%E5%88%AB">cookie、localStorage、sessionStorage区别</a></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-27T03:51:39.000Z",
    'updated': null,
    'excerpt': "cookie 作用 cookie是纯文本，没有可执行代码。存储数据，当用户访问了某个网站（网页）的时候，我们就可以通过cookie来向访问者电脑上存储数据，或者某些网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（...",
    'cover': undefined,
    'categories': [
        "面试"
    ],
    'tags': [
        "面试",
        "学习笔记",
        "前端本地存储"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-02-05T02:12:44.000Z",
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
                "excerpt": " 1. 常用快捷键 2. 变更路线节点：Reroute Node 3. Execute Console Command命令 1. 设置分辨率r.setRes 1920x1080 1.",
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
