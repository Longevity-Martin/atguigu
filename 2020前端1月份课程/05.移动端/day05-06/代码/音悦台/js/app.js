//全局代码
(function(){
    //阻止默认行为
    app.addEventListener('touchstart', function(e){
        e.preventDefault();
    });

    //移动端适配
    //先获取屏幕宽
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
    }
}());

//头部的逻辑
(function(){
    var app = document.querySelector('#app');
    //点击按钮 显示隐藏菜单
    var menuBtn = document.querySelector('#header .up .menu');
    var zhezhao = document.querySelector('#header .zhezhao');
    //绑定事件
    menuBtn.addEventListener('touchstart', function(){
        //使按钮的状态改变
        this.classList.toggle('open');
        //使菜单的显示状态改变
        zhezhao.classList.toggle('open');
    });

    //input获得焦点
    var input = document.querySelector('#search');
    input.addEventListener('touchstart', function(e){
        e.stopPropagation();
    });

    //使input元素丧失焦点
    app.addEventListener('touchstart', function(e){
        //
        input.blur();
    });
}());

//导航区
(function(){
    var nav = document.querySelector('#nav');
    var wrap = nav.querySelector('.wrap')
    nav.addEventListener('touchstart', function(e){
        //获取起始点触点位置
        this.x = e.touches[0].clientX;
        //当前包裹元素的偏移量
        this.left = transformCSS(wrap, 'translateX');
    });

    nav.addEventListener('touchmove', function(e){
        this._x = e.touches[0].clientX;
        var newLeft = this._x - this.x + this.left;
        //设置修改
        transformCSS(wrap, 'translateX', newLeft);
    });
}());