## I2CXL-Maxsonar-ez声纳测距仪 {#i2cxl-maxsonar-ez声纳测距仪}

---

i2cxl maxsonar是一种价格相对低廉的短距离（高达7米）测距仪，主要用于室内使用，但已在室外成功使用。

cuav 销售的 i2c 声呐主要有MB 1212以及MB1242.

商品详情及购买链接：[https://item.taobao.com/item.htm?id=22709612054&spm=2014.21600712.0.0](https://item.taobao.com/item.htm?id=22709612054&spm=2014.21600712.0.0)

---

### 使用说明 {#使用说明}

---

#### 连接到Pixhawk {#连接到pixhawk}

声纳应连接到Pixhawk的I2C端口，如下图所示，或通过I2C扩展板连接。 Pixhawk将提供传感器所需的稳压5V电源。

![](http://doc.cuav.net/PixHack/assets/SONSER.jpg)

### 连接到Pixhack {#连接到pixhack}

声纳应通过I2C扩展板连接到pixhack。 Pixhack将提供传感器所需的稳压5V电源。

---

### 使用mp地面站调试 {#使用mp地面站调试}

要配置Copter，Plane或Rover以使用MB1212/MB1242声呐，请先连接Mission Planner，然后打开配置/ 调试 &gt;&gt; 全部参数表页面并设置以下参数：

RNGFND\_MAX\_CM =“700”（即7m最大范围）

RNGFND\_TYPE =“2”（MaxbotixI2C声纳）

![](http://doc.cuav.net/PixHack/assets/sonser2.jpg)

### 测试传感器 {#测试传感器}

在mp地面站飞行数据屏幕状态栏中可以看到传感器读取的距离。 仔细看“sonarrange”。

![](http://doc.cuav.net/PixHack/assets/sonser3.jpg)

注:

此测距仪只支持运行AC3.2或更高版本的固件。

