# LIDAR-Lite测距仪

---

TheGarmin / PulsedLight LIDAR-Literangefinder是一款低成本的光学距离测量解决方案，在大多数工作条件下具有40米的范围，功耗低，外形小巧。

注意

此测距仪仅在以下固件版本（或更高版本）上支持：直升机3.3，固定翼3.3和小车2.49。 ArduPilot完美支持LIDAR-Lite v1和v2。

## Lidar-Lite v2的问题

Lidar-Lite v2发现了许多问题。 尝试与产品的开发者解决这些问题并不是完全成功的。 这些注释是对潜在用户的警告。 目前尚不清楚这些问题是否已经在v3中得到解决。

问题是：

当使用I2C与旧的“black-label”激光雷达锁定

GPS干扰较旧的“black-label”激光雷达

在使用 “blue-label”激光雷达时会干扰其他I2C设备

“blue-label”和“black-label”激光雷达距离真实距离13米

### 在I2C上锁定

第一个问题（使用黑标激光雷达的I2C上的锁定）可以通过使用新的蓝标激光雷达或使用PWM输出方法解决，最好使用复位引脚。 这个问题并不常见。 当激光雷达测试短距离时更有可能发生。 这个问题有两种表现形式 - 一种是通过发送I2C复位命令解决锁定，另一种则不响应I2C复位。

### GPS干扰

较老的黑标激光雷达造成显着的GPS干扰。 这表现为上电时GPS锁定时间更长，锁定时更高的GPS噪声水平导致GPS精度降低。 测试表明，干扰包括传导和辐射两个部分。

尽可能远离GPS放置激光雷达有助于，但并不能完全消除这个问题。

请注意，新的“蓝标”激光雷达不会发生GPS干扰问题。

### I2C干扰蓝标激光雷达

较新的蓝标激光雷达已经与I2C上的干扰问题与同一总线上的其他I2C设备相关联。 尤其是，在同一个I2C总线上使用数字空速传感器时，会出现不正确的空速读数。 这个问题在所有的飞机上都没有发生，但是当它发生的时候，结果是非常显着的，空速读数超过了10m / s。

虽然台架测试已经重现了结果，但是我们还没有设法捕获它发生的逻辑轨迹。 这个问题是通过PWM而不是I2C来实现的。

### 所有激光雷达的偏移量为13米

较新的蓝标和较旧的黑标激光雷达都有一个问题，即它们有时会返回比真实距离大约13米的距离。这发生在I2C和PWM上。这个问题很少见，但是在几个不同的飞机上已经记录在几个飞行日志中。这个问题也被广泛的台架测试所重现。

当问题发生时，13米偏移量通常会锁定，因此剩下的飞行距离激光雷达剩下的所有读数将会产生13米的偏移量。然而，在几秒钟或几分钟之后，13米偏移就消失了。

如果雷达电源波动过大，问题发生的可能性就大得多。问题可以很容易地重现在一个工作台设置的激光雷达最初供电低于4V，然后升高电压。

不幸的是，低电源电压不是问题的唯一触发因素，因此确保良好的电源供应将降低问题发生的可能性，但不能消除问题。激光雷达的电源电压被监控的多个飞行日志表明，在良好的电源供应下，问题可能会发生。

这个问题没有已知的解决方法。这个问题的详细的痕迹已经提供给设备制造商没有解决方案。这个问题也被复制使用设备制造商自己的软件和自己推荐的硬件设置。

## 通过I2C连接到Pixhawk

如下图所示，使用4PDF连接线将传感器连接到pixahwk i2c插口上测距仪的电源应由独立的外部BEC供电。

[![](http://ardupilot.org/copter/_images/RangeFinder_LIDARLite_Pixhawk_v2_Capacitor_3.jpg "../\_images/RangeFinder\_LIDARLite\_Pixhawk\_v2\_Capacitor\_3.jpg")](http://ardupilot.org/copter/_images/RangeFinder_LIDARLite_Pixhawk_v2_Capacitor_3.jpg)

LIDAR-Lite / PixhawkConnection图

注意

图中所示的低通滤波器是第一代硬件（针对2015年2月以前的生产日期的硬件）所必需的 - 这里提供了基本的PCB设计。 在LIDAR Lite的后续版本中，这些不应该被要求（在这一点上，图表将会改变，如下所示：

[![](http://ardupilot.org/copter/_images/rangefinder_lidarlite_pixhawk_v2.jpg "../\_images/rangefinder\_lidarlite\_pixhawk\_v2.jpg")](http://ardupilot.org/copter/_images/rangefinder_lidarlite_pixhawk_v2.jpg)

[![](http://ardupilot.org/copter/_images/rangefinder_lidarlite_circuit_diagram_for_next_generation.jpg "../\_images/rangefinder\_lidarlite\_circuit\_diagram\_for\_next\_generation.jpg")](http://ardupilot.org/copter/_images/rangefinder_lidarlite_circuit_diagram_for_next_generation.jpg)

你也可以购买一个I2C 转接板，你可以同时连接一个外接的GPS / Compass模块。

注意

确保来自BEC的地线连接到servo上的接地是非常重要的。

## 通过PWM连接到Pixhawk

从Plane和Copter的3.3.x版本开始，您可以通过PWM连接您的Lidar作为I2C的替代。 这可以解决激光雷达I2C接口中的许多错误。 这些错误包括在I2C总线上产生寄生脉冲，并在飞行中锁定激光雷达。

要通过PWM进行连接，您需要将激光雷达的4个引脚连接到Pixhawk的PWM。 连接如下：

| **LIDAR-Lite Pin** | **Pixhawk Pin** |
| :--- | :--- |
| J1 | CH6  输出正极 |
| J2 | CH6 输出信号\(内部引脚 55\) |
| J3 | CH5 Out Signal \(内部引脚 54\) |
| J4 | \(not used\) |
| J5 | \(not used\) |
| J6 | Ch6输出 负极 |

[![](http://ardupilot.org/copter/_images/side_back.jpg "../\_images/side\_back.jpg")](http://ardupilot.org/copter/_images/side_back.jpg)

J3和地之间需要一个电阻。 电阻器的确切值并不重要，在200欧姆和1千欧姆之间就可以了。 用一个470欧姆的电阻测试驱动器的触发。 该电阻提示激光雷达开始读取，因此连接引脚3和地之间的电阻告诉激光雷达进入连续采集模式。

以下是所需电缆的图片，其中显示的电阻由热缩管覆盖：

[![](http://ardupilot.org/copter/_images/lidar_lite_cabling_and_resistor.jpg "../\_images/lidar\_lite\_cabling\_and\_resistor.jpg")](http://ardupilot.org/copter/_images/lidar_lite_cabling_and_resistor.jpg)

那么您需要设置以下参数来启用PWM驱动器：

##### **RNGFND\_TYPE= 5**

##### **RNGFND\_STOP\_PIN= 55**

##### **BRD\_PWM\_COUNT= 4**

**RNGFND\_SCALING= 1**

##### **RNGFND\_OFFSET= 0**

注意：对于RNGFND\_SCALING，您的量程可能会有所不同。有些用户使用RNGFND\_SCALING = 0.8更好。

使用引脚55作为止动销只是一个建议，而不是要求。它连接到激光雷达的启用引脚，并允许驱动程序重置激光雷达，如果它停止提供读数。

需要使用引脚54作为PWM信号，由于Pixhawk的内部定时器布线，只能使用FMU AUX5（引脚54）。

注意：在PWM模式下使用LIDAR-Lite时，请注意以下事项：

您需要插入一个电池/ ESC（在PWM模式下，LIDAR-Lite从由ESC供电的servo获得电源）

在地面站方面，APMPlanner目前不显示数据，但是Mission Planner可以使用。

确保LIDAR在桌子上离最近的表面至少20cm左右。否则，它将显示0距离

默认情况下，在Copter上，如果启用LIDAR，它将在启动时检查LIDAR范围。通过支票，抬起车辆至少50厘米。通过将ARMING\_CHECK设置为跳过参数/声纳可以禁用该检查。

### 可选省电

使用PWM驱动程序时，您可以选择将雷诺数设置为以米为单位的地形高度，高于该高度将禁用激光雷达以节省功率。 当地形数据表明车辆高于该高度时，将使用RNGFND\_STOP\_PIN来禁用激光雷达。 这节省了大约100mA的电流。

你的GCS必须提供地形数据才能工作。

## 在mission planner中设置

要配置“直升机”，“固定翼”或“车”以使用LIDAR-Lite：

连接任务计划器并打开配置/调整\| 全部参数列表页面。

[![](http://ardupilot.org/copter/_images/RangeFinder_LIDARLite_MPSetup.png "../\_images/RangeFinder\_LIDARLite\_MPSetup.png")](http://ardupilot.org/copter/_images/RangeFinder_LIDARLite_MPSetup.png)

1. 根据飞行控制器和连接方法（PWM或I2C）设置RNGFND\_TYPE值：

RNGFND\_TYPE= 5  
   ：通过PWM的Pixhawk

RNGFND\_TYPE= 4  
   ：通过I2C的Pixhawk / PX4

RNGFND\_TYPE= 3  
   ：通过I2C的APM2

1. 将NRGFND\_MAX\_CM设置为4000（40m）。 此参数表示LiDAR可靠的最大距离（以厘米为单位） - 当忽略驱动程序中的“0”距离读数时，4LIDAR-Lite测距仪

2. 将RNGFND\_MIN\_CM设置为20厘米。 低于这个距离，你仍然可以得到读数，但是它们可能是不准确的（如果传感器从镜面反射中拾取信号而不是直接从返回信号中，则光学器件可能开始引入视差错误）。

### 测试传感器

在任务计划员的飞行数据界面的状态栏中可以看到传感器读取的距离。 仔细看“sonarrange”。 最好把激光雷达距离一个大的平坦墙壁几个已知的距离（1米，3米，5米）进行测试。 如果激光雷达经常以固定的偏移量读取错误，例如 每个距离总是50cm，然后按照正确的数量调整RNGFND\_OFFSET参数。 但是，如果每次都得到不同的距离，那么RNGFND\_SCALING参数需要改变。 更新它（也许1.1或0.9），并再次测试并重复，直到其正确。

[![](http://ardupilot.org/copter/_images/mp_rangefinder_lidarlite_testing.jpg "../\_images/mp\_rangefinder\_lidarlite\_testing.jpg")](http://ardupilot.org/copter/_images/mp_rangefinder_lidarlite_testing.jpg)

