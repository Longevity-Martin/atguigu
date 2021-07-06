/*
* 第一种暴露方式：module.exports = value
* */


module.exports = {
  data:'atguigu',

  test () {
    console.log(this.data)
  }
}