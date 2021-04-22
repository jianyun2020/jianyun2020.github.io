---
categories:
    - JavaScript
tags:
    - JavaScript
    - 循环语句
    - 学习笔记
---

# 循环语句

## for 语句
## do...while 语句
## while 语句
## labeled 语句
## break 语句
## continue 语句
## for...in 语句

`for...in`语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性。

```js
for (variable in object) {
    // statements
}
```

- variable：每次迭代时，variable会被赋值为不同的属性名
- object：非Symbol类型的可枚举属性被迭代的对象

### 为什么用for ... in?

for ... in是为**遍历对象属性**而构建的，不建议与数组一起使用，数组可以用Array.prototype.forEach()和for ... of，那么for ... in的到底有什么用呢？

它最常用的地方应该是用于**调试**，可以更方便的去检查对象属性（通过输出到控制台或其他方式）。尽管对于处理存储数据，数组更实用些，但是你在处理有key-value数据（比如属性用作“键”），需要检查其中的任何键是否为某值的情况时，还是推荐用for ... in。

## for...of 语句

for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

```js
for (variable of iterable) {
    // statements
}
```

- variable：在每次迭代中，将不同属性的值分配给变量。
- iterable：被迭代枚举其属性的对象。

### 迭代Array

```js
let iterable = [10, 20, 30]

for (let value of iterable) {
    value += 1
    console.log(value)
}
// 11
// 21
// 31
```

如果你不想修改语句块中的变量 , 也可以使用const代替let。

```js
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### 迭代String

```js
let iterable = 'boo'

for (let value of iterable) {
    console.log(value)
}
// "b"
// "o"
// "o"
```

### 迭代 TypedArray

```js
let iterable = new Uint8Array([0x00, 0xff])

for (let value of iterable) {
    console.log(value)
}
// 0
// 255
```

### 迭代Map

```js
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]])

for (let entry of iterable) {
    console.log(entry)
}
// ["a", 1]
// ["b", 2]
// ["c", 3]

for (let [key, value] of iterable) {
    console.log(value);
}
// 1
// 2
// 3
```

### 迭代 Set

```js
let iterable = new Set([1,1,2,2,3,3])

for (let value of iterable) {
    console.log(value)
}
// 1
// 2
// 3
```

### 迭代 arguments 对象

```js
(function () {
    for (let argument of arguments) {
        console.log(argument)
    }
})(1, 2, 3)

// 1
// 2
// 3
```

### 迭代 DOM 集合

迭代 DOM 元素集合，比如一个NodeList对象：下面的例子演示给每一个 article 标签内的 p 标签添加一个 "read" 类。

```js
//注意：这只能在实现了NodeList.prototype[Symbol.iterator]的平台上运行
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}

```

### 关闭迭代器

对于for...of的循环，可以由break, throw, continue或return终止。在这些情况下，迭代器关闭。

```js

```