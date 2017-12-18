## 外部LED {#外部led}

---

本文介绍如何连接外部LED。

#### 

Pixhawk的外部LED

可以通过连接Pixhawk的I2C端口来添加外部Pixhawk LED。 由于大多数用户使用Ublox GPS和Compass模块，推荐使用I2C转接板。 一旦连接，Pixhawk上的主LED将不会亮。

![](http://doc.cuav.net/PixHack/assets/led1.jpg)

---

PIXHACK 的外部LED

pixhack将外置led的i2c接口嵌入到了dbus op端子里，可以通过 使用外置led配线连接外置led，为方便i2c设备扩展需要连接i2c转接板。

![](http://doc.cuav.net/PixHack/assets/LED2.jpg)

