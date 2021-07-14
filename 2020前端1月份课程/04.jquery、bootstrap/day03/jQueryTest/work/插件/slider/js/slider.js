

/**
 * @Author 无趣
 * @Date 2019-07-22
 * @Email zxtgemail@gmail.com
 * @Language javascript
 * @Depend jQuery
 * @Version 1.0.0
 */


;(function ($) {
    "use strict";


    $.fn.extend({
        slider: function (config) {

            var conf = {
                // 是否活动
                active: false,
                // 按下的值
                mousedownEvent: {},
                // 滑块包裹层
                sliderRange: null,
                // 滑块按钮
                slider: null,
                // 滑块活动线
                sliderActive: null,
                // 滑块值显示
                sliderValue: null,
                // 滑块包裹层总宽
                sliderRangeWidth: 0,
                // 滑块按钮的一半宽度
                sliderHalfWidth: 0,
                // 最小值
                minValue: 0,
                // 最大值
                maxValue: 100,
                // 最大与最小的差
                diffValue: 0,
                // 初始值
                initValue: 0
            };

            conf = $.extend(conf,config);

            var self = this;

            self.html('<div class="slider-range">\n' +
                '        <span class="slider"></span>\n' +
                '        <span class="line"></span>\n' +
                '        <span class="active-line"></span>\n' +
                '        <span class="action-value">0</span>\n' +
                '    </div>');

            conf.sliderRange = self.find('.slider-range');
            conf.slider = conf.sliderRange.find('.slider');
            conf.mousedownEvent = {};
            conf.sliderActive = conf.sliderRange.find('.active-line');
            conf.sliderValue = conf.sliderRange.find('.action-value');
			conf.sliderRangeWidth = conf.sliderRange.find('.line').width();
            conf.sliderHalfWidth = conf.slider.outerWidth(true)/2;
            conf.diffValue = conf.maxValue - conf.minValue;
            conf.sliderValue.text(conf.minValue);

			console.log(conf.sliderRangeWidth)

            // 计算并显示显示值的初始位置
            conf.sliderValue.text(conf.minValue).css({
                left: parseInt(conf.slider.css('left')) - (conf.sliderValue.outerWidth(true)/2) + conf.sliderHalfWidth
            });

            // data-sliderValue设置初始值
            self.data('sliderValue',conf.minValue);

            // 设置滑块的初始值位置
            if (conf.initValue >= conf.minValue && conf.initValue <= conf.maxValue){

                // 计算出x的位置值
                var x = parseInt( (conf.initValue/conf.maxValue * conf.sliderRangeWidth - conf.sliderHalfWidth)*100) / 100;

                // 显示初始值并计算显示值的位置
                conf.sliderValue.text(conf.initValue).css({
                    left: x - (conf.sliderValue.outerWidth(true)/2) + conf.sliderHalfWidth
                });
                conf.sliderValue.text(conf.initValue);
                self.data('sliderValue',conf.initValue);

                conf.sliderActive.css({
                    width: x + conf.sliderHalfWidth
                });
                // 移动滑块
                conf.slider.css({
                    left: x
                });
            }

            // 监听按下事件
            conf.slider.bind('mousedown',function (e) {

                e.preventDefault();
                e.stopPropagation();
                // 告诉滑块已经被按下
                conf.active = true;
                conf.mousedownEvent.x = e.clientX;
                conf.mousedownEvent.y = e.clientY;
                conf.mousedownEvent.left = parseInt($(this).css('left'));
                conf.mousedownEvent.top = parseInt($(this).css('top'));

            });
            // 监听移动
            // 监听document防止鼠标移动过快而不执行函数
            $(document).bind('mousemove',function (ev) {
                // 没有被按下则不执行
                if(conf.active === false){
                    return conf.active;
                }

                // 计算x的位置
                var x = ev.clientX - conf.mousedownEvent.x + conf.mousedownEvent.left;
                // 判断是否小于滑块按钮一半的值
                if (x < -conf.sliderHalfWidth){
                    x = -conf.sliderHalfWidth;
                }
                // 判断是否大于总宽减去滑块一半的值
                if (x > conf.sliderRangeWidth - conf.sliderHalfWidth){
                    x = conf.sliderRangeWidth - conf.sliderHalfWidth;
                }

                // 一个长 1600的线上面有个圆，圆的位置在 300处，
                // 这时 这个圆所占是 300/1600 = 0.1875
                // 把这个线均分成 100 份
                // 最大值为100 最小值为 0
                // 差 = 最大值 - 最小值
                // 结果 = 0.1875 * 差(100)  = 18.75
                var value = parseInt( (
                    conf.minValue +
                    // 先计算出圆的最终位置值
                    ( x + conf.sliderHalfWidth)
                    // 最终位置值 除 总宽 得到这个位置站总宽的多少
                    / conf.sliderRangeWidth
                    // 再 乘差 乘100 除100 保留两位小数
                    * conf.diffValue
                )* 100)/100;

                // 判断结果是否小于最小值
                if (value < conf.minValue) {
                    value = conf.minValue;
                }

                // 判断结果是否大于最大值
                if (value > conf.maxValue){
                    value = conf.maxValue;
                }

                // 将值赋给data-sliderValue
                self.data('sliderValue',value);

                // 显示值并计算显示值的位置
                conf.sliderValue.text(value).css({
                    left: x - (conf.sliderValue.outerWidth(true)/2) + conf.sliderHalfWidth
                });

                conf.sliderActive.css({
                    width: x + conf.sliderHalfWidth
                });
                // 移动滑块
                conf.slider.css({
                    left: x
                });

            });

            // 监听松开
            // 赋值false即可，无需移除事件
            $(document).bind('mouseup',function () {
                conf.active = false;
            });

            return this;
        }
    });



})(window.jQuery);
