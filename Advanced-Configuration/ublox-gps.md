本文介绍如何连接到u-center来更改cuav uBlox gps模块的配置。

**注意：除非必要修改参数外不要做该操作。**

## 连接方式1 - 通过mission planner和Pixhawk连接 {#连接方式1---通过mission-planner和pixhawk连接}

mission planner和pixhawk可以通过执行以下操作建立u-center和GPS之间的通信：

* 将Pixhawk/pixhack连接到PC，并与任务计划员连接

* 在飞行数据屏幕上按Ctrl-F，然后选择“MAVSerial pass”

* 打开u-center并选择Receiver，TCP Client，并在Network Connection窗口中将Address设置为“localhost”，将Port设置为“500”，然后按OK。

* 请参阅如何使用u-center上传配置文件。

![](/assets/u.jpg)![](/assets/u2.jpg)

## 连接方式2：使用ttl小板连接接gps与电脑 {#连接方式2：使用ttl小板连接接gps与电脑}

![](/assets/u4.jpg)自行做一条ttl小板与gps连接线（接5v,gnd，rx,tx四根线即可，注意两者的rx，tx需要交叉接，电源按照定为接即可）

![](/assets/u3.jpg)

设置好波特率及com即可连接（默认波特率为9600）

