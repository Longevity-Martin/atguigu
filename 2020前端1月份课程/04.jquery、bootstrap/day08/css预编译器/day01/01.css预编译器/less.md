###less
	less是一种动态样式语言，属于css预处理器的范畴，它扩展了 CSS 语言，
	增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展
	LESS 既可以在 客户端 上运行 ，也可以借助Node.js在服务端运行。
 
	less的中文官网：http://lesscss.cn/

###less初次使用：
   		1.定义变量（@zero:0）并运用，凡是页面中使用0，都用@zero代替;
   		2.子元素需要放在父元素中，此时子元素可以放心使用class，因为他已经有前提条件是父元素
   			不用再继续担心对同名class值样式的影响
   		3.<style type="text/less"> style标签的类型需要改成less
   		4.根据官网我们需要一个less编译的	less.js 文件，并在最下方引入，
   			因为需要读取页面中所有less相关的文件，才可以进行编译

   	less --- 支持原生js,node
   	sass --- ruby环境
   	stylus --- node -- 开发项目中我们使用stylus
 
###Less编译工具
	koala 官网:www.koala-app.com 
	
###less中的注释
   	以//开头的注释，不会被编译到css文件中
   	以/**/包裹的注释会被编译到css文件中  
	
###less中的变量
	使用@来申明一个变量：@pink：pink;
	1.作为普通属性值只来使用：直接使用@pink
	2.作为选择器和属性名：#@{selector的值}的选择器形式, @{selector的值}属性名
	3.作为URL：@url
	4.变量的延迟加载

	@var: 0;
    .class {
    @var: 1;
        .brass {
          @var: 2;
          three: @var;
          @var: 3;
        }
      one: @var;
    }

###less中的嵌套规则
	1.基本嵌套规则
	2.&的使用

###less加减乘除运算


###less中的混合 Mixin
	混合就是将一系列属性从一个规则集引入到另一个规则集的方式
	1.普通混合
	2.带参数的混合
	3.带参数并且有默认值的混合
	4.带多个参数的混合

	
		     