## 蜂鸣器和安全开关 {#蜂鸣器和安全开关}

---

### pixhawk蜂鸣器 {#pixhawk蜂鸣器}

### ![](http://doc.cuav.net/PixHack/assets/BUZZER1.jpg)

蜂鸣器（或报警器）用于播放各种声音，包括解锁声和丢失的直升机错误报警。

#### 安装蜂鸣器 {#安装蜂鸣器}

蜂鸣器发出的声音可能会影响加速度计，如果放在太靠近飞行控制器的位置，会导致蜂鸣器启动时的高度保持性能不佳。 理想情况下，蜂鸣器应安装在离飞行控制器至少5厘米处，扬声器（即裸眼）不应直接指向飞行控制器。

通过设置以下参数可以禁用蜂鸣器：

* 设置NTF\_BUZZ\_ENABLE = 0禁用蜂鸣器

---

### pixhawk安全开关 {#pixhawk安全开关}

![](http://doc.cuav.net/PixHack/assets/SAFE5.jpg)

可以使用安全开关启用/禁用电机和伺服的输出。

led含义

持续闪烁 - 系统正在初始化

间歇闪烁 - 系统已准备就绪,长按可使其常亮

常亮:安全开关开启，信号输出，等待遥控器解锁。

一旦飞行器被解锁，安全开关被按下，马达和舵机能够驱动。

#### 配置安全开关 {#配置安全开关}

BRD\_SAFETYENABLE = 0禁用开关

BRD\_SAFETY\_MASK可用于设置使用安全开关启用/禁用哪些独立通道

![](http://doc.cuav.net/PixHack/assets/SAFE3.jpg)

#### 使用安全开关强制I / O板固件更新 {#使用安全开关强制i--o板固件更新}

如果在Pixhawk启动后的最初几秒内按住安全开关，I / O固件将重新加载。

这通常不是必需的，但在极少数情况下，如果在启动后听到“启动失败”的声音，则需要固件上载后（请参阅wiki页面）。

---

### PIXAHCK安全开关与蜂鸣器 {#pixahck安全开关与蜂鸣器}

![](http://doc.cuav.net/PixHack/assets/SAFE11.jpg)

cuav安全开关是蜂鸣器与安全开关一体的模块，具有易安装、体积小的特点。其具有上述pixhawk安全开关和蜂鸣器的全部功能，设置方法也完全一致。
