import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/Golang基础.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/Golang基础.html",
    'title': "Golang基础",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Golang基础</h1>\n<h2 id="%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95">基本语法<a class="anchor" href="#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95">§</a></h2>\n<pre class="language-go"><code class="language-go"><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">"fmt"</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 此括号不能写在单独行</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello Go~"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%AD%97%E7%AC%A6%E4%B8%B2">格式化字符串<a class="anchor" href="#%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%AD%97%E7%AC%A6%E4%B8%B2">§</a></h3>\n<p>Go语言使用<code>fmt.Sprintf</code>格式化字符串并赋值给新串</p>\n<pre class="language-go"><code class="language-go"><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">"fmt"</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// %d表示整型数字，%s表示字符串</span>\n    <span class="token keyword">var</span> code <span class="token operator">=</span> <span class="token number">2021</span>\n    <span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token string">"2021-10-1"</span>\n    <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"Code=%d&amp;EndDate=%s"</span>\n    <span class="token keyword">var</span> res <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> code<span class="token punctuation">,</span> date<span class="token punctuation">)</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Code=2021&amp;EndDate=2021-10-1</span>\n</code></pre>\n<h2 id="%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">数据类型<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">§</a></h2>\n<p>用于声明函数和变量。</p>\n<p>数据类型的出现是为了把数据分成所需内存大小不同的数据，编程的时候需要用大数据的时候才需要申请大内存，就可以充分利用内存。</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>布尔型</td>\n<td>值可以是常量true或者false，例如：var b bool = true</td>\n</tr>\n<tr>\n<td>数字类型</td>\n<td>整型int和浮点型float32、float64；支持复数，其中位运算采用补码</td>\n</tr>\n<tr>\n<td>字符串类型</td>\n<td>一串固定长度的字符串连接起来的字符序列</td>\n</tr>\n<tr>\n<td>派生类型</td>\n<td>指针类型(Pointer)</td>\n</tr>\n<tr>\n<td></td>\n<td>数组类型</td>\n</tr>\n<tr>\n<td></td>\n<td>结构化类型(struct)</td>\n</tr>\n<tr>\n<td></td>\n<td>Channel类型</td>\n</tr>\n<tr>\n<td></td>\n<td>函数类型</td>\n</tr>\n<tr>\n<td></td>\n<td>切片类型</td>\n</tr>\n<tr>\n<td></td>\n<td>接口类型(interface)</td>\n</tr>\n<tr>\n<td></td>\n<td>Map类型</td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B">数字类型<a class="anchor" href="#%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B">§</a></h3>\n<p>Go也有基于架构的类型，例如：int、uint、uintptr</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>uint8</td>\n<td>无符号8位整型(0~255)</td>\n</tr>\n<tr>\n<td>uint16</td>\n<td>无符号16位整型(0~65535)</td>\n</tr>\n<tr>\n<td>unit32</td>\n<td>无符号32位整型</td>\n</tr>\n<tr>\n<td>unit64</td>\n<td>无符号64位整型</td>\n</tr>\n<tr>\n<td>int8</td>\n<td>有符号8位整型(-128~127)</td>\n</tr>\n<tr>\n<td>int16</td>\n<td>有符号16位整型(-32768~32767)</td>\n</tr>\n<tr>\n<td>int32</td>\n<td>有符号32位整型</td>\n</tr>\n<tr>\n<td>int64</td>\n<td>有符号64位整型</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>浮点型</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>float32</td>\n<td>32位浮点型数</td>\n</tr>\n<tr>\n<td>float64</td>\n<td>64位浮点型数</td>\n</tr>\n<tr>\n<td>complex64</td>\n<td>32位实数和虚数</td>\n</tr>\n<tr>\n<td>complex128</td>\n<td>64位实数和虚数</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>其它数字类型</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>byte</td>\n<td>类似uint8</td>\n</tr>\n<tr>\n<td>rune</td>\n<td>类似uint32</td>\n</tr>\n<tr>\n<td>uint</td>\n<td>32或64位</td>\n</tr>\n<tr>\n<td>int</td>\n<td>与uint一样大小</td>\n</tr>\n<tr>\n<td>uintptr</td>\n<td>无符号整型，用于存放一个指针</td>\n</tr>\n</tbody>\n</table></div>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Golang\u57FA\u7840"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95">基本语法<a class="anchor" href="#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95">§</a></h2>\n<pre class="language-go"><code class="language-go"><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">"fmt"</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 此括号不能写在单独行</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello Go~"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%AD%97%E7%AC%A6%E4%B8%B2">格式化字符串<a class="anchor" href="#%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%AD%97%E7%AC%A6%E4%B8%B2">§</a></h3>\n<p>Go语言使用<code>fmt.Sprintf</code>格式化字符串并赋值给新串</p>\n<pre class="language-go"><code class="language-go"><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">"fmt"</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// %d表示整型数字，%s表示字符串</span>\n    <span class="token keyword">var</span> code <span class="token operator">=</span> <span class="token number">2021</span>\n    <span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token string">"2021-10-1"</span>\n    <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"Code=%d&amp;EndDate=%s"</span>\n    <span class="token keyword">var</span> res <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> code<span class="token punctuation">,</span> date<span class="token punctuation">)</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Code=2021&amp;EndDate=2021-10-1</span>\n</code></pre>\n<h2 id="%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">数据类型<a class="anchor" href="#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">§</a></h2>\n<p>用于声明函数和变量。</p>\n<p>数据类型的出现是为了把数据分成所需内存大小不同的数据，编程的时候需要用大数据的时候才需要申请大内存，就可以充分利用内存。</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>布尔型</td>\n<td>值可以是常量true或者false，例如：var b bool = true</td>\n</tr>\n<tr>\n<td>数字类型</td>\n<td>整型int和浮点型float32、float64；支持复数，其中位运算采用补码</td>\n</tr>\n<tr>\n<td>字符串类型</td>\n<td>一串固定长度的字符串连接起来的字符序列</td>\n</tr>\n<tr>\n<td>派生类型</td>\n<td>指针类型(Pointer)</td>\n</tr>\n<tr>\n<td></td>\n<td>数组类型</td>\n</tr>\n<tr>\n<td></td>\n<td>结构化类型(struct)</td>\n</tr>\n<tr>\n<td></td>\n<td>Channel类型</td>\n</tr>\n<tr>\n<td></td>\n<td>函数类型</td>\n</tr>\n<tr>\n<td></td>\n<td>切片类型</td>\n</tr>\n<tr>\n<td></td>\n<td>接口类型(interface)</td>\n</tr>\n<tr>\n<td></td>\n<td>Map类型</td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B">数字类型<a class="anchor" href="#%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B">§</a></h3>\n<p>Go也有基于架构的类型，例如：int、uint、uintptr</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>uint8</td>\n<td>无符号8位整型(0~255)</td>\n</tr>\n<tr>\n<td>uint16</td>\n<td>无符号16位整型(0~65535)</td>\n</tr>\n<tr>\n<td>unit32</td>\n<td>无符号32位整型</td>\n</tr>\n<tr>\n<td>unit64</td>\n<td>无符号64位整型</td>\n</tr>\n<tr>\n<td>int8</td>\n<td>有符号8位整型(-128~127)</td>\n</tr>\n<tr>\n<td>int16</td>\n<td>有符号16位整型(-32768~32767)</td>\n</tr>\n<tr>\n<td>int32</td>\n<td>有符号32位整型</td>\n</tr>\n<tr>\n<td>int64</td>\n<td>有符号64位整型</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>浮点型</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>float32</td>\n<td>32位浮点型数</td>\n</tr>\n<tr>\n<td>float64</td>\n<td>64位浮点型数</td>\n</tr>\n<tr>\n<td>complex64</td>\n<td>32位实数和虚数</td>\n</tr>\n<tr>\n<td>complex128</td>\n<td>64位实数和虚数</td>\n</tr>\n</tbody>\n</table></div>\n<p><strong>其它数字类型</strong></p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>byte</td>\n<td>类似uint8</td>\n</tr>\n<tr>\n<td>rune</td>\n<td>类似uint32</td>\n</tr>\n<tr>\n<td>uint</td>\n<td>32或64位</td>\n</tr>\n<tr>\n<td>int</td>\n<td>与uint一样大小</td>\n</tr>\n<tr>\n<td>uintptr</td>\n<td>无符号整型，用于存放一个指针</td>\n</tr>\n</tbody>\n</table></div>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95">基本语法</a><ol><li><a href="#%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%AD%97%E7%AC%A6%E4%B8%B2">格式化字符串</a></li></ol></li><li><a href="#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">数据类型</a><ol><li><a href="#%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B">数字类型</a></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-02-26T04:55:47.000Z",
    'updated': "2021-02-26T05:36:43.000Z",
    'excerpt': "基本语法 package main import \"fmt\" func main() { // 此括号不能写在单独行 fmt.Println(\"Hello Go~\") } 格式化字符串 Go语言使用fmt.Sprintf格式化字符串并赋值给新串 package main import \"fmt\" func main() { // %d表示整...",
    'cover': undefined,
    'categories': [
        "Golang"
    ],
    'tags': [
        "学习笔记"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "updated": "2021-02-27T13:26:39.000Z",
                "author": "jianyun2020",
                "contributors": [
                    "jianyun2020"
                ],
                "categories": [
                    "面试"
                ],
                "tags": [
                    "面试",
                    "原型链",
                    "JavaScript"
                ],
                "excerpt": "构造函数 本质就是函数，与普通函数一样，一般命名首字母大写来与普通函数区分，用new关键字调用。 每个函数再创建时，会自动创建prototype属性，它只想一个对象，这个对象 // 创建方式一 function Person() { // ... } // 创建..."
            },
            {
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-02-24T08:54:19.000Z",
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
                "count": 6
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
                "name": "Golang",
                "count": 1
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
                "count": 14
            },
            {
                "name": "JavaScript",
                "count": 7
            },
            {
                "name": "面试",
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
                "name": "原型链",
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
