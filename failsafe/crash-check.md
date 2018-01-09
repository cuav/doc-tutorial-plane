## 碰撞/撞击 保护

---

目前软件已经内置了 碰撞/撞击 检测功能，在飞行器可能失控并撞击地面的情况下，该功能会自动将电机进行锁定，这减少了飞行器的损坏，并且降低对附近人员及财产二次伤害的可能性。

### 碰撞检查何时会将电机锁定：

当以下所有情况都超过2秒时：

1. 飞行器已经解锁
2. 飞行器没有着陆（as far as it can tell）
3. 当前飞行模式不是ACRO活着FLIP
4. 飞行器没有超过3CM/S的速度
5. 实际倾斜角已经偏离期望的倾斜角值超过30度

```
没有上螺旋桨的时候，解锁后 推油门打杆，也会导致触发碰撞检查保护：电机自动停止，飞行器锁定
```

### 当碰撞检查被激活的时候，会发生什么：

1. 飞控板自动上锁，马达停转
2. 在地面站消息提示“Crash: Disarming” 碰撞检查
3. 在日志会写入一个崩溃事件（EV  12 红色错误）

## 什么情况需要关闭它：

一般来讲，不建议用户关闭碰撞检查。

如果是特殊用途的用户：

用于牵引线的无人机、或者无人机滑雪等

![](/assets/crash_check_drone_boarding.png)

飞行器经常倾斜角超过30度误差维持1秒以上的情景，建议关闭碰撞检查，以免出现电机被自动停止导致的炸鸡。

## 如何关闭碰撞检查：

在地面站&gt;&gt;配置调试&gt;&gt;全部参数列表

找到：[FS\_CRASH\_CHECK](http://translate.googleusercontent.com/translate_c?depth=1&hl=zh-CN&ie=UTF8&prev=_t&rurl=translate.google.com.hk&sl=en&sp=nmt4&tl=zh-CN&u=http://ardupilot.org/copter/docs/parameters.html&usg=ALkJrhgVgwKJH6qq8u159P6nOmffozmCCA#fs-crash-check) 改为0禁用

本文英文参考：[http://ardupilot.org/copter/docs/crash\_check.html](http://ardupilot.org/copter/docs/crash_check.html)

