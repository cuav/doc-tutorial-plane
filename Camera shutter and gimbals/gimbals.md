## 相机云台设置

云台一般有两种连接方式，最简单的一种就是直接接在遥控器接收机上，通过接收机给云台发送pwm信号，控制云台。第二种就是通过飞控把遥控信号映射到飞控输出通道上，下面我们讲解一下第二种方法的软件设置。

![](/assets/yun.jpg)上图示例为遥控器通道6、7、8分别映射到飞控AUX1、AUX1、AUX3通道控制云台的TILT、roll、pan轴。

* 将pixhack/pixhawk连接上mission planner
* 打开初始设置》可选硬件》相机云台》type设置成servo&gt;tilt下拉设置成servo9，输入通道设置成rc6；按照相同方式设置roll以及pan轴（如果是三轴云台）。
* 不要勾选自稳复选框。

飞控执行[Do-Set-ROI](http://ardupilot.org/copter/docs/mission-command-list.html#mission-command-list-do-set-roi)命令时云台应该工作，舵机限位及角度限位一般采用默认，也可根据云台及相机实际情况作出调整。

## 测试云台设置

测试飞行员对云台的控制

一旦启动，当您的发射器的通道6调节旋钮处于最小pwm值（可能约为1000）时，云台应指向倾斜角度最小（即摄像头向下），当 调谐旋钮处于最大（可能约为2000），相机应指向其最大倾斜角度（即摄像头向上），mission planner的无线电校准页面可用于检查Ch6的当前输入pwm值。

测试ROI

测试roi需要gps定位。 ROI特征指示飞行器和/或相机指向目标。 上面的说明描述了设置pixhack / Pixhawk，以便它控制云台的俯仰的倾斜，这样当接收到Do-Set-ROI命令时，转向器将尝试将飞行器指向 目标和倾斜摄像机取决于飞行器与目标的距离和高度。 您可以通过与mission planner连接来正确测试云台倾斜运动，然后在飞行数据屏幕的地图上，右键单击飞行器前方约50米的点（橙色和红线显示车辆的当前航向 ），选择“拍照点”，输入高度-50（米）。 这应该使云台指向约45度。

![](/assets/yun2.jpg)
