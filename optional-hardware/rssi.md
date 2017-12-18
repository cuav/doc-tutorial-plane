# RSSI信号强度指示 {#rssi信号强度指示}

---

rssi是飞控接收到的信号强度参数，下面介绍一下如何设置rssi：

1.硬件连接，请把需要监测的rssi信号强度设备接入飞控rssi/sbus接口（飞控外壳标识，飞控上排排针为gnd,中间为vcc，下面为信号线。

2.软件设置,打开mp地面站，连接上飞控》配置/调试界面》全部参数表》搜索rssi&gt;修改rssi_anapin为103》修改rssi\_pin\_high为3.3（可根据自己设备修改）》修改rssi\_type为1》写入参数_

### ![](http://doc.cuav.net/PixHack/assets/RSSI.jpg)3.rssi信号强度在地面站hud显示 {#3rssi信号强度在地面站hud显示}

### ![](http://doc.cuav.net/PixHack/assets/RSSI2.jpg)

### 来自UHF系统的嵌入式PWM（Pixhawk） {#来自uhf系统的嵌入式pwm（pixhawk）}

EZ-UHF和OpenLRS都可以选择将RSSI嵌入到PWM通道中，使您无需添加滤波器等。您可以使用通道5或通道5以上的任何通道，但保持通道9伺服通道未被使用。

设置您的UHF系统，将RSSI嵌入到所需的通道中，然后更改以下参数：

RSSI\_ANA\_PIN：103

RSSI\_TYPE：2

RSSI\_CHANNEL：您想要输入的通道。



