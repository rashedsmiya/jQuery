// $(document).ready(function(){
//     $('button').click(function(){
//        let headingContent = '';
//        headingContent = $('.two').html();
//        console.log(headingContent);
//     });
// });

$(document).ready(function(){
    $('input[type="submit"]').click(function(e){
         e.preventDefault();
         let firstName = '',
             lastName = '',
             userName = '',
             password = '';

        firstName = $('#fname').val();   
        lastName = $('#lname').val();   
        userName = $('#uname').val();   
        password = $('#password').val();  
        
        if (userName == 'raj' && password == '1234'){
            alert("login successfull");
        } else{
            alert("login Failed");
        }

    });
});