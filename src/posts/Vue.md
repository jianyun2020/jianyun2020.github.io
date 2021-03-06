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

在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用计算属性。

## 基础例子

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

结果：

Original message: "Hello"

Computed reversed message: "olleH"

这里我们声明了一个计算属性 `reversedMessage`。我们提供的函数将用作 `property vm.reversedMessage` 的 `getter` 函数：

```js
console.log(vm.reversedMessage) // => 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // => 'eybdooG'
```

你可以打开浏览器的控制台，自行修改例子中的 `vm`。`vm.reversedMessage` 的值始终取决于 `vm.message` 的值。

你可以像绑定普通 `property` 一样在模板中绑定计算属性。`Vue` 知道 `vm.reversedMessage` 依赖于 `vm.message`，因此当 `vm.message` 发生改变时，所有依赖 `vm.reversedMessage` 的绑定也会更新。而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 `getter` 函数是**没有副作用 (side effect)** 的，这使它更易于测试和理解。

## 计算属性缓存 vs 方法

你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果：

```html
<p>Reversed message: "{{ reversedMessage() }}"</p>

```

```js
// 在组件中
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的`响应式依赖进行缓存`的。**只在相关响应式依赖发生改变时它们才会重新求值**。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 Date.now() 不是响应式依赖：

```js
computed: {
  now: function () {
    return Date.now()
  }
}
```

相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。

## 计算属性 vs 侦听属性

`Vue` 提供了一种更通用的方式来观察和响应 `Vue` 实例上的数据变动：`侦听属性`。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用`计算属性`而不是命令式的 `watch` 回调。细想一下这个例子：

```html
<div id="demo">{{ fullName }}</div>
```

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

## 计算属性的 setter

计算属性默认只有 `getter`，不过在需要时你也可以提供一个 `setter`：

```js
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

现在再运行 `vm.fullName = 'John Doe'` 时，`setter` 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应地被更新。

## 侦听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 `Vue` 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。**当需要在数据变化时执行异步或开销较大的操作**时，这个方式是最有用的。

例如：

```html
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
```

```html
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>

<script>
    var watchExampleVM = new Vue({
        el: '#watch-example',
        data: {
            question: '',
            answer: 'I cannot give you an answer until you ask a question!'
        },
        watch: {
            // 如果 question 发生改变，这个函数就会执行
            question: function (newQuestion, oldQuestion) {
                this.answer = 'Waiting for you to stop typing...'
                this.debouncedGetAnswer()
            }
        },
        created: function () {
            // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
            // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
            // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
            // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
            // 请参考：https://lodash.com/docs#debounce
            this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        },
        methods: {
            getAnswer: function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. '
                    return
                }
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(reaponse.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    })
</script>
```

在这个示例中，使用 `watch` 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

除了 `watch` 选项之外，您还可以使用命令式的 `vm.$watch API`。

# Class 与 Style 绑定

操作元素的 `class 列表`和`内联样式`是数据绑定的一个常见需求。因为它们都是 `attribute`，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，`Vue.js` 做了专门的增强。表达式结果的类型除了`字符串`之外，还可以是`对象`或`数组`。

## 绑定 HTML Class

### 对象语法

我们可以传给 `v-bind:class` 一个对象，以动态地切换 `class`：

```html
<div v-bind:class="{ active: isActive }"></div>
```

上面的语法表示 `active` 这个 `class` 存在与否将取决于数据 `property isActive` 的 `truthiness`。

你可以在对象中传入更多字段来动态切换多个 `class`。此外，`v-bind:class` 指令也可以与普通的 `class attribute` 共存。当有如下模板：

```html
<div
    class="static"
    v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

和如下 `data`：

```js
data: {
  isActive: true,
  hasError: false
}
```

结果渲染为：

```html
<div class="static active"></div>
```

当 `isActive` 或者 `hasError` 变化时，`class` 列表将相应地更新。例如，如果 `hasError` 的值为 `true`，`class` 列表将变为 "`static active text-danger`"。

绑定的数据对象不必内联定义在模板里：

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
    classObject: {
        active: true,
        'text-danger': false
    }
}
```

渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：

```html
<div v-bind:class="classObject"></div>>
```

```js
data: {
    isActive: true,
    error: null
},
computed: {
    classObject: function () {
        return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
        }
    }
}
```

### 数组语法

我们可以把一个数组传给 `v-bind:class`，以应用一个 `class` 列表：

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```js
data: {
    activeClass: 'active',
    errorClass: 'text-danger'
}
```

渲染为：

```html
<div class="active text-danger"></div>
```

如果你也想根据条件切换列表中的 class，可以用`三元表达式`：

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

这样写将始终添加 `errorClass`，但是只有在 `isActive` 是 `truthy` 时才添加 `activeClass`。

不过，当有多个条件 `class` 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：

```html
<div v-bind:class="[ { active: isActive }, errorClass]"></div>
```

### 用在组件上

当在一个自定义组件上使用 `class property` 时，这些 `class` 将被添加到该组件的根元素上面。这个元素上已经存在的 `class` 不会被覆盖。

例如，如果你声明了这个组件：

```js
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})
```

然后在使用它的时候添加一些 class：

```html
<my-component class="baz boo"></my-component>
```

HTML 将被渲染为：

```html
<p class="foo bar baz boo">Hi</p>
```

对于带数据绑定 `class` 也同样适用：

```html
<my-component v-bind:class="{ active: isActive }"></my-component>
```

当 `isActive` 为 `truthy` 时，HTML 将被渲染成为：

```html
<p class="foo bar active">Hi</p>
```

## 绑定内联样式

### 对象语法

`v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。`CSS property` 名可以用`驼峰式 (camelCase)` 或`短横线分隔 (kebab-case，记得用引号括起来)` 来命名：

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
data: {
    activeColor: 'red',
    fontSize: 30
}
```

直接绑定到一个样式对象通常更好，这会让模板更清晰：

```html
<div v-bind:style="styleObject"></div>
```

```js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

同样的，对象语法常常结合返回对象的**计算属性**使用。

### 数组语法

`v-bind:style` 的数组语法可以将多个样式对象应用到同一个元素上：

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

### 自动添加前缀

当 `v-bind:style` 使用需要添加`浏览器引擎前缀`的 `CSS property` 时，如 `transform`，`Vue.js `会自动侦测并添加相应的前缀。

### 多重值

从 2.3.0 起你可以为 `style` 绑定中的 `property` 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 `flexbox`，那么就只会渲染 `display: flex`。

# 条件渲染

## v-if

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `truthy` 值的时候被渲染。

```html
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 `v-else` 添加一个“else 块”：

```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

## 在 `<template>` 元素上使用 v-if 条件渲染分组

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

## v-else

你可以使用 `v-else` 指令来表示 `v-if` 的“else 块”：

```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。

## v-else-if

2.1.0 新增

`v-else-if`，顾名思义，充当 `v-if` 的“else-if 块”，可以连续使用：

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

类似于 `v-else`，`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。

## 用 `key` 管理可复用的元素

`Vue` 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 `Vue` 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：

```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <iniput placeholder="Enter your username" >
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" >
</template>
```

那么在上面的代码中切换 `loginType` 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，`<input>` 不会被替换掉——仅仅是替换了它的 `placeholder`。

这样也不总是符合实际需求，所以 `Vue` 为你提供了一种方式来表达“这两个元素是`完全独立`的，`不要复用`它们”。只需添加一个具有唯一值的 `key attribute` 即可：

```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

注意，`<label>` 元素仍然会被高效地复用，因为它们没有添加 `key attribute`。

## v-show

另一个用于根据条件展示元素的选项是 `v-show` 指令。用法大致一样：

```html
<h1 v-show="ok">Hello!</h1>
```

不同的是带有 `v-show` 的元素`始终会被渲染并保留在 DOM 中`。v-show 只是简单地切换元素的 `CSS property display`。

> 注意，v-show 不支持 `<template>` 元素，也不支持 v-else。

## v-if vs v-show

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，`元素总是会被渲染`，并且只是简单地基于 `CSS` 进行切换。

一般来说，`v-if` 有`更高的切换开销`，而 `v-show` 有`更高的初始渲染开销`。因此，如果需要`非常频繁地切换`，则`使用 v-show 较好`；如果在运行时`条件很少改变`，则使用 `v-if 较好`。

## v-if 与 v-for 一起使用

> 不推荐同时使用 v-if 和 v-for。
> 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。


# 列表渲染

## 用 v-for 把一个数组对应为一组元素

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的别名。

```html
<ul id="example">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</li>
```

```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

在 `v-for` 块中，我们可以访问所有父作用域的 `property`。`v-for` 还支持一个可选的第二个参数，即`当前项的索引`。

```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

```js
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

你也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 `JavaScript 迭代器`的语法：

```html
<div v-for="item of items"></div>
```

## 在 v-for 里使用对象

你也可以用 v-for 来遍历一个对象的 property。

```html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

```js
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
```

你也可以提供第二个的参数为 property 名称 (也就是键名)：

```html
<div v-for="(value, name) in object">
  {{ name }}: {{ value }}
</div>
```

还可以用第三个参数作为索引：

```html
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

> 在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。

## 维护状态

当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。这个类似 Vue 1.x 的 track-by="$index"。

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而`重用`和`重新排序`现有元素，你需要为每项提供一个`唯一 key attribute`：

```html
<div v-for="item in items" v-bind:key="item.id">
  <!-- 内容 -->
</div>
```

建议尽可能在使用 v-for 时提供 key attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

因为它是 Vue 识别节点的一个通用机制，key 并不仅与 v-for 特别关联。后面我们将在指南中看到，它还具有其它用途。

> 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用`字符串`或`数值类型`的值。

## 数组更新检测

### 变更方法 (改变原数组)

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

### 替换数组 （返回新数组）

变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 `filter()`、`concat()` 和 `slice()`。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组：

```js
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的`启发式方法`，所以用一个`含有相同元素的数组去替换原来的数组是非常高效的操作`。

### 注意事项

由于 JavaScript 的限制，Vue `不能检测数组和对象的变化`。深入响应式原理中有相关的讨论。

## 显示过滤/排序后的结果

显示过滤/排序后的结果
有时，我们想要显示一个数组经过过滤或排序后的版本，而不实际变更或重置原始数据。在这种情况下，可以创建一个`计算属性`，来返回过滤或排序后的数组。

例如：

```html
<li v-for="n in eventNumbers">{{ n }}</li>
```

```js
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  eventNumbers: function () {
    return this.number.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

`在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个方法`：

```html
<ul v-for="set in sets">
  <li v-for="n in event(set)">{{ n }}</li>
</ul>
```

```js
data: {
  sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

## 在 v-for 里使用值范围

v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数。

```html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

## 在 `<template>` 上使用 v-for

类似于 v-if，你也可以利用带有 v-for 的 `<template>` 来循环渲染一段包含多个元素的内容。比如：

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

## v-for 与 v-if 一同使用

> 注意我们不推荐在同一元素上使用 v-if 和 v-for

当它们`处于同一节点`，`v-for 的优先级比 v-if 更高`，`这意味着 v-if 将分别重复运行于每个 v-for 循环中`。当你只想为部分项渲染节点时，这种优先级的机制会十分有用，如下：

```html
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

上面的代码将只渲染未完成的 todo。

而如果你的目的是有条件地跳过循环的执行，那么可以将 v-if 置于外层元素 (或 `<template>`) 上。如：

```html
<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
```

## 在组件上使用 v-for

在自定义组件上，你可以像在任何普通元素上一样使用 v-for。

```html
<my-component v-for="item in items" :key="item.id"></my-component>
```

> 2.2.0+ 的版本里，当在组件上使用 v-for 时，key 现在是必须的。

然而，`任何数据都不会被自动传递到组件里`，因为`组件有自己独立的作用域`。为了把迭代数据传递到组件里，我们要`使用 prop`：

```html
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
>
</my-component>
```

不自动将 item 注入到组件里的`原因`是，这`会使得组件与 v-for 的运作紧密耦合`。`明确组件数据的来源能够使组件在其他场合重复使用`。

下面是一个简单的 todo 列表的完整例子：

```html
<div id="toto-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input 
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>

  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>>
  </ul>
</div>
```

> 注意这里的 is="todo-item" attribute。这种做法在使用 DOM 模板时是十分必要的，因为在 `<ul>` 元素内只有 `<li>` 元素会被看作有效内容。这样做实现的效果与 `<todo-item>` 相同，但是可以避开一些潜在的浏览器解析错误。

```js
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
```

# 时间处理

## 监听事件

可以用 `v-on 指令监听 DOM 事件`，并在触发时运行一些 JavaScript 代码。

```html
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```

## 事件处理方法

然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个`需要调用的方法名称`。

示例：

```html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
```

```js
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
```

## 内联处理器中的方法

除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：

```html
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```

```js
new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
```

有时也需要在内联语句处理器中`访问原始的 DOM 事件`。可以用特殊变量 `$event` 把它传入方法：

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

```js
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

## 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 v-on 提供了`事件修饰符`。之前提过，`修饰符是由点开头的指令后缀来表示的`。

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单机事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件优先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis"></div>

<!-- 只在当 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat"></div>

```

> 使用修饰符时，`顺序很重要`；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self 会阻止所有的点击`，而 `v-on:click.self.prevent 只会阻止对元素自身的点击`。

> 2.1.4 新增

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

不像其它只能对原生的 DOM 事件起作用的修饰符，`.once 修饰符还能被用到自定义的组件事件上`。

> 2.3.0 新增

Vue 还对应 `addEventListener` 中的 `passive` 选项提供了 `.passive` 修饰符。

```html
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

**这个 .passive 修饰符尤其能够提升移动端的性能。**

> 不要把 `.passive 和 .prevent 一起使用`，因为 `.prevent 将会被忽略`，同时浏览器可能会向你展示一个警告。请记住，`.passive 会告诉浏览器你不想阻止事件的默认行为`。

## 按键修饰符

在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：

```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
```

你可以直接将 `KeyboardEvent.key` 暴露的任意有效按键名转换为 `kebab-case` 来作为修饰符。

```html
<input v-on:keyup.page-down="onPageDown">
```

在上述示例中，处理函数只会在 `$event.key` 等于 `PageDown` 时被调用。

## 按键码

> keyCode 的事件用法已经被废弃了并可能不会被最新的浏览器支持。

使用 keyCode attribute 也是允许的：

```html
<input v-on:keyup.13="submit">
```

为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

> 有一些按键 (.esc 以及所有的方向键) 在 IE9 中有不同的 key 值, 如果你想支持 IE9，这些内置的别名应该是首选。

你还可以通过全局 `config.keyCodes` 对象自定义按键修饰符别名：

```js
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

## 系统修饰键

> 2.1.0 新增

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

> 注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

例如：

```html
<!-- Alt + C -->
<input v-on:keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div v-on:click.ctrl="doSomething">Do something</div>
```

> 请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。

## .exact 修饰符

> 2.5.0 新增

.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```

## 鼠标按钮修饰符

> 2.2.0 新增

- `.left`
- `.right`
- `.middle`

这些修饰符会限制处理函数仅响应特定的鼠标按钮。

## 为什么在 HTML 中监听事件？

你可能注意到这种事件监听的方式违背了`关注点分离` (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：

1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。

2. 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。

3. 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。

# 表单输入绑定

## 基础用法

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建`双向数据绑定`。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

> v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。

v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- `text` 和 `textarea` 元素使用 `value property` 和 `input` 事件；
- `checkbox` 和 `radio` 使用 `checked property` 和 `change` 事件；
- `select` 字段将 `value` 作为 `prop` 并将 `change` 作为事件。

> 对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 input 事件。

### 文本

```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

### 多行文本

```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

> 在文本区域插值 (`<textarea>{{text}}</textarea>`) 并不会生效，应用 v-model 来代替。

### 复选框

单个复选框，绑定到布尔值：

```html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

多个复选框，绑定到同一个数组：

```html
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
```

```js
new Vue({
  el: '...',
  data: {
    checkedNames: []
  }
})
```

### 单选按钮

```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```

```js
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```

### 选择框

单选时：

```html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```

> 如果 v-model 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

多选时 (绑定到一个数组)：

```html
多选时 (绑定到一个数组)：

<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
```

用 v-for 渲染的动态选项：

```html
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```

```js
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```

## 值绑定

对于单选按钮，复选框及选择框的选项，v-model 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时我们可能想把值绑定到 Vue 实例的一个动态 property 上，这时可以用 v-bind 实现，并且这个 property 的值可以不是字符串。

### 复选框

```html
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
```

```js
// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'
```

> 这里的 true-value 和 false-value attribute 并不会影响输入控件的 value attribute，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(即“yes”或“no”)，请换用单选按钮。

### 单选按钮

```html
<input type="radio" v-model="pick" v-bind:value="a">
```

```js
// 当选中时
vm.pick === vm.a
```

### 选择框的选项

```html
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

```js
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```

## 修饰符

### .lazy

在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```

### .number

如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：

```html
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值。


### .trim

如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：

```html
<input v-model.trim="msg">
```

## 在组件上使用 v-model

HTML 原生的输入元素类型并不总能满足需求。幸好，Vue 的组件系统允许你创建具有完全自定义行为且可复用的输入组件。这些输入组件甚至可以和 v-model 一起使用！


# 组件基础

组件是可复用的 Vue 实例, 所以它们与 new Vue 接收相同的选项，例如 `data`、`computed`、`watch`、`methods` 以及`生命周期钩子`等。仅有的例外是像 el 这样根实例特有的选项。

## data 必须是一个函数

一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的`独立的拷贝`：

```js
data: function () {
  return {
    count: 0
  }
}
```

## 组件的组织

通常一个应用会以一棵嵌套的组件树的形式来组织。

为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。这里有两种组件的注册类型：`全局注册`和`局部注册`。至此，我们的组件都只是通过 Vue.component 全局注册的：

```js
Vue.component('my-component-name', {
  // ... options ...
})
```

全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。

## 通过 Prop 向子组件传递数据

Prop 是你可以在组件上注册的一些自定义 attribute, 为了给博文组件传递一个标题，我们可以用一个 props 选项将其包含在该组件可接受的 prop 列表中：

```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

## 单个根元素

每个组件必须只有一个根元素

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
  v-bind:content="post.content"
  v-bind:publishedAt="post.publishedAt"
  v-bind:comments="post.comments"
></blog-post>
```

精简prop的方式

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
```


`