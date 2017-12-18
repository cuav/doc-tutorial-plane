## 多旋翼 飞行日志概述及分析 {#多旋翼-飞行日志概述及分析}

---

### 日志类型\(Dataflash vs tlogs\) {#日志类型dataflash-vs-tlogs}

#### 闪存日志 Dataflash {#闪存日志-dataflash}

APM:COPTER固件内置了黑匣子功能，能记录非常详细的飞行数据，Pixhack标配了8G TF存储扩展，可以记录超过数百次飞行数据\*

通过日志分析可以很容易的分析飞行器飞行状态以及是否存在故障

也容易通过日志分析飞行器控制参数是否需要优化

闪存日志有2种下载方式：

1. 通过MAVLINK下载
2. 直接通过读卡器读取飞控板的TF卡（logs文件夹内）

### 通过Mavlink下载日志： {#通过mavlink下载日志：}

* 使用USB或者数传连接到飞行器（推荐用USB，数传可能会很慢）
* 打开地面站
  &gt;
  &gt;
  飞行数据 界面
  &gt;
  &gt;
  数据闪存日志
  &gt;
  &gt;
  通过Mavlink下载闪存日志
* 选中对应的日志下载即可，最后一个就是最后一次飞行的日志
* 下载后，日志会保存在你的地面站安装目录下面的logs的目录 MissionPlanner/logs

```
正常是有时间显示的，可能时区的问题，时间会偏差
如果GPS未定位获取到时间，年月份 时间都是不准确的

```

![](http://doc.cuav.net/PixHack/assets/mission_planner_download_logs.png)

#### 数传日志 Tlogs {#数传日志-tlogs}

用 数传模块 连接PixHack到电脑上，会被Mission Planner\(或其他地面站\)记录下来。

可以直接在地面站回放记录。

