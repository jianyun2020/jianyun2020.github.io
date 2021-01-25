---
categories:
    - React
tags:
    - JavaScript
    - 学习笔记
    - React
---


# Hook

16.8版本新增特性。可以在不编写class的情况下使用state以及其它的React特性。
```jsx
import React, { useState } from 'react';

function Example() {
    // 声明一个新的叫做“count”的state变量
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}
```