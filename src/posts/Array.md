---
categories:
    - 数据结构与算法
tags:
    - JavaScript
    - 数据结构与算法
    - 学习笔记
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

通过可变函数，可以不必引用数组中的某个元素，就能改变数组的内容。

### 为数组添加元素

push()：将一个元素添加到数组末尾
```js
let nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]

// 也可使用数组的length属性为数组添加元素
nums[nums.length] = 5;
console.log(nums); // [1, 2, 3, 4, 5]
```

unshift()：将一个元素添加到数组开头
```js
// 如果不用数组提供的可变函数，则新元素添加进来后，需要把每个元素都相应地后移一个位置
let nums = [1, 2];
let newnums = 0;
for (let i = nums.length; i >= 0; --i) {
    nums[i] = nums[i-1];
}
nums[0] = newnums;
console.log(nums); // [0, 1, 2]

// 随着数组存储的元素越来越多，上述代码会越来越低效，推荐使用unshift()方法
let nums2 = [1, 2];
let newnums2 = 0;
nums2.unshift(newnums2);
console.log(nums2); // [0, 1, 2]
nums2.unshift(newnums2, 1, 2); // 可以一次为数组添加多个元素
console.log(nums2); // [0, 1, 2, 0, 1, 2]
```

### 从数组中删除元素

pop()：删除数组末尾的元素
``js
let nums = [1, 2, 3];
nums.pop();
console.log(nums); // [1, 2]
```

如果没有可变函数，从数组中删除第一个元素需要将后续元素各自向前移动一个位置，同样低效
```js
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; ++i) {
    nums[i] = nums[i+1];
}

console.log(nums); // [2, 3,]
```

除了要将后续元素前移一位，还多了一个元素，打印数组中的元素时会发现最后多了一个逗号，推荐使用shift()方法

shift()：删除数组的第一个元素
```js
let nums = [1, 2, 3];
nums.shift();
console.log(nums); // [2, 3]
```

pop()和shift()方法都将删掉的元素作为方法的返回值，因此可以使用一个变量来保存删除的元素

### 从数组中间位置添加和删除元素

使用splice()方法为数组添加元素，需提供一下参数：
- 起始索引（希望开始添加元素的地方）
- 需要删除的元素个数（添加元素时改参数设为0）
- 想要添加进数组的元素

下面的程序在数组中间插入元素：
```js
let nums = [1, 2, 3, 7, 8, 9];
nums.splice(3, 0, 4, 5, 6);
console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

下面是使用splice()方法从数组中删除元素：
```js
let nums = [1, 2, 3, 9, 4];
nums.splice(3, 1);
console.log(nums); // [1, 2, 3, 4]
```

### 为数组排序

reverse()：将数组中的元素顺序进行反转
```js
let nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]
```

sort()：对数组中的元素进行排序

如果元素是字符串类型，数组的可变方法sort()就很好用
```js
let names =['David', 'Mike', 'Bryan'];
names.sort();
console.log(names); // ['Bryan', 'David', 'Mike']
```

但如果数组元素是数字类型，sort()方法的排序结果就不能让人满意了
```js
let nums = [3, 100, 2, 1, 200];
nums.sort();
console.log(nums); // [1, 100, 2, 200, 3]
```

sort()方法是按照字典顺序对元素进行排序的，因此它**假定所有元素都是字符串类型**，在上一个例子中，即使元素是数字类型，也被认为是字符串类型。为了让sort()方法也能排序数字类型的元素，可以在调用方法时传入一个大小比较函数，排序时