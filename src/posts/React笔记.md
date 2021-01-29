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