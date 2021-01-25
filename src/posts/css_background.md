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

### `<bg-image>`

`background-image`属性用于为一个元素设置一个或多个背景图像。

在绘制时，图像以Z方向堆叠的方式进行。先指定的图像会在之后指定的图像上面绘制。因此指定的第一个图像“最接近用户”。

然后元素的边框border会在它们之上被绘制，而`background-color`会在它们之下绘制。图像的绘制与盒子以及盒子的边框的关系，需要在CSS属性`background-clip`和`background-origin`中定义。

如果一个指定的图像无法被绘制（比如，被指定的URI所表示的文件无法被加载），浏览器会将此等情况等同于其值被设为`none`。

**注意： 即使图像是不透明的，背景色在通常情况下并不会被显示，web开发者仍然应该指定`background-color` 属性。如果图像无法被加载—例如，在网络连接断开的情况下—背景色就会被绘制。**

#### 语法

每个背景图像被明确规定为关键字`none`或是一个`<image>`值。

可以提供由逗号分隔的多个值来指定多个背景图像：
```css
background-image: linear-gradient(to bottom, rgba(255,255,0, 0.5), rgba(0,0,255,0.5)),
url('test.jpg');
```

#### 取值

`none`

是一个表示无背景图的关键字。

`<image>`

`<image>`用来标记将要显示的图片，支持多背景设置，背景之间以逗号隔开。

### `<position>`

`background-position`为每一个背景图片设置初始位置。这个位置是相对于由`background-origin`定义的位置图层的。

#### 语法

```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 0% 0%; /* 初始值 */

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;
```

#### 值

- 关键字`center`，用来居中背景图片。
- 关键字`top, left, bottom, right`中的一个。用来指定把这个item放在哪一个边缘。另一个维度被设置成50%,所以这个item被放在指定边缘的中间位置。
- `<length>`和`<percentage>`。指定相对于左边缘的x坐标，y坐标被设置成50%。
- 如果一个值为`top`或`bottom`，那么另一个值不应该是`top`或`bottom`。
- 如果一个值为`left`或`right`，那么另一个值不应该是`left`或`right`。
- +50px（将图片的左边界对齐容器中的中线）
- 0px（图片的左边界与容器左边界重合）
- -100px（将图片相对容器左移100px，这意味着图片中部的100px内容将出现在容器中）
- -200px（将图片相对容器左移200px，这意味着图片右部分的100px内容将出现在容器中）
- -250px（将图片相对容器左移250px，这意味着图片的右边界对齐容器的中线）

另外需要注意，如果背景图片的大小和容器大小一样，那设置的百分比的值将永远无效，因为“容器和图片的差”为0（图片永远填满容器，并且图片的相对位置和容器的相对位置永远重合）。在这种情况下，需要为偏移使用绝对值（例如px）。

`<position>`

一个`<position>`定义一组x/y坐标（相对于一个元素盒子模型的边缘），来放置这个item。它可以被定义为一个值或者两个值。如果被定义为两个值，那么第一个值代表水平位置，第二个值代表垂直位置。如果只指定一个值，那么第二个值默认为center。

### `<repeat-style>`

`background-repeat`属性定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复。

默认情况下，重复的图像被裁剪为元素的大小，但它们可以缩放（使用round）或者均匀的分布（使用space）。

#### 语法

```css
/* 单值语法 */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* 双值语法：水平horizontal | 垂直vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;
```

#### 值

`repeat-style`

单值语法是完整的双值语法的简写：
|单值|等价于双值|
|---|---|
|repeat-x| repeat no-repeat|
|repeat-y| no-repeat repeat|
|repeat| repeat repeat|
|space| space space|
|round| round round|
|no-repeat| no-repeat no-repeat|

在双值语法中，第一个值表示水平重复行为，第二个值表示垂直重复行为。下面是关于每一个值是怎么工作的具体说明：
|值|说明|
|---|---|
|repeat|图像会按需重复来覆盖整个背景图片所在的区域，最后一个图像会被裁剪，如果它的大小不合适|
|space|图像会尽可能得重复，但是不会裁剪，第一个和最后一个图像会被固定在元素得相应的边上，同时空白会均匀地分布在图像之间。`background-position`属性会被忽视，除非只有一个图像能被无裁剪地显示。只在一种情况下裁剪会发生，那就是图像太大了以至于没有足够的空间来完整显示一个图像|
|round|随着允许的空间在尺寸上的增长, 被重复的图像将会伸展(没有空隙), 直到有足够的空间来添加一个图像. 当下一个图像被添加后, 所有的当前的图像会被压缩来腾出空间. 例如, 一个图像原始大小是260px, 重复三次之后, 可能会被伸展到300px, 直到另一个图像被加进来. 这样他们就可能被压缩到225px.|
|no-repeat|图像不会被重复（因为背景图像所在的区域将可能没有完全覆盖），那个没有被重复的背景图像的位置是由`background-position`属性来决定的。|

### `<bg-size>`

`background-size`设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持原有比例的同时缩放到元素的可用空间尺寸。

```css
/* 关键字 */
background-size: cover;
background-size: contain;

/* 一个值：这个值指定图片的宽度，图片的高度隐式的为auto */
background-size: 50%;
background-size: 3em;
background-size: 12px;
background-size: auto;

/* 两个值 */
/* 第一个值指定图片的宽度，第二个值指定图片的高度 */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto; /* 初始值 */

/* 逗号分隔的多个值：设置多重背景 */
background-size: auto, auto;
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;
```

**注意：没有被背景图片覆盖的背景区域仍然会显示用background-color属性设置的背景颜色。此外，如果背景图片设置了透明或者半透明属性，衬在背景图片后面的背景色也会显示出来。**

#### 语法

单张图片的背景大小可以使用以下三种方法中的一种来规定：
- 使用关键词`contain`
- 使用关键词`cover`
- 设定宽度和高度值

当通过宽度和高度值来设定尺寸时，你可以提供一个或两个数值：
- 如果仅有一个数值被给定，这个数值作为宽度值大小，高度值将被设定为auto
- 如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。

#### 值

`<length>`

指定背景图片大小，不能为负值。

`<percentage>`

指定背景图片相对背景区的百分比。背景区由`background-origin`设置，默认为盒模型内容区与内边距，也可设置为只有内容区，或者还包括边框。如果`attachment`为fixed，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。

`auto`

以背景图片的比例缩放背景图片。

`cover`

缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和contain值相反，cover值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的左/右或者上/下部分会被裁剪。

`contain`

缩放背景图片以完全装入背景区，可能背景区部分空白。contain尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小不同时，容器的空白区域（上/下或者左/右）会显示右`background-color`设置的背景颜色。