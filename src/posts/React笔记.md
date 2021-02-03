---
categories:
    - React
tags:
    - React
    - 学习笔记
---

# React学习笔记

1. 在html中简易使用jsx语法时，需要引入babel插件，同时设置`<script type="text/babel"></script>`
2. js语法创建虚拟DOM：`React.createElement('h1', {id: 'test'}, 'Hello, React')`
3. 关于虚拟DOM：
   1. 本质就是Object类型的对象
   2. 虚拟DOM是React内部用，无需真实DOM上那么多属性
   3. 虚拟DOM最终会被转换为真实DOM
4. JSX语法规则：
   1. 定义虚拟DOM时，不要加引号，如`<h1>我是虚拟DOM</h1>`
   2. 标签中混入**js表达式**时需要用`{}`
   3. 添加类名时需要用小驼峰`className`，不要用`class`
   4. 使用内联样式`style`时，需要使用`{{}}`，里边的`{}`表示对象。如`{{color: 'red'; fontSize: 'px'}}`，里边的属性需要使用小驼峰替代`-`的写法
   5. 只能有一个跟标签
   6. 标签必须闭合
   7. 标签的首字母：
      1. 如果是小写字母开头，则将标签转为html中同名标签，如果html中没有对应标签，则报错
      2. 如果是大写字母开头，react就去渲染对应组件，若组件未定义，则报错
5. js语句（代码）与js表达式
   1. js语句：
      1. `if () {}`
      2. `for () {}`
      3. `switch () {}`
      4. ...
   2. js表达式
      1. `a`
      2. `a+b`
      3. `arr.map()`
      4. `function test () {}`
   3. 总结：js表达式有返回值，能直接赋值给变量
6. 函数定义的组件：执行`ReactDOM.render(<MyComponent />, ...)`之后发生了什么？
   1. React解析组件标签，找到了`MyComponent`组件
   2. 发现组件使用函数定义，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中
7. 类定义的组件：执行`ReactDOM.render(<MyComponent />, ...)`之后发生了什么？
   1. React解析组件标签，找到了`MyComponent`组件
   2. 发现组件使用类定义，随后`new`出来该类的实例，并通过实例调用原型上的`render()`方法
   3. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中
8. 组件`实例`的三大核心属性：
   1. `state`:
      1. 初始化状态（不用构造器）：`state = {}`
      2. 不可直接更改，需要借助内置的API：`setState({})`
   2. `props`
      1. 批量传递标签属性：`{...p}`
      2.对props进行限制：
      ```jsx
        // prop-types.js
        static propTypes = {
           name: PropTypes.string.isRequired,
           age: PropTypes.number,
           fun: PropTypes.func
        }
        static defaultProps = {
           age: 18
        }

      ```
      3. props是只读的，不能更改
      4. 构造器是否接受`props`,是否传给`super`,取决于：是否希望在构造器中通过`this`访问`props`
   3. `refs`
      1. 字符串形式的`ref`：`<input ref='input1' />` (效率不高，不推荐，可能废弃)
      2. 回调函数形式`ref`：`<input ref={(currentNode) => {this.input1 = currentNode}}/>`
         - 回调函数执行次数问题
            - 内联函数：更新过程会被执行两次, 第一次传参`null`, 第二次传参`DOM元素`, 这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的
            - class的绑定函数可以避免上述问题
            ```jsx
               func = c => {
                  this.input1 = c;
               }
               `<input ref={this.func} />`
            ```
      3. `createRef`
      ```js
         // React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是“专人专用”的
         myRef = React.createRef()
         showData = () => {
            console.log(this.myRef.current.value);
         }
      ```
9. 展开运算符: `...`常用的几种用法
   1. 在数组中使用
   ```js
      let arr1 = [1, 2, 3];
      let arr2 = [4, 5, 6];
      let arr3 = [...arr1, ...arr2]; // 连接数组 [1, 2, 3, 4, 5, 6]
   ```
   2. 在函数中使用
   ```js
      function sum(...numbers) {
         return numbers.reduce((preValue, currentValue) => {
            return preValue + currentValue;
         });
      }
   ```
   3. 构造字面量对象时使用展开语法
   ```js
      let person = {name: 'tom', age: 19};
      let person2 = {...person};
      // console.log(...person); // 报错，展开运算符不能展开对象
      person.name = 'jerry';
      console.log(person2); // {name: 'tom', age: 19}
      console.log(person); // {name: 'jerry', age: 19}

      // 合并
      let person3 = {...person, name: 'jack', address: '地球'};
      console.log(person3); // {name: 'jack', age: 19, address: '地球'}
   ```
10. React中的事件处理
   - 通过onXxx属性指定事件处理函数（注意大小写）
      - React使用的是自定义（合成）事件，而不是使用的原生DOM事件————为了更好的兼容性
      - React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）————为了更高效
   - 通过event.target得到发生事件的DOM元素对象————不要过渡的使用ref
   ```js
      showData = event => {
         console.log(event.target.value);
      }
      <input onBlur={this.showData} />
   ```
11. 受控组件和非受控组件
- 非受控组件：现用现取
- 受控组件：随着输入维护状态(State)--推荐

12. 高阶函数和函数柯里化
- 高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数
   - 若A函数接收的`参数是一个函数`，那么A就可以称为高阶函数
   - 若A函数，调用的`返回值依然是一个函数`，那么A就可以称为高阶函数
   - 常见的高阶函数：`Promise`,`setTimeout`,`arr.map()`
```js
// 柯里化方式
handleFormData(dataType) {
   return (event) => {
      this.setState({
         [dataType]: event.target.value
      })
   }
}

<input onChange={this.handleFormData('username')} type="text" name="username"/>
<input onChange={this.handleFormData('password')} type="password" name="password"/>

// 非柯里化方式
handleFormData(dataType, event) {
   this.setState({
      [dataType]: event.target.value
   })
}

<input onChange={event => this.handleFormData('username', event)} type="text" name="username"/>
<input onChange={event => this.handleFormData('password', event)} type="password" name="password"/>
```

- 函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

13. React的生命周期

生命周期回调函数 <=> 生命周期钩子函数 <=> 生命周期函数 <=> 生命周期钩子

**卸载组件：**
`React.unmountComponentAtNode(document.getElementById('root'))`

![](images/lifeold.png)

- 初始化阶段：由`React.render()`触发---初次渲染
  - `constructor()`
  - `componentWillMount()`
  - `render()`
  - `componentDidMount()`===>常用：一般在这个钩子中做一些初始化的事，例如：开启定时器、订阅消息、发送网络请求
- 更新阶段：由组件内部`this.setState()`或`父组件render`触发
  - `shouldComponentUpdate()`
  - `componentWillUpdate()`
  - `render()`===>必须使用
  - `componentDidUpdate()`
- 卸载阶段：由`React.unmountComponentAtNode()`触发
  - `componentWillUnmount()`===>常用：一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅

![](images/lifenew.png)

- 初始化阶段：由`React.render()`触发---初次渲染
  - `constructor()`
  - `getDerivedStateFromProps()`
  - `render()`
  - `componentDidMount()`===>常用：一般在这个钩子中做一些初始化的事，例如：开启定时器、订阅消息、发送网络请求
- 更新阶段：由组件内部`this.setState()`或`父组件render`触发
  - `shouldComponentUpdate()`
  - `getDerivedStateFromProps()`
  - `render()`===>必须使用
  - `getSnapshotBeforeUpdate()`
  - `componentDidUpdate()`
- 卸载阶段：由`React.unmountComponentAtNode()`触发
  - `componentWillUnmount()`===>常用：一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅

14. DOM的Diffing算法

经典面试题：
   1. React/Vue中的key有什么作用？（key的内部原理是什么？）
   2. 为什么遍历时，key最好不用index？

- 虚拟DOM中key的作用：
  - 简单地说：key是虚拟DOM的标识，在更新显示时key起着极其重要的作用
  - 详细的说：当状态中的数据发生变化时，React会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
    - 旧虚拟DOM中找到了与新虚拟DOM相同的key：
      - 若虚拟DOM中内容没变，则使用之前的真实DOM
      - 若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
    - 旧虚拟DOM中没有找到与新虚拟DOM相同的key：
      - 根据数据创建新的真实DOM，随后渲染到页面中
- 用index作为key可能会引发的问题：
  - 若对数据进行：逆序添加、逆序删除等破坏顺序的操作：会产生不必要的真实DOM更新===>界面效果没问题，但效率低
  - 如果结构中还包含输入类的DOM：会产生错误的DOM更新===>界面有问题
  - 注意，如果不存在数据的逆序添加、逆序删除等破坏顺序的操作，仅用于显示列表用于展示，使用index作为key是没有问题的
- 开发中如何选择key？
  - 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一标识
  - 如果确定只是简单的展示数据，用index也是可以的

15. 安装React脚手架：`npm install -g create-react-app`

16. `uuid`和`nanoid`库，用于生成唯一的ID值

17. 