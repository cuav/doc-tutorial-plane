## 精确登陆和与IR-LOCK的悬停 {#精确登陆和与ir-lock的悬停}

---

概述

直升机3.4（及更高版本）使用IR-LOCK传感器和声纳或激光雷达支持精确着陆。 使用该系统，当飞行器进入LAND模式（并且具有GPS锁定）时，可以可靠地着陆在IR信标的30cm内以小于1m / s的速度移动。

直升机3.5（及更高版本）还支持Precision Loiter（精确位移），允许飞行器在Loiter模式下将其位置保持在目标之上。 飞手可以使用变送器的辅助功能开关中的一个来启用。

## 连接到Pixhawk {#连接到pixhawk}

IR-LOCK传感器可以直接连接到Pixhawk的i2c接口。 如果 你是使用多个I2C传感器,那么您将需要一个[I2](http://store.jdrones.com/Pixhawk_I2C_splitter_p/dstpx4i2c01.htm)C转接板。 更详细的说明包含在[irlock.com文档](https://irlock.readme.io/docs)。 IR-LOCK传感器可以 也是[通过USB连接到Linux系统](https://irlock.readme.io/docs/interfacing-sensor-w-linux-and-python), 和传感器输出可以在Python中检索。

### ![](http://doc.cuav.net/PixHack/assets/LR1.jpg)安装到机架 {#安装到机架}

IRLOCK传感器应安装在机架的下面，相机镜头直接指向地面。 传感器板的方向应使得电路板上的白色按钮指向车辆的前部（或换句话说，离镜头最近的一侧应该朝向车辆的前部）。

下图显示安装在3DR IRIS +底部的相机。 建议尽可能靠近Pixhawk安装传感器。

![](http://doc.cuav.net/PixHack/assets/IR2.jpg)

### 通过Mission Planner设置 {#通过mission-planner设置}

通过Mission Planner（或其他GCS）设置以下参数，启用精确降落功能，然后重新启动飞行控制器。

* PLND\_ENABLED = 1

* PLND\_TYPE = 2

要启用Precision Loiter，辅助功能开关必须设置为“Precision Loiter”：

CH7\_OPT = 39

飞行和测试

设置land为飞行模式之一（截至本维基页面写入时，精确着陆功能仅在LAND模式下运行）。

将红外信号灯放在地面上，并在目标上方约10米处飞行。 将飞行器切换至LAND。 如果一切工作正常，直升机应该移向红外信标。 下面显示了一个成功的演示（使用较旧的固件）。

注意：

为防止意外情况，请时刻准备夺回控制权（通过切换模式至定高或留待）

如果车辆行为正常，则下载数据闪存日志并检查PL消息。

如果“heal”\(meaining health\)状态不是“1”，那么Pixhawk和IR-LOCK传感器之间可能通信。

如果“TAcq”（意思是目标获取）字段不是“1”，那么传感器没有看到目标。

pX，pY值显示从飞行器到目标的水平距离。

vX，vY值显示目标相对于飞行器的估计速度。

参考IR-LOCK[wiki页面](https://irlock.readme.io/docs/interpreting-pl-logs)更多的故障信息。  
本文引自：[http://ardupilot.org/copter/docs/precision-landing-with-irlock.html](http://ardupilot.org/copter/docs/precision-landing-with-irlock.html)

