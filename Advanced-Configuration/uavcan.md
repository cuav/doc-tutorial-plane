# UAVCAN设置

本文提供了在Ardupilot上设置UAVCAN协议的指导。

提示

应该首先启用UAVCAN协议。 [请参考CAN总线设置](http://ardupilot.org/plane/docs/common-canbus-setup-advanced.html#common-canbus-setup-advanced)

## 概述

UAVCAN是一个轻量级的协议，专为通过CAN总线进行航空航天和机器人应用中的可靠通信而设计。 UAVCAN网络是一个分散的对等网络，每个对等点（节点）有一个唯一的数字标识符 - 节点标识符，只有一个参数需要设置为基本设置。  
协议的详细描述可以在[http://uavcan.org/找到](http://uavcan.org/找到)  
 Aurdupilot的UAVCAN驱动程序不支持当前版本中的自动节点编号。 所有节点都应该明确设置ID。

## 配置设置

CAN类别设置中目前有三个参数：
* **CAN\_DX\_UC\_NODE - 这是自动驾驶仪的节点ID**  
* **CAN\_D1\_UC\_ESC\_BM - 允许发送ESC命令的位掩码**  
* **CAN\_D1\_UC\_SRV\_BM - 允许发送伺服命令的位掩码**
[![](http://ardupilot.org/plane/_images/uavcan-main-settings.png "../\_images/uavcan-main-settings.png")](http://ardupilot.org/plane/_images/uavcan-main-settings.png)
在位图掩码中，二进制数字中的每个位置表示将生成该命令的ESC或伺服ID。 在飞行器的情况下，通常应该填充ESC位掩码，在飞机的情况下 - 主要是伺服，尽管可以混合使用。

## GNSS接收机配置设置

如果有一个GNSS连接到UAVCAN网络，则必须在** GPS **参数子组中启用。 自动驾驶仪中对应的GNSS接收器的** TYPE **参数应设置为9。
[![](http://ardupilot.org/plane/_images/uavcan-gnss-settings.png "../\_images/uavcan-gnss-settings.png")](http://ardupilot.org/plane/_images/uavcan-gnss-settings.png)

