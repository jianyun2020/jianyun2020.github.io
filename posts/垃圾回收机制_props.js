import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/垃圾回收机制.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/垃圾回收机制.html",
    'title': "垃圾回收机制",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>垃圾回收机制</h1>\n<p>JavaScript具有自动垃圾收集机制(GC:GarbageCollection)，也就是说，执行环境会负责管理代码执行过程中使用的内存。开发人员不用再关心内存使用问题，所需内存的分配以及无用内存的回收完全实现了自动管理。</p>\n<h2 id="%E5%86%85%E5%AD%98%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">内存生命周期<a class="anchor" href="#%E5%86%85%E5%AD%98%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">§</a></h2>\n<p>JS环境中分配的内存一般有如下生命周期：</p>\n<ol>\n<li>内存分配：当我们声明变量、函数、对象，并执行的时候，系统会自动为他们分配内存。</li>\n<li>内存使用：即读写内存，也就是使用变量、函数等。</li>\n<li>内存回收：使用完毕，由垃圾回收机制自动回收不再使用的内存。</li>\n</ol>\n<h2 id="%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6%E7%AD%96%E7%95%A5">垃圾回收机制策略<a class="anchor" href="#%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6%E7%AD%96%E7%95%A5">§</a></h2>\n<h3 id="%E6%A0%87%E8%AE%B0%E6%B8%85%E9%99%A4%E7%AE%97%E6%B3%95">标记清除算法<a class="anchor" href="#%E6%A0%87%E8%AE%B0%E6%B8%85%E9%99%A4%E7%AE%97%E6%B3%95">§</a></h3>\n<p>JavaScript中最常用的垃圾收集方式是标记清除（mark-and-sweep）。</p>\n<p>这个算法把“对象是否不再需要”简化定义为“对象是否可以获得”。</p>\n<p>该算法假定设置一个叫做根（root）的对象（在JavaScript里，根是全局对象）。垃圾回收器将<strong>定期</strong>从根开始扫描内存中的对象。凡是能从根部到达的对象，都是还需要使用的。那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。</p>\n<p>此算法可以分为两个阶段，一个是标记阶段（mark），一个是清除阶段（sweep）。</p>\n<ol>\n<li>标记阶段：垃圾回收器会从根对象开始遍历，每一个可以从根对象访问到的对象都会被添加一个标识，于是这个对象就被标识为可到达的对象。</li>\n<li>清除阶段：垃圾回收器会对堆内存从头到尾进行线性遍历，如果发现有对象没有被标识为可到达对象，那么就将此对象占用的内存回收，并且将原来标记为可到达对象的标识清除，以便进行下一次垃圾回收操作。</li>\n</ol>\n<p><img src="./images/markandsweep.png" alt=""></p>\n<p>在标记阶段：从根对象1可以访问到B，从B又可以访问到E，那么B和E都是可到达对象，同样的道理，F、G、J和K都是可到达对象。</p>\n<p>在回收阶段：所有未标记为可到达的对象都会被垃圾回收器回收。</p>\n<p><strong>何时开始垃圾回收？</strong></p>\n<p>通常来说，在使用标记清除算法时，未引用对象不会被立即回收。取而代之的做法是，垃圾对象将一直累计到内存耗尽为止。当内存耗尽时，程序将会被挂起，垃圾回收开始执行。</p>\n<p>补充: 从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。所有对JavaScript垃圾回收算法的改进都是基于标记-清除算法的改进，并没有改进标记-清除算法本身和它对“对象是否不再需要”的简化定义。</p>\n<p><strong>标记清除算法缺陷</strong></p>\n<ul>\n<li>那些无法从根对象查询到的对象都将被清除。</li>\n<li>垃圾收集后有可能会造成大量的内存碎片，像上面的图片所示，垃圾收集后内存中存在三个内存碎片，假设一个方格代表1个单位的内存，如果有一个对象需要占用3个内存单位的话，那么就会导致Mutator（应用程序）一直处于暂停状态，而Collector一直在尝试进行垃圾收集，直到Out of Memory。</li>\n<li>回收效率不高(需要进行两次内存扫描，分别是标记阶段和清除阶段)。</li>\n</ul>\n<h3 id="%E5%BC%95%E7%94%A8%E8%AE%A1%E6%95%B0%E7%AE%97%E6%B3%95">引用计数算法<a class="anchor" href="#%E5%BC%95%E7%94%A8%E8%AE%A1%E6%95%B0%E7%AE%97%E6%B3%95">§</a></h3>\n<p>这是最初级的垃圾收集算法.现在已经没有浏览器会用这种算法.</p>\n<p>此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。</p>\n<p>引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾收集器下次再运行时，它就会释放那些引用次数为零的值所占用的内存。</p>\n<p><strong>引用计数缺陷</strong></p>\n<p>该算法有个限制：无法处理循环引用。如果两个对象被创建，并互相引用，形成了一个循环。它们被调用之后会离开函数作用域，所以它们已经没有用了，可以被回收了。然而，引用计数算法考虑到它们互相都有至少一次引用，所以它们不会被回收。</p>\n<h2 id="chrome-v8-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95">Chrome V8 垃圾回收算法<a class="anchor" href="#chrome-v8-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95">§</a></h2>\n<p>Chrome 浏览器所使用的 V8 引擎就是采用的分代回收策略。这个和 Java 回收策略思想是一致的。目的是通过区分「临时」与「持久」对象；多回收「临时对象区」（新生代younggeneration），少回收「持久对象区」（老生代 tenured generation），减少每次需遍历的对象，从而减少每次GC的耗时。</p>\n<h3 id="v8%E7%9A%84%E5%86%85%E5%AD%98%E9%99%90%E5%88%B6">V8的内存限制<a class="anchor" href="#v8%E7%9A%84%E5%86%85%E5%AD%98%E9%99%90%E5%88%B6">§</a></h3>\n<p>在node中javascript能使用的内存是有限制的.</p>\n<blockquote>\n<p>64位系统下约为1.4GB。</p>\n<p>32位系统下约为0.7GB。</p>\n</blockquote>\n<p>对应到分代内存中，默认情况下。</p>\n<blockquote>\n<p>32位系统新生代内存大小为16MB，老生代内存大小为700MB。</p>\n<p>64位系统下，新生代内存大小为32MB，老生代内存大小为1.4GB。</p>\n</blockquote>\n<p>新生代平均分成两块相等的内存空间，叫做semispace，每块内存大小8MB（32位）或16MB（64位）。</p>\n<p>这个限制在node启动的时候可以通过传递--max-old-space-size 和 --max-new-space-size来调整，如：</p>\n<pre class="language-js"><code class="language-js">node <span class="token operator">--</span>max<span class="token operator">-</span>old<span class="token operator">-</span>space<span class="token operator">-</span>size<span class="token operator">=</span><span class="token number">1700</span> app<span class="token punctuation">.</span><span class="token property-access">js</span> <span class="token comment">//单位为MB</span>\nnode <span class="token operator">--</span>max<span class="token operator">-</span><span class="token keyword">new</span><span class="token operator">-</span>space<span class="token operator">-</span>size<span class="token operator">=</span><span class="token number">1024</span> app<span class="token punctuation">.</span><span class="token property-access">js</span> <span class="token comment">//单位为kb</span>\n</code></pre>\n<p>上述参数在V8初始化时生效，一旦生效就不能再动态改变。</p>\n<p><strong>内存限制的原因</strong></p>\n<p>至于V8为何要限制堆的大小，表层原因：V8最初为浏览器而设计，不太可能遇到用大量内存的场景。深层原因：V8的垃圾回收机制的限制。官方说法，以1.5GB的垃圾回收堆内存为例，V8做一次小的垃圾回收需要50毫秒以上，做一次非增量式的垃圾回收甚至要1秒以上。这是垃圾回收中引起JS线程暂停执行的时间，在这样时间花销下，应用的性能和响应能力都会直线下降。</p>\n<h3 id="v8%E7%9A%84%E5%88%86%E4%BB%A3%E5%9B%9E%E6%94%B6generation-gc">V8的分代回收（Generation GC）<a class="anchor" href="#v8%E7%9A%84%E5%88%86%E4%BB%A3%E5%9B%9E%E6%94%B6generation-gc">§</a></h3>\n<p>V8垃圾回收策略主要基于分代式垃圾回收机制。现代的垃圾回收算法中按对象的存活时间将内存的垃圾回收进行不同的分代，然后分别对不同分代的内存施以更高效的算法。</p>\n<p>V8的内存分代:</p>\n<p>在V8中，主要将内存分为新生代和老生代，新生代内存 存储的为存活时间较短的对象，老生代内存 存储的为存活时间较长或常驻内存的对象，如下图：</p>\n<p><img src="./images/v8.png" alt=""></p>\n<p>V8堆的整体大小就是新生代所用内存空间加上老生代的内存空间。</p>\n<h4 id="v8%E6%96%B0%E7%94%9F%E4%BB%A3%E7%AE%97%E6%B3%95scavenge">V8新生代算法（Scavenge）<a class="anchor" href="#v8%E6%96%B0%E7%94%9F%E4%BB%A3%E7%AE%97%E6%B3%95scavenge">§</a></h4>\n<p>在分代基础上，新生代中的对象主要通过Scavenge算法进行垃圾回收。在Scavenge的具体实现中，主要采用了Cheney算法</p>\n<p>Cheney算法是一种采用复制的方式实现的垃圾回收算法。它将堆内存一分为二，每一部分空间称为semi space。在这两个semi space空间中，只有一个处于使用中，另一个处于闲置状态。处于使用状态的semi space空间称为From空间，处于闲置状态的空间称为To空间。</p>\n<p>当我们分配对象时，先是在From空间中进行分配。当开始进行垃圾回收时，会检查From空间中的存活对象，这些存活对象将被复制到To空间中，而(From空间内的)非存活对象占用的空间将会被释放。完成复制后，From空间和To空间的角色发生对换(即以前的From空间释放后变为To;To空间在复制存活的对象后,变为From空间)。简而言之，在垃圾回收过程中，就是通过将存活对象在两个semispace空间之间进行复制。</p>\n<p><strong>Scavenge的缺点:</strong></p>\n<p>只能使用堆内存中的一半，这是由划分空间和复制机制所决定的。</p>\n<p><strong>Scavenge的优点:</strong></p>\n<p>Scavenge由于只复制存活的对象，并且对于生命周期短的场景存活对象只占少部分，所以它在时间效率上有优异的表现。 Scavenge是典型的牺牲空间换取时间的算法， 所以无法大规模地应用到所有的垃圾回收中。但可以发现，Scavenge非常适合应用在新生代中，因为新生代中对象的生命周期较短，恰恰适合这个算法。</p>\n<p><strong>晋升:</strong></p>\n<p>实际使用的堆内存是新生代的两个semi space空间大小和老生代所用内存大小之和。当一个对象经过多次复制依然存活时，它将会被认为是生命周期较长的对象。这种较长生命周期的对象随后会被移动到老生代中，采用新的算法进行管理。对象从新生代中移动到老生代中的过程称为晋升。</p>\n<p>在单纯的Scavenge过程中，From空间中的存活对象会被复制到To空间中去，然后对From空间和To空间进行角色对换（又称翻转）。但在分代式垃圾回收前提下，From空间中的存活对象在复制到To空间之前需要进行检查。在一定条件下，需要将存活周期长的对象移动到老生代中，也就是完成对象晋升。</p>\n<p><strong>晋升条件:</strong></p>\n<p>对象晋升的条件主要有两个，一个是对象是否经历过Scavenge回收，一个是To空间的内存占用比超过25%限制。</p>\n<p><strong>设置25%这个限制值的原因:</strong></p>\n<p>当这次Scavenge回收完成后，这个To空间将变成From空间，接下来的内存分配将在这个空间中进行。如果占比过高，会影响后续的内存分配。 对象晋升后，将会在老生代空间中作为存活周期较长的对象来对待，接受新的回收算法处理。</p>\n<h4 id="v8%E8%80%81%E7%94%9F%E4%BB%A3%E7%AE%97%E6%B3%95mark-sweep--mark-compact">V8老生代算法（Mark-Sweep &amp;&amp; Mark-Compact）<a class="anchor" href="#v8%E8%80%81%E7%94%9F%E4%BB%A3%E7%AE%97%E6%B3%95mark-sweep--mark-compact">§</a></h4>\n<blockquote>\n<p>对于老生代中的对象，由于存活对象占较大比重，再采用Scavenge的方式会有两个问题：一个是存活对象较多，复制存活对象的效率将会很低；另一个问题依然是浪费一半空间的问题。为此，V8在老生代中主要采用Mark-Sweep和Mark-Compact相结合的方式进行垃圾回收。</p>\n</blockquote>\n<p><strong>Mark-Sweep:</strong></p>\n<p>Mark-Sweep是标记清除的意思，它分为标记和清除两个阶段。与Scavenge相比，Mark-Sweep并不将内存空间划分为两半，所以不存在浪费一半空间的行为。与Scavenge复制活着的对象不同，Mark-Sweep在标记阶段遍历堆中所有对象，并标记活着的对象，在随后的清除阶段中，只清除没有被标记的对象。 可以看出，Scavenge中只复制活着的对象，而Mark-Sweep只清理死亡对象。 活对象在新生代中只占较小部分，死对象在老生代中只占较小部分，这是两种回收方式能高效处理的原因。\n<img src="./images/old1.png" alt=""></p>\n<p><strong>Mark-Sweep最大的问题:</strong></p>\n<p>在进行一次标记清除回收后，内存空间会出现不连续的状态。这种内存碎片会对后续的内存分配造成问题，因为很可能出现需要分配一个大对象的情况，这时所有的碎片空间都无法完成此次分配，就会提前触发垃圾回收，而这次回收是不必要的。(注意理解这句话,不要把内存想象成液体.而是固体,就像一个个散乱排列的麻将,需要进行排序处理--即后面要讲的 Mark-Compact)</p>\n<p><strong>Mark-Compact:</strong></p>\n<p>为了解决Mark-Sweep的内存碎片问题，Mark-Compact被提出来。Mark-Compact是标记整理的意思，是在Mark-Sweep的基础上演变而来的。它们的差别在于对象在标记为死亡后，在整理的过程中，将活着的对象往一端移动，移动完成后，直接清理掉边界外的内存。 下图为Mark-Compact完成标记并移动存活对象后的示意图，白色格子为存活对象，深色格子为死亡对象，浅色格子为存活对象移动后留下的空洞。</p>\n<p><img src="./images/old2.png" alt=""></p>\n<p>完成移动后，就可以直接清除最右边的存活对象后面的内存区域完成回收。</p>\n<p>Mark-Sweep、Mark-Compact、Scavenge三种主要垃圾回收算法的简单对比：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>回收算法</th>\n<th>Mark-Sweep</th>\n<th>Mark-Compact</th>\n<th>Scavenge</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>速度</td>\n<td>中等</td>\n<td>最慢</td>\n<td>最快</td>\n</tr>\n<tr>\n<td>空间开销</td>\n<td>少（有碎片）</td>\n<td>少（无碎片）</td>\n<td>双倍空间（无碎片）</td>\n</tr>\n<tr>\n<td>是否移动对象</td>\n<td>否</td>\n<td>是</td>\n<td>是</td>\n</tr>\n</tbody>\n</table></div>\n<p>从表格上看，Mark-Sweep和Mark-Compact之间，由于Mark-Compact需要移动对象，所以它的执行速度不可能很快，所以在取舍上，V8主要使用Mark-Sweep，在空间不足以对从新生代中晋升过来的对象进行分配时才使用Mark-Compact。</p>\n<h3 id="%E5%A2%9E%E9%87%8F%E5%BC%8F%E6%A0%87%E8%AE%B0%E5%9B%9E%E6%94%B6incremental-marking">增量式标记回收(Incremental Marking):<a class="anchor" href="#%E5%A2%9E%E9%87%8F%E5%BC%8F%E6%A0%87%E8%AE%B0%E5%9B%9E%E6%94%B6incremental-marking">§</a></h3>\n<ul>\n<li>为了避免出现js应用逻辑与垃圾回收器看到的不一致的情况，垃圾回收的3种基本算法都需要将应用逻辑暂停下来，待执行完垃圾回收后再恢复执行应用逻辑，这种行为被称为“全停顿”（stop-the-world）。在V8的分代式垃圾回收中，一次小垃圾回收只收集新生代，由于新生代默认配置得较小，且其中存活对象通常较少，所以即便它是全停顿的影响也不大。但V8的老生代通常配置得较大，且存活对象较多，全堆垃圾回收（full垃圾回收）的标记、清理、整理等动作造成的停顿就会比较可怕，需要设法改善(PS: 若V8的堆内存为1.5GB，V8做一次小的垃圾回收需要50ms以上，做一次非增量式的垃圾回收甚至要1秒以上。)。</li>\n<li>为了降低全堆垃圾回收带来的停顿时间，V8先从标记阶段入手，将原本要一口气停顿完成的动作改为增量标记（incremental marking），也就是拆分为许多小“步进”，每做完一“步进”就让js应用逻辑执行一小会，垃圾回收与应用逻辑交替执行直到标记阶段完成。</li>\n<li>V8在经过增量标记的改进后，垃圾回收的最大停顿时间可以减少到原本的1/6左右。</li>\n<li>V8后续还引入了延迟清理（lazy sweeping）与增量式整理（incremental compaction），让清理与整理动作也变成增量式的。同时还计划引入并行标记与并行清理，进一步利用多核性能降低每次停顿的时间。</li>\n</ul>\n<h3 id="%E5%87%8F%E5%B0%91%E5%9E%83%E5%9C%BE%E5%92%8C%E5%9B%9E%E6%94%B6%E5%AF%B9%E6%80%A7%E8%83%BD%E7%9A%84%E5%BD%B1%E5%93%8D">减少垃圾和回收对性能的影响:<a class="anchor" href="#%E5%87%8F%E5%B0%91%E5%9E%83%E5%9C%BE%E5%92%8C%E5%9B%9E%E6%94%B6%E5%AF%B9%E6%80%A7%E8%83%BD%E7%9A%84%E5%BD%B1%E5%93%8D">§</a></h3>\n<ul>\n<li>让垃圾回收尽量少地进行，尤其是全堆垃圾回收。主要靠v8自己的优化机制.</li>\n<li>避免内存泄露,让内存及时得到释放。这部分是我们需要注意的</li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5783\u573E\u56DE\u6536\u673A\u5236"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>JavaScript具有自动垃圾收集机制(GC:GarbageCollection)，也就是说，执行环境会负责管理代码执行过程中使用的内存。开发人员不用再关心内存使用问题，所需内存的分配以及无用内存的回收完全实现了自动管理。</p>\n<h2 id="%E5%86%85%E5%AD%98%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">内存生命周期<a class="anchor" href="#%E5%86%85%E5%AD%98%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">§</a></h2>\n<p>JS环境中分配的内存一般有如下生命周期：</p>\n<ol>\n<li>内存分配：当我们声明变量、函数、对象，并执行的时候，系统会自动为他们分配内存。</li>\n<li>内存使用：即读写内存，也就是使用变量、函数等。</li>\n<li>内存回收：使用完毕，由垃圾回收机制自动回收不再使用的内存。</li>\n</ol>\n<h2 id="%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6%E7%AD%96%E7%95%A5">垃圾回收机制策略<a class="anchor" href="#%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6%E7%AD%96%E7%95%A5">§</a></h2>\n<h3 id="%E6%A0%87%E8%AE%B0%E6%B8%85%E9%99%A4%E7%AE%97%E6%B3%95">标记清除算法<a class="anchor" href="#%E6%A0%87%E8%AE%B0%E6%B8%85%E9%99%A4%E7%AE%97%E6%B3%95">§</a></h3>\n<p>JavaScript中最常用的垃圾收集方式是标记清除（mark-and-sweep）。</p>\n<p>这个算法把“对象是否不再需要”简化定义为“对象是否可以获得”。</p>\n<p>该算法假定设置一个叫做根（root）的对象（在JavaScript里，根是全局对象）。垃圾回收器将<strong>定期</strong>从根开始扫描内存中的对象。凡是能从根部到达的对象，都是还需要使用的。那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。</p>\n<p>此算法可以分为两个阶段，一个是标记阶段（mark），一个是清除阶段（sweep）。</p>\n<ol>\n<li>标记阶段：垃圾回收器会从根对象开始遍历，每一个可以从根对象访问到的对象都会被添加一个标识，于是这个对象就被标识为可到达的对象。</li>\n<li>清除阶段：垃圾回收器会对堆内存从头到尾进行线性遍历，如果发现有对象没有被标识为可到达对象，那么就将此对象占用的内存回收，并且将原来标记为可到达对象的标识清除，以便进行下一次垃圾回收操作。</li>\n</ol>\n<p><img src="./images/markandsweep.png" alt=""></p>\n<p>在标记阶段：从根对象1可以访问到B，从B又可以访问到E，那么B和E都是可到达对象，同样的道理，F、G、J和K都是可到达对象。</p>\n<p>在回收阶段：所有未标记为可到达的对象都会被垃圾回收器回收。</p>\n<p><strong>何时开始垃圾回收？</strong></p>\n<p>通常来说，在使用标记清除算法时，未引用对象不会被立即回收。取而代之的做法是，垃圾对象将一直累计到内存耗尽为止。当内存耗尽时，程序将会被挂起，垃圾回收开始执行。</p>\n<p>补充: 从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。所有对JavaScript垃圾回收算法的改进都是基于标记-清除算法的改进，并没有改进标记-清除算法本身和它对“对象是否不再需要”的简化定义。</p>\n<p><strong>标记清除算法缺陷</strong></p>\n<ul>\n<li>那些无法从根对象查询到的对象都将被清除。</li>\n<li>垃圾收集后有可能会造成大量的内存碎片，像上面的图片所示，垃圾收集后内存中存在三个内存碎片，假设一个方格代表1个单位的内存，如果有一个对象需要占用3个内存单位的话，那么就会导致Mutator（应用程序）一直处于暂停状态，而Collector一直在尝试进行垃圾收集，直到Out of Memory。</li>\n<li>回收效率不高(需要进行两次内存扫描，分别是标记阶段和清除阶段)。</li>\n</ul>\n<h3 id="%E5%BC%95%E7%94%A8%E8%AE%A1%E6%95%B0%E7%AE%97%E6%B3%95">引用计数算法<a class="anchor" href="#%E5%BC%95%E7%94%A8%E8%AE%A1%E6%95%B0%E7%AE%97%E6%B3%95">§</a></h3>\n<p>这是最初级的垃圾收集算法.现在已经没有浏览器会用这种算法.</p>\n<p>此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。</p>\n<p>引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾收集器下次再运行时，它就会释放那些引用次数为零的值所占用的内存。</p>\n<p><strong>引用计数缺陷</strong></p>\n<p>该算法有个限制：无法处理循环引用。如果两个对象被创建，并互相引用，形成了一个循环。它们被调用之后会离开函数作用域，所以它们已经没有用了，可以被回收了。然而，引用计数算法考虑到它们互相都有至少一次引用，所以它们不会被回收。</p>\n<h2 id="chrome-v8-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95">Chrome V8 垃圾回收算法<a class="anchor" href="#chrome-v8-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95">§</a></h2>\n<p>Chrome 浏览器所使用的 V8 引擎就是采用的分代回收策略。这个和 Java 回收策略思想是一致的。目的是通过区分「临时」与「持久」对象；多回收「临时对象区」（新生代younggeneration），少回收「持久对象区」（老生代 tenured generation），减少每次需遍历的对象，从而减少每次GC的耗时。</p>\n<h3 id="v8%E7%9A%84%E5%86%85%E5%AD%98%E9%99%90%E5%88%B6">V8的内存限制<a class="anchor" href="#v8%E7%9A%84%E5%86%85%E5%AD%98%E9%99%90%E5%88%B6">§</a></h3>\n<p>在node中javascript能使用的内存是有限制的.</p>\n<blockquote>\n<p>64位系统下约为1.4GB。</p>\n<p>32位系统下约为0.7GB。</p>\n</blockquote>\n<p>对应到分代内存中，默认情况下。</p>\n<blockquote>\n<p>32位系统新生代内存大小为16MB，老生代内存大小为700MB。</p>\n<p>64位系统下，新生代内存大小为32MB，老生代内存大小为1.4GB。</p>\n</blockquote>\n<p>新生代平均分成两块相等的内存空间，叫做semispace，每块内存大小8MB（32位）或16MB（64位）。</p>\n<p>这个限制在node启动的时候可以通过传递--max-old-space-size 和 --max-new-space-size来调整，如：</p>\n<pre class="language-js"><code class="language-js">node <span class="token operator">--</span>max<span class="token operator">-</span>old<span class="token operator">-</span>space<span class="token operator">-</span>size<span class="token operator">=</span><span class="token number">1700</span> app<span class="token punctuation">.</span><span class="token property-access">js</span> <span class="token comment">//单位为MB</span>\nnode <span class="token operator">--</span>max<span class="token operator">-</span><span class="token keyword">new</span><span class="token operator">-</span>space<span class="token operator">-</span>size<span class="token operator">=</span><span class="token number">1024</span> app<span class="token punctuation">.</span><span class="token property-access">js</span> <span class="token comment">//单位为kb</span>\n</code></pre>\n<p>上述参数在V8初始化时生效，一旦生效就不能再动态改变。</p>\n<p><strong>内存限制的原因</strong></p>\n<p>至于V8为何要限制堆的大小，表层原因：V8最初为浏览器而设计，不太可能遇到用大量内存的场景。深层原因：V8的垃圾回收机制的限制。官方说法，以1.5GB的垃圾回收堆内存为例，V8做一次小的垃圾回收需要50毫秒以上，做一次非增量式的垃圾回收甚至要1秒以上。这是垃圾回收中引起JS线程暂停执行的时间，在这样时间花销下，应用的性能和响应能力都会直线下降。</p>\n<h3 id="v8%E7%9A%84%E5%88%86%E4%BB%A3%E5%9B%9E%E6%94%B6generation-gc">V8的分代回收（Generation GC）<a class="anchor" href="#v8%E7%9A%84%E5%88%86%E4%BB%A3%E5%9B%9E%E6%94%B6generation-gc">§</a></h3>\n<p>V8垃圾回收策略主要基于分代式垃圾回收机制。现代的垃圾回收算法中按对象的存活时间将内存的垃圾回收进行不同的分代，然后分别对不同分代的内存施以更高效的算法。</p>\n<p>V8的内存分代:</p>\n<p>在V8中，主要将内存分为新生代和老生代，新生代内存 存储的为存活时间较短的对象，老生代内存 存储的为存活时间较长或常驻内存的对象，如下图：</p>\n<p><img src="./images/v8.png" alt=""></p>\n<p>V8堆的整体大小就是新生代所用内存空间加上老生代的内存空间。</p>\n<h4 id="v8%E6%96%B0%E7%94%9F%E4%BB%A3%E7%AE%97%E6%B3%95scavenge">V8新生代算法（Scavenge）<a class="anchor" href="#v8%E6%96%B0%E7%94%9F%E4%BB%A3%E7%AE%97%E6%B3%95scavenge">§</a></h4>\n<p>在分代基础上，新生代中的对象主要通过Scavenge算法进行垃圾回收。在Scavenge的具体实现中，主要采用了Cheney算法</p>\n<p>Cheney算法是一种采用复制的方式实现的垃圾回收算法。它将堆内存一分为二，每一部分空间称为semi space。在这两个semi space空间中，只有一个处于使用中，另一个处于闲置状态。处于使用状态的semi space空间称为From空间，处于闲置状态的空间称为To空间。</p>\n<p>当我们分配对象时，先是在From空间中进行分配。当开始进行垃圾回收时，会检查From空间中的存活对象，这些存活对象将被复制到To空间中，而(From空间内的)非存活对象占用的空间将会被释放。完成复制后，From空间和To空间的角色发生对换(即以前的From空间释放后变为To;To空间在复制存活的对象后,变为From空间)。简而言之，在垃圾回收过程中，就是通过将存活对象在两个semispace空间之间进行复制。</p>\n<p><strong>Scavenge的缺点:</strong></p>\n<p>只能使用堆内存中的一半，这是由划分空间和复制机制所决定的。</p>\n<p><strong>Scavenge的优点:</strong></p>\n<p>Scavenge由于只复制存活的对象，并且对于生命周期短的场景存活对象只占少部分，所以它在时间效率上有优异的表现。 Scavenge是典型的牺牲空间换取时间的算法， 所以无法大规模地应用到所有的垃圾回收中。但可以发现，Scavenge非常适合应用在新生代中，因为新生代中对象的生命周期较短，恰恰适合这个算法。</p>\n<p><strong>晋升:</strong></p>\n<p>实际使用的堆内存是新生代的两个semi space空间大小和老生代所用内存大小之和。当一个对象经过多次复制依然存活时，它将会被认为是生命周期较长的对象。这种较长生命周期的对象随后会被移动到老生代中，采用新的算法进行管理。对象从新生代中移动到老生代中的过程称为晋升。</p>\n<p>在单纯的Scavenge过程中，From空间中的存活对象会被复制到To空间中去，然后对From空间和To空间进行角色对换（又称翻转）。但在分代式垃圾回收前提下，From空间中的存活对象在复制到To空间之前需要进行检查。在一定条件下，需要将存活周期长的对象移动到老生代中，也就是完成对象晋升。</p>\n<p><strong>晋升条件:</strong></p>\n<p>对象晋升的条件主要有两个，一个是对象是否经历过Scavenge回收，一个是To空间的内存占用比超过25%限制。</p>\n<p><strong>设置25%这个限制值的原因:</strong></p>\n<p>当这次Scavenge回收完成后，这个To空间将变成From空间，接下来的内存分配将在这个空间中进行。如果占比过高，会影响后续的内存分配。 对象晋升后，将会在老生代空间中作为存活周期较长的对象来对待，接受新的回收算法处理。</p>\n<h4 id="v8%E8%80%81%E7%94%9F%E4%BB%A3%E7%AE%97%E6%B3%95mark-sweep--mark-compact">V8老生代算法（Mark-Sweep &amp;&amp; Mark-Compact）<a class="anchor" href="#v8%E8%80%81%E7%94%9F%E4%BB%A3%E7%AE%97%E6%B3%95mark-sweep--mark-compact">§</a></h4>\n<blockquote>\n<p>对于老生代中的对象，由于存活对象占较大比重，再采用Scavenge的方式会有两个问题：一个是存活对象较多，复制存活对象的效率将会很低；另一个问题依然是浪费一半空间的问题。为此，V8在老生代中主要采用Mark-Sweep和Mark-Compact相结合的方式进行垃圾回收。</p>\n</blockquote>\n<p><strong>Mark-Sweep:</strong></p>\n<p>Mark-Sweep是标记清除的意思，它分为标记和清除两个阶段。与Scavenge相比，Mark-Sweep并不将内存空间划分为两半，所以不存在浪费一半空间的行为。与Scavenge复制活着的对象不同，Mark-Sweep在标记阶段遍历堆中所有对象，并标记活着的对象，在随后的清除阶段中，只清除没有被标记的对象。 可以看出，Scavenge中只复制活着的对象，而Mark-Sweep只清理死亡对象。 活对象在新生代中只占较小部分，死对象在老生代中只占较小部分，这是两种回收方式能高效处理的原因。\n<img src="./images/old1.png" alt=""></p>\n<p><strong>Mark-Sweep最大的问题:</strong></p>\n<p>在进行一次标记清除回收后，内存空间会出现不连续的状态。这种内存碎片会对后续的内存分配造成问题，因为很可能出现需要分配一个大对象的情况，这时所有的碎片空间都无法完成此次分配，就会提前触发垃圾回收，而这次回收是不必要的。(注意理解这句话,不要把内存想象成液体.而是固体,就像一个个散乱排列的麻将,需要进行排序处理--即后面要讲的 Mark-Compact)</p>\n<p><strong>Mark-Compact:</strong></p>\n<p>为了解决Mark-Sweep的内存碎片问题，Mark-Compact被提出来。Mark-Compact是标记整理的意思，是在Mark-Sweep的基础上演变而来的。它们的差别在于对象在标记为死亡后，在整理的过程中，将活着的对象往一端移动，移动完成后，直接清理掉边界外的内存。 下图为Mark-Compact完成标记并移动存活对象后的示意图，白色格子为存活对象，深色格子为死亡对象，浅色格子为存活对象移动后留下的空洞。</p>\n<p><img src="./images/old2.png" alt=""></p>\n<p>完成移动后，就可以直接清除最右边的存活对象后面的内存区域完成回收。</p>\n<p>Mark-Sweep、Mark-Compact、Scavenge三种主要垃圾回收算法的简单对比：</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>回收算法</th>\n<th>Mark-Sweep</th>\n<th>Mark-Compact</th>\n<th>Scavenge</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>速度</td>\n<td>中等</td>\n<td>最慢</td>\n<td>最快</td>\n</tr>\n<tr>\n<td>空间开销</td>\n<td>少（有碎片）</td>\n<td>少（无碎片）</td>\n<td>双倍空间（无碎片）</td>\n</tr>\n<tr>\n<td>是否移动对象</td>\n<td>否</td>\n<td>是</td>\n<td>是</td>\n</tr>\n</tbody>\n</table></div>\n<p>从表格上看，Mark-Sweep和Mark-Compact之间，由于Mark-Compact需要移动对象，所以它的执行速度不可能很快，所以在取舍上，V8主要使用Mark-Sweep，在空间不足以对从新生代中晋升过来的对象进行分配时才使用Mark-Compact。</p>\n<h3 id="%E5%A2%9E%E9%87%8F%E5%BC%8F%E6%A0%87%E8%AE%B0%E5%9B%9E%E6%94%B6incremental-marking">增量式标记回收(Incremental Marking):<a class="anchor" href="#%E5%A2%9E%E9%87%8F%E5%BC%8F%E6%A0%87%E8%AE%B0%E5%9B%9E%E6%94%B6incremental-marking">§</a></h3>\n<ul>\n<li>为了避免出现js应用逻辑与垃圾回收器看到的不一致的情况，垃圾回收的3种基本算法都需要将应用逻辑暂停下来，待执行完垃圾回收后再恢复执行应用逻辑，这种行为被称为“全停顿”（stop-the-world）。在V8的分代式垃圾回收中，一次小垃圾回收只收集新生代，由于新生代默认配置得较小，且其中存活对象通常较少，所以即便它是全停顿的影响也不大。但V8的老生代通常配置得较大，且存活对象较多，全堆垃圾回收（full垃圾回收）的标记、清理、整理等动作造成的停顿就会比较可怕，需要设法改善(PS: 若V8的堆内存为1.5GB，V8做一次小的垃圾回收需要50ms以上，做一次非增量式的垃圾回收甚至要1秒以上。)。</li>\n<li>为了降低全堆垃圾回收带来的停顿时间，V8先从标记阶段入手，将原本要一口气停顿完成的动作改为增量标记（incremental marking），也就是拆分为许多小“步进”，每做完一“步进”就让js应用逻辑执行一小会，垃圾回收与应用逻辑交替执行直到标记阶段完成。</li>\n<li>V8在经过增量标记的改进后，垃圾回收的最大停顿时间可以减少到原本的1/6左右。</li>\n<li>V8后续还引入了延迟清理（lazy sweeping）与增量式整理（incremental compaction），让清理与整理动作也变成增量式的。同时还计划引入并行标记与并行清理，进一步利用多核性能降低每次停顿的时间。</li>\n</ul>\n<h3 id="%E5%87%8F%E5%B0%91%E5%9E%83%E5%9C%BE%E5%92%8C%E5%9B%9E%E6%94%B6%E5%AF%B9%E6%80%A7%E8%83%BD%E7%9A%84%E5%BD%B1%E5%93%8D">减少垃圾和回收对性能的影响:<a class="anchor" href="#%E5%87%8F%E5%B0%91%E5%9E%83%E5%9C%BE%E5%92%8C%E5%9B%9E%E6%94%B6%E5%AF%B9%E6%80%A7%E8%83%BD%E7%9A%84%E5%BD%B1%E5%93%8D">§</a></h3>\n<ul>\n<li>让垃圾回收尽量少地进行，尤其是全堆垃圾回收。主要靠v8自己的优化机制.</li>\n<li>避免内存泄露,让内存及时得到释放。这部分是我们需要注意的</li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%86%85%E5%AD%98%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">内存生命周期</a></li><li><a href="#%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6%E7%AD%96%E7%95%A5">垃圾回收机制策略</a><ol><li><a href="#%E6%A0%87%E8%AE%B0%E6%B8%85%E9%99%A4%E7%AE%97%E6%B3%95">标记清除算法</a></li><li><a href="#%E5%BC%95%E7%94%A8%E8%AE%A1%E6%95%B0%E7%AE%97%E6%B3%95">引用计数算法</a></li></ol></li><li><a href="#chrome-v8-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95">Chrome V8 垃圾回收算法</a><ol><li><a href="#v8%E7%9A%84%E5%86%85%E5%AD%98%E9%99%90%E5%88%B6">V8的内存限制</a></li><li><a href="#v8%E7%9A%84%E5%88%86%E4%BB%A3%E5%9B%9E%E6%94%B6generation-gc">V8的分代回收（Generation GC）</a><ol></ol></li><li><a href="#%E5%A2%9E%E9%87%8F%E5%BC%8F%E6%A0%87%E8%AE%B0%E5%9B%9E%E6%94%B6incremental-marking">增量式标记回收(Incremental Marking):</a></li><li><a href="#%E5%87%8F%E5%B0%91%E5%9E%83%E5%9C%BE%E5%92%8C%E5%9B%9E%E6%94%B6%E5%AF%B9%E6%80%A7%E8%83%BD%E7%9A%84%E5%BD%B1%E5%93%8D">减少垃圾和回收对性能的影响:</a></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-26T03:09:41.000Z",
    'updated': "2021-01-26T06:08:48.000Z",
    'excerpt': "JavaScript具有自动垃圾收集机制(GC:GarbageCollection)，也就是说，执行环境会负责管理代码执行过程中使用的内存。开发人员不用再关心内存使用问题，所需内存的分配以及无用内存的回收完全实现了自动管理。 内存生命周期 JS环...",
    'cover': "./images/markandsweep.png",
    'categories': [
        "面试"
    ],
    'tags': [
        "面试",
        "学习笔记",
        "垃圾回收机制"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "updated": "2021-03-10T07:43:26.000Z",
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
                "name": "HTML",
                "count": 1
            },
            {
                "name": "UE4",
                "count": 1
            },
            {
                "name": "微信的坑",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "学习笔记",
                "count": 17
            },
            {
                "name": "面试",
                "count": 8
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
                "name": "防抖和节流",
                "count": 1
            }
        ]
    }
};
