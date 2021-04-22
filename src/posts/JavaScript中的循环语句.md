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
// function* 这种声明方式(function关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个  Generator  对象。
function* foo () {
    yield 1;
    yield 2;
    yield 3;
}

for (let o of foo ()) {
    console.log(o)
    break; // closes iterator, triggers return
}
```

### 迭代生成器

```js
function* fibonacci () { // 一个生成器函数
    let [prev, curr] = [0, 1]
    for (;;) { // while (true) {
        [prev, curr] = [curr, prev + curr]
        yield curr
    }
}

for (let n of fibonacci()) {
    console.log(n)
    // 当n大于1000时跳出循环
    if (n >= 1000)
        break;
}
```

### 不要重用生成器

生成器不应该重用，即使for...of循环的提前终止，例如通过break关键字。在退出循环后，生成器关闭，并尝试再次迭代，不会产生任何进一步的结果。

```js
var gen = (function *(){
    yield 1;
    yield 2;
    yield 3;
})();
for (let o of gen) {
    console.log(o);
    break;//关闭生成器
}

//生成器不应该重用，以下没有意义！
for (let o of gen) {
    console.log(o);
}

```

### 迭代其他可迭代对象

你还可以迭代显式实现**可迭代协议**的对象：

```js
let iterable = {
    [Symbol.iterator] () {
        return {
            i: 0,
            next () {
                if (this.i < 3) {
                    return { value: this.i++, done: false }
                }
                return { value: undefined, done: true }
            }
        };
    }
}

for (let value of iterable) {
    console.log(value)
}
// 0
// 1
// 2
```

### for...of与for...in的区别

无论是for...in还是for...of语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。

for...in 语句以任意顺序迭代对象的**可枚举属性**。

for...of 语句遍历可迭代对象定义**要迭代的数据**。

以下示例显示了与Array一起使用时，for...of循环和for...in循环之间的区别。

```js
Object.prototype.objCustom = function () {}
Array.prototype.arrCustom = function () {}

let iterable = [3, 5, 7]
iterable.foo = 'hello'

for (let i in iterable) {
    console.log(i) // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // 0, 1, 2, "foo"
  }
}


for (let i of iterable) {
    console.log(i) // 3 5 7
}
```

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';
```

每个对象将继承objCustom属性，并且作为Array的每个对象将继承arrCustom属性，因为将这些属性添加到Object.prototype和Array.prototype。由于继承和原型链，对象iterable继承属性objCustom和arrCustom。

```js
for (let i in iterable) {
  console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}
```

此循环仅以原始插入顺序记录iterable 对象的可枚举属性。它不记录数组元素3, 5, 7 或hello，因为这些不是枚举属性。但是它记录了数组索引以及arrCustom和objCustom。

```js
for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // 0, 1, 2, "foo"
  }
}
```

这个循环类似于第一个，但是它使用hasOwnProperty() 来检查，如果找到的枚举属性是对象自己的（不是继承的）。如果是，该属性被记录。记录的属性是0, 1, 2和foo，因为它们是自身的属性（不是继承的）。属性arrCustom和objCustom不会被记录，因为它们是继承的。

```js
for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

该循环迭代并记录iterable作为可迭代对象定义的迭代值，这些是数组元素 3, 5, 7，而不是任何对象的属性。