# RC输入通道映射\(RCMAP\) {#rc输入通道映射rcmap}

本文介绍如何使用RCMAP功能设置非标准RC输入通道映射。

注意：该指导适用于ac3.2及以上固件

配置

默认情况下，RC输入通道为：

通道1：横滚输入

通道2：升降输入

通道3：油门输入

通道4：偏航输入

这些对应关系可以通过设置[RCMAP\_ROLL](http://ardupilot.org/copter/docs/parameters.html#rcmap-roll),[RCMAP\_PITCH](http://ardupilot.org/copter/docs/parameters.html#rcmap-pitch),[RCMAP\_THROTTLE](http://ardupilot.org/copter/docs/parameters.html#rcmap-throttle)和[RCMAP\_YAW](http://ardupilot.org/copter/docs/parameters.html#rcmap-yaw)来改变

方法：

打开mp地面站，切换到**配置/调优\|全部参数数**\(或全部参数列表\)界面,如下所示。![](/assets/rc.jpg)

更改任何这些参数后，飞行控制器应重新启动。

重启后，应重新进行RC校准和电调校准。

