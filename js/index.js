window.onload = function() {
    // var scale = 1 / window.devicePixelRatio;
    // document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no');
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5+ 'px';
}
$(function(){
    var i = 0;
    var timer = null;
    $('.index ul li').first().addClass('on');
    var firstimg=$('.images li').first().clone();//复制第一张图片 
    $('.images').append(firstimg).width($('.images li').length*(400));

    $('.images').on("touchstart", function(e) {
//     e.preventDefault(); 
        startX = e.originalEvent.changedTouches[0].pageX; 
//     e.stopPropagation(); 
        return false; 
    });

    $('.images').on("touchend", function(e) { 
//     e.preventDefault(); 
//     e.stopPropagation(); 
        moveEndX = e.originalEvent.changedTouches[0].pageX;
        X = moveEndX - startX;
        if(X > 0){
            clearInterval(timer); 
            i--; 
            if (i==-1) { 
                i=$('.images li').length-2; 
                $('.images').css({left:-($('.images li').length-1)*$('.images img').width()}); 
            } 
            $('.images').stop().animate({left:-i*$('.images img').width()},300); 
            $('.index ul li').eq(i).addClass('on').siblings().removeClass('on');     
        }
        else if ( X < 0 ) {
            clearInterval(timer); 
            i++; 
            if (i==$('.images li').length) { 
                i=1; //这里不是i=0 
                $('.images').css({left:0}); //保证无缝轮播，设置left值 
            }
        $('.images').stop().animate({left:-i*$('.images img').width()},300);
        if (i==$('.images li').length-1) {   //设置小圆点指示 
            ('.index ul li').eq(0).addClass('on').siblings().removeClass('on'); 
        }else{
            $('.index ul li').eq(i).addClass('on').siblings().removeClass('on'); 
        } 
            }
        return false;
        });
    //定时器自动播放 
    timer=setInterval(function(){
        i++; 
        if (i==$('.images li').length) { 
            i=1; 
            $('.images').css({left:0});
        }; 
                   
        $('.images').stop().animate({left:-i*$('.images img').width()},300); 
        if (i==$('.images li').length-1) {  
            $('.index ul li').eq(0).addClass('on').siblings().removeClass('on'); 
        }else{
            $('.index ul li').eq(i).addClass('on').siblings().removeClass('on'); 
        }
        },2000)
});
