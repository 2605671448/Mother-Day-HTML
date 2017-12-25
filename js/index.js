/**
 * 1715
 */
$(document).ready(function($) {

    $('#home').css('opacity', 1);

    /*下拉箭头点击滑动事件注册开始*/
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
    /*下拉箭头点击滑动事件注册结束*/

    /*导航条点击滑动事件注册开始*/
    $('.goA').click(function(){
        var top = $(this.hash).offset().top;
        console.log(this);
        if($(this).attr('href').indexOf('welcome') != -1){
            $('html,body').animate({
                scrollTop:top
            }, 800);
        }else{
            $('html,body').animate({
                scrollTop:top - $('#cbp-spmenu-s1').height()
            }, 800);
        }

        return false;
    })
    /*导航条点击滑动事件注册结束*/

    /*悬浮球开始*/
    var nextIndex = 1;
    $('#goBelow').click(function(){
        switch (nextIndex){
            case 1:
                $(this).attr('href', '#welcome');
                break;
            case 2:
                $(this).attr('href', '#abt');
                break;
            case 3:
                $(this).attr('href', '#services');
                break;
            case 4:
                $(this).attr('href', '#future');
                break;
            case 5:
                $(this).attr('href', '#footer');
                break;
        }
        console.log($(this.hash).offset().top);
        var top = $(this.hash).offset().top;
        if(!$('html,body').is(':animated')){
            $('html,body').animate({
                scrollTop:top
            }, 800);
            nextIndex ++;
        }
        return false;
    })
    /*悬浮球结束*/

    $(window).scroll(function(){
        /*  +1防失效   */
        var nowScrollTop = $(window).scrollTop() + 1;

        var welcomeTop = $('#welcome').offset().top;
        var abtTop = $('#abt').offset().top;
        var servicesTop = $('#services').offset().top;
        var futureTop = $('#future').offset().top;
        var footerTop = $('#footer').offset().top;

        var sTop = document.body.scrollTop || document.documentElement.scrollTop;
        var clientH = document.documentElement.clientHeight;
        var scrollH = document.body.scrollHeight;

        if(nowScrollTop < welcomeTop){
            nextIndex = 1;
            $('#goBelow').css('opacity', 1);
        }else if(nowScrollTop >= welcomeTop && nowScrollTop < abtTop){
            nextIndex = 2;
            $('#goBelow').css('opacity', 1);
        }else if(nowScrollTop >= abtTop && nowScrollTop < servicesTop){
            nextIndex = 3;
            $('#goBelow').css('opacity', 1);
        }else if(nowScrollTop >= servicesTop && nowScrollTop < futureTop){
            nextIndex = 4;
            $('#goBelow').css('opacity', 1);
        }else if(nowScrollTop >= futureTop && nowScrollTop < footerTop){
            nextIndex = 5;
            $('#goBelow').css('opacity', 1);
        }
        if(scrollH == sTop + clientH){
            $('#goBelow').css('opacity', 0);
        }

    })

    $(window).resize(function(){
        var windWidth = $(window).width();
        var winHeight = $(window).height();
        console.log(windWidth + ' X ' + winHeight);
        //PC端
        if(windWidth > 760){
            /*nicescroll滚动条初始化开始*/
            $('#nicescroll-body').niceScroll({
                cursorcolor: "black",//滚动条的颜色
                cursoropacitymax: 0.5, //滚动条的透明度，从0-1
                touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
                spacebarenabled:true, //允许使用空格键滚动
                cursorwidth: "8px", //滚动条的宽度
                cursorborder: "0", // 游标边框css定义
                cursorborderradius: "4px",//以像素为光标边界半径  圆角
                autohidemode: true, //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条
                zindex:"auto",//给滚动条设置z-index值
                railpadding: { top:0, right:0, left:0, bottom:0 }//滚动条的位置
            });
            /*nicescroll滚动条初始化结束*/
            $('#home').height(winHeight);

            $('#goBelow').css('display', 'block');
        }else{
            //非PC端悬浮球隐藏
            $('#goBelow').css('display', 'none');
        }
        $('#nicescroll-body').niceScroll().resize();
    })
    $(window).resize();


    /*弹幕配置*/

    //加载JSON文件	需要服务器环境
//			var jsonFromFile;
//			$.getJSON("json/pop.json", function(data){
//                jsonFromFile = eval('(' + data + ')');
//			})

    //json假数据
    var json = [
        {
            "mesContent":"每天清晨美味的早餐"
        },
        {
            "mesContent":"失意时总会安慰你的人"
        },
        {
            "mesContent":"第一次学会一个人上学"
        },
        {
            "mesContent":"这是第四条消息"
        },
        {
            "mesContent":"这是第五条消息"
        },
        {
            "mesContent":"这是第六条消息"
        },
        {
            "mesContent":"这是第七条消息"
        }
    ]

    //home弹幕开始
    $('#home').pop(json, 30);

});
