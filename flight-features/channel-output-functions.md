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

###### DISabled

对于正常操作，禁用输出功能将通道的输出值设置为修整值。此例外是使用通道或任务伺服组的MAVLink覆盖。所以在某些方面“残禁用”可以被称为“任务控制”。

当你执行一个飞行任务时，你可以要求一个伺服作为该任务的一部分设置一个值。在这种情况下，您应该将该通道的SERVOn\_FUNCTION设置为“已禁用”，以便在任务设置值后，该值不会被另一个输出功能立即更改。

###### RCPassThru

将通道设置为RCPassThru意味着将从相应的输入通道输出进入板子的值。例如，如果SERVO5\_FUNCTION是1（意思是RCPassThru），那么通道5的输出总是等于通道5的输入。

您还可以使用特定的频道映射功能将单个频道映射到任何输出频道。对于RCInputChannel1，它们从值51开始编号。例如，您可以设置SERVO11\_FUNCTION = 53，将RC输入通道3映射到输出通道11。

###### flap

当通道设置为襟翼时，其值来自襟翼输入通道（由FLAP\_IN\_CHANNEL参数控制）。您可能想要使用此功能而不是RCPassThru的原因是，您可以设置具有不同修剪和范围的多个翻板通道，并且您可能需要利用FLAP\_SLEWRATE来限制翻盖移动的速度。

###### Flap\_auto

襟翼自动输出功能的行为就像翻板输出，除了它也可以接受来自TKOFF\_FLAP\_PCNT和LAND\_FLAP\_PERCNT参数的自动襟翼输出，以及FLAP\_1\_SPEED，FLAP\_1\_PERCNT，FLAP\_2\_SPEED和FLAP\_2\_PERCNT参数。

如果同时设置了FLAP\_IN\_CHANNEL和Flap\_auto输出功能，则应用的襟翼量是两者中较大的一个。

Aileron

Aileron输出功能增加了额外的副翼输出，单独的每个通道的微调和范围。当你想单独调整每个副翼，或者如果你的主副翼被设置为高音调音台（使用ELEVON\_OUTPUT选项），并且你还想要一些正常的副翼，这是非常有用的。

Mount\_pan，Mount\_tilt和Mount\_roll

这些控制用于控制伺服万向节的输出通道。有关详细信息，请参阅相机云台配置文档。

Mount2\_pan，Mount2\_tilt和Mount2\_roll选项是相同的，但控制第二台相机云台

Camera\_trigger

Camera\_trigger输出功能用于通过伺服触发摄像机。有关详细信息，请参阅相机万向节文档。

Elevator

Elevator功能增加了额外的电梯输出，具有单独的每通道调整和范围。如果要分别修剪每个电梯，或者如果将主电梯设置为Elevon调音台（使用ELEVON\_OUTPUT选项），并且还想要一些正常的电梯，则此功能非常有用。

Rudder

Rudder输出功能增加了额外的方向舵输出，单独的每个通道的微调和范围。单独的方向舵通道对于前轮转向特别有用，其中与正常方向舵通道或多轮平面相比，前轮可能需要颠倒。

GroundSteering

GroundSteering输出功能非常像方向舵输出功能，除了只在飞机低于GROUND\_STEER\_ALT高度时才起作用。在GROUND\_STEER\_ALT之上的海拔高度，输出将是通道的修正值。

Flaperon1和Flaperon2

使用flaperon1和flaperon2输出功能，您可以设置襟副翼，副翼是双副翼。对于有副翼但没有襟翼的飞机，它们非常有用。

请注意，襟副翼就像上面所描述的Flap\_auto输出的襟翼部分一样。



