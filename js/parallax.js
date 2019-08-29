$(function(){
    
    // parallax02.html
	$(window).scroll(function () {

        // スクロール時のY軸の値を取得
        var scrollPosition = $(this).scrollTop();

        // background-position-yでスクロール時の背景画像のY軸の値を変更することでスクロールのスピードを変更できる
        // 割る数字を大きくするとスピードが遅くなる
        $('.parallax02_img01').css('background-position-y', -scrollPosition / 4 + 'px');
        // 2枚目以降の画像は、スクロールしていくと見切れてしまうので、スクロールした分の値（今回は大体の値）を引き、見切れないよう調整する
        $('.parallax02_img02').css('background-position-y', -(scrollPosition - 1500) / 4 + 'px');
        $('.parallax02_img03').css('background-position-y', -(scrollPosition - 3000) / 4 + 'px');
        $('.parallax02_img04').css('background-position-y', -(scrollPosition - 4500) / 4 + 'px');
    });
    

});