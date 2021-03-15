import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/UE4.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/UE4.html",
    'title': "UE4学习笔记",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>UE4学习笔记</h1>\n<ol>\n<li>常用快捷键</li>\n</ol>\n<p><img src="images/shortcut_key1.png" alt=""></p>\n<p><img src="images/shortcut_key2.png" alt=""></p>\n<p><img src="images/shortcut_key3.png" alt=""></p>\n<ol start="2">\n<li>\n<p>变更路线节点：<code>Reroute Node</code></p>\n</li>\n<li>\n<p><code>Execute Console Command</code>命令</p>\n<ol>\n<li>设置分辨率<code>r.setRes 1920x1080</code></li>\n<li><code>r.ScreenPercentage 200</code>：双倍渲染</li>\n</ol>\n</li>\n</ol>\n<h2 id="ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">UE4像素流送系统<a class="anchor" href="#ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">§</a></h2>\n<h3 id="%E7%89%B9%E7%82%B9">特点：<a class="anchor" href="#%E7%89%B9%E7%82%B9">§</a></h3>\n<ol>\n<li>流送并非播放预先录制的视频片段，而是播放虚幻引擎实时生成的渲染帧和音频。</li>\n<li>用户可通过自己的浏览器对体验进行控制，将键盘、鼠标、触摸事件和播放器网页发出的自定义事件发送回虚幻引擎。</li>\n</ol>\n<h3 id="%E4%BC%98%E7%82%B9">优点：<a class="anchor" href="#%E4%BC%98%E7%82%B9">§</a></h3>\n<h2 id="%E5%87%BD%E6%95%B0">函数<a class="anchor" href="#%E5%87%BD%E6%95%B0">§</a></h2>\n<ol start="4">\n<li><code>Is Valid</code>：如果对象可用（不为<code>null</code>或者<code>not pending kill</code>则返回<code>true</code></li>\n<li><code>Break Rotator</code>：将旋转器分解为以度为单位的侧倾角（Roll），俯仰角（Pitch）和偏航角（Yaw）</li>\n<li><code>Set Render Transform Angle</code>：设置渲染变换角度</li>\n<li><code>Set Style</code>：设置按钮的样式</li>\n<li><code>Play Animation</code>：播放动画</li>\n<li><code>Load Stream Level</code>：加载流送关卡</li>\n<li><code>Unload Stream Level</code>：卸载流送关卡</li>\n<li><code>Set Show Mouse Cursor</code>：设置是否显示鼠标</li>\n<li><code>Get Parent</code>：获取当前控件的父控件</li>\n<li><code>Get Children Count</code>：获取当前容器控件中的子控件数量（需要通过<code>Get Parent</code>获取）</li>\n<li><code>Get Children At</code>：通过索引获取对应的控件（需要通过<code>Get Parent</code>获取）</li>\n<li><code>Set Is Enabled</code>：设置控件是否可以和用户交互</li>\n<li><code>Execute Console Command</code>：执行控制台命令\n<ol>\n<li><code>DisableAllScreenMessages</code>：禁止所有屏幕信息</li>\n</ol>\n</li>\n</ol>\n<h3 id=""><a class="anchor" href="#">§</a></h3>\n<h3 id="audio">Audio<a class="anchor" href="#audio">§</a></h3>\n<ol>\n<li>Play Sound 2D：直接播放无衰减的声音，适用与UI声音</li>\n</ol>\n<h3 id="development">Development<a class="anchor" href="#development">§</a></h3>\n<ol>\n<li><code>Set Hidden in Game</code>：设置<code>Scene Component</code>的显示隐藏</li>\n</ol>\n<h3 id="user-interface">User Interface<a class="anchor" href="#user-interface">§</a></h3>\n<ol>\n<li><code>Get User Widget Object</code>：通过<code>Widget Component</code>控件返回用户控件对象</li>\n</ol>\n<h3 id="viewport">Viewport<a class="anchor" href="#viewport">§</a></h3>\n<ol>\n<li><code>Get Mouse Position on Platform</code>：获得鼠标在当前平台的位置</li>\n<li><code>Get Mouse Position on Viewport</code>：获得鼠标在当前视口的位置</li>\n<li><code>Add to Viewport</code>：将User Widget添加到视口</li>\n<li></li>\n</ol>\n<h3 id="time">Time<a class="anchor" href="#time">§</a></h3>\n<ol>\n<li><code>Set Timer by Event</code>：设定一个计时器来执行事件委托，设置已经存在的计时器（如设置自身）将会更新参数。</li>\n<li><code>Clear and Invalidate Timer by Handle</code>：手动清除设置的定时器</li>\n</ol>\n<h3 id="game">Game<a class="anchor" href="#game">§</a></h3>\n<ol>\n<li><code>Quit Game</code>：退出当前游戏</li>\n<li><code>Load Stream Level</code>：</li>\n</ol>\n<h3 id="rendering">Rendering<a class="anchor" href="#rendering">§</a></h3>\n<ol>\n<li><code>Get Supported Fullscreen Resolution</code>：获得支持的全屏分辨率列表</li>\n</ol>\n<h3 id="settings">Settings<a class="anchor" href="#settings">§</a></h3>\n<ol>\n<li><code>Get Game User Settings</code>：返回游戏本地的设置（分辨率，窗口模式，缩放设置等）\n<ol>\n<li><code>Get Fullscreen Mode</code>：返回用户设定的窗口全屏模式\n<ol>\n<li><code>Switch on EWindowMode</code>：从<code>Fullscreen、Windowed Fullscreen、Windowed</code>匹配与输入相同的输出值。</li>\n</ol>\n</li>\n<li><code>Set Fullscreen Mode</code>：设置用户设定的窗口模式</li>\n<li><code>Set Screen Resolution</code>：设置屏幕分辨率</li>\n<li><code>Apply Resolution Settings</code>：应用分辨率设置</li>\n</ol>\n</li>\n</ol>\n<h3 id="window">Window<a class="anchor" href="#window">§</a></h3>\n<ol>\n<li><code>Get Window Mode</code>：返回当前窗口的模式</li>\n</ol>\n<h3 id="transformation">Transformation<a class="anchor" href="#transformation">§</a></h3>\n<ol>\n<li><code>Set Relative Scale 3D</code>：设置相对于其父项的组件的非均匀比例</li>\n</ol>\n<h3 id="user-interface-1">User Interface<a class="anchor" href="#user-interface-1">§</a></h3>\n<ol>\n<li><code>Get User Widget Of Object</code>：返回此组件显示的用户小部件对象</li>\n</ol>\n<h3 id="flow-control">Flow Control<a class="anchor" href="#flow-control">§</a></h3>\n<ol>\n<li><code>Delay</code>：延迟执行潜在操作（在几秒钟内指定）。倒计时时再次调用将被忽略。</li>\n</ol>\n<h3 id="material%E6%9D%90%E8%B4%A8">Material：材质<a class="anchor" href="#material%E6%9D%90%E8%B4%A8">§</a></h3>\n<ol>\n<li><code>Set Scalar Parameter Value</code>：在材料收集实例上设置标量参数值</li>\n</ol>\n<h3 id="widget">Widget<a class="anchor" href="#widget">§</a></h3>\n<ol>\n<li><code>Remove from Parent</code>：从其父窗口小部件中删除该窗口小部件。如果将此s小部件添加到播放器的屏幕或视口中，则也会从这些容器中删除。</li>\n</ol>\n<h3 id="sequence">Sequence<a class="anchor" href="#sequence">§</a></h3>\n<ol>\n<li><code>Varibale Type: Level Sequence Actor</code>：变量类型\n<ol>\n<li><code>get Sequence Player</code>：获取序列玩家\n<ol>\n<li><code>Play</code>：使用当前播放速率从当前时间光标位置开始向前播放。</li>\n<li><code>Play Looping</code>：从当前时间光标开始向前播放，循环特定次数，（-1表示无线循环）</li>\n<li><code>Stop</code>：停止播放，将时间光标移至最后</li>\n</ol>\n</li>\n</ol>\n</li>\n</ol>\n<h3 id="appearance">Appearance<a class="anchor" href="#appearance">§</a></h3>\n<ol>\n<li>Image控件变量\n<ol>\n<li><code>Set Brush from Texture</code>：设置图片</li>\n</ol>\n</li>\n<li>Widget\n<ol>\n<li><code>Is in Viewport</code>：判断widget是否已显示</li>\n</ol>\n</li>\n</ol>\n<h3 id="slot">Slot<a class="anchor" href="#slot">§</a></h3>\n<ol>\n<li><code>Slot as Canvas Slot</code>：将子对象上的插槽对象作为<code>画布插槽</code>获取，从而允许你操纵布局信息\n<ol>\n<li><code>Set Position</code>：设置slot的位置</li>\n<li><code>Get Position</code>：获取slot的位置</li>\n</ol>\n</li>\n</ol>\n<h3 id="layout">Layout<a class="anchor" href="#layout">§</a></h3>\n<h4 id="canvas-slot">Canvas Slot<a class="anchor" href="#canvas-slot">§</a></h4>\n<ol>\n<li><code>set Position</code>：设置插槽的位置</li>\n</ol>\n<h3 id="game-1">Game<a class="anchor" href="#game-1">§</a></h3>\n<ol>\n<li><code>Get Player Controller</code>：返回玩家控制器的索引\n<ol>\n<li><code>Get HUD</code>：获取当前的屏幕</li>\n</ol>\n</li>\n<li><code>Get Player Camera Manager</code>：返回指定玩家索引的玩家摄像机管理器\n<ol>\n<li><code>Get Camera Rotation</code>：返回相机的当前旋转</li>\n</ol>\n</li>\n</ol>\n<h3 id="math">Math<a class="anchor" href="#math">§</a></h3>\n<h4 id="float">Float<a class="anchor" href="#float">§</a></h4>\n<ol>\n<li><code>Truncate</code>：四舍五入</li>\n<li><code>Map Range Unclamped</code>：从一个范围映射到另一个范围</li>\n</ol>\n<h3 id="button">Button<a class="anchor" href="#button">§</a></h3>\n<ol>\n<li><code>Set Style</code>：设置按钮的倍增背景色</li>\n</ol>\n<h3 id="text">Text<a class="anchor" href="#text">§</a></h3>\n<ol>\n<li><code>Set Text</code>：设置<code>Text</code>控件的text</li>\n<li><code>Set Color and Opacity</code>：设置<code>Text</code>控件字体的颜色和透明度</li>\n</ol>\n<h3 id="panel">Panel<a class="anchor" href="#panel">§</a></h3>\n<ol>\n<li><code>Get All Children</code>：获取<code>Panel</code>下的所有子控件</li>\n</ol>\n<h3 id="map">Map<a class="anchor" href="#map">§</a></h3>\n<ol>\n<li><code>Keys</code>：输出一个包含当前map中的所有key的数组</li>\n<li><code>Find</code>：输出对应的key的值</li>\n</ol>\n<h3 id="array">Array<a class="anchor" href="#array">§</a></h3>\n<ol>\n<li><code>GET</code>：输入一个数组和一个索引，返回该索引对应元素的拷贝</li>\n<li><code>Clear</code>：清除数组中的所有元素</li>\n<li><code>Length</code>：获取数组长度</li>\n<li><code>Add</code>：添加一个元素到数组</li>\n<li><code>Contains</code>：判断数组是否包含一个元素，若包含则返回true</li>\n<li><code>Make Array</code>：创建一个数组</li>\n</ol>\n<h3 id="string">String<a class="anchor" href="#string">§</a></h3>\n<ol>\n<li><code>Append</code>：拼接字符串，返回新字符串</li>\n</ol>\n<h3 id="animation">Animation<a class="anchor" href="#animation">§</a></h3>\n<ol>\n<li><code>Is Animation Playing</code>：判断一个动画是否播放</li>\n<li><code>Reverse Animation</code>：如果动画已播放，则反转播放动画</li>\n</ol>\n<h3 id="transform">Transform<a class="anchor" href="#transform">§</a></h3>\n<ol>\n<li><code>Set Render Scale</code></li>\n</ol>\n<h2 id="%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">关卡流送（Level Streaming）<a class="anchor" href="#%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">§</a></h2>\n<p>在游戏时异步加载和卸载关卡，降低内存使用率，创建无缝的世界场景。</p>\n<h3 id="%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">世界场景构成（World Composition）<a class="anchor" href="#%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">§</a></h3>\n<p>世界场景构成用于创建大型场景的特定关卡流送形式。关卡分布在平面网格中，并在玩家靠近时流入。</p>\n<h4 id="%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90">激活世界场景构成<a class="anchor" href="#%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90">§</a></h4>\n<ol>\n<li>启用<code>世界场景设置(World Settings)</code>中的<code>启用世界场景构成(Enable World Composition)</code>标记来激活</li>\n<li>禁用<code>世界场景原点移位(World origin shifting)</code>：关闭<code>启用世界场景构成(Enable World Composition)</code></li>\n</ol>\n<p><img src="images/worldcomposition1.png" alt=""></p>\n<h4 id="%E5%85%B3%E5%8D%A1%E5%B1%82%E7%BA%A7levels-hierarchy">关卡层级(Levels Hierarchy)<a class="anchor" href="#%E5%85%B3%E5%8D%A1%E5%B1%82%E7%BA%A7levels-hierarchy">§</a></h4>\n<p>&quot;关卡&quot;窗口中的条目表示世界场景的层级。</p>\n<h2 id="umg%E6%8E%A7%E4%BB%B6">UMG控件<a class="anchor" href="#umg%E6%8E%A7%E4%BB%B6">§</a></h2>\n<h3 id="%E5%85%AC%E5%85%B1%E5%B1%9E%E6%80%A7">公共属性<a class="anchor" href="#%E5%85%AC%E5%85%B1%E5%B1%9E%E6%80%A7">§</a></h3>\n<ul>\n<li>\n<p><code>Slot</code>：</p>\n<ul>\n<li><code>Canvas Panel</code>中的<code>Slot</code>：设置控件在屏幕显示的位置和大小</li>\n<li><code>Overlay</code>中的<code>Slot</code>：设置控件相对父级的位置</li>\n</ul>\n</li>\n<li>\n<p><code>Tool Tip Text</code>：提示文字，可以绑定自定义UMG</p>\n</li>\n<li>\n<p><code>Visiblity</code>：可视性</p>\n<ul>\n<li><code>Visible</code></li>\n<li><code>Collapsed</code>：隐藏且不占位置</li>\n<li><code>Hidden</code>：隐藏且占位置</li>\n<li><code>Not Hit-Testable(Self &amp; All Child)</code>：可见但无交互</li>\n<li><code>Not Hit-Testable(Self Only)</code>：可见但子级可交互</li>\n</ul>\n</li>\n<li>\n<p><code>Transform</code>：设置控件的位移缩放等属性</p>\n<ul>\n<li><code>piovt</code>用来设置中心点</li>\n</ul>\n</li>\n<li>\n<p><code>Clipping</code>：裁切</p>\n</li>\n<li>\n<p><code>Is Volatile</code>：是否缓存控件</p>\n</li>\n<li>\n<p><code>Navigation</code>：手柄导航属性</p>\n</li>\n</ul>\n<h3 id="common%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6"><code>Common</code>中的控件<a class="anchor" href="#common%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">§</a></h3>\n<ul>\n<li>\n<p><code>Border</code>：可放图片，可以有一个子集</p>\n</li>\n<li>\n<p><code>Button</code>：按钮，点击事件</p>\n</li>\n<li>\n<p><code>Check Box</code>：复选框</p>\n</li>\n<li>\n<p><code>Image</code>：无子集</p>\n</li>\n<li>\n<p><code>Named Slot</code>：在用户创建的UMG下放置，相当于占位，可以让用户创建的UMG放置子集</p>\n</li>\n<li>\n<p><code>Progress Bar</code>：进度条</p>\n</li>\n<li>\n<p><code>Rich Text Block</code>：富文本</p>\n</li>\n<li>\n<p><code>Slider</code>：滑动条</p>\n</li>\n<li>\n<p><code>Text</code>：文字</p>\n</li>\n</ul>\n<h3 id="panel%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6"><code>Panel</code>中的控件<a class="anchor" href="#panel%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">§</a></h3>\n<ul>\n<li>\n<p><code>Canvas Panel</code>：</p>\n</li>\n<li>\n<p><code>Horizontal Box</code>：横向排列</p>\n</li>\n<li>\n<p><code>Vertical Box</code>：竖向排列</p>\n</li>\n<li>\n<p><code>Overlay</code>：重叠</p>\n</li>\n<li>\n<p><code>Size Box</code>：可覆盖子控件的原始尺寸</p>\n</li>\n<li>\n<p><code>Scale Box</code>：缩放框</p>\n</li>\n<li>\n<p><code>Scroll Box</code>：带滚动条</p>\n</li>\n<li>\n<p><code>Uniform Grid Panel</code>：可宫格排列</p>\n</li>\n<li>\n<p><code>Grid Panel</code>：宫格化排列，制作背包</p>\n</li>\n<li>\n<p><code>Safe Zone</code>：异形屏幕的安全区</p>\n</li>\n<li>\n<p><code>Widget Switcher</code>：控件切换器，像页签，子控件不能太多，会卡死</p>\n</li>\n<li>\n<p><code>Wrap Box</code>：可以让子控件换行</p>\n</li>\n</ul>\n<h3 id="input%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6"><code>Input</code>中的控件<a class="anchor" href="#input%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">§</a></h3>\n<ul>\n<li>\n<p><code>ComboBox</code>：下拉列表</p>\n</li>\n<li>\n<p><code>Editable Text</code>：可编辑文本</p>\n</li>\n<li>\n<p><code>Editable Text(Multi-Line)</code>：可换行的可编辑文本 (按shift + Enter换行)</p>\n</li>\n<li>\n<p><code>Text Box</code>：文本输入框</p>\n</li>\n<li>\n<p><code>Text Box (Multi-Line)</code>：多行文本输入框</p>\n</li>\n<li>\n<p><code>Spin Box</code>：可拖动缩放框</p>\n</li>\n</ul>\n<h3 id="lists%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6"><code>Lists</code>中的控件<a class="anchor" href="#lists%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">§</a></h3>\n<ul>\n<li><code>List View</code>：</li>\n</ul>\n<h2 id="%E5%9D%90%E6%A0%87%E7%A9%BA%E9%97%B4%E6%9C%AF%E8%AF%AD">坐标空间术语<a class="anchor" href="#%E5%9D%90%E6%A0%87%E7%A9%BA%E9%97%B4%E6%9C%AF%E8%AF%AD">§</a></h2>\n<h3 id="%E7%A9%BA%E9%97%B4">空间<a class="anchor" href="#%E7%A9%BA%E9%97%B4">§</a></h3>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>虚幻中的空间</th>\n<th>其他名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>切线(Tangent)</td>\n<td></td>\n<td>正交(可能在插值之后偏离)，可以是左旋或右旋。TangentToLocal变换仅包含旋转，因此它是标准正交(Orthonormal)(可以通过换位反转)</td>\n</tr>\n<tr>\n<td>局部(Local)</td>\n<td>对象空间(Object Space)</td>\n<td>正交，可以是左旋或右旋(三角形剔除顺序需要调整)。LocalToWorld变换包含旋转、非等分缩放(包括可能改变缠绕顺序的负非等分缩放)和平移</td>\n</tr>\n<tr>\n<td>世界场景(World)</td>\n<td></td>\n<td>WorldToView变换仅包含旋转和平移，因此视图空间中的距离与世界场景空间中的距离相同</td>\n</tr>\n<tr>\n<td>平移世界场景(TranslatedWorld)</td>\n<td></td>\n<td>世界场景：平移世界场景-预览平移</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>平移世界场景：世界场景+预览平移</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>平移的矩阵用于从组合的变换矩阵中移除相机位置，可在变换顶点时提高精度</td>\n</tr>\n<tr>\n<td>视图(View)</td>\n<td>摄像机空间(CameraSpace)</td>\n<td>ViewToClip变换包含x轴和y轴上的缩放，但不包含平移(如果平移的话将会是偏心投影)。它缩放并平移z轴。它还会应用投影来转换为齐次裁剪空间。</td>\n</tr>\n<tr>\n<td>裁剪(Clip)</td>\n<td>齐次坐标(HomogenlousCoordinates)，后摄影空间(PostProjectionSpace)，投影空间(ProjectionSpace)</td>\n<td>应用透视投影矩阵之后。请注意，裁剪空间中的W与视图空间Z中的相同</td>\n</tr>\n<tr>\n<td>屏幕(Screen)</td>\n<td>OpenGL中的标准化设备坐标(NormalizedDeviceCoordinates)</td>\n<td>经过透视分割之后：</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>左/右：-1,1</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>上/下：1,-1</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>近/远：0,1(OpenGL RHI需要将此变换为-1,1)</td>\n</tr>\n<tr>\n<td>视口(Viewport)</td>\n<td>视口坐标(ViewportCoordinates)，窗口坐标(WindowCoordinates)</td>\n<td>以像素计：</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>左/右：0,宽-1</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>上/下：0,高-1</td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="%E7%A9%BA%E9%97%B4%E5%8F%98%E6%8D%A2">空间变换<a class="anchor" href="#%E7%A9%BA%E9%97%B4%E5%8F%98%E6%8D%A2">§</a></h3>\n<p>应该始终使用 X To Y 的形式对空间之间的变换命名。</p>\n<p>示例：</p>\n<p>WorldToView</p>\n<p>TranslatedWorldToView</p>\n<p>TangentToWorld</p>\n<h2 id="%E5%8F%98%E9%87%8Fvariable">变量(Variable)<a class="anchor" href="#%E5%8F%98%E9%87%8Fvariable">§</a></h2>\n<ol>\n<li>文字颜色变量类型：<code>Slate Color</code></li>\n<li>图片颜色变量类型：<code>Linear Color</code></li>\n<li>图片变量类型：<code>Slate Brush</code></li>\n<li>图片数组变量类型：<code>Texture 2D</code></li>\n<li>定时器变量类型：<code>Timer Handle</code></li>\n<li>字体变量类型：<code>Slate Font Info</code></li>\n<li>Widget变量类型：<code>Widget Component</code></li>\n</ol>\n<h2 id="actor">Actor<a class="anchor" href="#actor">§</a></h2>\n<ol>\n<li>Static Mesh Component：\n<ol>\n<li>Events:\n<ol>\n<li><code>On Begin Cursor Over</code>：鼠标悬浮时触发</li>\n<li><code>On End Cursor Over</code>：鼠标移出时触发</li>\n</ol>\n</li>\n<li><code>Set Material</code>：设置材质</li>\n</ol>\n</li>\n<li><code>GetActorLocation</code>：返回当前Actor中RootComponent的位置</li>\n</ol>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "UE4\u5B66\u4E60\u7B14\u8BB0"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ol>\n<li>常用快捷键</li>\n</ol>\n<p><img src="images/shortcut_key1.png" alt=""></p>\n<p><img src="images/shortcut_key2.png" alt=""></p>\n<p><img src="images/shortcut_key3.png" alt=""></p>\n<ol start="2">\n<li>\n<p>变更路线节点：<code>Reroute Node</code></p>\n</li>\n<li>\n<p><code>Execute Console Command</code>命令</p>\n<ol>\n<li>设置分辨率<code>r.setRes 1920x1080</code></li>\n<li><code>r.ScreenPercentage 200</code>：双倍渲染</li>\n</ol>\n</li>\n</ol>\n<h2 id="ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">UE4像素流送系统<a class="anchor" href="#ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">§</a></h2>\n<h3 id="%E7%89%B9%E7%82%B9">特点：<a class="anchor" href="#%E7%89%B9%E7%82%B9">§</a></h3>\n<ol>\n<li>流送并非播放预先录制的视频片段，而是播放虚幻引擎实时生成的渲染帧和音频。</li>\n<li>用户可通过自己的浏览器对体验进行控制，将键盘、鼠标、触摸事件和播放器网页发出的自定义事件发送回虚幻引擎。</li>\n</ol>\n<h3 id="%E4%BC%98%E7%82%B9">优点：<a class="anchor" href="#%E4%BC%98%E7%82%B9">§</a></h3>\n<h2 id="%E5%87%BD%E6%95%B0">函数<a class="anchor" href="#%E5%87%BD%E6%95%B0">§</a></h2>\n<ol start="4">\n<li><code>Is Valid</code>：如果对象可用（不为<code>null</code>或者<code>not pending kill</code>则返回<code>true</code></li>\n<li><code>Break Rotator</code>：将旋转器分解为以度为单位的侧倾角（Roll），俯仰角（Pitch）和偏航角（Yaw）</li>\n<li><code>Set Render Transform Angle</code>：设置渲染变换角度</li>\n<li><code>Set Style</code>：设置按钮的样式</li>\n<li><code>Play Animation</code>：播放动画</li>\n<li><code>Load Stream Level</code>：加载流送关卡</li>\n<li><code>Unload Stream Level</code>：卸载流送关卡</li>\n<li><code>Set Show Mouse Cursor</code>：设置是否显示鼠标</li>\n<li><code>Get Parent</code>：获取当前控件的父控件</li>\n<li><code>Get Children Count</code>：获取当前容器控件中的子控件数量（需要通过<code>Get Parent</code>获取）</li>\n<li><code>Get Children At</code>：通过索引获取对应的控件（需要通过<code>Get Parent</code>获取）</li>\n<li><code>Set Is Enabled</code>：设置控件是否可以和用户交互</li>\n<li><code>Execute Console Command</code>：执行控制台命令\n<ol>\n<li><code>DisableAllScreenMessages</code>：禁止所有屏幕信息</li>\n</ol>\n</li>\n</ol>\n<h3 id=""><a class="anchor" href="#">§</a></h3>\n<h3 id="audio">Audio<a class="anchor" href="#audio">§</a></h3>\n<ol>\n<li>Play Sound 2D：直接播放无衰减的声音，适用与UI声音</li>\n</ol>\n<h3 id="development">Development<a class="anchor" href="#development">§</a></h3>\n<ol>\n<li><code>Set Hidden in Game</code>：设置<code>Scene Component</code>的显示隐藏</li>\n</ol>\n<h3 id="user-interface">User Interface<a class="anchor" href="#user-interface">§</a></h3>\n<ol>\n<li><code>Get User Widget Object</code>：通过<code>Widget Component</code>控件返回用户控件对象</li>\n</ol>\n<h3 id="viewport">Viewport<a class="anchor" href="#viewport">§</a></h3>\n<ol>\n<li><code>Get Mouse Position on Platform</code>：获得鼠标在当前平台的位置</li>\n<li><code>Get Mouse Position on Viewport</code>：获得鼠标在当前视口的位置</li>\n<li><code>Add to Viewport</code>：将User Widget添加到视口</li>\n<li></li>\n</ol>\n<h3 id="time">Time<a class="anchor" href="#time">§</a></h3>\n<ol>\n<li><code>Set Timer by Event</code>：设定一个计时器来执行事件委托，设置已经存在的计时器（如设置自身）将会更新参数。</li>\n<li><code>Clear and Invalidate Timer by Handle</code>：手动清除设置的定时器</li>\n</ol>\n<h3 id="game">Game<a class="anchor" href="#game">§</a></h3>\n<ol>\n<li><code>Quit Game</code>：退出当前游戏</li>\n<li><code>Load Stream Level</code>：</li>\n</ol>\n<h3 id="rendering">Rendering<a class="anchor" href="#rendering">§</a></h3>\n<ol>\n<li><code>Get Supported Fullscreen Resolution</code>：获得支持的全屏分辨率列表</li>\n</ol>\n<h3 id="settings">Settings<a class="anchor" href="#settings">§</a></h3>\n<ol>\n<li><code>Get Game User Settings</code>：返回游戏本地的设置（分辨率，窗口模式，缩放设置等）\n<ol>\n<li><code>Get Fullscreen Mode</code>：返回用户设定的窗口全屏模式\n<ol>\n<li><code>Switch on EWindowMode</code>：从<code>Fullscreen、Windowed Fullscreen、Windowed</code>匹配与输入相同的输出值。</li>\n</ol>\n</li>\n<li><code>Set Fullscreen Mode</code>：设置用户设定的窗口模式</li>\n<li><code>Set Screen Resolution</code>：设置屏幕分辨率</li>\n<li><code>Apply Resolution Settings</code>：应用分辨率设置</li>\n</ol>\n</li>\n</ol>\n<h3 id="window">Window<a class="anchor" href="#window">§</a></h3>\n<ol>\n<li><code>Get Window Mode</code>：返回当前窗口的模式</li>\n</ol>\n<h3 id="transformation">Transformation<a class="anchor" href="#transformation">§</a></h3>\n<ol>\n<li><code>Set Relative Scale 3D</code>：设置相对于其父项的组件的非均匀比例</li>\n</ol>\n<h3 id="user-interface-1">User Interface<a class="anchor" href="#user-interface-1">§</a></h3>\n<ol>\n<li><code>Get User Widget Of Object</code>：返回此组件显示的用户小部件对象</li>\n</ol>\n<h3 id="flow-control">Flow Control<a class="anchor" href="#flow-control">§</a></h3>\n<ol>\n<li><code>Delay</code>：延迟执行潜在操作（在几秒钟内指定）。倒计时时再次调用将被忽略。</li>\n</ol>\n<h3 id="material%E6%9D%90%E8%B4%A8">Material：材质<a class="anchor" href="#material%E6%9D%90%E8%B4%A8">§</a></h3>\n<ol>\n<li><code>Set Scalar Parameter Value</code>：在材料收集实例上设置标量参数值</li>\n</ol>\n<h3 id="widget">Widget<a class="anchor" href="#widget">§</a></h3>\n<ol>\n<li><code>Remove from Parent</code>：从其父窗口小部件中删除该窗口小部件。如果将此s小部件添加到播放器的屏幕或视口中，则也会从这些容器中删除。</li>\n</ol>\n<h3 id="sequence">Sequence<a class="anchor" href="#sequence">§</a></h3>\n<ol>\n<li><code>Varibale Type: Level Sequence Actor</code>：变量类型\n<ol>\n<li><code>get Sequence Player</code>：获取序列玩家\n<ol>\n<li><code>Play</code>：使用当前播放速率从当前时间光标位置开始向前播放。</li>\n<li><code>Play Looping</code>：从当前时间光标开始向前播放，循环特定次数，（-1表示无线循环）</li>\n<li><code>Stop</code>：停止播放，将时间光标移至最后</li>\n</ol>\n</li>\n</ol>\n</li>\n</ol>\n<h3 id="appearance">Appearance<a class="anchor" href="#appearance">§</a></h3>\n<ol>\n<li>Image控件变量\n<ol>\n<li><code>Set Brush from Texture</code>：设置图片</li>\n</ol>\n</li>\n<li>Widget\n<ol>\n<li><code>Is in Viewport</code>：判断widget是否已显示</li>\n</ol>\n</li>\n</ol>\n<h3 id="slot">Slot<a class="anchor" href="#slot">§</a></h3>\n<ol>\n<li><code>Slot as Canvas Slot</code>：将子对象上的插槽对象作为<code>画布插槽</code>获取，从而允许你操纵布局信息\n<ol>\n<li><code>Set Position</code>：设置slot的位置</li>\n<li><code>Get Position</code>：获取slot的位置</li>\n</ol>\n</li>\n</ol>\n<h3 id="layout">Layout<a class="anchor" href="#layout">§</a></h3>\n<h4 id="canvas-slot">Canvas Slot<a class="anchor" href="#canvas-slot">§</a></h4>\n<ol>\n<li><code>set Position</code>：设置插槽的位置</li>\n</ol>\n<h3 id="game-1">Game<a class="anchor" href="#game-1">§</a></h3>\n<ol>\n<li><code>Get Player Controller</code>：返回玩家控制器的索引\n<ol>\n<li><code>Get HUD</code>：获取当前的屏幕</li>\n</ol>\n</li>\n<li><code>Get Player Camera Manager</code>：返回指定玩家索引的玩家摄像机管理器\n<ol>\n<li><code>Get Camera Rotation</code>：返回相机的当前旋转</li>\n</ol>\n</li>\n</ol>\n<h3 id="math">Math<a class="anchor" href="#math">§</a></h3>\n<h4 id="float">Float<a class="anchor" href="#float">§</a></h4>\n<ol>\n<li><code>Truncate</code>：四舍五入</li>\n<li><code>Map Range Unclamped</code>：从一个范围映射到另一个范围</li>\n</ol>\n<h3 id="button">Button<a class="anchor" href="#button">§</a></h3>\n<ol>\n<li><code>Set Style</code>：设置按钮的倍增背景色</li>\n</ol>\n<h3 id="text">Text<a class="anchor" href="#text">§</a></h3>\n<ol>\n<li><code>Set Text</code>：设置<code>Text</code>控件的text</li>\n<li><code>Set Color and Opacity</code>：设置<code>Text</code>控件字体的颜色和透明度</li>\n</ol>\n<h3 id="panel">Panel<a class="anchor" href="#panel">§</a></h3>\n<ol>\n<li><code>Get All Children</code>：获取<code>Panel</code>下的所有子控件</li>\n</ol>\n<h3 id="map">Map<a class="anchor" href="#map">§</a></h3>\n<ol>\n<li><code>Keys</code>：输出一个包含当前map中的所有key的数组</li>\n<li><code>Find</code>：输出对应的key的值</li>\n</ol>\n<h3 id="array">Array<a class="anchor" href="#array">§</a></h3>\n<ol>\n<li><code>GET</code>：输入一个数组和一个索引，返回该索引对应元素的拷贝</li>\n<li><code>Clear</code>：清除数组中的所有元素</li>\n<li><code>Length</code>：获取数组长度</li>\n<li><code>Add</code>：添加一个元素到数组</li>\n<li><code>Contains</code>：判断数组是否包含一个元素，若包含则返回true</li>\n<li><code>Make Array</code>：创建一个数组</li>\n</ol>\n<h3 id="string">String<a class="anchor" href="#string">§</a></h3>\n<ol>\n<li><code>Append</code>：拼接字符串，返回新字符串</li>\n</ol>\n<h3 id="animation">Animation<a class="anchor" href="#animation">§</a></h3>\n<ol>\n<li><code>Is Animation Playing</code>：判断一个动画是否播放</li>\n<li><code>Reverse Animation</code>：如果动画已播放，则反转播放动画</li>\n</ol>\n<h3 id="transform">Transform<a class="anchor" href="#transform">§</a></h3>\n<ol>\n<li><code>Set Render Scale</code></li>\n</ol>\n<h2 id="%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">关卡流送（Level Streaming）<a class="anchor" href="#%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">§</a></h2>\n<p>在游戏时异步加载和卸载关卡，降低内存使用率，创建无缝的世界场景。</p>\n<h3 id="%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">世界场景构成（World Composition）<a class="anchor" href="#%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">§</a></h3>\n<p>世界场景构成用于创建大型场景的特定关卡流送形式。关卡分布在平面网格中，并在玩家靠近时流入。</p>\n<h4 id="%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90">激活世界场景构成<a class="anchor" href="#%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90">§</a></h4>\n<ol>\n<li>启用<code>世界场景设置(World Settings)</code>中的<code>启用世界场景构成(Enable World Composition)</code>标记来激活</li>\n<li>禁用<code>世界场景原点移位(World origin shifting)</code>：关闭<code>启用世界场景构成(Enable World Composition)</code></li>\n</ol>\n<p><img src="images/worldcomposition1.png" alt=""></p>\n<h4 id="%E5%85%B3%E5%8D%A1%E5%B1%82%E7%BA%A7levels-hierarchy">关卡层级(Levels Hierarchy)<a class="anchor" href="#%E5%85%B3%E5%8D%A1%E5%B1%82%E7%BA%A7levels-hierarchy">§</a></h4>\n<p>&quot;关卡&quot;窗口中的条目表示世界场景的层级。</p>\n<h2 id="umg%E6%8E%A7%E4%BB%B6">UMG控件<a class="anchor" href="#umg%E6%8E%A7%E4%BB%B6">§</a></h2>\n<h3 id="%E5%85%AC%E5%85%B1%E5%B1%9E%E6%80%A7">公共属性<a class="anchor" href="#%E5%85%AC%E5%85%B1%E5%B1%9E%E6%80%A7">§</a></h3>\n<ul>\n<li>\n<p><code>Slot</code>：</p>\n<ul>\n<li><code>Canvas Panel</code>中的<code>Slot</code>：设置控件在屏幕显示的位置和大小</li>\n<li><code>Overlay</code>中的<code>Slot</code>：设置控件相对父级的位置</li>\n</ul>\n</li>\n<li>\n<p><code>Tool Tip Text</code>：提示文字，可以绑定自定义UMG</p>\n</li>\n<li>\n<p><code>Visiblity</code>：可视性</p>\n<ul>\n<li><code>Visible</code></li>\n<li><code>Collapsed</code>：隐藏且不占位置</li>\n<li><code>Hidden</code>：隐藏且占位置</li>\n<li><code>Not Hit-Testable(Self &amp; All Child)</code>：可见但无交互</li>\n<li><code>Not Hit-Testable(Self Only)</code>：可见但子级可交互</li>\n</ul>\n</li>\n<li>\n<p><code>Transform</code>：设置控件的位移缩放等属性</p>\n<ul>\n<li><code>piovt</code>用来设置中心点</li>\n</ul>\n</li>\n<li>\n<p><code>Clipping</code>：裁切</p>\n</li>\n<li>\n<p><code>Is Volatile</code>：是否缓存控件</p>\n</li>\n<li>\n<p><code>Navigation</code>：手柄导航属性</p>\n</li>\n</ul>\n<h3 id="common%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6"><code>Common</code>中的控件<a class="anchor" href="#common%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">§</a></h3>\n<ul>\n<li>\n<p><code>Border</code>：可放图片，可以有一个子集</p>\n</li>\n<li>\n<p><code>Button</code>：按钮，点击事件</p>\n</li>\n<li>\n<p><code>Check Box</code>：复选框</p>\n</li>\n<li>\n<p><code>Image</code>：无子集</p>\n</li>\n<li>\n<p><code>Named Slot</code>：在用户创建的UMG下放置，相当于占位，可以让用户创建的UMG放置子集</p>\n</li>\n<li>\n<p><code>Progress Bar</code>：进度条</p>\n</li>\n<li>\n<p><code>Rich Text Block</code>：富文本</p>\n</li>\n<li>\n<p><code>Slider</code>：滑动条</p>\n</li>\n<li>\n<p><code>Text</code>：文字</p>\n</li>\n</ul>\n<h3 id="panel%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6"><code>Panel</code>中的控件<a class="anchor" href="#panel%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">§</a></h3>\n<ul>\n<li>\n<p><code>Canvas Panel</code>：</p>\n</li>\n<li>\n<p><code>Horizontal Box</code>：横向排列</p>\n</li>\n<li>\n<p><code>Vertical Box</code>：竖向排列</p>\n</li>\n<li>\n<p><code>Overlay</code>：重叠</p>\n</li>\n<li>\n<p><code>Size Box</code>：可覆盖子控件的原始尺寸</p>\n</li>\n<li>\n<p><code>Scale Box</code>：缩放框</p>\n</li>\n<li>\n<p><code>Scroll Box</code>：带滚动条</p>\n</li>\n<li>\n<p><code>Uniform Grid Panel</code>：可宫格排列</p>\n</li>\n<li>\n<p><code>Grid Panel</code>：宫格化排列，制作背包</p>\n</li>\n<li>\n<p><code>Safe Zone</code>：异形屏幕的安全区</p>\n</li>\n<li>\n<p><code>Widget Switcher</code>：控件切换器，像页签，子控件不能太多，会卡死</p>\n</li>\n<li>\n<p><code>Wrap Box</code>：可以让子控件换行</p>\n</li>\n</ul>\n<h3 id="input%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6"><code>Input</code>中的控件<a class="anchor" href="#input%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">§</a></h3>\n<ul>\n<li>\n<p><code>ComboBox</code>：下拉列表</p>\n</li>\n<li>\n<p><code>Editable Text</code>：可编辑文本</p>\n</li>\n<li>\n<p><code>Editable Text(Multi-Line)</code>：可换行的可编辑文本 (按shift + Enter换行)</p>\n</li>\n<li>\n<p><code>Text Box</code>：文本输入框</p>\n</li>\n<li>\n<p><code>Text Box (Multi-Line)</code>：多行文本输入框</p>\n</li>\n<li>\n<p><code>Spin Box</code>：可拖动缩放框</p>\n</li>\n</ul>\n<h3 id="lists%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6"><code>Lists</code>中的控件<a class="anchor" href="#lists%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">§</a></h3>\n<ul>\n<li><code>List View</code>：</li>\n</ul>\n<h2 id="%E5%9D%90%E6%A0%87%E7%A9%BA%E9%97%B4%E6%9C%AF%E8%AF%AD">坐标空间术语<a class="anchor" href="#%E5%9D%90%E6%A0%87%E7%A9%BA%E9%97%B4%E6%9C%AF%E8%AF%AD">§</a></h2>\n<h3 id="%E7%A9%BA%E9%97%B4">空间<a class="anchor" href="#%E7%A9%BA%E9%97%B4">§</a></h3>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>虚幻中的空间</th>\n<th>其他名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>切线(Tangent)</td>\n<td></td>\n<td>正交(可能在插值之后偏离)，可以是左旋或右旋。TangentToLocal变换仅包含旋转，因此它是标准正交(Orthonormal)(可以通过换位反转)</td>\n</tr>\n<tr>\n<td>局部(Local)</td>\n<td>对象空间(Object Space)</td>\n<td>正交，可以是左旋或右旋(三角形剔除顺序需要调整)。LocalToWorld变换包含旋转、非等分缩放(包括可能改变缠绕顺序的负非等分缩放)和平移</td>\n</tr>\n<tr>\n<td>世界场景(World)</td>\n<td></td>\n<td>WorldToView变换仅包含旋转和平移，因此视图空间中的距离与世界场景空间中的距离相同</td>\n</tr>\n<tr>\n<td>平移世界场景(TranslatedWorld)</td>\n<td></td>\n<td>世界场景：平移世界场景-预览平移</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>平移世界场景：世界场景+预览平移</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>平移的矩阵用于从组合的变换矩阵中移除相机位置，可在变换顶点时提高精度</td>\n</tr>\n<tr>\n<td>视图(View)</td>\n<td>摄像机空间(CameraSpace)</td>\n<td>ViewToClip变换包含x轴和y轴上的缩放，但不包含平移(如果平移的话将会是偏心投影)。它缩放并平移z轴。它还会应用投影来转换为齐次裁剪空间。</td>\n</tr>\n<tr>\n<td>裁剪(Clip)</td>\n<td>齐次坐标(HomogenlousCoordinates)，后摄影空间(PostProjectionSpace)，投影空间(ProjectionSpace)</td>\n<td>应用透视投影矩阵之后。请注意，裁剪空间中的W与视图空间Z中的相同</td>\n</tr>\n<tr>\n<td>屏幕(Screen)</td>\n<td>OpenGL中的标准化设备坐标(NormalizedDeviceCoordinates)</td>\n<td>经过透视分割之后：</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>左/右：-1,1</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>上/下：1,-1</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>近/远：0,1(OpenGL RHI需要将此变换为-1,1)</td>\n</tr>\n<tr>\n<td>视口(Viewport)</td>\n<td>视口坐标(ViewportCoordinates)，窗口坐标(WindowCoordinates)</td>\n<td>以像素计：</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>左/右：0,宽-1</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>上/下：0,高-1</td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="%E7%A9%BA%E9%97%B4%E5%8F%98%E6%8D%A2">空间变换<a class="anchor" href="#%E7%A9%BA%E9%97%B4%E5%8F%98%E6%8D%A2">§</a></h3>\n<p>应该始终使用 X To Y 的形式对空间之间的变换命名。</p>\n<p>示例：</p>\n<p>WorldToView</p>\n<p>TranslatedWorldToView</p>\n<p>TangentToWorld</p>\n<h2 id="%E5%8F%98%E9%87%8Fvariable">变量(Variable)<a class="anchor" href="#%E5%8F%98%E9%87%8Fvariable">§</a></h2>\n<ol>\n<li>文字颜色变量类型：<code>Slate Color</code></li>\n<li>图片颜色变量类型：<code>Linear Color</code></li>\n<li>图片变量类型：<code>Slate Brush</code></li>\n<li>图片数组变量类型：<code>Texture 2D</code></li>\n<li>定时器变量类型：<code>Timer Handle</code></li>\n<li>字体变量类型：<code>Slate Font Info</code></li>\n<li>Widget变量类型：<code>Widget Component</code></li>\n</ol>\n<h2 id="actor">Actor<a class="anchor" href="#actor">§</a></h2>\n<ol>\n<li>Static Mesh Component：\n<ol>\n<li>Events:\n<ol>\n<li><code>On Begin Cursor Over</code>：鼠标悬浮时触发</li>\n<li><code>On End Cursor Over</code>：鼠标移出时触发</li>\n</ol>\n</li>\n<li><code>Set Material</code>：设置材质</li>\n</ol>\n</li>\n<li><code>GetActorLocation</code>：返回当前Actor中RootComponent的位置</li>\n</ol>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#ue4%E5%83%8F%E7%B4%A0%E6%B5%81%E9%80%81%E7%B3%BB%E7%BB%9F">UE4像素流送系统</a><ol><li><a href="#%E7%89%B9%E7%82%B9">特点：</a></li><li><a href="#%E4%BC%98%E7%82%B9">优点：</a></li></ol></li><li><a href="#%E5%87%BD%E6%95%B0">函数</a><ol><li><a href="#"></a></li><li><a href="#audio">Audio</a></li><li><a href="#development">Development</a></li><li><a href="#user-interface">User Interface</a></li><li><a href="#viewport">Viewport</a></li><li><a href="#time">Time</a></li><li><a href="#game">Game</a></li><li><a href="#rendering">Rendering</a></li><li><a href="#settings">Settings</a></li><li><a href="#window">Window</a></li><li><a href="#transformation">Transformation</a></li><li><a href="#user-interface-1">User Interface</a></li><li><a href="#flow-control">Flow Control</a></li><li><a href="#material%E6%9D%90%E8%B4%A8">Material：材质</a></li><li><a href="#widget">Widget</a></li><li><a href="#sequence">Sequence</a></li><li><a href="#appearance">Appearance</a></li><li><a href="#slot">Slot</a></li><li><a href="#layout">Layout</a><ol></ol></li><li><a href="#game-1">Game</a></li><li><a href="#math">Math</a><ol></ol></li><li><a href="#button">Button</a></li><li><a href="#text">Text</a></li><li><a href="#panel">Panel</a></li><li><a href="#map">Map</a></li><li><a href="#array">Array</a></li><li><a href="#string">String</a></li><li><a href="#animation">Animation</a></li><li><a href="#transform">Transform</a></li></ol></li><li><a href="#%E5%85%B3%E5%8D%A1%E6%B5%81%E9%80%81level-streaming">关卡流送（Level Streaming）</a><ol><li><a href="#%E4%B8%96%E7%95%8C%E5%9C%BA%E6%99%AF%E6%9E%84%E6%88%90world-composition">世界场景构成（World Composition）</a><ol></ol></li></ol></li><li><a href="#umg%E6%8E%A7%E4%BB%B6">UMG控件</a><ol><li><a href="#%E5%85%AC%E5%85%B1%E5%B1%9E%E6%80%A7">公共属性</a></li><li><a href="#common%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">Common中的控件</a></li><li><a href="#panel%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">Panel中的控件</a></li><li><a href="#input%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">Input中的控件</a></li><li><a href="#lists%E4%B8%AD%E7%9A%84%E6%8E%A7%E4%BB%B6">Lists中的控件</a></li></ol></li><li><a href="#%E5%9D%90%E6%A0%87%E7%A9%BA%E9%97%B4%E6%9C%AF%E8%AF%AD">坐标空间术语</a><ol><li><a href="#%E7%A9%BA%E9%97%B4">空间</a></li><li><a href="#%E7%A9%BA%E9%97%B4%E5%8F%98%E6%8D%A2">空间变换</a></li></ol></li><li><a href="#%E5%8F%98%E9%87%8Fvariable">变量(Variable)</a></li><li><a href="#actor">Actor</a></li></ol></nav>'
        } }),
    'author': "jianyun2020",
    'contributors': [
        "jianyun2020"
    ],
    'date': "2021-02-01T04:46:51.000Z",
    'updated': "2021-03-11T09:31:40.000Z",
    'excerpt': " 1. 常用快捷键 2. 变更路线节点：Reroute Node 3. Execute Console Command命令 1. 设置分辨率r.setRes 1920x1080 2. r.ScreenPercentage 200：双倍渲染 UE4像素流送系统 特点： 1. 流送并非播放预先录制的视频片段，而是播放...",
    'cover': "images/shortcut_key1.png",
    'categories': [
        "UE4"
    ],
    'tags': [
        "UE4",
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
                "updated": null,
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
