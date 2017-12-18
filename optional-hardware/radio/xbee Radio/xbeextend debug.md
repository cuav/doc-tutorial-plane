## xbee/xtend/sx 数传调试 {#xbeextendsx-数传调试}

---

xbee/xtend/sx调试需要用到xtcu软件，其中包括新版xtcu以及旧版xtcu软件。

###### 注：无非必要切勿修改参数，如两端参数不一致是无法配对使用的，修改参数存在模块变砖的风险。 {#注：无非必要切勿修改参数，如两端参数不一致是无法配对使用的，修改参数存在模块变砖的风险。}

下面就给大家简单讲解一下用xtcu如何调试xbee/xtend/sx（以xbee为例）

## 旧版xtcu使用教程 {#旧版xtcu使用教程}

### 一.读取模块固件信息（一般正常的模块可以读取成功，故障模块无法读取） {#一读取模块固件信息（一般正常的模块可以读取成功，故障模块无法读取）}

1.通过ttl小板及其连接线将xbee与电脑连接（xbee usb端可以直接插usb线；也可以自制一条ttl小板与xbee连接线，需要注意两段rx与tx需要交叉接）

![](http://doc.cuav.net/PixHack/assets/xbee8.jpg)

2.打开xtcu软件,弹出如下提示点击确定。

![](http://doc.cuav.net/PixHack/assets/jiu1.jpg)![](http://doc.cuav.net/PixHack/assets/JIU2.jpg)

3.选择对应的com口及波特率（出厂默认波特率为57600，com口可以在设备管理器上查看），点击test按钮，弹出如图显示通信状态、模块版本、固件版本、串口代码等信息为正常，不能读取请检查硬件连接以及模块。

![](http://doc.cuav.net/PixHack/assets/jiu3.jpg)![](http://doc.cuav.net/PixHack/assets/JIU4.jpg)

## 二.读取全部参数 {#二读取全部参数}

1.硬件连接好之后，切换到modem configuration界面，点击resd按键

![](http://doc.cuav.net/PixHack/assets/JIU5.jpg)

读取成功后的显示：

![](http://doc.cuav.net/PixHack/assets/jiu6.jpg)

注释：1.模块型号

```
               2.固件类型及固件大小

               3.固件版本号

               4.上下滚动条

               5.参数显示区

```

旧版xtcu读取如出现固件信息读取正常，但读取全部参数失败，请把软件文件全部清除重新下载。

### 三.修改参数 {#三修改参数}

点击在读取全部参数表之后，查找到需要修改的参数，并设置成想要的参数，点击write即写入到模块。

### 四.通信测试 {#四通信测试}

1.把xbee数传连接到电脑，打开两个xtcu窗口分别设置对应com及波特率。（两端相对10cm左右）

![](http://doc.cuav.net/PixHack/assets/JIU7.jpg)

![](http://doc.cuav.net/PixHack/assets/jiu8.jpg)

2.切换到rang test界面，快速连续点击两端start按键，看右边信号强度条形图，如可达90%以上且下面错误提示不会出现或不会增多则为正常。如不正常请检查两端参数是否一致，模块参数读取是否正常.

![](http://doc.cuav.net/PixHack/assets/JIU9.jpg)

## 新版xtcu软件使用教程 {#新版xtcu软件使用教程}

1.连接好硬件之后，打开新版xtcu软件,点击添加数传图标，在弹出的窗口选择com口及波特率，点击finish。

![](http://doc.cuav.net/PixHack/assets/XIN1.jpg)

![](http://doc.cuav.net/PixHack/assets/XIN2.jpg)2.点击下图红色框处即可以打开全部参数表，修改参数后点击write键即把参数更新到修改后的参数。![](http://doc.cuav.net/PixHack/assets/xin3.jpg)

