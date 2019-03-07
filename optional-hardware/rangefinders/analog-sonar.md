### Maxbotic模拟声纳 - Copter3.2 {#maxbotic模拟声纳---copter32}

XL-Maxbotic-EZ系列模拟声纳（XL-MaxSonar-EZ0，EZ4和EZL0）价格相对便宜，短程（7-10米）测距仪主要设计用于室内使用，但已成功应用于直升机和汽车。 这些是I2C声纳的前身。

这些说明适用于Plane，Rover的Copter 3.2和更高版本。

EZ4（推荐）具有最窄的光束，提供最佳的抗噪性，而EZ0具有最宽的光束和更高的灵敏度。 远程EZL0具有与EZ0相同的灵敏度，但是具有10m范围（而不是7m）。

### 连接到Pixhawk {#连接到pixhawk}

/pixahck

声纳应连接到Pixhawk/pixhack的ADC 3.3V端口，如下所示。 Pixhawk将提供声纳所需的稳压5V电源。

![](http://doc.cuav.net/PixHack/assets/XU.jpg)

## ![](http://doc.cuav.net/PixHack/assets/ADC.jpg)连接到APM2.x {#连接到apm2x}

声纳应连接到APM的A0端口，如下所示。 APM将提供声纳所需的稳压5V电源。

![](http://doc.cuav.net/PixHack/assets/XU2.jpg)

### 通过mp地面站调试 {#通过mp地面站调试}

请首先连接Mission Mission，然后打开配置 / 调试 &gt;&gt; 全部参数表页面并设置以下参数：

用于Pixhawk ADC 3.3V针脚＃2的RNGFND\_PIN =“14”或APM2.x的“A0”

如果使用EZ0或EZ4，则RNGFND\_MAX\_CM =“700”（即7m最大范围），如果使用EZL0则为“1000”

如果使用EZ0或EZ4则RNGFND\_SCALING =“2.04”（即7m / 5v），如果使用EZL0则为“4.08”（即10m / 5v）

RNGFND\_TYPE =“1”（模拟）

Maxbotix模拟测距仪根据其数据手册输出Vcc / 1024伏/厘米，或者当提供5v（ADC 3.3v端口提供的）时为0.488v / m，转换为每伏2.04米。 根据数据表，范围是7.6m，但模拟输出限制在7m。 因为我们只能读到3.3v，那么就意味着6.75m是最大测量距离。

### 测试传感器 {#测试传感器}

在mp地面站飞行数据屏幕状态栏中可以看到传感器读取的距离。 仔细看“sonarrange”。

![](http://doc.cuav.net/PixHack/assets/sonser4.jpg)

