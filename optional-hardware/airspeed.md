# 使用空速传感器

---

空速传感器是固定翼专用配件，这可以帮助在有风的条件下，缓慢的飞行和自主着陆。

以下部分介绍如何将传感器连接到飞行控制器。 安装空速传感器后，不要忘记校准！

### Pixhawk数字空速引脚

Pixhawk可以使用这种数字空速传感器。 将空速传感器连接到Pixhawk的I2C端口（或I2C转接板模块）。
![](/assets/airspeed.jpg)




### 启用数字空速传感器

连接地面站》切换到初始设置部分（Mission Planner \|硬件\|可选硬件\|空速）中选择类型勾选启用，如下图示。

![](/assets/airspeed2.jpg)


---

# 使用模拟空速计

---


PIXHACK/PIXAHWK支持模拟空速计

### pixhack/pixhawk模拟输入引脚

pixhack/pixhawk有2个模拟输入引脚，分别为adc3.3/adc6.6.

cuav 模拟空速计需要连接到pixhack /pixhawk adc 3.3引脚上。

### 启用模拟空速传感器

连接地面站》切换到初始设置部分（Mission Planner \|硬件\|可选硬件\|空速）中选择pixhawk Analog As port勾选启用。

---

### 安装皮托管

将空速传感器放入飞机中时，请皮托管套件。 在EasyStar的情况下，您需要将管子顶部穿过驾驶舱内的泡沫，才可以完全接触到气流（首先在泡沫中钻孔或切割一个小孔）。 确保管子侧面的孔没有被堵塞。 它们应该至少伸出 机头1厘米。 首先将两个出来的管子连接到空速传感器上。 直接从后面出来的管应该进入顶端口，并且以一定角度出来的管应该连接到空速传感器的底端口。

## 

[![](http://ardupilot.org/plane/_images/pitotinstalled1.jpg "../\_images/pitotinstalled1.jpg")](http://ardupilot.org/plane/_images/pitotinstalled1.jpg)

如果您的飞机前方有螺旋桨，必须将皮托管安装在一个机翼上，或者至少在机身下方以避开螺旋桨气流。

---

### 校准空速计

手动校准：

将空速计安装后需要进行校准，校准需确保周围没有风，否则会影响校准的效果。

校准操作：连接上mission planner，打开飞行数据界面下的动作栏，点击下方动作选择框选择PREFLIGHT\_CALIBRATE点击执行动作（校准过程中切勿动空速计）。

![](/assets/airspeed4.jpg)


自动校准：为确保安全不建议使用。

本文英文参考：[http://ardupilot.org/plane/docs/airspeed.html](http://ardupilot.org/plane/docs/airspeed.html)

