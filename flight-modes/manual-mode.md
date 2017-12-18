# 手动模式

---

RC直接控制飞行器，飞控不做控制信号处理，所有的rc 输入信号直接传送到输出端。除以下情况外：

* 触发了故障保护或地理围栏，并且飞控接管飞行器。
* 如果启动VTAIL\_OUTPUT选项，那么固件VTAIL混合器被应用在输出上。
* 如果启用ELEVON\_OUTPUT选项，则在输出端应用固件Elevon混合器


