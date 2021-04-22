const maxLength = 140;

$(document).ready(function() {
  // console.log("loaded");

  $("#tweet-text").on('keyup', function() {
    let charEntered = this.value.length;
    let remainingChars = maxLength - charEntered;
    // console.log(remainingChars);
    $(".counter").text(remainingChars);
    if (remainingChars < 0 ) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "dark grey");
    }
    
  })

});

