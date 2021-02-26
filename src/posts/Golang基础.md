---
categories:
    - Golang
tags:
    - 学习笔记
---

# Golang基础

## 基本语法

```go
package main

import "fmt"

func main() { // 此括号不能写在单独行
    fmt.Println("Hello Go~")
}
```

### 格式化字符串

Go语言使用`fmt.Sprintf`格式化字符串并赋值给新串

```go
package main

import "fmt"

func main() {
    // %d表示整型数字，%s表示字符串
    var code = 2021
    var date = "2021-10-1"
    var str = "Code=%d&EndDate=%s"
    var res = fmt.Sprintf(str, code, date)
    fmt.Println(res)
}

// Code=2021&EndDate=2021-10-1
```

## 数据类型

用于声明函数和变量。

数据类型的出现是为了把数据分成所需内存大小不同的数据，编程的时候需要用大数据的时候才需要申请大内存，就可以充分利用内存。

|类型|描述|
|-|-|
|布尔型|值可以是常量true或者false，例如：var b bool = true|
|数字类型|整型int和浮点型float32、float64；支持复数，其中位运算采用补码|
|字符串类型|一串固定长度的字符串连接起来的字符序列|
|派生类型|指针类型(Pointer)|
|        |数组类型|
|        |结构化类型(struct)|
|        |Channel类型|
|        |函数类型|
|        |切片类型|
|        |接口类型(interface)|
|        |Map类型|

### 数字类型

Go也有基于架构的类型，例如：int、uint、uintptr

|类型|描述|
|-|-|
|uint8|无符号8位整型(0~255)|
|uint16|无符号16位整型(0~65535)|
|unit32|无符号32位整型|
|unit64|无符号64位整型|
|int8|有符号8位整型(-128~127)|
|int16|有符号16位整型(-32768~32767)|
|int32|有符号32位整型|
|int64|有符号64位整型|

**浮点型**

|类型|描述|
|-|-|
|float32|32位浮点型数|
|float64|64位浮点型数|
|complex64|32位实数和虚数|
|complex128|64位实数和虚数|

**其它数字类型**

|类型|描述|
|-|-|
|byte|类似uint8|
|rune|类似uint32|
|uint|32或64位|
|int|与uint一样大小|
|uintptr|无符号整型，用于存放一个指针|