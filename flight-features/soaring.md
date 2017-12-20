# 飙升

Ardupilot中的自主飞行功能允许飞机响应升高的气流（散热），以延长续航时间并以最少的电机（飙升）获得高度。

![](http://ardupilot.org/plane/_images/thermalling.jpg "../\_images/thermalling.jpg")这张照片显示了使用飞升功能时飞行的不同阶段：

当输入AUTO，FBWB或CRUISE模式时，如果飞机高于SOAR\_ALT\_MIN高度，油门将被设置为零。飞机开始滑翔。

如果飞机达到SOAR\_ALT\_MIN高度，油门重新启用，飞机将开始爬升到下一个航点的高度。

当飞机达到SOAR\_ALT\_CUTOFF高度时，再次将油门设置为零。

如果在滑翔飞行期间，空气估计升高超过SOAR\_VSPEED，飞机将进入LOITER模式。它会调整留待的位置，以更好的盘旋。

* LOITER模式在以下条件下退出：

* 已达到SOAR\_ALT\_MAX。

* 已达到SOAR\_ALT\_MIN。

* 飞行模式是手动更改。

可实现的爬升率的估计值降到SOAR\_VSPEED以下，并且至少持续了SOAR\_MIN\_THML\_S秒。

在LOITER被触发之前，飞行模式将返回到以前的状态，除了以下例外。如果之前的模式是FBWB或CRUISE，并且由于到达SOAR\_ALT\_MIN而结束，则会触发RTL。  
建立飙升  
使用你的飞机飞行，理想情况下应该是一个滑翔机类型的飞机，具有良好的阻力比，并配有空速传感器。 有一些步骤可以使飞机飞升：

* 建立一个合适的使命。 调整TECS。 估计飞机拖动。 设置飞升的参数。 任务设置 一个任务的主要要求是，它需要飞机上面SOAR\_ALT\_CUTOFF，以便滑翔飞行启动。 为此，请将航路点高度设置为高于SOAR\_ALT\_CUTOFF。

警告

自动驾驶仪可以在相对较长的路途中移动路点，特别是在有风的情况下。 您应该设置一个[地理围栏](http://ardupilot.org/plane/docs/geofencing.html#geofencing)以保持安全距离

### 调整TECS

TECS需要设置成在滑行时以一致的空速飞行。为此，请将TECS\_SPDWEIGHT设置为2.0，将SOAR\_ENABLE设置为1，并将SOAR\_VSPEED设置为一个很大的数字，例如50.0。这意味着飞机将会滑行但永远不会开始飞行。将SOAR\_ALT\_CUTOFF设置为您感觉舒适的高度。它应该足够高，以便花费很长的时间来滑行。启动飞机并将其置于自动模式。它应该爬到SOAR\_ALT\_CUTOFF，然后开始滑行下降。观看遥测图或查看Dataflash日志。飞机是否维持要求的空速？在Dataflash日志中可以看到要求的空速为TECS.spdem，通过遥测可以使用NAV\_CONTROLLER\_OUTPUT.aspd\_error。您可能需要增加PTCH2SRV\_IMAX和TECS\_INTEG\_GAIN才能在滑翔飞行中实现良好的空速跟踪。



### 估算飞机的阻力

要计算空气的上升速度或下沉速度，自动驾驶仪需要知道飞机在静止空气中的给定空速时的下沉速率。这与飞机的阻力极性有关。估计极地可能有一点涉及。如果您的机身与Parkzone Radian非常相似，则保持SOAR\_POLAR\_B和SOAR\_POLAR\_CDO不变是合理的。您应该使用以下公式为您的飞机调整SOAR\_POLAR\_K：

SOAR\_POLAR\_K = 16 \*重量/面积（以千克为单位的重量，以平方米为单位的面积）。



### 设置飞行参数

将SOAR\_VSPEED参数更改回合理的值。请记住，此参数控制何时将模式更改为LOITER并启动热启动。将SOAR\_ALT\_MAX更改为您希望自动驾驶停止提升的高度。



