## ËKF / DCM检查故障安全

## 直升机3.2增加了一个DCM航向检查和一个EKF（检查，以捕捉由于航向估计值不佳而造成的飞行\)。

注意

从直升机3.3开始，EKF故障安全取代了GPS故障安全。

什么时候会触发？

在所有主板上默认运行DCM检查，并在GPS隐含航向和DCM的估计航向至少60度（可配置DCM\_CHECK\_THRESH参数）达一整秒时触发。

EKF检查仅在Pixhawk/pixhack上运行，并且仅在EKF被用作姿态和位置估计的主要来源（即AHRS\_EKF\_USE = 1）时才运行。当EKF的指南针和速度“方差”高于0.8（可用EKF\_CHECK\_THRESH参数配置）一秒钟时，将触发此检查。随着估计变得不可信，这个“差异”会增加。 0 =非常值得信赖，&gt; 1.0 =非常不值得信任。如果两个差异均超过EKF\_CHECK\_THRESH参数（默认值为0.8），EKF / Inav故障安全触发器。

当故障安全触发器会发生什么？

Pixhawk的LED将闪烁红黄色，声音警报将会响起。

如果遥测附带“EKF方差”将出现在HUD上。

EKF / DCM错误将被写入到数据闪存日志中

如果在不需要GPS的飞行模式下飞行，则无法进一步发生，但是在故障清除之前，您将无法切换到自动驾驶飞行模式（Loiter，PosHold，RTL，Guided，Auto）。

如果在需要GPS（Loiter，PosHold，RTL，Guided，Auto）的模式下飞行，车辆将切换到“先导控制”LAND。这意味着飞行员可以控制侧倾角和俯仰角，但是飞行器会下降，降落，最后解除电机的控制。飞行员可以像总是切换到手动飞行模式，包括稳定或AltHold将飞行器控制返航。

调整灵敏度或禁用检查

DCM和EKF检查和故障安全可以通过任务计划程序的配置/调整&gt;&gt;完整参数列表将DCM\_CHECK\_THRESH或EKF\_CHECK\_THRESH设置为“0”来禁用。或者，可以通过将此参数从0.8增加到0.9或1.0来使其变得不那么敏感。增加这个参数的值的缺点是，在一个不良的指南针或全球定位系统导致飞行故障时，飞行器将自动切换到降落模式之前仍然飞行。

[![](http://ardupilot.org/copter/_images/ekfcheck_setupThroughMP.png "../\_images/ekfcheck\_setupThroughMP.png")](http://ardupilot.org/copter/_images/ekfcheck_setupThroughMP.png)

## 



