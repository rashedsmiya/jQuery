$(document).ready(function(){

    //  $('button').click(function(){
        // let oneVal = $('.one').text();
        // $('.two').text(oneVal);

        // let htmlVal = '<strong>Hii</strong>';
        // $('.two').html(htmlVal);

        // let htmlVal =  '<div class="three"> \
        //                <div class="four">Four</div> \
        //                </div>';
        //                $('.two').html(htmlVal);


        // $('#fname').val("hello");

        // $('button').click(function(){
        //     $('.one a').attr('href', 'http://www.google.com/')
        //                .attr('target', '_blank');

        //                $('.one a').attr({
        //                 'href': 'http://www.google.com/',
        //                 'target': '_blank'
        //                });



        // });

        $('button').click(function(){
              $('.one').text("Hii");
              $('.one').attr('title', function(index, text){
                  return text + " New Text";
              });

              


           });

        });




    
