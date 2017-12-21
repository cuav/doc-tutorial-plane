### CUAV GPS型号 {#cuav-gps型号}

---

cuav GPS有m8n、m7n、m6h、minigps等型号

## cuav gps简介 {#cuav-gps简介}

---

![](/assets/gps1.jpg)

### GPS使用 {#gps使用}

---

* 插在pixhack gps插口上（飞控外壳有标识）
* 插在pixhawk gps与i2c插口上（飞控外壳有标识）

注：cuav gps内部集成了指南针与gps，其中指南针需要冷启动才能启动（即需插上再上电/或插上断电重启）；gps定位需要放置在开阔的户外。

### GPS状态显示 {#gps状态显示}

---

![](/assets/gps4.jpg)

MP地面站一共有四处可以看GPS状态

1.GPS1状态指示，显示：无gps》未检测到gps；未定位》识别到gps但未定位成功；3D fix&gt;GPS定位成功。

2.gpsstatus：gps1状态代码。1：识别到gps但未定位;

```
gpshdop：定位精度,良好的定位精度应低于0.8;  

satcount：卫星数量
```

3.gpsstatus2:gps2状态代码

gpshdop2：gps2定位精度,良好的定位精度应低于0.8;

satcount2：gps2卫星数量

