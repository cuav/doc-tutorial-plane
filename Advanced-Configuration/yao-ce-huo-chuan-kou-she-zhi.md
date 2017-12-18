## 遥测/串口设置 {#遥测串口设置}

##### 

本文介绍如何在飞行控制器上配置遥测端口（也称为串行端口）。 说明使用Pixhawk，但它们适用于大多数飞行控制器。

概观述

在Pixhawk上共有5个串行端口。 每个端口的默认使用是：

* 微型USB端口（也称为Serial0）用于使用USB电缆连接到地面站。 这不应该在飞行中连接，因为飞行代码如果飞控通过usb供电某些故障浆被禁用（如电池故障保护）。

* Telem1（又名Serial1）用于MAVLink通讯，支持流量控制。 特别适用于高功率器件（高达1安培），如RFD900遥测无线电

* Telem2（又名Serial2）用于MAVLink通信，并支持流量控制。

* GPS（又名Serial3）用于连接GPS

* 串行4/5在单个端口上包含两个串行连接。 Serial4通常用于第二个GPS。 Serial5是一个调试连接（debug）。遥测/串口设

  ![](http://doc.cuav.net/PixHack/assets/wk1.jpg)

## 通过地面站设置 {#通过地面站设置}

遥测端口可以通过地面站设置配置下列参数。 如果您正在使用mp地面站打开**配置/调优\|全部参数列表**页面。

* `SERIALx_PROTOCOL`参数\(“x”是一个数字从0到4）控制协议或串行端口的目的。 您将看到维基页面包括[Lightware激光雷达页面](http://ardupilot.org/copter/docs/common-lightware-sf10-lidar.html#common-lightware-sf10-lidar)说明选择合适的协议。

* `SERIALx_BAUD`设置波特率或串行端口的速度。

* [BRD\_SER1\_RTSCTS](http://ardupilot.org/copter/docs/parameters.html#brd-ser1-rtscts)和[BRD\_SER2\_RTSCTS](http://ardupilot.org/copter/docs/parameters.html#brd-ser2-rtscts)参数允许启用或禁用Telem1和Telem2流控制。

### ![](http://doc.cuav.net/PixHack/assets/ser3.jpg)MAVLink1，MAVLink2和流速 {#mavlink1，mavlink2和流速}

对于用于MAVLink通信的遥测端口，您可以通过将SERIALx\_PROTOCOL设置为“2”将SERIALx\_PROTOCOL设置为“1”或MAVLink2来选择使用MAVLink1。

MAVLink2支持“签署”数据包，从而提高安全性和灵活长度的消息，因此应尽可能使用，但某些较旧的遥测无线电不能理解MAVLink2，因此默认为MAVLink1。

如在遥测日志页面中所述，可以使用SRx\_ \*参来控制从飞行器发送的速率信息。

mp地面站的配置/调整\|计划程序屏幕的遥测率下拉列表可以方便地设置这些参数。

![](http://doc.cuav.net/PixHack/assets/yap1.jpg)由于CPU带宽限制,实际发送的数据率可能低于要求。

