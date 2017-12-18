# 常见机身配置值

---

---

这个页面为普通的机身提供了一些近似的配置值。

注意

这些值足以“让你的飞机离开地面”。 为获得最佳性能，您仍然需要为您的飞机调整这些参数。

## 配置值 - 不是完整的文件

我们不提供完整的配置文件，因为我们不想鼓励在APM用户之间共享完整的配置文件。

正确的调整值取决于你已经安装了什么类型的伺服（不同的伺服系统响应不同的速度），你连接控制器伺服哪个接口

正确的值也取决于您的RC发射器设置，特别是每个控制轴的移动范围

正确的调谐值还取决于您安装的电机和电池，并且取决于您的飞机的总起飞重量。如果一个用户安装了摄像头，而另一个用户则不需要，那么他们可能需要不同的调整值。

制造商通常会对机身，伺服电机和电机进行更改，而不会将机身重新命名为新的机型。有时甚至会改变舵机移动的方向

不同的用户有不同的可选传感器，这会改变需要的配置选项。例如，一些用户安装空速传感器或外部指南针。

新的APM固件版本会频繁更改某些关键参数的默认值，以避免用户发现问题。如果您从旧固件的用户加载配置文件，那么这将恢复这些更改

## 所以，你可以做什么？

如果另一个用户已经调整了类似的飞机，那么你可以查看他们的配置文件，找到他们使用的关键调整参数，并手动将这些值放入APM作为调整的起点。你应该寻找的关键参数是：

* RLL2SRV\_P

* PTCH2SRV\_P
* NAVL1\_PERIOD

将这些设置为大致正确的值将为您调整机身提供合理的起点。之后，你应该遵循调整指南。

另请注意，固定翼参数默认为零“I”值。原因是你需要先调整P值，然后调整I值。如果在P值较大的情况下输入一个非零的I值，那么飞机可能会发生剧烈震荡并可能发生碰撞。

一旦你有良好的P值，那么你应该提高I值一点，如调整指南中所述。这将允许APM更好地处理风。例如，一旦P值设置正确，设置以下内容将对大多数飞机有所帮助：

RLL2SRV\_I：0.05

PTCH2SRV\_I：0.05

### HobbyKing Bixler v1或v2

Bixler v2有一个稍大的机翼和更坚固的机身。

[![](http://ardupilot.org/plane/_images/BIXLERMODE21654232.jpg "../\_images/BIXLERMODE21654232.jpg")](http://ardupilot.org/plane/_images/BIXLERMODE21654232.jpg)

### 关键参数

* RLL2SRV\_P：0.9

* PTCH2SRV\_P：1.0

* NAVL1\_PERIOD：18

### Bixler Tips

See[this posting](http://diydrones.com/profiles/blogs/mounting-an-apm-on-a-bixler2-upside-down-using-ahrs-orientation)for how to fit an APM to a Bixler2. Also see[High Quality Bixler 1.1 Build \(APM2.x\)](http://ardupilot.org/plane/docs/a-high-quality-bixler-1-1-build.html#a-high-quality-bixler-1-1-build).

1. Heavy Bixler’s fly much faster and are prone to tip stalling if slowed up too much, so keep things as light as possible! A stall in FBWA can be tricky to get out of. Autopilots do not handle stalls well.
2. Set manual level with a little bit of positive pitch - take your time to set this, fly and repeat as many times as it takes to get a super stable cruising speed with the lowest throttle setting possible. It takes a little while to work out what pitch and throttle combination give the most stable cruising flight. Set closer to 50% throttle for cruise \(but obviously depends on your set up\).
3. Perform some test flights in FBWA mode and figure out minimum throttle setting /speed that is still stable. You can “feel” a tip stall coming with enough practice. To recover from the stall, change quickly to Manual mode and then: wings level and pull out slowly. Test with enough height to see how fast the plane needs to be going in each mode. Also be sure to always add sufficient throttle when heading downwind to keep airspeed up.
4. If you prefer to keep the airframe flat you can, in FBWA mode, use only rudder for turning. APM does a great job of keeping the the plane level in turns \(with proper speed of course\).
5. Make sure that target throttle in full autopilot mode is 10% above throttle settings that were figured out using methods above for mission cruising.
6. If setting a target speed in auto make sure it’s fast enough for the plane and its payload.

## Skywalker

[![](http://ardupilot.org/plane/_images/SKYWALKER2.jpg "../\_images/SKYWALKER2.jpg")](http://ardupilot.org/plane/_images/SKYWALKER2.jpg)

Skywalker

Available in[foam](http://www.fpvflying.com/products/Skywalker-platform-for-UAV-FPV.html)or[fibreglass](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=15236). Current versions have longer wings \(1.9m instead of 1.68m\).

The skywalker has relatively small ailerons for the size of the aircraft, so you will probably need quite high gains. The following parameters will be a good starting point for most users:

* RLL2SRV\_P: 1.8
* PTCH2SRV\_P: 1.5
* NAVL1\_PERIOD: 20

## HobbyKing Skyfun

[![](http://ardupilot.org/plane/_images/skyfun2.jpg "../\_images/skyfun2.jpg")](http://ardupilot.org/plane/_images/skyfun2.jpg)

Skyfun

Available[here](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=9614)

The SkyFun and FunJet are similar, and are quite “twitchy” planes. A small amount of elevon movement goes a long way! The following values should be a good starting point:

* RLL2SRV\_P: 0.4
* PTCH2SRV\_P: 0.45
* NAVL1\_PERIOD: 17

## Multiplex EasyStar

[![](http://ardupilot.org/plane/_images/easystar2.jpg "../\_images/easystar2.jpg")](http://ardupilot.org/plane/_images/easystar2.jpg)

Easystar

Available[here](http://www3.towerhobbies.com/cgi-bin/wti0001p?&I=LXFRU7&P=ML)

The easystar is unusual in not having ailerons. If you are buying a new plane it would be better to get a bixler2, which is a similar size and cost, but flies a lot better.

If you do want to fly an easystar then you will need to set a KFF\_RDDRMIX, along with the other key parameters. For example:

* RLL2SRV\_P: 0.55
* PTCH2SRV\_P: 0.6
* KFF\_RDDRMIX: 0.5
* NAVL1\_PERIOD: 20

## Borojet Maja

[![](http://ardupilot.org/plane/_images/maja2.jpg "../\_images/maja2.jpg")](http://ardupilot.org/plane/_images/maja2.jpg)

Borojet Maja

Available[here](http://bormatec.com/index.php/prod-engl-men/blog-2-columns).

The following parameters should be a good starting point:

* RLL2SRV\_P: 1.4
* PTCH2SRV\_P: 1.3
* NAVL1\_PERIOD: 16

## TELINK Toro900 flying wing

[![](http://ardupilot.org/plane/_images/toto9002.jpg "../\_images/toto9002.jpg")](http://ardupilot.org/plane/_images/toto9002.jpg)

The following values should be a good starting point:

* RLL2SRV\_P: 1.2
* PTCH2SRV\_P: 2
* NAVL1\_PERIOD: 18

## SkyWalker X8

[![](http://ardupilot.org/plane/_images/X8.jpg "../\_images/X8.jpg")](http://ardupilot.org/plane/_images/X8.jpg)

The X8 varies a lot in how people set it up, but you usually need parameters around this range:

* RLL2SRV\_P: 0.8
* PTCH2SRV\_P: 0.5
* NAVL1\_PERIOD: 19

## Phoenix Tiger60

[![](http://photos.tridgell.net/d/55232-2/PHOTO_20130319_100703.jpg "http://photos.tridgell.net/d/55232-2/PHOTO\_20130319\_100703.jpg")](http://ardupilot.org/plane/_images/PHOTO_20130319_100703.jpg)

The Tiger60 is usually flown as a nitro plane, plus it has relatively small ailerons and elevator surfaces. A good starting point will be the following parameters:

* RLL2SRV\_P: 1.2
* PTCH2SRV\_P: 1.2
* NAVL1\_PERIOD: 15
* THR\_PASS\_STAB: 1
* THR\_SUPP\_MAN: 1
* THR\_SLEWRATE: 30

## HotDog

[![](http://photos.tridgell.net/d/54579-2/IMG_20121126_080740.jpg "http://photos.tridgell.net/d/54579-2/IMG\_20121126\_080740.jpg")](http://ardupilot.org/plane/_images/IMG_20121126_080740.jpg)

The HotDog is a fun sports plane that flies like it is “on rails”. The one in the picture has an OS25 Nitro engine. It flies well with the following parameters:

* RLL2SRV\_P: 0.35
* PTCH2SRV\_P: 0.6
* NAVL1\_PERIOD: 14
* THR\_PASS\_STAB: 1
* THR\_SUPP\_MAN: 1
* THR\_SLEWRATE: 30

## Boomerang 60

[![](http://ardupilot.org/plane/_images/Boomerang60.jpg "../\_images/Boomerang60.jpg")](http://ardupilot.org/plane/_images/Boomerang60.jpg)

The Boomerang is a classic high wing trainer aircraft, and like the Tiger60 has relatively small control surfaces. The following parameters will be a good starting point:

* RLL2SRV\_P: 1.1
* PTCH2SRV\_P: 1.2
* NAVL1\_PERIOD: 20
* THR\_PASS\_STAB: 1
* THR\_SUPP\_MAN: 1
* THR\_SLEWRATE: 30

## Mugin

[![](https://c5.staticflickr.com/9/8036/7930561924_7392ff0913_z.jpg "https://c5.staticflickr.com/9/8036/7930561924\_7392ff0913\_z.jpg")](https://c5.staticflickr.com/9/8036/7930561924_7392ff0913_z.jpg)

The Mugin is a large, fast aircraft. Make sure you have a long enough runway for landing!

The following parameters should be a good starting point:

* RLL2SRV\_P: 1.0
* PTCH2SRV\_P: 1.3
* NAVL1\_PERIOD: 19
* THR\_PASS\_STAB: 1
* THR\_SUPP\_MAN: 1
* THR\_SLEWRATE: 30

## PA Addiction

[![](http://photos.tridgell.net/d/55220-2/PHOTO_20130309_212952.jpg "http://photos.tridgell.net/d/55220-2/PHOTO\_20130309\_212952.jpg")](http://photos.tridgell.net/d/55220-2/PHOTO_20130309_212952.jpg)

The Precision Aerobatics AddictionX is a fun 3D aircraft. It flies quite slowly, but can do extremely rapid rolls and loops due to its huge control surfaces. The APM flies it fine with the right parameters. The following parameters will be a good start:

* RLL2SRV\_P: 0.35
* PTCH2SRV\_P: 0.6
* PTCH2SRV\_D: 0.04
* NAVL1\_PERIOD: 13

## RipMax AcroWot

[![](http://ardupilot.org/plane/_images/AcroWot.jpg "../\_images/AcroWot.jpg")](http://ardupilot.org/plane/_images/AcroWot.jpg)

The AcroWot is an intermediate nitro sports plane, and a lot of fun to fly! With an OS55AX motor it flies well with the following parameters:

* RLL2SRV\_P 1.0
* PTCH2SRV\_P: 0.9
* NAVL1\_PERIOD: 13
* TRIM\_THROTTLE: 35

## TechPod

[![](http://ardupilot.org/plane/_images/techpod.jpg "../\_images/techpod.jpg")](http://ardupilot.org/plane/_images/techpod.jpg)

The TechPod is a long endurance electric glider, ideal for longer distance photography.

It flies well with the following parameters:

* RLL2SRV\_P: 1.5
* PTCH2SRV\_P: 1.5
* NAVL1\_PERIOD: 17
* ARSPD\_FBW\_MIN: 9
* ARSPD\_FBW\_MAX: 20
* TRIM\_AIRSPEED\_CM: 1200



