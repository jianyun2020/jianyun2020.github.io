---
categories:
    - React
tags:
    - JavaScript
    - 学习笔记
    - React
---

# React-JSX简介

考虑如下变量声明：
```jsx
const element = <h1>Hello, world!</h1>;
```
这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。

## 在JSX中嵌入表达式

```jsx
const name = 'Bob';
const element = <h1>Hello, {name}</h1>;
```

在JSX语法中，你可以在大括号内放置任何有效的JavaScript表达式。

## JSX也是一个表达式

在编译之后，JSX表达式会被转换为普通JavaScript函数调用，并且对其取值后得到JavaScript对象。
```js
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {user.toUpperCase()}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
```

JSX特定属性

你可以通过使用引号，来将属性值指定为字符串字面量:
```jsx
const element = <div tabIndex="0"></div>;
```

也可以使用大括号，来在属性值中插入一个JavaScript表达式：
```jsx
const element = <img src={user.avatarUrl}></img>;
```

在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。

> 警告：
>
> 因为因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。
>例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。

## 使用JSX指定子元素

假如一个标签里没有内容，你可以使用/> 来闭合标签，就像XML语法一样：
```jsx
const element = <img src={user.avatarUrl} />;
```

JSX 标签里能够包含很多子元素:
```jsx
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);
```

## JSX防止注入攻击

你可以安全地在JSX当中插入用户输入内容:
```jsx
const title = response.potentiallyMaliciousInput;
// 直接使用是安全的
const element = <h1>{title}</h1>;
```

React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。

## JSX表示对象

Babel会把JSX转译成一个名为React.createElement()函数调用。
以下两种示例代码完全等效：
```jsx
const element = (
    <h1 className="greeting">
        Hello, World!
    </h1>
);
```
```jsx
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, World!'
);
```

React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
```jsx
// 注意：这是简化过的结构
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, World!'
    }
};
```

这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。