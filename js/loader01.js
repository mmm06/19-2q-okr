$(function(){

    var loaderBg01 = $('.loader-bg');
    var loader01 = $('.loader');
    
    // ページの読み込みが完了したら、ローディング画面を非表示
    $(window).on('load', stopLoader(loaderBg01, loader01));

    // 今回はわざと読み込みが遅いという想定にしておく
    // setTimeout(function(){
    //     stopLoader(loaderBg01, loader01);
    // }, 1500);

});

function stopLoader(loaderBg, loader) {
    loaderBg.fadeOut(800);
    loader.fadeOut(300);
}

