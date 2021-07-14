/**
 * 自定义模块2
 */
(function myModule(w) {// Module模块
  var msg = 'mymodule1 msg';
  var num = 123;
  function doSomething() {
    console.log(msg);
  }
  
  function doOtherthing() {
    return msg;
  }
  
  
  w.myModuleObj2 = {
    doSomething:doSomething,
    doOtherthing: doOtherthing
  };
})(window)