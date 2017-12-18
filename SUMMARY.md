# Summary

* [固定翼飞行器教程](README.md)

* [第一次设置](javascript:;)
  * [地面站/驱动安装](first-setup/software-installation.md)
  * [加载固件](first-setup/loading-firmware.md)
    * [在线烧录固件](first-setup/loading-firmware/online-loading-firmware.md)
    * [烧录本地固件](first-setup/loading-firmware/web-down-firmware.md)
  * [地面站连接及使用](first-setup/connect.md)
    * [mission planner](first-setup/connect/mission-planne.md)
      * [连接地面站](first-setup/connect/mission—planner/connect-mission-planner-autopilot.md)
      * [飞行数据](first-setup/connect/mission-planner/flight-data.md)
      * [飞行计划](first-setup/connect/mission-planner/flight-plan.md)
      * [航点命令和事件](first-setup/connect/mission-planner/flight-plan/common-planning-a-mission-with-waypoints-and-events.md)
      * [配置/调试](first-setup/connect/mission-planner/configtuning.md)
      * [飞行模拟](first-setup/connect/mission-planner/simulation.md)
      * [终端](first-setup/connect/mission-planner/terminal.md)
    * [CUAV Hfight](first-setup/connect/cuav-hfight.md)
 * [组装飞行器](first-setup/assermbly.md)
    * [硬件安装和接线](first-setup/assermbly/quick-start.md)
 * [硬件设置和校准](javascript:;)
    * [2.遥控器校准](calibration/rc-calibration.md)
    * [3.GPS罗盘校准](calibration/compass-calibration.md)
    * [4.加速计校准](calibration/accelerometer-calibration.md)
    * [5.飞行模式设置](calibration/mode-setup.md)
    * [6.PM模块设置](calibration/power-module.md)
    * [7.ESC电调校准](calibration/esc-calibration.md)
  * [机身安装指南](first-setup/airframe-guides.md)
* [第一次飞行](javascript:;)
  * [飞行模式介绍](flight-modes.md)
    * [MANUAL 自动模式](flight-modes/manual-mode.md)
    * [STABILIZE简单增稳模式](flight-modes/stabilize.md)
    * [FBWA线性A增稳模式](flight-modes/fbwa.md)
    * [FBWB线性B增稳模式](flight-modes/fbwb.md)
    * [AUTO自动模式](flight-modes/auto.md)
    * [RTL返航模式](flight-modes/rtl.md)
    * [LOITER定点模式](flight-modes/loiter.md)
    * [Acro特技模式](flight-modes/acro.md)
    * [Cruise巡航模式](flight-modes/cruise.md)
    * [Circle绕圆模式](plane/flight-modes/circle.md)
    * [Guided指导模式](flight-modes/guided.md)
    * [Takeoff起飞模式](flight-modes/takeoff.md)
    * [Land降落模式](flight-modes/land.md)
  * [Pre-arm报错信息分析](copter/pre-arm.md)
  * [解锁和上锁](arming-disarming.md)
  * [飞机启动及校准](aircraft starter/aircraft starter.md)
  * [失控保护](failsafe.md)
    * [遥控器失控保护](failsafe/radio-failsafe.md)
    * [电池保护](failsafe/battery-failsafe.md)
    * [GCS地面站丢失保护](failsafe/gcs-failsafe.md)
    * [EKF / DCM Check Failsafe](copter/failsafe/ekf-dcm-check-failsafe.md)
    * [简单电子围栏](failsafe/simple-geofence.md)
    * [多边形围栏](failsafe/polygon-fence.md)
    * [碰撞撞击保护](failsafe/crash-check.md)
* [飞行特性](flight-features.md)
  * [自动起飞](flight-features/automatic-takeoff.md)
  * [自动降落](flight-features/automatic-landing.md)
  * [反向飞行](flight-features/inverted-flight.md)
  * [预防失速](flight-features/stall-prevention.md)
  * [地理围栏](flight-features/geofencing.md)
  * [地形跟随](flight-features/common-terrain-following.md)
  * [输出通道](flight-features/channel-output-functions.md)
  * [飙升](flight-features/soaring.md)
* [高级配置](javascript:;)
  * [辅助功能开关](Advanced-Configuration/auxiliary-function-switches.md)
  * [指南针设置（高级）](Advanced-Configuration/compass-setup-advanced.md)
  * [扩展卡尔曼滤波器（ekf\)](Advanced-Configuration/ekf.md)
  * [地面效应补偿](Advanced-Configuration/Ground Effecf Compensation.md)
  * [重置参数](Advanced-Configuration/current-limiting-and-voltage-scaling.md)
  * [RC输入通道映射](Advanced-Configuration/rc input Channel mapping.md)
  * [RC输出映射](Advanced-Configuration/rc output Channel mapping.md)
  * [传感器位置补偿](Advanced-Configuration/full-parameter-list.md)
  * [传感器测试](Advanced-Configuration/parameter-reset.md)
  * [遥测或串口设置](Advanced-Configuration/Telemetry and serial settings.md)
  * [UBlox gps配置](Advanced-Configuration/ublox-gps.md)
  * [电子控制的低高度限制](Advanced-Configuration/fly-by-wire-low-altitude-limit.md)
  * [can总线设置](Advanced-Configuration/can.md)
  * [uavcan设置](Advanced-Configuration/uavcan.md)
* [任务规划](first-setup/connect/mission-planner/flight-plan.md)
  * [航点命令和事件](first-setup/connect/mission-planner/flight-plan/common-planning-a-mission-with-waypoints-and-events.md)
* [日志概述和分析](log/README.md)
  * [闪存日志分析](log/dataflash.md)
  * [诊断硬件问题](log/diagnosing-problems-using-logs.md)
  * [遥测日志分析](log/tlogs.md)
* [可选硬件](optional-hardware.md)
  * [数传遥测模块](optional-hardware/radio.md)
    * [数传连接CUAV  HFight](optional-hardware/radio/user guide/cuav-hfight.md)
    * [数传连接mp地面站](optional-hardware/radio/user guide/mission planner.md)
    * [xbee/xtend/sx数传](optional-hardware/radio/usb xbee.md)
      * [xbee/xtend调试](optional-hardware/radio/xbee Radio/xbeextend debug.md)
      * [点对点通信](optional-hardware/radio/xbee Radio/xbee/P2P.md)
      * [多点通信](optional-hardware/radio/xbee Radio/xbee/multi drop.md)
      * [修改波特率及ID](optional-hardware/radio/xbee Radio/xbee/alter baud rate and ID.md)
      * [xbee模块强制恢复固件](optional-hardware/radio/xbee Radio/xbee/restore default.md)
    * [3DR数传](javascript:;)
      * [3dr数传故障排除教程](optional-hardware/radio/3dr radio/3dr_radio_trouble_removal.md)
      * [3DR数传调试教程](optional-hardware/radio/3dr radio/3dr_debug.md)
      * [3dr数传使用教程](optional-hardware/radio/3dr radio/3dr_radio.md)
  * [数传图传一体链路](optional-hardware/link.md)
  * [模拟图传](optional-hardware/image-transmission.md)
  * [电压电流计](javascript:;)
    * [PM电源模块](optional-hardware/power-modules/power-modules.md)
    * [HV\_PM高电压电源模块](optional-hardware/power-modules/hv_pm.md)
  * [GPS定位系统](javascript:;)
    * [ublox gps模块](optional-hardware/gps/gps.md)
    * [rtk 差分gps](optional-hardware/gps/rtk.md)
  * [安全开关和蜂鸣器](optional-hardware/buzzer.md)
  * [PPM编码器](optional-hardware/ppm-encoder.md)
  * [继电器开关](optional-hardware/relay-switch.md)
  * [RSSI信号强度指示](optional-hardware/rssi.md)
  * [相机云台](Camera shutter and  gimbals/gimbals.md)
  * [CAN通信电调](optional-hardware/uavcan-escs.md)
  * [外置led](optional-hardware/external-led.md)
  * [空速计](optional-hardware/airspeed.md)
  * [降落伞](optional-hardware/parachute.md)
  * [OSD](optional-hardware/osd.md)
* [故障排除指南](troubleshooting.md)
* [SITL模拟器](simulation.md)




  





























 



























  

    