## CommonJS服务端模块化教程(Node.js模块化教程)
###1. 安装Node.js

###2. 创建项目结构
  ```
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
  |-app.js
  |-package.json
    {
      "name": "test-0719",
      "version": "1.0.0"
    }
  ```
###3. 模块化编码：
  * module1.js
    ```
    module.exports = {
      data:'module1',
      foo(){
        console.log('foo()------',this.data);
      },
      bar(){
        console.log('bar()------',this.data);
      }
    }
    ```
  * module2.js
    ```
    module.exports = function () {
      console.log('module2');
    }
    ```
  * module3.js
    ```
    exports.foo = function () {
      console.log('foo()  module3');
    }
    
    exports.bar = function () {
      console.log('bar()  module3');
    }
    ```
  * 下载第三方模块uniq：打开左下角的Terminal，cd到02_CommonJS-Node路径，输入命令：```npm install uniq```

  * app.js 
    ```
    let module1 = require('./modules/module1')
    let module2 = require('./modules/module2')
    let module3 = require('./modules/module3')
    let a = require('uniq')
    
    module1.foo()
    module1.bar()
    module2()
    module3.foo()
    module3.bar()
    
    let arr = [1,11,2,2,2,5,5,5,3,4,6,6,9,7,8]
    console.log(a(arr));
   
    ```
###4. 在node环境下运行app.js的两种方法(任选其一)：
  * 第一种方法：用命令启动: ```node app.js```
  * 第二种方法：用工具启动: 右键 --> Run 'xxxxx.js'