$(function(){

    // ========== loader01 ========== 

    var loaderBg01 = $('.loader-bg');
    var loader01 = $('.loader');
    
    // ページの読み込みが完了したら、ローディング画面を非表示
    // $(window).on('load', stopLoader(loaderBg01, loader01));

    // 今回はわざと読み込みが遅いという想定にしておく
    setTimeout(function(){
        stopLoader(loaderBg01, loader01);
    }, 1500);

    // ========== /loader01 ========== 

    // ========== loader02 ========== 

    var loaderBg02 = $('.loader-bg02');
    var loader02 = $('.loader02');
    
    var images = $('img');
    var loadRatioArea = $('.load-ratio');

    var imgLen = images.length; // 画像の総数
    var oneLoadRatio = 100 / imgLen; // 画像1枚あたりの読み込み進捗率
    var loadRatio = 0; // 全体の進捗率

    for(var i = 0; i < imgLen; i++) {
        $(images[i]).on('load', function(){
            // 画像を読み込むごとに進捗率が上がる
            loadRatio += oneLoadRatio;
            // 読み込み進捗率の値を四捨五入して、整数で表示
            loadRatioArea.text(Math.round(loadRatio));
            // 画像の読み込みが100％に到達するまで待ってから（1秒ほど）、ローディング画面を非表示
            if(loadRatio >= 100) {
                setTimeout(function(){
                    stopLoader(loaderBg02, loader02);
                }, 500);
            }
        });
    }

    // ========== /loader02 ========== 

    // ========== loader03 ========== 

    var loaderBg03 = $('.loader-bg03');
    var loader03 = $('.loader03');
    var loadingBar = $('.loading_bar');

    var barLen = 100 / imgLen; // 画像1枚あたりの読み込み進捗率（横幅）
    var barWidth = 0; // 全体の進捗率（横幅）

    for(var i=0; i < imgLen; i++) {
        $(images[i]).on('load', function(){
            // 画像を読み込むごとに横幅を増やす
            barWidth += barLen;
            loadingBar.css('width', barWidth + '%');
            // 横幅が100％まで到達するまで待ってから（1秒ほど）、ローディング画面を非表示
            if(barWidth >= 100) {
                setTimeout(function(){
                    stopLoader(loaderBg03, loader03);
                }, 1000);
            }
        });
    }

    // ========== /loader03 ========== 

    // ========== loader04 ========== 

    var skeletonImg = $('.skeleton img');
    skeletonImg.on('load', function(){
        // $('.skeleton').removeClass('loading');
        // 今回はわざと読み込みが遅いという想定にしておく
        setTimeout(function(){
            $('.skeleton').removeClass('loading');
        },2500);
    });

    

    // ========== /loader04 ========== 

});

function stopLoader(loaderBg, loader) {
    loaderBg.fadeOut(800);
    loader.fadeOut(300);
}

