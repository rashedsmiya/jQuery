$(document).ready(function(){
     $('button').click(function(){
        // let divTwo = '<div class="two"> Hello Two </div>';
        // let h1Elm = $('<h1></h1>').text('Hello Heading');
        // $('.one').befor(divTwo, h1Elm);

      //   let item = "<li>Item</li>";
      //   $('.one ul').append(item);

             let lastCatNum = $('.cat-box:last').attr('cat-num');
            //  console.log(lastCatNum);
            let newCatNum = +lastCatNum + 1;
            let catBlock = '<div class="cat-box" cat-num"' + newCatNum + '"> \
            <input type="text" name="Catagory" class="form-cat" placeholder="Catagory Name"> \
           </div>';
           
           $('.cat-container form').appemd(catBlock);
     });
    
});




    
