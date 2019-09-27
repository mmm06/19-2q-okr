$(function(){

    var skeletonImg = $('.skeleton img');
    skeletonImg.on('load', function(){
        // $('.skeleton').removeClass('loading');
        // 今回はわざと読み込みが遅いという想定にしておく
        setTimeout(function(){
            $('.skeleton').removeClass('loading');
        },2500);
    });
});