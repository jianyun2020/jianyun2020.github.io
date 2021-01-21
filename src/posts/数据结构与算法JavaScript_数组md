---
categories:
    - 数据结构与算法
tags:
    - JavaScript
    - 数据结构与算法
---

# 数据结构与算法JavaScript-数组

## 数组

JavaScript 中的数组是一种特殊的对象， 用来表示偏移量的索引是该对象的属性， 索引可
能是整数。 然而， 这些数字索引在内部被转换为字符串类型， 这是因为 JavaScript 对象中
的属性名必须是字符串。 数组在 JavaScript 中只是一种特殊的对象， 所以效率上不如其他
语言中的数组高。
JavaScript 中的数组， 严格来说应该称作对象， 是特殊的 JavaScript 对象， 在内部被归类为数
组。 由于 Array 在 JavaScript 中被当作对象， 因此它有许多属性和方法可以在编程时使用。

## 使用数组

### 创建数组

两种方式：
 - 通过[ ]操作符（推荐）  
 ```js
let arr1 = []; // arr1.length显示0
let arr2 = [1, 2, 3, 4]; // arr2.length显示4
 ```

 - 通过Array的构造函数  
 ```js
let arr1 = new.Array(); // arr1.length显示0
let arr2 = new.Array(1,2,3); // arr2.length显示3
let arr3 = new.Array(10); // arr3.length显示10
 ```

 *特性：脚本语言中的元素不必是同一种数据类型。*

 可通过Array.isArray()来判断一个对象是否是数组。

### 读写数组

求数组中元素的和：
```js
const numbers = [1, 2, 3, 5, 8, 13, 21];
let sum = 0;
for (let i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}

console.log(sum); // 53
```

### 由字符串生成数组

通过字符串对象的split()方法也可以生成数组：
```js
const setence = "Hello Array";
const arr = setence.split(' '); // 通过空格分割
console.log(arr); // [ 'Hello', 'Array' ]
```

### 对数组的整体性操作

将一个数组赋值给另一个数组：此时，只是为被赋值的数组增加了一个新的引用，当修改原数组中的值时，被赋值数组中的值也跟着改变。
```js
let nums = [1, 2, 3];
let samenums = nums;
nums[0] = 4;
console.log(samenums[0]); // 4
```

这种行为被称为**浅复制**，更好的方案是使用**深复制**，将原数组中的每一个元素都赋值一份到新数组中。可以写一个深复制函数来实现：
```js
function deepCopy(arr1, arr2) {
    for (let i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}
```
这样，修改原数组中的元素时，新数组中的元素不会改变。
```js
let nums = [1, 2, 3];
let samesums = [];
deepCopy(nums, samesums);
nums[0] = 4;
console.log(samesums[0]); // 1
```

## 存取函数

JavaScript提供了用来访问数组元素的函数，叫做**存取函数**,这些函数返回目标数组的某种变体。

### 查找元素

indexOf( )：用来查找传入的参数在目标数组中是否存在。存在返回索引，不存在返回-1。
```js
const names = ['Bob', 'Lily', 'David'];
console.log(names.indexOf('Bob')); // 0
console.log(names.indexOf('Faker')); // -1
```

如果数组中包含多个相同的元素，indexOf( )函数总是返回第一个元素的索引；lastIndexOf( )则返回最后一个元素的索引。

### 数组的字符串表示

join( )和toString( )方法可以将数组转化为字符串，数组各元素之间用逗号隔开。
```js
const arr = ['Hello', 'World'];
const arr1 = arr.join();
const arr2 = arr.toString();
console.log(arr1); // Hello, World
console.log(arr2); // Hello, World
// join()方法可以传入替换默认逗号的字符
const arr3 = arr.join('-');
console.log(arr3); // Hello-World
```

### 由已有数组创建新数组

concat()：合并多个数组创建一个新数组
工作原理：发起者是一个数组，参数是另一个数组。作为参数的数组中的所有元素都被连接到发起者元素的后边
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4]
```

splice()：截取一个数组的子集创建一个新数组
工作原理：第一个参数是截取的起始索引，第二个参数是截取的长度
```js
let arr1 = [1, 2, 3, 4];
let arr2 = arr1.splice(1, 2);
console.log(arr2); // [2, 3]
```

## 可变函数