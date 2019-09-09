$( document ).ready(function() {
    console.log( "ready!" );
    $("img").hover (function () {
        $(this).css('opacity','0.5');
        $(this).parent().children("p").show();
        $('h2').text ($(this).attr('id'));

    });
    $("img").mouseleave (function () {
        $(this)
        .css('opacity','1');
        
    });
});