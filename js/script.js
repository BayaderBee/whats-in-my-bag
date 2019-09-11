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

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }