# 自动起飞

---

固定翼飞机可以自动发射多种类型的飞机。下面的说明将教你如何设置你的任务来支持自动起飞。

### 基本说明

自动起飞的基本思想是自动驾驶仪将油门设置为最大，并爬升到指定的高度。要使飞机执行起飞，请将NAV\_TAKEOFF命令添加到您的任务中，通常作为第一个命令。这个命令有两个参数 - 最小俯仰角和起飞高度。最小俯仰控制飞机在起飞过程中以什么俯仰角地爬升。建议大多数飞机的值在10到15度之间。起飞高度控制起飞被认为完成的高于家中的高度。确保这个高度足以让飞机在起飞后安全地转弯。 40米的高度适合各种飞机。

在起飞过程中，机翼将保持在LEVEL\_ROLL\_LIMIT范围内内。这样可以防止急转弯造成机翼撞地面起飞的跑道。

请注意，起飞方向是从自动起飞命令开始时飞机所在的方向设置的。所以你需要把飞机指向正确的方向，然后切换到自动模式。在起飞的第一阶段，自动驾驶仪将使用陀螺仪作为保持飞机直行的主要机制。在达到良好的GPS航向足够的速度之后，飞机将切换到使用GPS地面轨道，这使得它能够考虑横风。

只要有可能，你应该尝试着迎风。

### 手抛发射

手抛发射是发射较小的飞机，如泡沫滑翔机的常用方法。飞机有许多参数来控制手的启动。如果您打算以自动模式启动您的飞机，请仔细查看这些选项。

一个很好的手抛发射的关键是：

如果螺旋桨在发动时落在手后面，那么确保电动机在您的手经过之前不会启动

控制手发射的主要参数是：

*  TKOFF\_THR\_MINACC

* TKOFF\_THR\_DELAY

* TKOFF\_THR\_MINSPD

* TECS\_PITCH\_MAX

当自动起飞任务命令开始时（通常通过切换到自动模式），自动驾驶仪以“油门抑制”模式启动。只有TKOFF\_THR\_参数设置的条件满足后，油门才会启动。

TKOFF\_THR\_MINACC参数控制油门将会结合飞机的最小前进加速度。前进的加速度来自你发射飞机的手臂投掷动作。您需要将此值设置得足够高，使得当您正常携带飞机时，电机不会自动启动，但又足够低，以便您可以通过正常的投掷动作可靠地触发加速。大多数飞机的价值大约15米/秒/秒。

TKOFF\_THR\_DELAY参数是延迟1/10秒的单位，以在达到最小加速度后阻止启动电机。这是为了确保在电机启动之前螺旋桨已经过了你的手。建议手动启动至少2秒（0.2秒）。

TKOFF\_THR\_MINSPD参数是电机启动前的最低地面速度（由GPS测量）。这是一个额外的安全措施，以确保在电机启动之前飞机已经脱离您的手。推荐使用4m / s的值。

请注意，如果您的飞机是“拖拉机”类型的电机在前面，那么您可能需要将TKOFF\_THR\_DELAY和TKOFF\_THR\_MINSPD设置为零，或使用较低的值。

您应该考虑的最后一个参数是TECS\_PITCH\_MAX参数。这将控制自动驾驶在自动飞行中要求的最大俯仰。设置为非零值时，将替换所有自动油门飞行模式的LIM\_PITCH\_MAX参数。将此参数设置为一个足够小的值以确保飞机能够在全油门时可靠爬升将使起飞更可靠。对于大多数飞机来说，设置成20就可以了。

### 弹射器发射

弹射器发射和手发射之间的主要区别在于，弹射器通常会给飞机提供更高的加速度，所涉及的风险主要是螺旋桨将撞击弹射框而不是击中你的手。

在大多数其他方面，弹射器的发射就像是手动发射，同样的4个关键参数也适用。如果您的弹射器设置为使得电机在飞机离开弹射器的框架之前不能运行，那么您将需要选择参数以确保有足够的延迟。通常这意味着TKOFF\_THR\_MINACC（比如说20m / s / s）的值更高，测量GPS地面速度之前的延迟更长。可能需要进行一些实验，但是TKOFF\_THR\_DELAY值为5很可能对许多弹射器有好处。

### 蹦极发射

一次蹦极式发射使用了一段长长的弹力来发射飞机。这可以是一个更便宜的替代弹射器，并为许多中小型号提供良好的结果。



适用于手动发射和弹射发射的4个参数也适用于蹦极发射，但是您需要的值是不同的。蹦极发射的主要风险（尤其是推进螺旋桨）的主要风险是螺旋桨将撞击蹦极绳，损坏螺旋桨或蹦极或两者。为了防止这种情况的发生，你应该有更高的TKOFF\_THR\_DELAY值，使得它在电机启动之前就已经松开了蹦极。 50左右的值（延迟5秒）可能是一个很好的起点。

## 跑道起飞（CTOL）

跑道起飞，也被称为轮式起飞或CTOL（常规起飞着陆）。从跑道上设置一个好的自动起飞比其他类型的发射要复杂一些，需要更多的参数设置和更多的调整。

跑道起飞的一个关键考虑因素是你是否有拖车（尾轮转向）或三轮车底盘（前轮转向）。三轮车起落架飞机的自动起飞更容易，尾部牵引机需要额外的参数。

跑道起飞的关键参数是：

TKOFF\_TDRAG\_ELEV

TKOFF\_TDRAG\_SPD1

TKOFF\_THR\_SLEW

TKOFF\_ROTATE\_SPD

TECS\_PITCH\_MAX

GROUND\_STEER\_ALT

除了这些参数之外，还需要调整地面转向，以便地面转向控制器能够可靠地转向飞机。参见设置地面转向的单独页面。作为这个调整的一部分，你需要设置GROUND\_STEER\_ALT参数。

前两个参数主要用于尾翼飞机，尽管它们也可以用来在起飞时保持三轮摩托车的前端。

TKOFF\_TDRAG\_ELEV参数用于在起飞初始阶段在跑道上牢牢抓住尾部牵引装置的尾部，以便在跑道上有足够的抓地力进行引导。对于尾部牵引机，这通常设置为100，这意味着在起飞的初始阶段，升降机100％起飞。对于三轮车底盘飞机，需要在鼻子上额外增加一点重量才能获得良好的转向，可能会发现-20（意味着降低20％）值可能会有所帮助。

当起飞开始时，自动驾驶仪将使用TKOFF\_TDRAG\_ELEV电梯（按百分比），直到飞机达到每秒TKOFF\_TDRAG\_SPD1米的速度。您需要将TKOFF\_TDRAG\_SPD1设置为低于起飞速度的速度，但高于飞机能够使用其方向舵转向的速度。当飞机到达TKOFF\_TDRAG\_SPD1时，它将释放升降舵，而是使用正常的飞行俯仰控制器来尝试保持俯仰水平。这将有一个拖尾飞机尾巴抬高的效果。

TKOFF\_ROTATE\_SPD参数控制自动驾驶仪何时试图抬起机头（俯仰）离开地面。这需要是飞机能够爬升的速度，所以它应该比飞机失速速度高出至少2米，最好是更高。较高的值将意味着更长的起飞时间（因此需要更多的跑道）。

TKOFF\_THR\_SLEW参数控制起飞过程中的油门摆动速率（以每秒百分比为单位）。这是用来让油门以适合您飞机的速度升高。这应该有多高取决于飞机的类型。地面起飞通常是一个好主意，可以限制油门斜度的上升速度，以防止来自电机的扭矩导致大的转向变化。值为20（意味着每秒20％的节气门变化）对于许多尾部牵引器是好的。三轮车起落架飞机可能能够处理较大的油门转速。

与其他类型的起飞一样，TECS\_PITCH\_MAX参数控制着起飞时所用的最大桨距。确保这是限制在一个价值，飞机可以使用爬满油门快速。大约20度的值适用于多种飞机。

### 在FBWA模式下测试地面起飞

使用FBWA飞行模式测试起飞代码有时很有用。这样做的方法是将FBWA\_TDRAG\_CHAN参数设置为发送器上的RC输入通道（通常是一个瞬时开关，如教练开关）。当您在跑道上等待FBWA模式起飞时，此RC通道变高，自动导航将检查您是否配置了TKOFF\_TDRAG\_ELEV和TKOFF\_TDRAG\_SPD1参数。如果它们被设置为非零值，则电梯将在FBWA中以与它是如何控制AUTO自动起飞相同的方式进行控制。一旦该RC通道升高，电梯将转到TKOFF\_TDRAG\_ELEV值（通常为尾部拖车的100％），并且将停留在那里，直到飞机达到每秒TKOFF\_TDRAG\_SPD1米的地面速度。

这为在FBWA模式下测试自动起飞提供了一个方便的方法，也是一种在FBWA模式下获得更好的地面转向的好方法。



