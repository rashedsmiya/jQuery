// $(document).ready(function(){
//     $('#star').click(function(){
//         $('.one').animate({left: "400px"}, 1000)
//                  .animate({top: "200px"}, 1000);
                        
//     });

//     $('#stop').click(function(){
//        $('.one').stop(true, false);
       
//     });

// });


$(document).ready(function(){
   $('button').click(function(){
      $('.one').stop(true).slideToggle(1000);
   });
});

