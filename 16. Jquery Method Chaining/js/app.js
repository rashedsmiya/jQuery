$(document).ready(function(){
    $('button').click(function() {
       $('.one').slideUp(1000)
       .slideDown(1000)
       .animate({width: "+=200px"}, 1000)
       .fadeOut(900)
       .fadeIn(900)
       .slideUp(900)
       .slideDown(900);

    });
});