$(document).ready(function() {
  $('.new-tweet form textarea').on("keyup", function(){
    var counter = $(this).siblings('.counter');
    var remainder = (140 - $(this).val().length);
    $(counter).text(remainder);
    $(counter).css('color', remainder < 0 ? 'red' : 'black');
  })
});


