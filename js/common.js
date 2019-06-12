$(function(){
    
    var slideTglBtn = $('.slideTglBtn');
    $('.slideTglArea').hide();

    slideTglBtn.on('click', function(){

        var thisBtn = $(this);
        
        $('+.slideTglArea:not(:animated)', thisBtn).slideToggle('slow', function(){
            
            thisBtn.toggleClass('code_open');

            if (thisBtn.hasClass('code_open')) {
                thisBtn.text('Close code');
            } else {
                thisBtn.text('View code');
            }
            
        });
    });
});