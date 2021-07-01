## Less 复习

1. 变量
   - 变量选择器
   - 变量拼接
   - 变量运算
2. 嵌套
3. 媒体查询
4. 混入 (好比是函数)
   - 基本混入
   - 条件混入
   - 参数混入
   - 输出带选择器的样式
   - 嵌套混入

### webstorm 配置 less 解析

1. 关闭 webstorm 
2. 下载安装 nodejs 。下载地址 http://nodejs.cn/download/
3. 命令行下安装 lessc

```shell
npm install less -g
```

4. 启动 webstorm ，配置文件监控

```
ctrl + alt + s 打开设置  ->  搜索 watcher -> 点击右上角 + 号 -> 选择 less -> 确定👌
```

5. 创建 less 文件，就会自动生成 css 文件