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

sort()方法是按照字典顺序对元素进行排序的，因此它**假定所有元素都是字符串类型**，在上一个例子中，即使元素是数字类型，也被认为是字符串类型。为了让sort()方法也能排序数字类型的元素，可以在调用方法时传入一个大小比较函数，排序时，sort()方法将会根据该函数比较数组中的两个元素的大小，从而决定整个数组的排序。

对于数字类型，该函数可以是一个简单的相减操作，从一个数字中减去另一个数字。如果结果为负，那么被减数小于减数；如果结果为0，那么被减数等于减数；如果结果为正，那么被减数大于减数。
```js
function compare(num1, num2) {
    return num1 - num2;
}

let nums = [3, 100, 1, 2, 200];
nums.sort(compare);
console.log(nums); // [1, 2, 3, 100, 200]
```

## 迭代器方法

最后一组方法时**迭代器**方法。这些方法对数组中的每个元素应用一个函数，可以返回一个值、一组值或者一个新数组

### 不生成新数组的迭代器方方法

此组迭代器方法不产生任何新数组，相反，它们要么对数组中的每个元素执行某种操作，要么返回一个值。

forEach()：该方法接受一个函数作为参数，对数组中的每个元素使用该函数。
```js
function square(num) {
    console.log(num, num * num);
}

let nums = [1, 2, 3];
nums.forEach(square);
// 1 1
// 2 4
// 3 9
```

every()：该方法接受一个返回值为布尔类型的函数，对数组中的每个元素使用该函数。如果对于所有的元素，该函数均返回true， 则该方法返回true。
```js
function isEven(num) {
    return num % 2 === 0;
}

let nums = [2, 4, 6];
let even = nums.every(isEven);
console.log(even); // true

let nums2 = [2, 3, 4];
let even2 = nums2.every(isEven);
console.log(even2); // false
```

some()：该方法也接受一个返回值为布尔类型的函数，只要有一个元素使得该函数返回值为true，该方法就返回true
```js
function isEven(num) {
    return num % 2 === 0;
}

let nums = [1, 2, 3];
let even = nums.some(isEven);
console.log(even); // true

let nums2 = [1, 3, 5];
let even2 = nums2.some(isEven);
console.log(even2); // false
```

reduce()：该方法接受一个函数，返回一个值。该方法会从一个累加值开始，不断对累加值和数组中的后续元素调用该函数，直到数组中的最后一个元素，最后返回得到的累加值。下面的例子展示了如何使用reduce()方法为数组中的元素求和：
```js
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

let nums = [1, 2, 3];
let sum = nums.reduce(add);
console.log(sum); // 6

// 执行过程如下
add(1, 2) -> 3
add(3, 3) -> 6
```

reduce()方法也可用来将数组中的元素连接成一个长的字符串：
```js
function concat(accumulatedString, item) {
    return accumulatedString + item;
}

let words = ['the ', 'quick ', 'brown ', 'fox '];
let sentence = words.reduce(concat);
console.log(sentence); // "the quick brown fox "
```

JavaScript还提供了reduceRight()方法，和reduce()方法不同，它是从右到左执行。下面的程序使用reduceRight()方法将数组中的元素进行翻转：
```js
function concat(accumulatedString, item) {
    return accumulatedString + item;
}

let words = ['the ', 'quick ', 'brown ', 'fox '];
let sentence = words.reduceRight(concat);
console.log(sentence); // "fox brown quick the "
```

### 生成新数组的迭代器方法

map()：该方法接收一个函数，对数组中的每个元素使用此函数。与forEach()方法不同的是，map()方法返回一个新的数组，该数组的元素是对原有元素应用此函数得到的结果。
```js
function curve(grade) {
    return grade += 5;
}

let grades = [1, 2, 3];
let newgrades = grades.map(curve);
console.log(newgrades); // [6, 7, 8]
```

下面是对字符串数组使用map()方法的例子：
```js
function first(word) {
    return word[0];
}

let words = ['for', 'you', 'me'];
let acronym = words.map(first);
console.log(acronym); // ['f', 'y', 'm']
```

filter()：和every()方法类似，传入一个返回值为布尔类型的函数。和every()方法不同的是，当对数组中的所有元素应用该函数，结果均为true，该方法并不返回true，而是返回一个新数组，该数组包含应用该函数后结果为true的元素
```js
function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

let nums = [];
for (let i = 0; i < 10; ++i) {
    nums[i] = i + 1;
}
let evens = nums.filter(isEven);
console.log(evens); // [ 2, 4, 6, 8, 10 ]
let odds = nums.filter(isOdd);
console.log(odds); // [ 1, 3, 5, 7, 9 ]
```

一个有趣案例：筛选由随机数生成的数组中大于等于60的元素数组
```js
function passing(num) {
    return num >= 60;
}

let grades = [];
for (let i = 0; i < 10; ++i) {
    grades[i] = Math.floor(Math.random() * 101);
}
let passGrades = grades.filter(passing);
console.log(grades);
console.log(passGrades);
```

案例：用filter()方法过滤字符串数组。下例过滤了不包含'cie'的单词：
```js
function afterc(str) {
    if (str.indexOf('cie') > -1) {
        return true;
    }
    return false;
}

let words = ['recieve', 'deceive', 'percieve', 'deceit', 'concieve'];
let newWords = words.filter(afterc);
console.log(newWords); // [ 'recieve', 'percieve', 'concieve' ]
```

## 二维和多维数组

JavaScript只支持一维数组，但是通过在数组里面保存数组元素的方式，可以轻松创建多维数组。

### 创建二维数组

二维数组类似一种由行和列构成的数据表格。在JavaScript中创建二维数组，需要先创建一个数组，然后让数组的每个元素也是一个数组。最起码，我们需要知道二维数组要包含多少行，有了这个信息，就可以创建一个n行1列的二维数组了：
```js
let twod = [];
let rows = 5;
for (let i = 0; i < rows; ++i) {
    twod[i] = [];
}

console.log(twod); // [ [], [], [], [], [] ]
```

这样做的问题是， 数组中的每个元素都是 undefined。更好的方式是遵照 JavaScript: The
Good Parts（O’Reilly） 一书第 64 页的例子， Crockford 通过扩展 JavaScript 数组对象， 为
其增加了一个新方法， 该方法根据传入的参数， 设定了数组的行数、 列数和初始值。 下面
是这个方法的定义:
```js
Array.matrix = function(numrows, numcols, initial) {
    let arr = [];
    for (let i = 0; i < numrows; ++i) {
        let columns = [];
        for (let j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    
    return arr;
}
```

下面是测试该方法的一些测试代码：
```js
let nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]); // 0

let names = Array.matrix(3, 3, '');
names[1][2] = 'Joe';
console.log(names[1][2]); // Joe
```

还可以仅用一行代码就创建并且使用一组初始值来初始化一个二维数组：
```js
let grades = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(grades[2][2]); // 9
```

对于小规模数据，这是创建二维数组最简单的方式。

### 处理二维数组的元素

处理二维数组中的元素，有两种最基本的方式：按列访问和按行访问。

对于两种方式，我们均使用一组嵌入式的for循环。

对于按列访问，外层循环对应行，内层循环对应列。以数组 grades 为例， 每一行对应一个学生的成绩记录。 我们可以将该学生的所有成绩相加， 然后除以科目数得到该学生的平均成绩。 下面的代码展示了这一过程：
```js
let grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
let total = 0;
let average = 0.0;

for (let row = 0; row < grades.length; ++row) {
    for (let col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log('Student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2));
    total = 0;
    average = 0.0;
}
// Student 1 average: 81.33
// Student 2 average: 79.67
// Student 3 average: 91.33
```

对于按行访问，只需要调整for循环的顺序，使外层循环对应列，内层循环对应行即可。下面的程序计算了一个学生各科的平均成绩:
```js
let grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
let total = 0;
let average = 0.0;

for (let col = 0; col < grades.length; ++col) {
    for (let row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
    }

    average = total / grades[col].length;
    console.log('Test ' + parseInt(col + 1) + ' average: ' + average.toFixed(2));
    total = 0;
    average = 0.0;
}

// Test 1 average: 85.33
// Test 2 average: 84.33
// Test 3 average: 82.67
```


### 参差不齐的数组

参差不齐的数组是指数组中每行的元素个数彼此不同。 有一行可能包含三个元素， 另一行
可能包含五个元素， 有些行甚至只包含一个元素。 

## 对象数组

数组还可以包含对象， 数组的方法和属性对对象依然适用。
```js
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function displayPts(arr) {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i].x + ',' + arr[i].y);
    }
}

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);

let points = [p1, p2];

for (let i = 0; i < points.length; ++i) {
    console.log('Point ' + parseInt(i+1) + ':' + points[i].x + ',' + points[i].y);
}

let p3 = new Point(5, 6);
points.push(p3);
console.log('After push: ');
displayPts(points);

points.shift();
console.log('After shift: ');
displayPts(points);

// Point 1:1,2
// Point 2:3,4
// After push: 
// 1,2
// 3,4
// 5,6
// After shift: 
// 3,4
// 5,6
```

### 对象中的数组

在对象中，可以使用数组存储复杂的数据。下例中， 我们创建了一个对象， 用于保存观测
到的周最高气温。 该对象有两个方法， 一个方法用来增加一条新的气温记录， 另外一个方
法用来计算存储在对象中的平均气温。 代码如下所示：
```js
function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    let total = 0;
    for (let i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

let thisWeek = new weekTemps();
thisWeek.add(10);
thisWeek.add(20);
thisWeek.add(30);
console.log(thisWeek.average()); // 20
```

## 练习

1. 创建一个记录学生成绩的对象， 提供一个添加成绩的方法， 以及一个显示学生平均成绩的方法。
```js
let grade = {
    gradeStore: [],
    add: add,
    average: average
}

function add(score) {
    this.gradeStore.push(score);
}

function average() {
    let total = 0;
    for (let i = 0; i < this.gradeStore.length; ++i) {
        total += this.gradeStore[i];
    }
    return total / this.gradeStore.length;
}

grade.add(10);
grade.add(20);
grade.add(30);

console.log(grade.average()); // 20
```

2. 将一组单词存储在一个数组中， 并按正序和倒序分别显示这些单词。
```js
let words = ['Aliy', 'David', 'Bob', 'Brown'];
console.log(words.sort()); // [ 'Aliy', 'Bob', 'Brown', 'David' ]
console.log(words.reverse()); // [ 'David', 'Brown', 'Bob', 'Aliy' ]
```

4. 创建这样一个对象， 它将字母存储在一个数组中， 并且用一个方法可以将字母连在一起， 显示成一个单词。
```js
function Words() {
    this.wordStore = [];
    this.add = add;
    this.toWords = toWords;
}

function add(word) {
    this.wordStore.push(word);
}

function toWords() {
    let temp = '';
    for (let i = 0; i < this.wordStore.length; ++i) {
        temp += this.wordStore[i];
    }

    return temp;
}

let myWord = new Words();
myWord.add('L');
myWord.add('O');
myWord.add('V');
myWord.add('E');
console.log(myWord.toWords()); // LOVE
```