## 飞机启动及校准

---

本文将介绍在启动Plane之前应执行的基本设置和校准。

地面校准

将发射器模式开关设置为“手动”。这是启动系统的安全模式。

当您在现场开启电路板时，应放置在平面在地面上静止不动，直到红黄蓝三色灯LED停止快速闪烁（约30秒）。这意味着飞机陀螺仪已被校准，等待起飞（在gps已经锁定的情况下

在地面开始完成后，您应该在飞行前等待GPS锁定。如果您不等待GPS锁定，家的位置将无法正确设置，并且气压高度计校准将不正确。

在解锁之前，PX4的安全开关必须解锁。

PX4安全按钮LED指示灯：

快速闪烁表示：错误状态，安全不能分离。 可能未校准或传感器错误。

慢速闪烁表示：安全条件。 按下安全按钮5秒钟即可解除安全。

LED持续亮起表示：安全性已被释放。 PX4飞行控制器可能装有油门向下和向右。

当LED持续显示安全开关解锁状态时，按下安全按钮5秒钟，可以切换回安全接合状态。

### 设置起始位置

提示

为了使RTL，Loiter，Auto或任何GPS相关模式下正常工作，获取GPS锁定非常重要。

飞机的起始位置最初是在飞机获得GPS锁定时建立的。然后，只要自动驾驶仪解锁，它就会不断更新。

这意味着如果你执行一个RTL，你的飞机将返回到解锁起飞的地点。如果你的解锁起飞点不是一个好的返航点，那么请设置一个集结点。集结点将优先用于RTL的家的位置。

飞行前检查：起飞前，将飞机放在手中并切换到FBWA模式，然后俯仰和倾斜平面，以确认舵机能否正确补偿，使飞机能保持平衡。 这将确保在飞行中意外的翻转。

您应该在每次飞行之前执行此操作，就像您使用RC遥控器移动控制面一样，以确保没有任何东西被颠倒过来。
