---
categories:
    - UE4
tags:
    - UE4
    - 学习笔记
---

# UE4学习笔记

1. 常用快捷键

![](images/shortcut_key1.png)

![](images/shortcut_key2.png)

![](images/shortcut_key3.png)


2. 变更路线节点：`Reroute Node`

3. `Execute Console Command`命令
   1. 设置分辨率`r.setRes 1920x1080`


## UE4像素流送系统

### 特点：

1. 流送并非播放预先录制的视频片段，而是播放虚幻引擎实时生成的渲染帧和音频。
2. 用户可通过自己的浏览器对体验进行控制，将键盘、鼠标、触摸事件和播放器网页发出的自定义事件发送回虚幻引擎。

### 优点：



## 函数

1. `Set Timer by Event`：设定一个计时器来执行事件委托，设置已经存在的计时器（如设置自身）将会更新参数。
2. `Clear and Invalidate Timer by Handle`：手动清除设置的定时器
3. `Quit Game`：退出游戏
4. `Is Valid`：如果对象可用（不为`null`或者`not pending kill`则返回`true`
5. `Get Player Camera Manager`：返回指定玩家索引的玩家摄像机管理器
6. `Get Camera Rotation`：返回相机的当前旋转
7. `Break Rotator`：将旋转器分解为以度为单位的侧倾角（Roll），俯仰角（Pitch）和偏航角（Yaw）
8. `Set Render Transform Angle`：设置渲染变换角度
9. `Set Style`：设置按钮的样式
10. `Play Animation`：播放动画


## 关卡流送（Level Streaming)

在游戏时异步加载和卸载关卡，降低内存使用率，创建无缝的世界场景。

### 世界场景构成（World Composition）

世界场景构成用于创建大型场景的特定关卡流送形式。关卡分布在平面网格中，并在玩家靠近时流入。

#### 激活世界场景构成

1. 启用`世界场景设置(World Settings)`中的`启用世界场景构成(Enable World Composition)`标记来激活
2. 禁用`世界场景原点移位(World origin shifting)`：关闭`启用世界场景构成(Enable World Composition)`

![](images/worldcomposition1.png)

#### 关卡层级(Levels Hierarchy)

"关卡"窗口中的条目表示世界场景的层级。

