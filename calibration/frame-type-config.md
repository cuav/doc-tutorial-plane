## 机架类型配置 {#机架类型配置}

---

在**初始设置-必要硬件-机架类型**

![](http://doc.cuav.net/PixHack/assets/ji.jpg)设置方法：

方法1：飞控连接上地面站，点击初始设置-》必要硬件》机架类型》选择合适的框架类型》选择合适的机架类型。

方法2：在全部参数表中找到[FRAME\_CLASS](http://ardupilot.org/copter/docs/parameters.html#frame-class)和[FRAME\_TYPE](http://ardupilot.org/copter/docs/parameters.html#frame-type)参数，看右边注释修改成合适的框架类型和机架类型。

注意：AC3.5及更高版本固件强制性需要设置机架类型否则会报“check frame\_class or frame\_\_type"错误。

