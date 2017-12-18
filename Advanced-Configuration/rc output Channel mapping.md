## RC输出映射 {#rc输出映射}

本页介绍如何使用电机（和其他功能）的RC输出通道更改默认值。 这些指令主要集中在多电机固件上，因为单个功能设置页面（如Servo Gripper设置页面）通常记录如何使用RCx\_FUNCTION或SERVOx\_FUNCTION参数分配所使用的输出通道。

可以在Copter-3.4（及更高版本）中提供重新映射多个电机的能力。 用于控制输出通道的参数在copter3.5及更高版本中已从RCx\_FUNCTION更改为SERVOx\_FUNCTION。

配置

根据固件版本，RCx\_FUNCTION或SERVOx\_FUNCTION可以设置为85个以上不同的值，以指定输出通道应该使用什么（注意：大多数地面站应显示整个可能的选项列表）。 在这种情况下，“x”是通道号，因此RC1\_FUNCTION或SERVO1\_FUNCTION指定使用Pixhawk背面的“MAIN OUT 1”引脚。 RC9\_FUNCTION或SERVO9\_FUNCTION指定使用“AUX OUT1”引脚。

![](http://doc.cuav.net/PixHack/assets/ser1.png)

要分配多电机直升机，可以使用这些功能值：

* 33：电机＃1

* 34：电机＃2

* 35：电机＃3

* 36：电机＃4

* 37：电机＃5

* 38：电机＃6

* 39：电机＃7

* 40：电机＃8

* 82：电机＃9

* 83：电机＃10

* 84：电机＃11

* 85：电机＃12

例如，如果您希望将四x框架的四旋翼飞机从斜对角默认重新排序为更合乎逻辑的顺时针方法，请进行以下更改：

SERVO1\_FUNCTION从33（又称“电机1”，右前）

SERVO2\_FUNCTION从34（又称“电机2”，左后）更改为36（电机＃4，右后）

SERVO3\_FUNCTION从35（也称为“电机3”，右前）更改为34（电机＃2，左后）

SERVO4\_FUNCTION从36（又称“电机4”，右后）更改为35（电机＃3，左前）
