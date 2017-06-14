const tweetData =
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

$(document).ready(function(){
  function createTweetElement(newTweetData){
    
    var tweetContent = newTweetData.content.text;
    var tweetHandle = newTweetData.user.handle;
    var tweetUsername = newTweetData.user.name;
    var tweetAvatar = newTweetData.user.avatars.regular;
    var tweetCreatedAt = newTweetData.created_at;
  return `
  <article class="tweet">
          <header class="tweet-header">
            <img class="avatar" src="${tweetAvatar}">
            <span class="name">${tweetUsername}</span>
            <span class="handle">${tweetHandle}</span>
            <div class="clearfix"/>
          </header>
          
          <p class="text-tweet">${tweetContent}</p>
          <footer class="time-stamp">
            <span>${tweetCreatedAt}</span>
            <i class="fa fa-flag" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </footer>
        </article>`;
  }

  var $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('.tweet-container').append($tweet);
  });

