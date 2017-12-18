## 降落伞 {#降落伞}

---

本主题介绍如何设置手动和自动降落伞释放。

警告

在Copter 3.2中引入了对此功能的支持。 此功能仍然是实验性的，应谨慎使用。

## 连接到Pixhawk {#连接到pixhawk}

降落伞版本可以从继电器或触发机制 PWM\(即伺服\),但因为[一个问题与继电器引脚被拉在启动高](https://github.com/ArduPilot/ardupilot/issues/1239),我们 建议使用PWM,特别是Pixhawk的任何辅助1到4 别针。

![](http://doc.cuav.net/PixHack/assets/JIANG1.jpg)

## 通过mission planner计划 {#通过mission-planner计划}

要配置降落伞释放，请先连接Mission Planner，然后打开配置 / 调试&gt;&gt; 全部参数表页面并设置以下参数。

CHUTE\_ENABLED =“1”

CHUTE\_TYPE =“10”用伺服释放

应将CHUTE\_SERVO\_ON设置为释放降落伞所需的伺服位置

CHUTE\_SERVO\_OFF应该是“静止”伺服位置。即 在释放降落伞之前伺服的位置

如果使用AC3.5（或高）设置SERVO9\_FUNCTION =“27”。 SERVO9\_引用Pixhawk的AUX OUT 1.要使用AUX OUT2而不是将SERVO10\_FUNCTION设置为27等。

如果使用AC3.4.6（或更低）设置RC9\_FUNCTION =“27”。 RC9\_引用Pixhawk的AUX OUT 1.要使用AUX OUT2而不是将RC10\_FUNCTION设置为27等。

![](http://doc.cuav.net/PixHack/assets/JIANG2.jpg)![](http://doc.cuav.net/PixHack/assets/jiang3.jpg)设置Ch7从Mission Planner的扩展调整页面手动设置降落伞。

![](http://doc.cuav.net/PixHack/assets/JIANG4.jpg)降落伞何时会开启？

当“碰撞检查”功能确定飞行器失去姿态控制并开始下落时，电机将停止，降落伞将自动展开。对于碰撞检查器触发降落伞的释放，需要保持2秒都是满足以下条件：

* 电机装备好了

* 飞行器不是“降落”（如果输出油门小于25％，电机达到下限，飞行器旋转超过20度 / 秒，不是飞行员要求降落，这个姿态保持不超过一秒 飞行器会认为是自己降落）

* 飞行器不处于FLIP或ACRO飞行模式

* 飞行器的侧倾角和/或俯仰角相对于目标倾斜角偏差大于20度

* 气压计测量出飞行器没有爬升

* 飞行器高于CHUTE\_ALT\_MIN高度



