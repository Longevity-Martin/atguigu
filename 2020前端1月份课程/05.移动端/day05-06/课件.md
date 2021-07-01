## left 与 translateX 的差异

![timeline-frames-macbook1](assets/timeline-frames-macbook1.png)

​    左上方的图片是通过改变元素top/left进行动画的帧率，而右上方则是调用translate函数的帧率。我们可以明显看出左图的每一帧都执行了相对较长时间的paint，在每一帧内，cpu都需要计算该元素的其他样式，特别是相对需要复杂计算的盒阴影，渐变，圆角等样式，最后都需要将这些样式应用到该元素内。从这个角度看，如果对于较为老旧的移动设备进行相对复杂的动画，那么效果肯定不理想。

​    而通过调用 translate，会启动硬件加速，即在 GPU 层对该元素进行渲染。这样，CPU 就会相对解放出来进行其他的计算，GPU 对样式的计算相对较快，且保证较大的帧率。我们可以通过 2d 和 3d 的 transform 来启用 GPU 计算。