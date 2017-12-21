# 继电器开关 {#继电器开关}

---

“继电器”是APM或Pixhawk上的数字输出引脚，可以在0V和3.3V（Pixhawk）或5V（APM2）之间切换。

与伺服类似，它允许飞行控制器从车辆上的另一个装置调用一些动作。

在Copter，Plane和Rover中，最多可以将4个引脚定义为继电器。

### Pixhawk/pixahck上的继电器引脚 {#pixhawkpixahck上的继电器引脚}

Pixhawk AUX OUT 5（引脚54）和AUX OUT 6（引脚55）分别设置为“第一”（或＃0）和“第二”（或＃1）继电器。

![](/assets/ji2.jpg)

通过减少用作伺服输出的AUX引脚的数量，可用继电器的数量可以增加到最多6个。 可以通过BRD\_PWM\_COUNT修改继电器数量。

## APM2上的继电器引脚 {#apm2上的继电器引脚}

在APM2上，A9（引脚9）是推荐用作继电器的引脚。 事实上，A0〜A8的任何一个引脚都可以作为继电器使用，但是必须通过Mission Planner的完整参数列表手动设置RELAY\_PIN参数（“0”〜“8”）。

![](/assets/ji3.jpg)

## 通过Mission Planner定义继电器引脚 {#通过mission-planner定义继电器引脚}

使用任务规划器的配置/调谐屏幕的标准参数列表，可以最容易地定义第一〜第四个继电器引脚，如下所示。 或者，如果您知道要使用的确切引脚编号，则可以直接通过任务计划程序的完整参数列表设置RELAY\_PIN参数。

![](/assets/ji4.jpg)

## 继电器的先导控制 {#继电器的先导控制}

在Copter 3.2（及更高版本）上，可以使用Ch7 / Ch8开关控制“First”继电器。

![](/assets/ji5.jpg)

继电器的任务控制

与伺服类似，使用Do-Set-Relay任务命令可以在任务期间激活继电器。

wiki原文介绍链接：[http://ardupilot.org/copter/docs/common-relay.html](http://ardupilot.org/copter/docs/common-relay.html)

