---
categories:
    - Vue
tags:
    - Vue
    - 学习笔记
---

# Vue

# Vue 实例

## 创建一个Vue实例

```js
var vm = new Vue({
    // 选项
})
```

所有的 `Vue` 组件都是 `Vue 实例`，并且接受相同的选项对象 (一些根实例特有的选项除外)。

## 数据与方法

当一个 `Vue 实例`被创建时，它将 `data` 对象中的所有的 `property` 加入到 `Vue` 的响应式系统中。当这些 `property` 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

```js
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个Vue实例中
var vm = new Vue({
    data: data
})

// 获得这个实例上的property
// 返回源数据中对应的字段
vm.a == data.a // true

// 设置property也会影响到原始数据
vm.a = 2
data.a // 2

// 反之亦然
data.a = 3
vm.a = 3
```

当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 `data` 中的 `property` 才是响应式的。也就是说如果你添加一个新的 `property`，比如：

```js
vm.b = 'hi'
```

那么对 b 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个 `property`，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如：

```js
data: {
    newTodoText: '',
    visitCount: 0,
    hideComponentedTodos: false,
    todos: [],
    error: null
}
```

这里唯一的例外是使用 `Object.freeze()`，这会阻止修改现有的 `property`，也意味着响应系统无法再追踪变化。

```js
var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})
```

```html
<div id="app">
  <p>{{ foo }}</p>
  <!-- 这里的 `foo` 不会更新！ -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
```

除了数据 `property`，`Vue` 实例还暴露了一些有用的实例 `property` 与方法。它们都有前缀 `$`，以便与用户定义的 `property` 区分开来。例如：

```js
var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // true
vm.$el === document.getElementById('example') // true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
    // 这个回调将在 vm.a 改变后调用
})
```

## 实例生命周期钩子

每个 `Vue` 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 `DOM` 并在数据变化时更新 `DOM` 等。同时在这个过程中也会运行一些叫做**生命周期钩子的函数**，这给了用户在不同阶段添加自己的代码的机会。

比如 `created` 钩子可以用来在一个实例被创建之后执行代码：

```js
new Vue({
    data: {
        a: 1
    },
    created: function () {
        // this指向vm实例
        console.log('a is: ' + this.a)
    }
})

// a is: 1
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 `mounted`、`updated` 和 `destroyed`。生命周期钩子的 `this` 上下文指向调用它的 `Vue` 实例。

> 不要在选项 property 或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。

## 生命周期图示

![](images/vue_life.png)

# 模板语法

`Vue.js` 使用了基于 `HTML` 的模板语法，允许开发者声明式地将 `DOM` 绑定至底层 `Vue` 实例的数据。所有 `Vue.js` 的模板都是合法的 `HTML`，所以能被遵循规范的浏览器和 `HTML` 解析器解析。

在底层的实现上，`Vue` 将模板编译成虚拟 `DOM` 渲染函数。结合响应系统，`Vue` 能够智能地计算出最少需要重新渲染多少组件，并把 `DOM` 操作次数减到最少。

如果你熟悉虚拟 `DOM` 并且偏爱 `JavaScript` 的原始力量，你也可以不用模板，直接写渲染 (render) 函数，使用可选的 `JSX` 语法。

## 插值

### 文本

数据绑定最常见的形式就是使用“`Mustache`”语法 (双大括号) 的文本插值：

```html
<span>Message: {{ msg }}</span>
```

`Mustache` 标签将会被替代为对应数据对象上 `msg property` 的值。无论何时，绑定的数据对象上 `msg property` 发生了改变，插值处的内容都会更新。

通过使用 `v-once` 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```html
<span v-once>这个将不会改变：{{ msg }}</span>
```

### 原始 HTML

双大括号会将数据解释为普通文本，而非 `HTML` 代码。为了输出真正的 `HTML`，你需要使用 `v-html` 指令：

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

Using mustaches: <span style="color: red">This should be red.</span>
Using v-html directive: This should be red.

这个 `span` 的内容将会被替换成为 `property` 值 `rawHtml`，直接作为 `HTML`——会忽略解析 `property` 值中的数据绑定。注意，你不能使用 `v-html` 来复合局部模板，因为 `Vue` 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。

> 你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。

### Attribute

`Mustache` 语法不能作用在 `HTML attribute` 上，遇到这种情况应该使用 `v-bind` 指令：

```html
<div v-bind:id="dynamicId"></div>
```

对于布尔 `attribute` (它们只要存在就意味着值为 true)，`v-bind` 工作起来略有不同，在这个例子中：

```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果 `isButtonDisabled` 的值是 `null`、`undefined` 或 `false`，则 `disabled attribute` 甚至不会被包含在渲染出来的 `<button>` 元素中。

### 使用 JavaScript 表达式

迄今为止，在我们的模板中，我们一直都只绑定简单的 `property` 键值。但实际上，对于所有的数据绑定，`Vue.js` 都提供了完全的 `JavaScript` 表达式支持。

```js
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

这些表达式会在所属 `Vue` 实例的数据作用域下作为 `JavaScript` 被解析。有个限制就是，每个绑定都只能包含**单个表达式**，所以下面的例子都不会生效。

```js
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

> 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。

## 指令

`指令 (Directives)` 是带有 `v-` 前缀的特殊 `attribute`。指令 `attribute` 的值预期是单个 `JavaScript` 表达式 (`v-for` 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 `DOM`。回顾我们在介绍中看到的例子：

```html
<p v-if="seen">现在你看到我了</p>
```

这里，`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除 `<p>` 元素。

### 参数

一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 `HTML attribute`：

```html
<a v-bind:href="url">...</a>
```

在这里参数是监听的事件名。

### 动态参数

从 2.6.0 开始，可以用方括号括起来的 `JavaScript` 表达式作为一个指令的参数：

```html
<!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
```

这里的 `attributeName` 会被作为一个 `JavaScript` 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 `Vue` 实例有一个 `data property attributeName`，其值为 "`href`"，那么这个绑定将等价于 `v-bind:href`。

同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：

```html
<a v-on:[eventName]="doSomething"> ... </a>
```

在这个示例中，当 `eventName` 的值为 "`focus`" 时，`v-on:[eventName]` 将等价于 `v-on:focus`。

**对动态参数的值的约束**

动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 `null` 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。

**对动态参数表达式的约束**

动态参数表达式有一些语法约束，因为某些字符，如**空格**和**引号**，放在 `HTML attribute` 名里是无效的。例如：

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。

在 `DOM` 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 `attribute` 名全部强制转为小写：

```html
<!--
在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
-->
<a v-bind:[someAttr]="value"> ... </a>
```

## 修饰符

修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```html
<form v-on:submit.prevent="onSubmit">...</form>
```

## 缩写

`v-` 前缀作为一种视觉提示，用来识别模板中 `Vue` 特定的 `attribute`。当你在使用 `Vue.js` 为现有标签添加动态行为 (dynamic behavior) 时，`v-` 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 `Vue` 管理所有模板的单页面应用程序 (`SPA - single page application`) 时，`v-` 前缀也变得没那么重要了。因此，`Vue` 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：

### v-bind 缩写

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

### v-on 缩写

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```

它们看起来可能与普通的 `HTML` 略有不同，但 `:` 与 `@` 对于 `attribute` 名来说都是合法字符，在所有支持 `Vue` 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。

# 计算属性和侦听器

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用计算属性。

## 计算属性缓存 vs 方法

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的`响应式依赖进行缓存`的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 Date.now() 不是响应式依赖：

```js
computed: {
  now: function () {
    return Date.now()
  }
}
```