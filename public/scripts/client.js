/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Rendering Tweet Data:
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


$(document).ready(function() {

//Render tweets
const renderTweets = function(tweets) {
  // loops through tweets
  for (let i = 0; i < tweets.length; i++) {
    let tweet = tweets[i]

    // calls createTweetElement for each tweet
    const newTweet = createTweetElement(tweet);

    // takes return value and appends it to the tweets container
  $('#tweet-container').append(newTweet);

  }
};

const createTweetElement = function(tweet) {
  let $tweet = $(`<article class="tweet">
    <header>
      <h5><img src=${tweet.user.avatars}>${tweet.user.name}</h5>
      <h5>${tweet.user.handle}</h5>
    </header>
    <p>${tweet.content.text}</p>
    <footer>
      <span class="need_to_be_rendered" datetime="${tweet.created_at}">${tweet.created_at}</span>
      <div class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
    </footer>
  </article>`);
  return $tweet;
};

renderTweets(data);

//Timeago for tweet dates
timeago.render(document.querySelectorAll('.need_to_be_rendered'));

});
