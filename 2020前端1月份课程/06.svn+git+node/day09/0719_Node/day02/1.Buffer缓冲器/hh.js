// let buf = new Buffer(5);
// console.log(buf);

// let buf2  = Buffer.alloc(6);
// console.log(buf2);
//
// let buf3 =Buffer.allocUnsafe(10)
// console.log(buf3);
//
// let buf4 = Buffer.from('hello atguigu')
// console.log(buf4.toString())

let fs = require('fs');

fs.writeFile(__dirname+'/demo.txt','kobe,123',{mode:0o666,flag:'a'},err=>{
    if(err) console.log('文件写入失败',err)
    else console.log('文件写入成功')
})