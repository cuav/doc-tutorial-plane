# Lightware SF02 Rangefinder {#lightware-sf02-rangefinder}

Lightware SF02是轻量级的激光测距仪模块，可以提供高达40米（130英尺）的快速精确距离测量。 开发团队发现，即使在快速移动的飞行器上，传感器也能够对长距离和短距离的距离进行非常可靠的测量。

注意：

这个测距仪只支持运行AC3.2

使用传感器的模拟器的更高或最新版本的Plane和Rover

输出很像模拟声纳。

## 连接到Pixhawk {#连接到pixhawk}

SF02的模拟输出引脚应连接到Pixhawk的3.3V ADC（模数转换器），如下所示。 Pixhawk将提供传感器所需的稳压5V电源。

[![](http://ardupilot.org/copter/_images/rangefinder_sf02_pixhawk_connections.jpg)](http://ardupilot.org/copter/_images/rangefinder_sf02_pixhawk_connections.jpg)

## 通过mission palnner安装 {#通过mission-palnner安装}

## 

要配置直升机，飞机或流动站以使用LIDAR-Lite，请首先连接Mission Mission，然后打开Config / Tuning &gt;&gt; Full Parmeter List页面并设置：

RNGFND\_MAX\_CM =“3700”（即40m最大距离--3m缓冲区，这个缓冲区是必须的，这样飞行代码可以检测到什么时候没有任何距离）

RNGFND\_PIN =“14”（3.3V ADC连接器的第2脚）

RNGFND\_SCALING =“12.12”（即40m / 3.3v = 12.12）\*\*

RNGFND\_TYPE =“1”（模拟）

RNGFND\_RMETRIC =“0”（非比率，在下图中显示不正确）

\*\* SF02的默认范围是33m / 3.3V = 10 m / V

[![](http://ardupilot.org/copter/_images/RangeFinder_SF02_MPSetup.png)](http://ardupilot.org/copter/_images/RangeFinder_SF02_MPSetup.png)

### 测试传感器 {#测试传感器}

在mission planner的飞行数据屏幕的状态标签中可以看到传感器读取的距离。 仔细看“sonarrange”。

[![](http://ardupilot.org/copter/_images/mp_rangefinder_lidarlite_testing.jpg)](http://ardupilot.org/copter/_images/mp_rangefinder_lidarlite_testing.jpg)

