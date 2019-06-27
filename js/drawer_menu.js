$(function(){
    // ハンバーガーをクリックしたとき
    $('.menuBtn').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.navi').removeClass('open');
            $('.overlay').removeClass('open');
            $('.drawer_demo').css('overflow-y', 'scroll');
        } else {
            $(this).addClass('active');
            $('.navi').addClass('open');
            $('.overlay').addClass('open');
            $('.drawer_demo').css('overflow-y', 'hidden');
        }
    });

    $('.overlay').on('click', function(){
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.menuBtn').removeClass('active');
            $('.navi').removeClass('open');
            $('.drawer_demo').css('overflow-y', 'scroll');
        }
    });

    $('.menuBtnCmn').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
});