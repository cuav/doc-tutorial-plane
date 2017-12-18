### PixHack飞控板设备接线定义 {#pixhack飞控板设备接线定义}

---

### 电机电调安装序号 {#电机电调安装序号}

---

每种飞行器的电动机顺序 \(里边的数字对应的**飞控板的PWM输出端口**\)

CW 顺时针螺旋桨，绿色图示

CCW逆时针螺旋桨 ，蓝色图示

**注意：错误的接线和固件，都会导致起飞就翻车，或者严重往一边倾斜，需要谨慎安装和选择固件**

![](http://doc.cuav.net/PixHack/assets/MOTORS_CW_CCWLegend.png)

#### 四轴飞行器： {#四轴飞行器：}

![](http://doc.cuav.net/PixHack/assets/MOTORS_QuadX_QuadPlus.png)

这种H型机架，应该配置X型模式![](http://doc.cuav.net/PixHack/assets/MOTORS_Quad_Hb.png)

![](http://doc.cuav.net/PixHack/assets/connect-escs-and-motors.png)

#### X8轴飞行器： OCTA QUAD {#x8轴飞行器：-octa-quad}

![](http://doc.cuav.net/PixHack/assets/MOTORS_X8.png)

### Tricopter: {#tricopter}

![](http://doc.cuav.net/PixHack/assets/MOTORS_Tri.png)

```
如果7号通道舵机控制反了，应该设置
RC7_REV or MOT_YAW_SV_REV 参数为-1 (默认应该是1)
```



