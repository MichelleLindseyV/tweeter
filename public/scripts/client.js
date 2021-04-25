/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



//Tweet data object:
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};


//Tweet Function:




function createTweetElement(tweetData) {
  const message = $(`<article class="tweet">
  <header>
    <h5><img src=${tweetData.user.avatars}>${tweetData.user.name}</h5>
    <h5>${tweetData.user.handle}</h5>
  </header>
  <p>${tweetData.content.text}</p>
  <footer>
    <span class="need_to_be_rendered" datetime="2016-07-07T09:24:17Z">${tweetData.created_at}</span>
    <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
  </footer>
</article>`);
  return message
};

 //adds it to the page - confirm all correct elements/classes are there.







// //Rendering Tweet Data:
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ];

// const renderTweets = function(tweets) {
//   // loops through tweets
//   // calls createTweetElement for each tweet
//   // takes return value and appends it to the tweets container
// }

// const createTweetElement = function(tweet) {
//   let $tweet = /* Your code for creating the tweet element */
//   // ...
//   return $tweet;
// }

// renderTweets(data);









//Timeago for tweet dates
$(document).ready(function() {
  timeago.render(document.querySelectorAll('.need_to_be_rendered'));

  const $tweet = createTweetElement(tweetData);

//Test / driver code (temporary)
console.log($tweet); //see what it looks like
$('#tweet-container').append($tweet);
  
});
