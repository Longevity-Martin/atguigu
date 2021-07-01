# Bootstrap

## 介绍

一个前端 UI 框架，由 twitter 公司开发，2013 年 7 月发布 1.0 版本

* 官方网址 <https://getbootstrap.com/>
* 中文站 <https://www.bootcss.com/> 

## 作用

快速开发响应式网页. 不适合针对设计稿， 仿站。

## 学习目标

1. 掌握 bootstrap 使用
2. 掌握 bootstrap 编程思想

## 版本选择

​	[    ] 2.x

​	[ √ ] 3.x

​	[    ] 4.x

## 注意

- <span style="color:red">不需要记住所有类名</span>
- <span style="color:red">多复制看效果</span>

## 配置

示例文件

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

## 功能

### 容器

.container                  

.container-fluid

### <span style="color:red">栅格系统</span>

栅格系统是 bootstrap 中非常重要的一个知识点，核心思想有以下几点

1. 将元素的宽度 12 等分
2. 将屏幕大小定义 4 种尺寸
   * xs   （extra small） 屏幕尺寸 < 768px
   * sm  （small）          屏幕尺寸 >= 768px
   * md （middle）       屏幕尺寸 >= 992px
   * lg    （large）           屏幕尺寸 >= 1200px
3. 列偏移
4. 列嵌套

### 排版

#### 内联文本标签

* s    中横线
* u   下划线
* b    加粗
* i     斜体

#### 对齐方式

* text-left  左对齐
* text-center 居中对齐
* text-right 向右对齐

#### 代码

* code 高亮显示代码
* kbd  高亮显示按键内容
* pre   原样输出内容

### 表格

* table-striped 隔行换色

* table-bordered 边框
* table-hover  悬浮换色
* table-condensed  紧凑型
* table-responsive  响应式表格

### 按钮

#### 情景

* btn-primary  首选
* btn-success  成功
* btn-warning  警告
* btn-danger   错误 / 危险
* btn-info         提醒

#### 尺寸

* btn-lg      超大
* btn-md   中等
* btn-sm    小型
* btn-xs      超小型

### 图片

* img-responsive 响应式显示 
* img-circle           圆形显示
* img-rounded     圆角显示
* img-thumbnail  缩略图形式显示

### 辅助类

* 文字颜色

  * text-primary
  * text-info
  * ...

* 背景颜色

  * bg-primary
  * bg-info
  * ...

* 浮动

  * pull-left
  * pull-right
  * center-block
  * clearfix

### 响应式类

* visible-*
* hidden-*



## 插件

scrollspy 滚动监听插件

```html
<style>
    /*第一步*/
    body {
        position: relative;
    }
    #navbar{
        background:#aab;
        position:fixed;
        left:100px;
        top:50px;
    }
</style>

<!-- 第二步 -->
<body data-spy="scroll" data-target="#navbar">
    <div id="navbar">
        <ul class="nav nav-tabs" role="tablist">
        	<li><a href="#AAAA">家电</a></li>
	        <li><a href="#BBBB">电子设备</a></li>
	        <li><a href="#CCCC">日常用品</a></li>
	        <li><a href="#DDDD">运动</a></li>
        </ul>
    </div>

    <ul class="list-unstyled">
    	<li id="AAAA"><img src="holder.js/100px500?text=家电" alt=""></li>
    	<li id="BBBB"><img src="holder.js/100px500?bg=#aef&text=电子设备" alt=""></li>
    	<li id="CCCC"><img src="holder.js/100px500?bg=#eea&text=日常用品" alt=""></li>
    	<li id="DDDD"><img src="holder.js/100px500?bg=#aab&text=运动" alt=""></li>
    </ul>
</body>
```



## 附录

### 屏幕阅读器

屏幕阅读器专门为一些有功能障碍的人设计,  <https://www.youtube.com/watch?v=dEbl5jvLKGQ>



### 让网页能够让所有人访问

1. 注册 GitHub 账号
2. 创建一个仓库
3. 名字是   username.github.io
4. 点击初始化的 readme.md
5. 创建一个文件  index.html  (服务器默认打开的文件)
6. 写入内容 ( 网页内容 )
7. 等待一会儿就可以访问  username.github.io   👌啦
