---
categories:
    - TensorFlow
tags:
    - Keras机器学习基础知识
    - 学习笔记
---

# Keras机器学习基础知识

> 此笔记来源于TensorFlow官网教程

# 基本分类：对服装图像进行分类

本指南将训练一个神经网络模型，对运动鞋和衬衫等服装图像进行分类

本指南使用了 `tf.keras`，它是 `TensorFlow` 中用来构建和训练模型的高级 API。

```python
# 核心库
import tensorflow as tf
from tensorflow import keras

# 依赖库
import numpy as np
import matplotlib.pyplot as plt

print(tf.__version__)
```

## 导入 Fashion MNIST 数据集

该数据集包含 10 个类别的 70,000 个灰度图像。这些图像以低分辨率（28x28 像素）展示了单件衣物，如下所示：

![](../posts/images/fashion-mnist-sprite.png)

