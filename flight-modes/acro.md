# Acro 特技模式

---

能像手动模式做出特技，且又同FBWB能够定高。做出翻滚及螺旋依赖ACRO\_ROLL\_RATE及ACRO\_PITCH\_RATE, 默认值是180度/

秒，并响应着摇杆行程量。飞机会一直保持高度，如果RC输入30度的侧倾及10度的纵倾后放开摇杆，飞机就保持在这个高度上，即便是倒飞的状态下。

所以这个模式很容易失速，需要及时切换到手动模式。
