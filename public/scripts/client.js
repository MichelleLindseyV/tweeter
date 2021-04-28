/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {

  $( ".error" ).hide();

//Posting tweets from form:
  $("form").submit(function (event) {
    event.preventDefault();

    

const textValue = $('#tweet-text').val();

  if (textValue == '') {
    $( ".error" ).show( 400, function() {
      $( this ).text( "Oops! Text area is empty: Please enter your message!")
    });
  } else if (textValue.length > 140) {
    $( ".error" ).show( 400, function() {
      $( this ).text( "Oops! Too many charaters: Max word count is 140!")
    });
  } else if (textValue.length <=140) { 
    $.post("/tweets", $(this).serialize())
    .then(loadTweets);
    $('#tweet-text').val('');
  } else {
    $( ".error" ).hide();
  };
});

  //Function to GET data from server
  const loadTweets = function() {
     return $.get('/tweets')
      .then(function (postedTweet) {
        renderTweets(postedTweet);
      });
  };

  loadTweets();



//Render tweets
const renderTweets = function(tweets) {
  // loops through tweets
  for (let i = 0; i < tweets.length; i++) {
    let tweet = tweets[i]

    // calls createTweetElement for each tweet
    const newTweet = createTweetElement(tweet);

    // takes return value and appends it to the tweets container
  $('#tweet-container').prepend(newTweet);

  }
};

const createTweetElement = function(tweet) {
  let date = timeago.format(tweet.created_at)
  let $tweet = $(`<article class="tweet">
    <header>
      <h5><img src=${tweet.user.avatars}>${tweet.user.name}</h5>
      <h5>${tweet.user.handle}</h5>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer>
      <span class="need_to_be_rendered">${date}</span>
      <div class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
    </footer>
  </article>`);
  return $tweet;
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


//Timeago for tweet dates
timeago.render(document.querySelectorAll('.need_to_be_rendered'));

});
