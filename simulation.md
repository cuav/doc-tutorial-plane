# SITL模拟器（循环中的软件）

SITL（循环中的软件）模拟器允许您在没有任何硬件的情况下运行Plane，Copter或Rover。 它是使用普通C ++编译器构建的自动驾驶仪代码，为您提供了一个本机可执行文件，允许您在没有硬件的情况下测试代码的行为。

本文概述了SITL的优势和体系结构。

SITL允许您直接在PC上运行ArduPilot，无需任何特殊硬件。 它利用了ArduPilot是一个可以在各种平台上运行的便携式自动驾驶仪。 您的PC只是ArduPilot可以构建和运行的另一个平台。

在SITL中运行时，传感器数据来自飞行模拟器中的飞行动力学模型。 ArduPilot拥有多种内置的飞行器模拟器，可以连接到几个外部模拟器。 这使得ArduPilot可以在各种类型的模型上进行测试。 例如，SITL可以模拟：

* 多旋翼飞机

* 固定翼飞机

* 地面车辆

* 相机的万向节

* 天线跟踪器

* 各种可选的传感器，如激光雷达和光学流量传感器

添加新的模拟飞行器类型或传感器类型很简单。

ArduPilot在SITL上的一大优势是它可以让您访问桌面C ++开发所需的各种开发工具，如交互式调试器，静态分析器和动态分析工具。 这使得开发和测试ArduPilot的新功能变得更加简单。

## 运行SITL

APM SITL环境上运行了 Linux和Windows。 指令看[设置SITL Linux上](http://ardupilot.org/dev/docs/setting-up-sitl-on-linux.html#setting-up-sitl-on-linux)和[在Windows上设置SITL](http://ardupilot.org/dev/docs/sitl-native-on-windows.html#sitl-native-on-windows)为更多的信息。

## SITL架构

注意在下面的图像端口号仅供参考，可能会有所不同。 例如，ArduPilot和图像上的模拟器之间的端口是5501/5502，但根据您的环境，它们可能会变成5504/5505或其他端口号。

[![](http://ardupilot.org/dev/_images/ArdupilotSoftwareintheLoopSITL.jpg "../\_images/ArdupilotSoftwareintheLoopSITL.jpg")](http://ardupilot.org/dev/_images/ArdupilotSoftwareintheLoopSITL.jpg)

[SITL on Linux](http://ardupilot.org/dev/docs/setting-up-sitl-on-linux.html)

* [SITL on Windows](http://ardupilot.org/dev/docs/sitl-native-on-windows.html)
* [SITL on Windows in a VM](http://ardupilot.org/dev/docs/setting-up-sitl-on-windows.html)
* [SITL using Vagrant](http://ardupilot.org/dev/docs/setting-up-sitl-using-vagrant.html)
* [Copter SITL/MAVProxy Tutorial](http://ardupilot.org/dev/docs/copter-sitl-mavproxy-tutorial.html)
* [ArduPilot Testing using SITL](http://ardupilot.org/dev/docs/using-sitl-for-ardupilot-testing.html)
* [Using Gazebo Simulator with SITL](http://ardupilot.org/dev/docs/using-gazebo-simulator-with-sitl.html)
* [Using Last\_letter Simulator with SITL](http://ardupilot.org/dev/docs/using-last_letter-as-an-external-sitl-simulator.html)
* [Using the CRRCSim simulator](http://ardupilot.org/dev/docs/simulation-2sitl-simulator-software-in-the-loopusing-using-the-crrcsim-simulator.html)
* [Using X-Plane 10 with SITL](http://ardupilot.org/dev/docs/sitl-with-xplane.html)
* [Soaring SITL with X-Plane](http://ardupilot.org/dev/docs/soaring-sitl-with-xplane.html)



