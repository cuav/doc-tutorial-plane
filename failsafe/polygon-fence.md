# 多边形围栏

概述

直升机3.4（及更高版本）包括支持多达84点的多边形围栏。 这个围栏的目的是试图通过启动一个RTL来阻止你的飞行器飞出多边形内的区域，如果在Loiter模式下飞行，飞行器通常会在突破围栏之前停下来。 这个功能是简单的圆形围栏的扩展。

### 在mission plnner中启用围栏

* 将您的飞行控制器连接到Mission Planner

* 进入配置/调整\| 地理围栏屏幕

* 单击“启用”并将类型设置为“polygon"选项

![](/assets/geo.jpg)

* 将行动设成“RTL或降落”

* 转到飞行计划界面

* 在地图上单击右键并选择“绘制多边形”&gt;&gt;“添加多边形点”

* 点击地图上的其他点来定义多边形

![](/assets/GEO1.jpg)

* 多边形定义完成后，您必须单击鼠标右键并单击“极限范围”&gt;&gt;“设置返回位置”。 这个位置实际上并不是由直升机使用的，但是它必须被设置，因为和Plane一样使用了相同的底层库。

![](/assets/GEO2.jpg)

使用鼠标右键单击并点击“极限范围”上传多边形围栏到飞行器&gt;&gt;“上传”![](/assets/GEO3.jpg)

本文英文参考：[http://ardupilot.org/copter/docs/polygon\_fence.html](http://ardupilot.org/copter/docs/polygon_fence.html)

