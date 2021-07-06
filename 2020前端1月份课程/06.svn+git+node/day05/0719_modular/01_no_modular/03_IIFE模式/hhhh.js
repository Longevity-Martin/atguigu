(function (w) {
    let data ='atguigu';

    function test() {
        console.log(data)
    }

    // $

    function test2() {
        console.log(data.toUpperCase())
    }

    let module1 = {test,test2};

    // w.modulel = modulel
    w.module1 = module1
})(window);