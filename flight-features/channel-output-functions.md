# 通道输出功能

---

所有伺服输出都可以映射到ArduPilot支持的任何功能。前4个通道的默认设置是Aileron，Elevator，Throttle和Rudder（通常称为AETR），但是您可以根据需要重新分配它们。

本页介绍如何配置这些输出通道以及每个可用功能是什么。

SERVOn\_FUNCTION参数

在GCS的高级参数视图中，您会发现每个SERVO输出通道都有一个SERVOn\_FUNCTION参数。例如，SERVO5\_FUNCTION控制通道5的输出功能，SERVO6\_FUNCTION控制通道6的输出功能等等。

您可以设置这些参数的值与飞行器和车固件共享，而不是所有这些参数都在固定翼飞机上实施。下面列出了在固定翼实施的那些：

Disabled=0

RCPassThru=1

Flap=2

Flap\_auto=3

Aileron=4

mount\_pan=6

mount\_tilt=7

mount\_roll=8

camera\_trigger=10

mount2\_pan=12

mount2\_tilt=13

mount2\_roll=14

DifferentialSpoilerLeft1=16

DifferentialSpoilerRight1=17

DifferentialSpoilerLeft2=86

DifferentialSpoilerRight2=87

Elevator=19

Rudder=21

FlaperonLeft=24

FlaperonRight=25

GroundSteering=26

ParachuteRelease=27

QuadPlaneMotor1=33

QuadPlaneMotor2=34

QuadPlaneMotor3=35

QuadPlaneMotor4=36

QuadPlaneMotor5=37

QuadPlaneMotor6=38

QuadPlaneMotor7=39

QuadPlaneMotor8=40

MotorTilt=41

RCPassThru1=51

RCPassThru2=52

RCPassThru3=53

RCPassThru4=54

RCPassThru5=55

RCPassThru6=56

RCPassThru7=57

RCPassThru8=58

RCPassThru9=59

RCPassThru10=60

RCPassThru11=61

RCPassThru12=62

RCPassThru13=63

RCPassThru14=64

RCPassThru15=65

RCPassThru16=66

Ignition=67

Starter=69

Throttle=70

ThrottleLeft=73

ThrottleRight=74

TiltMotorLeft=75

TiltMotorRight=76

ElevonLeft=77

ElevonRight=78

VTailLeft=79

VTailRight=80

前4个通道的默认值是副翼，升降，油门和舵。所有其他通道的默认值为0，意味着禁用。禁用通道将输出该通道的修正值（例如，如果SERVO5\_FUNCTION为0，则通道5将输出SERVO5\_TRIM），除非被任务命令覆盖。

所有这些功能都可以在多个通道上使用。因此，如果您因为某些原因需要3个电梯通道，则可以在3个输出通道上将SERVOn\_FUNCTION设置为19。



