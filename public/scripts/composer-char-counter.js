$(document).ready(function() {
  $('.new-tweet form textarea').on("keyup", function(){
    var counter = $(this).siblings('.counter');
    var remainder = (140 - $(this).val().length);
    $(counter).text(remainder);
    if(remainder < 0) {
      $(counter).css('color','red');
    } else {
      $(counter).css('color', 'black');
    }
  })
});


