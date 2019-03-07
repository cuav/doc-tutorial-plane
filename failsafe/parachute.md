## 降落伞

---

#### 概述

在APM:COPTER 3.2版本固件以上引入了一个新的功能：降落伞控制

它根据内部的“碰撞检查”检测机制，判断飞行器是否已经处于一个不可控的状态，并已经失速下降

通过触发一个特定PWM通道控制一个舵机将降落伞打开

### 降落伞在何时及什么状态会生效：

当碰撞检查 机制已经触发 超过2秒，一下条件都被满足：

1. 飞行器已经解锁，马达已经转动

2. 飞行器 没有 “着陆”

3. 飞行器不处于FLIP或者ACRO飞行模式

4. 飞行器的横滚 或者俯仰 轴与飞控计算目标倾斜角相差20°或以上

5. 气压计计算飞行器没有在爬升状态

6. 飞行器高于CHUTE\_ALT MIN高度

### 你需要什么硬件：

目前还没有通用性降落伞，你可能需要自己DIY一个 ：）

### 连接 PIXhack 硬件：

降落伞 可以通过继电器（不推荐）或者PWM舵机触发（推荐使用舵机）

推荐插入AUX1（FS1） 号引脚

### 通过地面站设置开启降落伞功能

To configure the parachute release please first connect with the Mission Planner and then open the Config/Tuning &gt;&gt; Full Parmeter List page and set the following parameters.

* CHUTE\_ENABLED = “1”
* CHUTE\_TYPE = “10” to release with a servo
* CHUTE\_SERVO\_ON should be set to the servo position required to release the parachute
* CHUTE\_SERVO\_OFF should be the “resting” servo position. I.e. the position the servo is in before the parachute is released
* RC9\_FUNCTION = “27”. RC9 refers to the Pixhawk’s AUX OUT 1. To use AUX OUT2 instead set RC10\_FUNCTION to 27, etc.

![](/assets/Parachute_MPSetup1.png)

![](/assets/Parachute_MPSetup2.png)

使用第七通道部署设置降落伞功能

![](/assets/Parachute_MPSetup_Ch7.png)

官方介绍页面：

http://ardupilot.org/copter/docs/parachute.html

