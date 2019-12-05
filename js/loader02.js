$(function(){

    var loaderBg02 = $('.loader-bg02');
    var loader02 = $('.loader02');
    
    var images = $('img');
    var loadRatioArea = $('.load-ratio');
    var imgLen = images.length; // 画像の総数
    var oneLoadRatio = 100 / imgLen; // 画像1枚あたりの読み込み進捗率
    var loadRatio = 0; // 全体の進捗率

    // for(var i = 0; i < imgLen; i++) {
    //     $(images[i]).on('load', function(){
    //         // 画像を読み込むごとに進捗率が上がる
    //         loadRatio += oneLoadRatio;
    //         console.log(Math.round(loadRatio));
    //         // 読み込み進捗率の値を四捨五入して、整数で表示
    //         loadRatioArea.text(Math.round(loadRatio));
    //         // 画像の読み込みが100％に到達するまで待ってから、ローディング画面を非表示
    //         if(loadRatio >= 100) {
    //             setTimeout(function(){
    //                 stopLoader(loaderBg02, loader02);
    //             }, 500);
    //         }
    //     });
    // }

    images.each(function(){
        var src = $(this).attr('src');
        $('<img>').attr('src', src).on('load', function(){
            // 画像を読み込むごとに進捗率が上がる
            loadRatio += oneLoadRatio;
        });
    });
    setInterval(function(){
        // 読み込み進捗率の値を四捨五入して、整数で表示
        loadRatioArea.text(Math.round(loadRatio));
        // 画像の読み込みが100％に到達するまで待ってから、ローディング画面を非表示
        if(loadRatio >= 100) {
            setTimeout(function(){
                stopLoader(loaderBg02, loader02);
            }, 500);
        }
    }, 1);
});

function stopLoader(loaderBg, loader) {
    loaderBg.fadeOut(800);
    loader.fadeOut(300);
}

