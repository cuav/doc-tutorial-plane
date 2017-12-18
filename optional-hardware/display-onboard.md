## 扩展OLED状态显示屏 {#扩展oled状态显示屏}

---

## 概述： {#概述：}

Pixhack/Pixhawk飞控在AC 3.5以上的固件已经支持了一个I2C协议的OLED显示屏

可以通过外接一个1306或者1106驱动芯片的I2C OLED 显示器；显示飞行状态信息

## 特性： {#特性：}

### 完美兼容 {#完美兼容}

CUAV PIX\_DISPLAY 扩展显示屏配件，可以完美兼容Pixhack/Pixhawk使用，只需要将CUAV PIX\_DISPLAY插入I2C扩展接口，简单设置参数既可开启显示

### 信息显示 {#信息显示}

通过PIX扩展显示屏可以显示：Pre-Arm信息、飞行模式、电压和电流、GPS状态、EKF健康状态等关键信息，无需连接地面站既可观察飞控状态

#### 快速集成 {#快速集成}

显示屏扩展小板设计有M2安装螺丝孔，能快速集成到你的飞行器系统中

---

### CUAV PIX\_DISPLAY 技术规格 {#cuav-pixdisplay-技术规格}

|  | **硬件参数** |
| :--- | :--- |
| 屏幕分辨率 | 128\*64 |
| 屏幕材质 | OLED自发光 |
| 屏幕颜色 | 黄蓝 双色 屏 |
| 驱动芯片 | SSD1306 |
| **接口** |  |
| 数据接口 | I2C 4线 |
| 接口端子型号 | JST GH 1.25 |
| **工作环境及物理参数** |  |
| 工作电压 | 3.3-5V |
| 工作温度 | -10~+60° |
| 尺寸 | 长32.3X 宽26.7mm X 高9mm |
| 重量 | ≈5克 |
| 固定孔尺寸 | 25.76 x 20.2 |
| 开孔尺寸 | 2.4mm |

#### 如何使用： {#如何使用：}

![](http://doc.cuav.net/PixHack/assets/pix_display.png)

将CUAV PIX\_DISPLAY配件插入到飞控的I2C扩展口；

将飞控进行上电，飞控将自动识别显示配件，在自检后就会有显示信息

如果没有显示，请尝试将NIF\_DISPLAY TYPE 改为1（SSD1306类型）后，重新上电

#### 开启OLED显示屏后，状态大灯将停用，不闪烁 {#开启oled显示屏后，状态大灯将停用，不闪烁}

![](http://doc.cuav.net/PixHack/assets/display_type.png)

### CUAV PIX DISPLAY 开孔固定尺寸图 {#cuav-pix-display-开孔固定尺寸图}

![](http://doc.cuav.net/PixHack/assets/PIXHACK_DISPLAY_.png)

