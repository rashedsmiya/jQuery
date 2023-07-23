// $(document).ready(function(){
   // $('button').click();

   // $('button').dblclick();

   // $('button').mouseenter();

   // $('button').on({
   //     click: function(){
   //         console.log("click");
   //     },
   //     mouseenter: function(){
   //       console.log("Double click");
   //     }
   // });

   // $(document).ready(function(){

   // $('button').click(function(){
   //       $('.one > h2').hide();
   // });

   // $('.two button').click(function(){
   //       $('.two > h2').hide();
   // });

   // $('.two button').on('click', function(){
   //       $('.two > h2').hide();
   // });

   $(document).ready(function(){
      
      $('input').focus(function(){
         $(this).val('Focused');
      });

      $('input').blur(function(){
         $(this).val('Blur');
      });

   });




