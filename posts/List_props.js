import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/List.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/List.html",
    'title': "数据结构与算法JavaScript-列表",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>数据结构与算法JavaScript-列表</h1>\n<h2 id="%E5%88%97%E8%A1%A8%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89">列表的抽象数据类型定义<a class="anchor" href="#%E5%88%97%E8%A1%A8%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>方法和方法</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>listSize(属性)</td>\n<td>列表的元素个数</td>\n</tr>\n<tr>\n<td>pos(属性)</td>\n<td>列表的当前位置</td>\n</tr>\n<tr>\n<td>length(属性)</td>\n<td>返回列表中元素的个数</td>\n</tr>\n<tr>\n<td>clear(方法)</td>\n<td>清空列表中的所有元素</td>\n</tr>\n<tr>\n<td>toString(方法)</td>\n<td>返回列表的字符串形式</td>\n</tr>\n<tr>\n<td>getElement(方法)</td>\n<td>返回当前位置的元素</td>\n</tr>\n<tr>\n<td>insert(方法)</td>\n<td>在现有元素后插入新元素</td>\n</tr>\n<tr>\n<td>append(方法)</td>\n<td>在列表的末尾添加新元素</td>\n</tr>\n<tr>\n<td>remove(方法)</td>\n<td>从列表中删除元素</td>\n</tr>\n<tr>\n<td>front(方法)</td>\n<td>将列表的当前位置移动到第一个元素</td>\n</tr>\n<tr>\n<td>end(方法)</td>\n<td>将列表的当前位置移动到最后一个元素</td>\n</tr>\n<tr>\n<td>prev(方法)</td>\n<td>将当前位置前移一位</td>\n</tr>\n<tr>\n<td>next(方法)</td>\n<td>将当前位置后移一位</td>\n</tr>\n<tr>\n<td>currPos(方法)</td>\n<td>返回列表的当前位置</td>\n</tr>\n<tr>\n<td>moveTo(方法)</td>\n<td>将当前位置移动到指定位置</td>\n</tr>\n<tr>\n<td>find(方法)</td>\n<td>在列表中查找某一元素</td>\n</tr>\n<tr>\n<td>contains(方法)</td>\n<td>判断给定值是否在列表中</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="%E5%AE%9E%E7%8E%B0%E5%88%97%E8%A1%A8%E7%B1%BB">实现列表类<a class="anchor" href="#%E5%AE%9E%E7%8E%B0%E5%88%97%E8%A1%A8%E7%B1%BB">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">List</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 初始化一个空数组来保存列表</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">clear</span> <span class="token operator">=</span> clear<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">find</span> <span class="token operator">=</span> find<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">toString</span> <span class="token operator">=</span> toString<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">insert</span> <span class="token operator">=</span> insert<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">append</span> <span class="token operator">=</span> append<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">remove</span> <span class="token operator">=</span> remove<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">front</span> <span class="token operator">=</span> front<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">end</span> <span class="token operator">=</span> end<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">prev</span> <span class="token operator">=</span> prev<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">next</span> <span class="token operator">=</span> next<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">=</span> length<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">currPos</span> <span class="token operator">=</span> currPos<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">moveTo</span> <span class="token operator">=</span> moveTo<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">getElement</span> <span class="token operator">=</span> getElement<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">contains</span> <span class="token operator">=</span> contains<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="append%E7%BB%99%E5%88%97%E8%A1%A8%E6%B7%BB%E5%8A%A0%E5%85%83%E7%B4%A0">append：给列表添加元素<a class="anchor" href="#append%E7%BB%99%E5%88%97%E8%A1%A8%E6%B7%BB%E5%8A%A0%E5%85%83%E7%B4%A0">§</a></h3>\n<p>该方法给列表的下一个位置增加一个新的元素， 这个位置刚好等于变量 listSize 的值：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span><span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 当新元素就位后，变量listSize加1</span>\n</code></pre>\n<h3 id="find%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9F%A5%E6%89%BE%E6%9F%90%E4%B8%80%E5%85%83%E7%B4%A0">find：在列表中查找某一元素<a class="anchor" href="#find%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9F%A5%E6%89%BE%E6%9F%90%E4%B8%80%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> i<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="remove%E4%BB%8E%E5%88%97%E8%A1%A8%E4%B8%AD%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0">remove：从列表中删除元素<a class="anchor" href="#remove%E4%BB%8E%E5%88%97%E8%A1%A8%E4%B8%AD%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> foundAt <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>foundAt <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">.</span><span class="token method function property-access">splice</span><span class="token punctuation">(</span>foundAt<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span><span class="token punctuation">;</span>\n        <span class="token keyword control-flow">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="length%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9C%89%E5%A4%9A%E5%B0%91%E4%B8%AA%E5%85%83%E7%B4%A0">length：列表中有多少个元素<a class="anchor" href="#length%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9C%89%E5%A4%9A%E5%B0%91%E4%B8%AA%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="tostring%E6%98%BE%E7%A4%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0">toString：显示列表中的元素<a class="anchor" href="#tostring%E6%98%BE%E7%A4%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="insert%E5%90%91%E5%88%97%E8%A1%A8%E4%B8%AD%E6%8F%92%E5%85%A5%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0">insert：向列表中插入一个元素<a class="anchor" href="#insert%E5%90%91%E5%88%97%E8%A1%A8%E4%B8%AD%E6%8F%92%E5%85%A5%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0">§</a></h3>\n<p>insert() 方法需要知道将元素插入到什么位置， 因此现在我们假设插入是指插入到列表中某个元素之后。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> after</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> insertPos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span>after<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>insertPos <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">.</span><span class="token method function property-access">splice</span><span class="token punctuation">(</span>insertPos<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span><span class="token punctuation">;</span>\n        <span class="token keyword control-flow">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="clear%E6%B8%85%E7%A9%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0">clear：清空列表中所有元素<a class="anchor" href="#clear%E6%B8%85%E7%A9%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>clear() 方法使用 delete 操作符删除数组 dataStore， 接着在下一行创建一个空数组。 最后一行将 listSize 和 pos 的值设为 1， 表明这是一个新的空列表。</p>\n<h2 id="contains%E5%88%A4%E6%96%AD%E7%BB%99%E5%AE%9A%E5%80%BC%E6%98%AF%E5%90%A6%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD">contains：判断给定值是否在列表中<a class="anchor" href="#contains%E5%88%A4%E6%96%AD%E7%BB%99%E5%AE%9A%E5%80%BC%E6%98%AF%E5%90%A6%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E9%81%8D%E5%8E%86%E5%88%97%E8%A1%A8">遍历列表<a class="anchor" href="#%E9%81%8D%E5%8E%86%E5%88%97%E8%A1%A8">§</a></h3>\n<p>最后的一组方法允许用户在列表上自由移动， 最后一个方法 getElement() 返回列表的当前元素：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">currPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> position<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E4%BD%BF%E7%94%A8%E8%BF%AD%E4%BB%A3%E5%99%A8%E8%AE%BF%E9%97%AE%E5%88%97%E8%A1%A8">使用迭代器访问列表<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E8%BF%AD%E4%BB%A3%E5%99%A8%E8%AE%BF%E9%97%AE%E5%88%97%E8%A1%A8">§</a></h2>\n<p>使用迭代器， 可以不必关心数据的内部存储方式， 以实现对列表的遍历。 前面提到的方法front()、 end()、 prev()、 next() 和 currPos() 就实现了 List 类的一个迭代器。 以下是和使用数组索引的方式相比， 使用迭代器的一些优点。</p>\n<ul>\n<li>访问列表元素时不必关心底层的数据存储结构。</li>\n<li>当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器。</li>\n<li>可以用不同类型的数据存储方式实现List类，迭代器为访问列表里的元素提供了一种统一的方式。</li>\n</ul>\n<p>了解了这些优点后， 来看一个使用迭代器遍历列表的例子：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword control-flow">for</span> <span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token method function property-access">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> names<span class="token punctuation">.</span><span class="token method function property-access">currPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> names<span class="token punctuation">.</span><span class="token method function property-access">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> names<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token method function property-access">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>在 for 循环的一开始， 将列表的当前位置设置为第一个元素。 只要 currPos 的值小于列表的长度， 就一直循环， 每一次循环都调用 next() 方法将当前位置向前移动一位。同理， 还可以从后向前遍历列表， 代码如下：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword control-flow">for</span> <span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token method function property-access">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> names<span class="token punctuation">.</span><span class="token method function property-access">currPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> names<span class="token punctuation">.</span><span class="token method function property-access">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token method function property-access">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>循环从列表的最后一个元素开始， 当当前位置大于或等于 0 时， 调用 prev() 方法后移一位。</p>\n<p>迭代器只是用来在列表上随意移动， 而不应该和任何为列表增加或删除元素的方法一起使用。</p>\n<h2 id="%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%E5%88%97%E8%A1%A8%E7%9A%84%E5%BA%94%E7%94%A8">一个基于列表的应用<a class="anchor" href="#%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%E5%88%97%E8%A1%A8%E7%9A%84%E5%BA%94%E7%94%A8">§</a></h2>\n<p>为了展示如何使用列表， 我们将实现一个类似 Redbox 的影碟租赁自助查询系统。</p>\n<h3 id="%E8%AF%BB%E5%8F%96%E6%96%87%E6%9C%AC%E6%96%87%E4%BB%B6">读取文本文件<a class="anchor" href="#%E8%AF%BB%E5%8F%96%E6%96%87%E6%9C%AC%E6%96%87%E4%BB%B6">§</a></h3>\n<p>为了得到商店内的影碟清单， 我们需要将数据从文件中读进来。 首先， 使用一个文本编辑器输入现有影碟清单， 假设将该文件保存为 films.txt。 该文件的内容如下（这是由 IMDB用户在 2013 年 10 月 5 日选出的 20 部最佳影片）。</p>\n<p>(1) The Shawshank Redemption（《肖申克的救赎》）</p>\n<p>(2) The Godfather（《教父》）</p>\n<p>(3) The Godfather: Part II（《教父 2》）</p>\n<p>(4) Pulp Fiction（《低俗小说》）</p>\n<p>(5) The Good, the Bad and the Ugly（《黄金三镖客》）</p>\n<p>(6) 12 Angry Men（《十二怒汉》 ）</p>\n<p>(7) Schindler’s List（《辛德勒名单》）</p>\n<p>(8) The Dark Knight（《黑暗骑士》）</p>\n<p>(9) The Lord of the Rings: The Return of the King（《指环王： 王者归来》）</p>\n<p>(10) Fight Club（《搏击俱乐部》）</p>\n<p>(11) Star Wars: Episode V - The Empire Strikes Back（《星球大战 5： 帝国反击战》）</p>\n<p>(12) One Flew Over the Cuckoo’s Nest（《飞越疯人院》）</p>\n<p>(13) The Lord of the Rings: The Fellowship of the Ring（《指环王： 护戒使者》）</p>\n<p>(14) Inception（《盗梦空间》）</p>\n<p>(15) Goodfellas（《好家伙》）</p>\n<p>(16) Star Wars（《星球大战》）</p>\n<p>(17) Seven Samurai（《七武士》）</p>\n<p>(18) The Matrix（《黑客帝国》）</p>\n<p>(19) Forrest Gump（《阿甘正传》）</p>\n<p>(20) City of God（《上帝之城》）</p>\n<p>现在， 我们需要一段程序来读取文件内容：(这里通过nodejs的文件读取模块)</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> movies <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token method function property-access">readFileSync</span><span class="token punctuation">(</span><span class="token string">\'films.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'utf-8\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\n\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这一行代码做了两件事。 首先， 它通过调用函数 read(films.txt) 读取了文本文件的内容；其次， 它将读进来的内容按照换行符分成了不同行， 然后保存到数组 movies 中。</p>\n<p>这一行代码做了两件事。 首先， 它通过调用函数 read(films.txt) 读取了文本文件的内容；其次， 它将读进来的内容按照换行符分成了不同行， 然后保存到数组 movies 中。这行程序挺管用， 但还谈不上完美。 当读进来的内容被分割成数组后， 换行符被替换成空格。 多一个空格看起来无伤大雅， 但是在比较字符串时却是个灾难。 因此， 我们需要在循环里， 使用 trim() 方法删除每个数组元素末尾的空格。 要是有一个函数能把这些操作封装起来那是再好不过了， 那就让我们定义一个这样的方法吧。 从文件中读入数据， 然后将结果保存到一个数组中：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">createArr</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> movies <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token method function property-access">readFileSync</span><span class="token punctuation">(</span><span class="token string">\'films.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'utf-8\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\n\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> movies<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        movies<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> movies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token method function property-access">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> movies<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%BD%B1%E7%A2%9F%E7%A7%9F%E8%B5%81">使用列表管理影碟租赁<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%BD%B1%E7%A2%9F%E7%A7%9F%E8%B5%81">§</a></h3>\n<p>下一步要将数组 movies 中的元素保存到一个列表中。 代码如下:</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> movieList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> movies<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    movieList<span class="token punctuation">.</span><span class="token method function property-access">append</span><span class="token punctuation">(</span>movies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>现在可以写一个函数来显示影碟店里现有的影碟清单了：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">displayList</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token method function property-access">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> list<span class="token punctuation">.</span><span class="token method function property-access">currPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token method function property-access">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> list<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token method function property-access">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5JavaScript-\u5217\u8868"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%88%97%E8%A1%A8%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89">列表的抽象数据类型定义<a class="anchor" href="#%E5%88%97%E8%A1%A8%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>方法和方法</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>listSize(属性)</td>\n<td>列表的元素个数</td>\n</tr>\n<tr>\n<td>pos(属性)</td>\n<td>列表的当前位置</td>\n</tr>\n<tr>\n<td>length(属性)</td>\n<td>返回列表中元素的个数</td>\n</tr>\n<tr>\n<td>clear(方法)</td>\n<td>清空列表中的所有元素</td>\n</tr>\n<tr>\n<td>toString(方法)</td>\n<td>返回列表的字符串形式</td>\n</tr>\n<tr>\n<td>getElement(方法)</td>\n<td>返回当前位置的元素</td>\n</tr>\n<tr>\n<td>insert(方法)</td>\n<td>在现有元素后插入新元素</td>\n</tr>\n<tr>\n<td>append(方法)</td>\n<td>在列表的末尾添加新元素</td>\n</tr>\n<tr>\n<td>remove(方法)</td>\n<td>从列表中删除元素</td>\n</tr>\n<tr>\n<td>front(方法)</td>\n<td>将列表的当前位置移动到第一个元素</td>\n</tr>\n<tr>\n<td>end(方法)</td>\n<td>将列表的当前位置移动到最后一个元素</td>\n</tr>\n<tr>\n<td>prev(方法)</td>\n<td>将当前位置前移一位</td>\n</tr>\n<tr>\n<td>next(方法)</td>\n<td>将当前位置后移一位</td>\n</tr>\n<tr>\n<td>currPos(方法)</td>\n<td>返回列表的当前位置</td>\n</tr>\n<tr>\n<td>moveTo(方法)</td>\n<td>将当前位置移动到指定位置</td>\n</tr>\n<tr>\n<td>find(方法)</td>\n<td>在列表中查找某一元素</td>\n</tr>\n<tr>\n<td>contains(方法)</td>\n<td>判断给定值是否在列表中</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="%E5%AE%9E%E7%8E%B0%E5%88%97%E8%A1%A8%E7%B1%BB">实现列表类<a class="anchor" href="#%E5%AE%9E%E7%8E%B0%E5%88%97%E8%A1%A8%E7%B1%BB">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">List</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 初始化一个空数组来保存列表</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">clear</span> <span class="token operator">=</span> clear<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">find</span> <span class="token operator">=</span> find<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">toString</span> <span class="token operator">=</span> toString<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">insert</span> <span class="token operator">=</span> insert<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">append</span> <span class="token operator">=</span> append<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">remove</span> <span class="token operator">=</span> remove<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">front</span> <span class="token operator">=</span> front<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">end</span> <span class="token operator">=</span> end<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">prev</span> <span class="token operator">=</span> prev<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">next</span> <span class="token operator">=</span> next<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">=</span> length<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">currPos</span> <span class="token operator">=</span> currPos<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">moveTo</span> <span class="token operator">=</span> moveTo<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">getElement</span> <span class="token operator">=</span> getElement<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">contains</span> <span class="token operator">=</span> contains<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="append%E7%BB%99%E5%88%97%E8%A1%A8%E6%B7%BB%E5%8A%A0%E5%85%83%E7%B4%A0">append：给列表添加元素<a class="anchor" href="#append%E7%BB%99%E5%88%97%E8%A1%A8%E6%B7%BB%E5%8A%A0%E5%85%83%E7%B4%A0">§</a></h3>\n<p>该方法给列表的下一个位置增加一个新的元素， 这个位置刚好等于变量 listSize 的值：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span><span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 当新元素就位后，变量listSize加1</span>\n</code></pre>\n<h3 id="find%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9F%A5%E6%89%BE%E6%9F%90%E4%B8%80%E5%85%83%E7%B4%A0">find：在列表中查找某一元素<a class="anchor" href="#find%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9F%A5%E6%89%BE%E6%9F%90%E4%B8%80%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> i<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="remove%E4%BB%8E%E5%88%97%E8%A1%A8%E4%B8%AD%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0">remove：从列表中删除元素<a class="anchor" href="#remove%E4%BB%8E%E5%88%97%E8%A1%A8%E4%B8%AD%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> foundAt <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>foundAt <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">.</span><span class="token method function property-access">splice</span><span class="token punctuation">(</span>foundAt<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span><span class="token punctuation">;</span>\n        <span class="token keyword control-flow">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="length%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9C%89%E5%A4%9A%E5%B0%91%E4%B8%AA%E5%85%83%E7%B4%A0">length：列表中有多少个元素<a class="anchor" href="#length%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9C%89%E5%A4%9A%E5%B0%91%E4%B8%AA%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="tostring%E6%98%BE%E7%A4%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0">toString：显示列表中的元素<a class="anchor" href="#tostring%E6%98%BE%E7%A4%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="insert%E5%90%91%E5%88%97%E8%A1%A8%E4%B8%AD%E6%8F%92%E5%85%A5%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0">insert：向列表中插入一个元素<a class="anchor" href="#insert%E5%90%91%E5%88%97%E8%A1%A8%E4%B8%AD%E6%8F%92%E5%85%A5%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0">§</a></h3>\n<p>insert() 方法需要知道将元素插入到什么位置， 因此现在我们假设插入是指插入到列表中某个元素之后。</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> after</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> insertPos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span>after<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>insertPos <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">.</span><span class="token method function property-access">splice</span><span class="token punctuation">(</span>insertPos<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span><span class="token punctuation">;</span>\n        <span class="token keyword control-flow">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="clear%E6%B8%85%E7%A9%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0">clear：清空列表中所有元素<a class="anchor" href="#clear%E6%B8%85%E7%A9%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0">§</a></h3>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>clear() 方法使用 delete 操作符删除数组 dataStore， 接着在下一行创建一个空数组。 最后一行将 listSize 和 pos 的值设为 1， 表明这是一个新的空列表。</p>\n<h2 id="contains%E5%88%A4%E6%96%AD%E7%BB%99%E5%AE%9A%E5%80%BC%E6%98%AF%E5%90%A6%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD">contains：判断给定值是否在列表中<a class="anchor" href="#contains%E5%88%A4%E6%96%AD%E7%BB%99%E5%AE%9A%E5%80%BC%E6%98%AF%E5%90%A6%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD">§</a></h2>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E9%81%8D%E5%8E%86%E5%88%97%E8%A1%A8">遍历列表<a class="anchor" href="#%E9%81%8D%E5%8E%86%E5%88%97%E8%A1%A8">§</a></h3>\n<p>最后的一组方法允许用户在列表上自由移动， 最后一个方法 getElement() 返回列表的当前元素：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">listSize</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">currPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span> <span class="token operator">=</span> position<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">dataStore</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">pos</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E4%BD%BF%E7%94%A8%E8%BF%AD%E4%BB%A3%E5%99%A8%E8%AE%BF%E9%97%AE%E5%88%97%E8%A1%A8">使用迭代器访问列表<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E8%BF%AD%E4%BB%A3%E5%99%A8%E8%AE%BF%E9%97%AE%E5%88%97%E8%A1%A8">§</a></h2>\n<p>使用迭代器， 可以不必关心数据的内部存储方式， 以实现对列表的遍历。 前面提到的方法front()、 end()、 prev()、 next() 和 currPos() 就实现了 List 类的一个迭代器。 以下是和使用数组索引的方式相比， 使用迭代器的一些优点。</p>\n<ul>\n<li>访问列表元素时不必关心底层的数据存储结构。</li>\n<li>当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器。</li>\n<li>可以用不同类型的数据存储方式实现List类，迭代器为访问列表里的元素提供了一种统一的方式。</li>\n</ul>\n<p>了解了这些优点后， 来看一个使用迭代器遍历列表的例子：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword control-flow">for</span> <span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token method function property-access">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> names<span class="token punctuation">.</span><span class="token method function property-access">currPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> names<span class="token punctuation">.</span><span class="token method function property-access">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> names<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token method function property-access">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>在 for 循环的一开始， 将列表的当前位置设置为第一个元素。 只要 currPos 的值小于列表的长度， 就一直循环， 每一次循环都调用 next() 方法将当前位置向前移动一位。同理， 还可以从后向前遍历列表， 代码如下：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword control-flow">for</span> <span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token method function property-access">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> names<span class="token punctuation">.</span><span class="token method function property-access">currPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> names<span class="token punctuation">.</span><span class="token method function property-access">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token method function property-access">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>循环从列表的最后一个元素开始， 当当前位置大于或等于 0 时， 调用 prev() 方法后移一位。</p>\n<p>迭代器只是用来在列表上随意移动， 而不应该和任何为列表增加或删除元素的方法一起使用。</p>\n<h2 id="%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%E5%88%97%E8%A1%A8%E7%9A%84%E5%BA%94%E7%94%A8">一个基于列表的应用<a class="anchor" href="#%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%E5%88%97%E8%A1%A8%E7%9A%84%E5%BA%94%E7%94%A8">§</a></h2>\n<p>为了展示如何使用列表， 我们将实现一个类似 Redbox 的影碟租赁自助查询系统。</p>\n<h3 id="%E8%AF%BB%E5%8F%96%E6%96%87%E6%9C%AC%E6%96%87%E4%BB%B6">读取文本文件<a class="anchor" href="#%E8%AF%BB%E5%8F%96%E6%96%87%E6%9C%AC%E6%96%87%E4%BB%B6">§</a></h3>\n<p>为了得到商店内的影碟清单， 我们需要将数据从文件中读进来。 首先， 使用一个文本编辑器输入现有影碟清单， 假设将该文件保存为 films.txt。 该文件的内容如下（这是由 IMDB用户在 2013 年 10 月 5 日选出的 20 部最佳影片）。</p>\n<p>(1) The Shawshank Redemption（《肖申克的救赎》）</p>\n<p>(2) The Godfather（《教父》）</p>\n<p>(3) The Godfather: Part II（《教父 2》）</p>\n<p>(4) Pulp Fiction（《低俗小说》）</p>\n<p>(5) The Good, the Bad and the Ugly（《黄金三镖客》）</p>\n<p>(6) 12 Angry Men（《十二怒汉》 ）</p>\n<p>(7) Schindler’s List（《辛德勒名单》）</p>\n<p>(8) The Dark Knight（《黑暗骑士》）</p>\n<p>(9) The Lord of the Rings: The Return of the King（《指环王： 王者归来》）</p>\n<p>(10) Fight Club（《搏击俱乐部》）</p>\n<p>(11) Star Wars: Episode V - The Empire Strikes Back（《星球大战 5： 帝国反击战》）</p>\n<p>(12) One Flew Over the Cuckoo’s Nest（《飞越疯人院》）</p>\n<p>(13) The Lord of the Rings: The Fellowship of the Ring（《指环王： 护戒使者》）</p>\n<p>(14) Inception（《盗梦空间》）</p>\n<p>(15) Goodfellas（《好家伙》）</p>\n<p>(16) Star Wars（《星球大战》）</p>\n<p>(17) Seven Samurai（《七武士》）</p>\n<p>(18) The Matrix（《黑客帝国》）</p>\n<p>(19) Forrest Gump（《阿甘正传》）</p>\n<p>(20) City of God（《上帝之城》）</p>\n<p>现在， 我们需要一段程序来读取文件内容：(这里通过nodejs的文件读取模块)</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> movies <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token method function property-access">readFileSync</span><span class="token punctuation">(</span><span class="token string">\'films.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'utf-8\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\n\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这一行代码做了两件事。 首先， 它通过调用函数 read(films.txt) 读取了文本文件的内容；其次， 它将读进来的内容按照换行符分成了不同行， 然后保存到数组 movies 中。</p>\n<p>这一行代码做了两件事。 首先， 它通过调用函数 read(films.txt) 读取了文本文件的内容；其次， 它将读进来的内容按照换行符分成了不同行， 然后保存到数组 movies 中。这行程序挺管用， 但还谈不上完美。 当读进来的内容被分割成数组后， 换行符被替换成空格。 多一个空格看起来无伤大雅， 但是在比较字符串时却是个灾难。 因此， 我们需要在循环里， 使用 trim() 方法删除每个数组元素末尾的空格。 要是有一个函数能把这些操作封装起来那是再好不过了， 那就让我们定义一个这样的方法吧。 从文件中读入数据， 然后将结果保存到一个数组中：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">createArr</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> movies <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token method function property-access">readFileSync</span><span class="token punctuation">(</span><span class="token string">\'films.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'utf-8\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">\'\n\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> movies<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        movies<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> movies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token method function property-access">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword control-flow">return</span> movies<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%BD%B1%E7%A2%9F%E7%A7%9F%E8%B5%81">使用列表管理影碟租赁<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%BD%B1%E7%A2%9F%E7%A7%9F%E8%B5%81">§</a></h3>\n<p>下一步要将数组 movies 中的元素保存到一个列表中。 代码如下:</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> movieList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> movies<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    movieList<span class="token punctuation">.</span><span class="token method function property-access">append</span><span class="token punctuation">(</span>movies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>现在可以写一个函数来显示影碟店里现有的影碟清单了：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">displayList</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token method function property-access">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> list<span class="token punctuation">.</span><span class="token method function property-access">currPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token method function property-access">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> list<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token method function property-access">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%88%97%E8%A1%A8%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89">列表的抽象数据类型定义</a></li><li><a href="#%E5%AE%9E%E7%8E%B0%E5%88%97%E8%A1%A8%E7%B1%BB">实现列表类</a><ol><li><a href="#append%E7%BB%99%E5%88%97%E8%A1%A8%E6%B7%BB%E5%8A%A0%E5%85%83%E7%B4%A0">append：给列表添加元素</a></li><li><a href="#find%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9F%A5%E6%89%BE%E6%9F%90%E4%B8%80%E5%85%83%E7%B4%A0">find：在列表中查找某一元素</a></li><li><a href="#remove%E4%BB%8E%E5%88%97%E8%A1%A8%E4%B8%AD%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0">remove：从列表中删除元素</a></li><li><a href="#length%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9C%89%E5%A4%9A%E5%B0%91%E4%B8%AA%E5%85%83%E7%B4%A0">length：列表中有多少个元素</a></li><li><a href="#tostring%E6%98%BE%E7%A4%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0">toString：显示列表中的元素</a></li><li><a href="#insert%E5%90%91%E5%88%97%E8%A1%A8%E4%B8%AD%E6%8F%92%E5%85%A5%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0">insert：向列表中插入一个元素</a></li><li><a href="#clear%E6%B8%85%E7%A9%BA%E5%88%97%E8%A1%A8%E4%B8%AD%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0">clear：清空列表中所有元素</a></li></ol></li><li><a href="#contains%E5%88%A4%E6%96%AD%E7%BB%99%E5%AE%9A%E5%80%BC%E6%98%AF%E5%90%A6%E5%9C%A8%E5%88%97%E8%A1%A8%E4%B8%AD">contains：判断给定值是否在列表中</a><ol><li><a href="#%E9%81%8D%E5%8E%86%E5%88%97%E8%A1%A8">遍历列表</a></li></ol></li><li><a href="#%E4%BD%BF%E7%94%A8%E8%BF%AD%E4%BB%A3%E5%99%A8%E8%AE%BF%E9%97%AE%E5%88%97%E8%A1%A8">使用迭代器访问列表</a></li><li><a href="#%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%E5%88%97%E8%A1%A8%E7%9A%84%E5%BA%94%E7%94%A8">一个基于列表的应用</a><ol><li><a href="#%E8%AF%BB%E5%8F%96%E6%96%87%E6%9C%AC%E6%96%87%E4%BB%B6">读取文本文件</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E7%AE%A1%E7%90%86%E5%BD%B1%E7%A2%9F%E7%A7%9F%E8%B5%81">使用列表管理影碟租赁</a></li></ol></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-01-22T08:08:14.000Z",
    'updated': "2021-01-25T02:27:19.000Z",
    'excerpt': "列表的抽象数据类型定义 方法和方法 说明 listSize(属性) 列表的元素个数 pos(属性) 列表的当前位置 length(属性) 返回列表中元素的个数 clear(方法) 清空列表中的所有元素 toString(方法) 返回列表的字符串形式 getElement(方...",
    'cover': undefined,
    'categories': [
        "数据结构与算法"
    ],
    'tags': [
        "JavaScript",
        "数据结构与算法",
        "学习笔记"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "updated": "2021-02-28T14:15:53.000Z",
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
                "excerpt": "构造函数 本质就是函数，与普通函数一样，一般命名首字母大写来与普通函数区分，用new关键字调用。 **每个函数再创建时，会自动创建prototype属性，它指向一个对象，这个对象正是调用该构造函数而创建的实例的原型。**每一个Ja..."
            },
            {
                "pagePath": "posts/UE4.md",
                "title": "UE4学习笔记",
                "link": "posts/UE4.html",
                "date": "2021-02-01T04:46:51.000Z",
                "updated": "2021-03-02T08:17:37.000Z",
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
                "name": "微信的坑",
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
                "name": "渐变",
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
