$(function() {
    $('#logInBtn').on('click', function(e){
        e.preventDefault();
        let userName = $('#logInEmail');
        let userPassword = $('#logInPassword');
      if (userName.val() === 'admin@admin.com' && userPassword.val() === '123') {
        console.log('LogedIn')
        $('.topBar').replaceWith(secondHeader);
        $('.toggleable').replaceWith(secondMain);
      } else {
        alert('Invalid Info')
      }
    });
    
});

//    Character Counter
 $(document).ready(function() {
   displayCounter(150,'#characterLeft');
   displayCounter(300,'#characterLeftScreenFour');
   
   function displayCounter(maxInputChars,itemSelector){

    var maxChars = maxInputChars;
    var textLength = 0;
    var comment = "";
    var outOfChars = `0/${maxChars}`;
  
    /* initalize for when no data is in localStorage */
    var count = maxChars;
    $(itemSelector).text(`${count}/${maxChars}`);
  
    /* fix val so it counts carriage returns */
    $.valHooks.textarea = {
      get: function(e) {
        return e.value.replace(/\r?\n/g, "\r\n");
      }
    };
  
    function checkCount() {
      textLength = $('#comment').val().length;
      if (textLength >= maxChars) {
        $(itemSelector).text(outOfChars);
        $(itemSelector).addClass('maxChars');
      }
      else {
        count = maxChars - textLength;
        $(itemSelector).text(`${count}/${maxChars}`);
        $(itemSelector).removeClass('maxChars');

      }
    }
  
    /* on keyUp: update #characterLeft as well as count & comment in localStorage */
    $('#comment').keyup(function() {
      checkCount();
      comment = $(this).val();
      localStorage.setItem("comment", comment);
    });
  
    /* on pageload: get check for comment text in localStorage, if found update comment & count */
    if (localStorage.getItem("comment") != null) {
      $('#comment').text(localStorage.getItem("comment"));
      checkCount();
    }
   }

  });