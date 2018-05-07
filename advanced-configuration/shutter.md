# 相机快门触发

pixhack/pixahwk支持设置相机快门触发，触发方式包括pwm/伺服及电平触发/继电器。

下面介绍一下两种触发方式的设置方法：

## pwm（伺服）触发相机快门

这个方式原理是通过飞控给相机快门线（pwm快门触发线）发出pwm信号控制相机快门。

在设置前需要购买一条与相机适用的pwm快门触发线或者使用伺服\(舵机）触发。

飞控设置方法如下：

* CAM\_TRIGG\_TYPE：相机快门触发方式设置（0为伺服，1为继电器），应在全部参数表内设置该参数为0.
* 在初始设置》可选硬件》相机云台》快门》设置快门触发信号输出口（即从飞控那个接口输出pwm触发信号，注意aux1-6即servo9-12\)可以根据需要设置舵机限位及快门pwm值
* 将快门/舵机线插入飞控对应的接口即可（如前面设置为servo9则插在飞控aux1/fs1\).

## 继电器（电平）触发

* CAM\_TRIGG\_TYPE：相机快门触发方式设置（0为伺服，1为继电器），应在全部参数表内设置该参数为1.

* 全部参数表》[CAM\_FEEDBACK\_PIN](http://ardupilot.org/copter/docs/parameters.html#cam-feedback-pin)设置为快门触发电平输出口（即从飞控那个接口输出pwm触发信号，注意aux1-6即servo9-12\)》写入参数》切换到配置/调试》扩展调参》通道七选项设置为camera trigger（使用遥控器第7通道控制快门触发）&gt;写入参数。

![](/assets/kuai2.jpg)

* 将快门线插入飞控对应的接口即可（如前面设置为54则插在飞控aux5/fs5\)

设置触发电平反相：

* relay\_default:继电器开启状态
* CAM\__relay\_ON:继电器开闭状态电平设置_
* 如相机快门是低电平触发则设置为继电器开启输出低电平


