# LightWare SF10 and SF11 Lidar / SF10 SF11激光测距模块 {#lightware-sf10-and-sf11-lidar--sf10-sf11激光测距模块}

Lighware SF10和SF11系列激光测距仪特别轻便，可提供快速准确的距离测量。

虽然比其他测距仪稍微贵一些，但是开发团队的成员与他们取得了很好的成功。

SF10 / A（25m），SF10 / B（50m），SF10 / C（100m）和SF11 / C（120m）

[![](http://ardupilot.org/copter/_images/SF10-B.jpg)](http://ardupilot.org/copter/_images/SF10-B.jpg)

连接到Pixhawk

下面的图表显示了传感器输出引脚和一个方便的彩色编码电缆（通常包括在内），用于连接到飞行控制器。串行，I2C和模拟连接是可能的，但我们建议使用serialialif（见这里的问题）。

提示

建议在使用较长的电缆或使用Copter时使用串行连接（请参阅此处的问题）

[![](http://ardupilot.org/copter/_images/RangeFinder_SF10_Output_Pins.png)](http://www.lightware.co.za/shop/en/drone-altimeters/32-sf10b.html)

```
                                                            SF10测距仪：输出引脚

```

[![](http://ardupilot.org/copter/_images/SF10_Rangefinder_main-cable-type-1-35-cm.jpg)](http://www.lightware.co.za/shop/en/accessories/37-main-cable-type-1-35-cm.html)

```
                                            SF10测距仪

```

主要电缆

### 串行连接 {#串行连接}

对于串行连接，您可以使用任何备用UART。 将UART的RX线连接到Lidar的TX线，将UART的TX线连接到激光雷达的RX线。 同时连接GND和5V线。 您不需要流量控制引脚。

### 

### 下图显示了如何连接到SERIAL4。 {#下图显示了如何连接到serial4。}

[![](http://ardupilot.org/copter/_images/Pixhawk_Rangefinder_SF10_Serial.jpg)](http://ardupilot.org/copter/_images/Pixhawk_Rangefinder_SF10_Serial.jpg)

### Pixhawk / Pixhack和SF10Rangefinder：串行连接（SERIAL4） {#pixhawk--pixhack和sf10rangefinder：串行连接（serial4）}

### 

然后您需要设置串口和测距仪参数。 如果您已经使用了Pixhawk上的SERIAL4 / 5端口，那么您将设置以下参数（在Mission Planner配置/调整\|完整参数列表页面中完成）：

SERIAL4\_PROTOCOL = 9（激光雷达）

SERIAL4\_BAUD = 19（19200波特）

RNGFND\_TYPE = 8（LightWareSerial）

RNGFND\_SCALING = 1

RNGFND\_MIN\_CM = 5

RNGFND\_MAX\_CM = 2500（对于SF10A），5000（对于SF10B），10000（对于SF10C）或12000（对于SF11C）。 测距仪可以可靠读取的距离是厘米。 该值取决于激光雷达的模型。

RNGFND\_GNDCLEAR = 10或更准确地说，当车辆着陆时从测距仪到地面以厘米为单位的距离。 这个值取决于你如何安装测距仪。

如果您使用的是Pixhawk上的Telem2端口，那么您将设置SERIAL2\_PROTOCOL = 9，SERIAL2\_BAUD = 19200

### I2C连接 {#i2c连接}

### 警告 {#警告}

### 

平面3.4（及更高版本）和Rover 2.50（及更高版本）中均支持I2C支持，但不应用于直升机（请参阅此处的问题）。

将Lidar的SDA线连接到Pixhawk上的I2C端口的SDA线，将Lidar的SCL线连接到I2C端口的SCL线。 同时连接GND和5V线。

[![](http://ardupilot.org/copter/_images/Pixhawk_Rangefinder_SF10_I2C.jpg)](http://ardupilot.org/copter/_images/Pixhawk_Rangefinder_SF10_I2C.jpg)

### P {#p}

ixhawk和SF10测距仪：I2C连接

然后您需要如下所示配置测距仪参数（这在Mission Planner配置/调整\|完整参数列表页面中完成）：

RNGFND\_TYPE = 7（LightWareI2C）

RNGFND\_ADDR = 102（十进制激光雷达的I2C地址）。请注意，此设置是十进制而不是十六进制，如激光雷达设置屏幕所示。默认地址是0x66，十进制是102。

RNGFND\_SCALING = 1

RNGFND\_MIN\_CM = 5

RNGFND\_MAX\_CM = 2500（对于SF10A），5000（对于SF10B），10000（对于SF10C）或12000（对于SF11C）。测距仪可以可靠读取的距离单位是厘米。该值取决于激光雷达的模型。

RNGFND\_GNDCLEAR = 10或更准确地说，当飞行器着陆时从测距仪到地面以厘米为单位的距离。这个值取决于你如何安装测距仪。

警告

旧的LightWare测距仪的默认I2C地址是0x55。

这是为了防止与ArduPilot上的其他设备发生冲突。

请检查您的测距仪系统设置，以确定您的I2C地址是什么。

### Analog连接 {#analog连接}

### SF10的模拟输出引脚（5）应连接到Pixhawk的3.3V ADC（模数转换器）。 Pixhawk将使用ADC连接器的5V和GND引脚提供传感器所需的稳压5V电源。 {#sf10的模拟输出引脚（5）应连接到pixhawk的33v-adc（模数转换器）。-pixhawk将使用adc连接器的5v和gnd引脚提供传感器所需的稳压5v电源。}

[![](http://ardupilot.org/copter/_images/Pixhawk_Rangefinder_SF10_Analog.jpg)](http://ardupilot.org/copter/_images/Pixhawk_Rangefinder_SF10_Analog.jpg)

### Pixhawk和SF10测距仪：模拟连接 {#pixhawk和sf10测距仪：模拟连接}

---

您需要设置ADC和测距仪参数，如下所示（在Mission Planner配置/调整\|完整参数列表页面中完成）：

RNGFND\_TYPE = 1（模拟）

RNGFND\_PIN = 14（3.3V ADC连接器的第2个引脚）

RNGFND\_SCALING = 9.76（对于SF10A），19.531（对于SF10B），39.06（对于SF10C），46.87（对于SF11C）

RNGFND\_MIN\_CM = 5

RNGFND\_MAX\_CM = 2000（对于SF10A），4500（对于SF10B），9500（对于SF10C）或11500（对于SF11C）。测距仪可以可靠读取的距离是厘米。该值取决于激光雷达的模型。注意范围比使用串行或I2C协议少5米，以便可以可靠地检测到超出范围

RNGFND\_GNDCLEAR = 10或更准确地说，当车辆着陆时从测距仪到地面以厘米为单位的距离。这个值取决于你如何安装测距仪。

RNGFND\_SCALING值取决于最大量程范围内测距仪输出引脚上的电压。默认情况下，SF10 / B将在50米处输出2.56伏，因此比例因子为50米/2.56伏≈19.53（每种测距仪型号的模拟距离范围可在“SF10手册”中找到）。手册介绍了如何确认和更改最大输出范围/电压。

## 测试声呐数据 {#测试声呐数据}

在MP地面站--飞行数据窗口--状态 选项栏 查看 “sonarrange” 数值  
注意：设置好后，你需要重新上电才能生效

[![](http://ardupilot.org/copter/_images/mp_rangefinder_lidarlite_testing.jpg)](http://ardupilot.org/copter/_images/mp_rangefinder_lidarlite_testing.jpg)

