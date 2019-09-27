$(function(){

    var images = $('img');
    var imgLen = images.length; // 画像の総数
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
});

function stopLoader(loaderBg, loader) {
    loaderBg.fadeOut(800);
    loader.fadeOut(300);
}

