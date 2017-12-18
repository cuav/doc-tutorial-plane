## 电机推力扩展 {#电机推力扩展}

---

直升机固件包括电机推力扩展，补偿大多数ESC和电机的非线性推力输出。

注意：

几乎所有ESC /电机组合的默认曲线都适用， 通常不应该调整参数，除非飞机的实际推力曲线已被测量。

电动机推力比例是在直升飞机固件3.3中引入的。

## 推力曲线 {#推力曲线}

曲线是由两个参数组成:

* MOT\_THST\_EXPO控制推力曲线的形状为“0”，表示完全线性曲线，“1.0”非常弯曲（见下图）。

  默认值为“0.65”（下图未正确显示默认值为0.5）。![](http://doc.cuav.net/PixHack/assets/mo.jpg)

* MOT\_THST\_MAX控制推力在最大值附近平坦的点。 默认值为0.95，表示油门的95％。

## MatLab示例代码 {#matlab示例代码}

该MatLab示例代码可用于基于测量的推力值计算MOT\_THST\_EXPO的适当值。

用飞机的实际测量推力值填充推力阵列。 运行时，将打印MOT\_THST\_EXPO值。

代码：[http://ardupilot.org/copter/docs/motor-thrust-scaling.html](http://ardupilot.org/copter/docs/motor-thrust-scaling.html)

