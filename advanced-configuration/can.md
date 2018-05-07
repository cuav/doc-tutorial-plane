# CAN总线设置

本文将介绍如何设置CAN总线以及用户如何完成适合其特定需求的设置。  
[UAVCAN的设置界面](http://ardupilot.org/plane/docs/common-uavcan-setup-advanced.html#common-uavcan-setup-advanced).

## 概述

控制器区域网络（CAN总线）是一个强大的总线标准，旨在允许微控制器和设备在没有主机的情况下相互通信。它是一种基于报文的协议，最初设计用于汽车内的多路电线以减少线束，但也用于许多其他情况。  
所有节点通过双线总线相互连接。这些电线是120Ω标称的双绞线。  
运行Ardupilot的大多数飞行控制器都有一个或两个CAN接口用于连接不同的设备。接口的设置可以以提供冗余或最大吞吐量或两者混合的方式进行。这是通过三层方法完成的，除物理接口外，还有一个代表特定协议的驱动程序层和一个通过这些驱动程序在CAN总线上进行通信的软件层（Ardupilot）。  
每个物理接口可以虚拟连接到代表要使用的协议的驱动程序之一。例如，最常见的情况是UAVCAN的一个驱动程序，两个接口都连接到它。这样的设置将为具有两个CAN接口的设备提供冗余，并为具有一个CAN接口的设备提供全部功能。  
配置设置

### 启用CAN接口

每个物理端口可以通过参数CAN\_PX\_DRIVER关闭或连接到相应的驱动程序，其中X是端口号。 此参数的值是与此端口（接口）关联的驱动程序的ID。  
例如，最常见的设置将有一个驱动程序，所有的接口将连接到它。 此配置中的CAN\_P1\_DRIVER和CAN\_P2\_DRIVER参数应设置为1（第一个驱动程序）。
[![](http://ardupilot.org/plane/_images/can-driver-parameters.png "../\_images/can-driver-parameters.png")](http://ardupilot.org/plane/_images/can-driver-parameters.png)
任何CAN_PX_DRIVER改变后，必须重新启动自动驾驶仪才能起效。

###CAN接口的配置
启用接口并重启后，可以为每个启用的接口设置两个参数。
这些是：
CAN_PX_BITRATE - 在此接口上设置所需的传输速率
CAN_PX_DEBUG - 允许输出调试消息
通常默认使用的比特率是1 Mbit。 调试级别可以根据用户的偏好和需求进行设置。
[![](http://ardupilot.org/plane/_images/can-driver-parameters-bitrate.png "../\_images/can-driver-parameters-bitrate.png")](http://ardupilot.org/plane/_images/can-driver-parameters-bitrate.png)
当任何接口与任何驱动程序相关联时，该驱动程序将被加载指定的协议。
###CAN驱动程序的配置
驱动程序应该设置为使用某些协议。 目前支持编号为1的UAVCAN。参数CAN_PX_PROTOCOL，其中X是驱动程序的编号，应填写此驱动程序的协议数量。
[![](http://ardupilot.org/plane/_images/can-driver-parameters-protocol.png "../\_images/can-driver-parameters-protocol.png")](http://ardupilot.org/plane/_images/can-driver-parameters-bitrate.png)
改变协议后，必须重新启动自动驾驶仪才能进行起效。


  


