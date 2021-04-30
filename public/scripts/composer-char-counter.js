const maxLength = 140;

$(document).ready(function() {

  $("#tweet-text").on('input', function() {
    let charEntered = this.value.length;
    let remainingChars = maxLength - charEntered;
    $(".counter").html(remainingChars);
  
    if (remainingChars >= 0) {
    $(".counter").removeClass('red');
  } else if (remainingChars < 0 ) {
      $(".counter").addClass('red');
    } 
  })
});



