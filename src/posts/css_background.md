---
categories:
    - CSS
tags:
    - CSS
    - 学习笔记
    - background
---

# CSS的background属性详解

background是一中CSS简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attachment。

对于所有简写属性，任何没有被指定的值都会被设定为它们的初始值。

## 语法

```css
/* 使用<background-color> */
background: green;

/* 使用<bg-image>和<repeat-style> */
background: url('test.jpg') repeat-y;

/* 使用<box>和<background-color> */
background: border-box red;

/* 将背景设为一张居中放大的图片 */
background: no-repeat center/80% url('test.jpg');
```

background属性被指定多个背景层时，使用逗号分隔每个背景层。

每一层语法如下：

- 在每一层中，下列的值可以出现0次或1次：
    - `<attachment>`
    - `<bg-image>`
    - `<position>`
    - `bg-size`
    - `repeat-style`
- `<bg-size>`只能紧接着`<position>`出现，以`/`分割，如：`center/80%`.
- `<box>`可能出现0次、1次或2次。如果出现1次，它同时设定`background-origin`和`background-clip`。如果出现两次，第一次出现设置`background-origin`，第二次的出现设置`background-clip`。
- `<background-color>`只能被包含在最后一层。

**注意：`background-color`只能在`background`的最后一个属性上定义，因为整个元素只有一中背景颜色。**

## 值

下面的一个或多个值，可以按任意顺序放置：

### `<attachment>`

`background-attachment`属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。

#### 语法

```css
/* 关键 属性值 */
background-attachment: scroll; /* 初始值 */
background-attachment: fixed;
background-attachment: local;
```

#### 取值

`fixed`

此关键属性值表示背景相对与视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。

`local`

此关键属性值表示背景相对与元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动，并且背景的绘制区域和定位区域是相对与可滚动的区域而不是包含它们的边框。

`scroll`

此关键属性值表示背景相对于元素本身固定，而不是随着它的内容滚动（对元素边框是有效的）。

#### 多背景图支持

此属性支持多张背景图片。你可以用逗号分隔来为每一张背景图片指定不同的`<attachment>`属性。每一张背景图片顺序对应相应的 `attachment` 属性。

### `<box>`

`background-clip`和`background-origin`

`background-clip`设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

如果没有设置背景图片(`background-image`)或(`background-color`)，那么这个属性只有在边框(`border`)被设置为非固实（solid）、透明或半透明才能看到视觉效果（与`border-style`或`border-image`有关），否则，本属性产生的样式变化会被边框覆盖。

#### 语法

```css
/* 关键 属性值 */
background-clip: border-box; /* 初始值 */
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
```

#### 值

`border-box`

背景延伸至边框外沿（但是在边框下层）。

`padding-box`

背景延伸至内边距（padding）外沿。不会绘制到边框处。

`content-box`

背景被裁剪至内容区（content box）外沿。

`text`

背景被裁剪成文字的前景色。

`background-origin`规定了背景图片`background-image`属性的原点位置的背景相对区域。

*注意：当使用`background-attachment`为`fixed`时,该属性将被忽略不起作用。*

#### 语法

```css
background-origin: border-box;
background-origin: padding-box; /* 初始值 */
background-origin: content-box;
```

#### 属性值

`border-box`

背景图片的摆放以border区域为参考

`padding-box`

背景图片的摆放以padding区域为参考

`content-box`

背景图片的摆放以content区域为参考

### `<background-color>`

`background-color`会设置元素的背景色，属性的值为颜色值或关键字`transparent`二者选其一。

#### 语法

```css
/* Keyword values */
background-color: red;

/* Hexadecimal value */
background-color: #bbff00;

/* RGB value */
background-color: rgb(255, 255, 128);

/* HSLA value */
background-color: hsla(50, 33%, 25%, 0.75);

/* Special keyword values */
background-color: currentColor;
background-color: transparent;
```