/**
 * 自定义模块1
 */


function myModule() {// Module模块
  var msg = 'mymodule1 msg';
  var num = 123;
  function doSomething() {
    console.log(msg);
  }
  
  function doOtherthing() {
    return msg;
  }
  
  return {doSomething: doSomething, doOtherthing: doOtherthing};
}