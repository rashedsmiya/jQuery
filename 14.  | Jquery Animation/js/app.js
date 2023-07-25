// $(document).ready(function() {
//    $('button').click(function() {
//       $('.one').animate({
//          left: '100px',
//          width: '+=150px',
//          height: '+=150px'
//       });

//    });
   
// });


$(document).ready(function(){
   $('button').click(function(){
       
      $('.one').animate({left: '20%'}, 1000)
      .animate({
         width: '300',
         height: '300px',
         fontSize: '25px'
      }, 1000)
      .animate({left: '0%'}, 1000)
      .animate({width: '150px', height: '150px', fontSize: '16px'}, 1000);

        
    });
});
