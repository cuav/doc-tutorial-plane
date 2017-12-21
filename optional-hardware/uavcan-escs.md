## UAVCAN 电调 {#uavcan-电调}

---

直升机，飞机和汽车固件支持UAVCAN电子速度控制器（ESC），允许与飞行控制器进行双向通信，从而可以更容易地设置ESC和监控飞行中的电机运行状况。

### 连接pixahwk {#连接pixahwk}

![](/assets/CAN1.jpg)

一个电调（将uavcan电调df13 4pin接口连接到Pixhawk的CAN端口）； 每个后续的电调应使用4针UAVCAN电缆连接到以前的电缆。 最后的电调应该有一个CAN总线终端插入其中一个4针UAVCAN端口。

FTDI电缆连接仅用于下面讨论的一次性设置。

或者，可以使用UAVCAN GUI工具通过CAN总线配置电调。

---

### 使用CLI进行ESC设置 {#使用cli进行esc设置}

### 

每个ESC必须使用FTDI电缆进行一次性手动设置，以定义其UAVCAN节点ID和电机编号。在未来版本的ardupilot中，这将被使用Mission planner（和其他GCS）的设置程序取代。

设置方法：

将FTDI电缆连接到电调的“开发人员端口”，如上图所示。

用电池给电调  
上电

使用终端程序（如Putty）使用FTDI电缆的COM端口连接到电调，使用串行115200波特  
率

按Enter键进入终端，出现“ch&gt;”提示

键入cfg list以查看完整的参数列表

在电动机＃1上（即四边形上的右前方），通过键入以下内容将uavcan\_node\_id设置为“10”并将esc\_index设置为“0”

cfg set uavcan\_node\_id 10

cfg set esc\_index 0

cfg保存（保存配置）

重启

测试电机动作：

直流臂（启用输出）

dc 0.2（以20％旋转电机）

dc（停止电机）

对每台电机都有一个node-id和索引1比前一个更高的电机重复2号电机（在一个quad的左后方），＃3，＃4等等（事实上，只要node-id是独特）。

![](/assets/CAN2.jpg)

本文引自：[http://ardupilot.org/copter/docs/common-uavcan-escs.html](http://ardupilot.org/copter/docs/common-uavcan-escs.html)

