## 通过地面站在线烧录飞行器固件（四轴为例） {#通过地面站在线烧录飞行器固件（四轴为例）}

---

将飞控USB插入电脑，在设备管理器应该能看见一个PX4 FMU的端口（每个电脑的端口号都不会一样，你的可能是COM3或者其他，这个没有关系。只要在地面站选择正确的端口既可）

![](/assets/pc-usb.png)

打开MP地面站-选择端口 波特率不需要改变。注意，**不要 点连接。不需要点 连接（否则无法烧录）**![](/assets/mp-set-com.png)

选择**初始设置 - 安装固件**功能选项

地面站会联网检测最新版本

![](/assets/install-firmware.png)

获得到版本号后，在每个机型下面，具有一个版本号，比如**APM:Copter V3.4.5 QUAD.**

如果显示None，或者直接显示APM:Copter Stable \(获取不成功，连接不到服务器\)

就是获取失败，是无法烧录固件的，可以重新打开这个功能选项试试。

**再不行，请尝试本地上传固件**![](/assets/install-firmw2.png)

提示：拔下控制板，点OK后再重新插入

![](/assets/load-firmw3.png)

烧录完成后，等一段时间，大概20秒，飞控会有一段音乐，等待音乐播放完成后，就点OK。完成烧录！

![](/assets/loading—firmware4.png)

### 初步测试是否正常 {#初步测试是否正常}

烧录完成固件后，状态大灯应该闪烁黄色或者蓝色 （如果常亮红色，请查看 硬件排除指南）

你可以点地面站连接，没有意外，应该会连接成功，摆动飞控板，姿态窗口应该也会跟随倾斜

