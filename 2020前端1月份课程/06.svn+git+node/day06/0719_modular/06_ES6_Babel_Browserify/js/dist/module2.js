'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* module2，使用的是【统一暴露】
* */

//arr是私有数据，不去暴露
var arr = [1, 3, 5, 7, 9];

function demo2() {
  console.log('我是module2里的demo2函数', arr);
}

function test2() {
  console.log('我是module2里的test2函数', arr);
}

//统一暴露(精简版写法)
exports.demo2 = demo2;
exports.test2 = test2;

//统一暴露(完整版写法)
/*
export {
  demo2 as haha1, //暴露的同时可以，赋一个别名
  test2 as haha2
}*/