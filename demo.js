function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 初始化一个空数组来保存列表
    this.find = find;
    this.toString = toString;
    this.append = append;
    this.remove = remove;
    this.insert = insert;
    this.clear = clear;
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

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    const foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}
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

function createArr(file) {
    const fs = require('fs');
    const arr = fs.readFileSync('films.txt', 'utf-8').split('\n');
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}
