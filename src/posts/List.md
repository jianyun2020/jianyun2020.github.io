---
categories:
    - 数据结构与算法
tags:
    - JavaScript
    - 数据结构与算法
    - 学习笔记
---

# 数据结构与算法JavaScript-列表

## 列表的抽象数据类型定义

| 方法和方法 | 说明 |
| --- | ---- |
|listSize(属性)| 列表的元素个数 |
|pos(属性)| 列表的当前位置 |
|length(属性)| 返回列表中元素的个数 |
|clear(方法)| 清空列表中的所有元素 |
|toString(方法)| 返回列表的字符串形式 |
|getElement(方法)| 返回当前位置的元素 |
|insert(方法)| 在现有元素后插入新元素 |
|append(方法)| 在列表的末尾添加新元素 |
|remove(方法)| 从列表中删除元素 |
|front(方法)| 将列表的当前位置移动到第一个元素 |
|end(方法)| 将列表的当前位置移动到最后一个元素 |
|prev(方法)| 将当前位置前移一位 |
|next(方法)| 将当前位置后移一位 |
|currPos(方法)| 返回列表的当前位置 |
|moveTo(方法)| 将当前位置移动到指定位置 |
|find(方法)| 在列表中查找某一元素 |
|contains(方法)| 判断给定值是否在列表中 |

## 实现列表类

```js
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 初始化一个空数组来保存列表
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}
```

### append：给列表添加元素

该方法给列表的下一个位置增加一个新的元素， 这个位置刚好等于变量 listSize 的值：
```js
function append(element) {
    this.dataStore[this.listSize++] = element;
}
// 当新元素就位后，变量listSize加1
```

### find：在列表中查找某一元素

```js
function find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}
```

### remove：从列表中删除元素

```js
function remove(element) {
    const foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
```

### length：列表中有多少个元素

```js
function length() {
    return this.listSize;
}
```

### toString：显示列表中的元素

```js
function toString() {
    return this.dataStore;
}
```

### insert：向列表中插入一个元素

insert() 方法需要知道将元素插入到什么位置， 因此现在我们假设插入是指插入到列表中某个元素之后。
```js
function insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
```

### clear：清空列表中所有元素

```js
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
```

clear() 方法使用 delete 操作符删除数组 dataStore， 接着在下一行创建一个空数组。 最后一行将 listSize 和 pos 的值设为 1， 表明这是一个新的空列表。

## contains：判断给定值是否在列表中

```js
function contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}
```

### 遍历列表

最后的一组方法允许用户在列表上自由移动， 最后一个方法 getElement() 返回列表的当前元素：
```js
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}
```

## 使用迭代器访问列表

使用迭代器， 可以不必关心数据的内部存储方式， 以实现对列表的遍历。 前面提到的方法front()、 end()、 prev()、 next() 和 currPos() 就实现了 List 类的一个迭代器。 以下是和使用数组索引的方式相比， 使用迭代器的一些优点。
- 访问列表元素时不必关心底层的数据存储结构。
- 当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器。
- 可以用不同类型的数据存储方式实现List类，迭代器为访问列表里的元素提供了一种统一的方式。

了解了这些优点后， 来看一个使用迭代器遍历列表的例子：
```js
for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}
```

在 for 循环的一开始， 将列表的当前位置设置为第一个元素。 只要 currPos 的值小于列表的长度， 就一直循环， 每一次循环都调用 next() 方法将当前位置向前移动一位。同理， 还可以从后向前遍历列表， 代码如下：
```js
for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement());
}
```

循环从列表的最后一个元素开始， 当当前位置大于或等于 0 时， 调用 prev() 方法后移一位。

迭代器只是用来在列表上随意移动， 而不应该和任何为列表增加或删除元素的方法一起使用。

## 一个基于列表的应用

为了展示如何使用列表， 我们将实现一个类似 Redbox 的影碟租赁自助查询系统。

### 读取文本文件

为了得到商店内的影碟清单， 我们需要将数据从文件中读进来。 首先， 使用一个文本编辑器输入现有影碟清单， 假设将该文件保存为 films.txt。 该文件的内容如下（这是由 IMDB用户在 2013 年 10 月 5 日选出的 20 部最佳影片）。

(1) The Shawshank Redemption（《肖申克的救赎》）

(2) The Godfather（《教父》）

(3) The Godfather: Part II（《教父 2》）

(4) Pulp Fiction（《低俗小说》）

(5) The Good, the Bad and the Ugly（《黄金三镖客》）

(6) 12 Angry Men（《十二怒汉》 ）

(7) Schindler’s List（《辛德勒名单》）

(8) The Dark Knight（《黑暗骑士》）

(9) The Lord of the Rings: The Return of the King（《指环王： 王者归来》）

(10) Fight Club（《搏击俱乐部》）

(11) Star Wars: Episode V - The Empire Strikes Back（《星球大战 5： 帝国反击战》）

(12) One Flew Over the Cuckoo’s Nest（《飞越疯人院》）

(13) The Lord of the Rings: The Fellowship of the Ring（《指环王： 护戒使者》）

(14) Inception（《盗梦空间》）

(15) Goodfellas（《好家伙》）

(16) Star Wars（《星球大战》）

(17) Seven Samurai（《七武士》）

(18) The Matrix（《黑客帝国》）

(19) Forrest Gump（《阿甘正传》）

(20) City of God（《上帝之城》）

现在， 我们需要一段程序来读取文件内容：(这里通过nodejs的文件读取模块)
```js
const fs = require('fs');
const movies = fs.readFileSync('films.txt', 'utf-8').split('\n');
```

这一行代码做了两件事。 首先， 它通过调用函数 read(films.txt) 读取了文本文件的内容；其次， 它将读进来的内容按照换行符分成了不同行， 然后保存到数组 movies 中。

这一行代码做了两件事。 首先， 它通过调用函数 read(films.txt) 读取了文本文件的内容；其次， 它将读进来的内容按照换行符分成了不同行， 然后保存到数组 movies 中。这行程序挺管用， 但还谈不上完美。 当读进来的内容被分割成数组后， 换行符被替换成空格。 多一个空格看起来无伤大雅， 但是在比较字符串时却是个灾难。 因此， 我们需要在循环里， 使用 trim() 方法删除每个数组元素末尾的空格。 要是有一个函数能把这些操作封装起来那是再好不过了， 那就让我们定义一个这样的方法吧。 从文件中读入数据， 然后将结果保存到一个数组中：
```js
function createArr(file) {
    const fs = require('fs');
    const movies = fs.readFileSync('films.txt', 'utf-8').split('\n');
    for (let i = 0; i < movies.length; ++i) {
        movies[i] = movies[i].trim();
    }
    return movies;
}
```

### 使用列表管理影碟租赁

下一步要将数组 movies 中的元素保存到一个列表中。 代码如下:
```js
let movieList = new List();
for (let i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
```

现在可以写一个函数来显示影碟店里现有的影碟清单了：
```js
function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        console.log(list.getElement());
    }
}
```