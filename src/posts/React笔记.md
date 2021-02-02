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