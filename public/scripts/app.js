$(document).ready(function(){
//preventing xss with escaping
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
//creates each tweet
  function createTweetElement(newTweetData){
    
    var tweetContent = escape(newTweetData.content.text);
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
              <span>${moment(tweetCreatedAt).fromNow()}</span>
              <i class="fa fa-flag" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </footer>
          </article>`;
  }
//renders tweets
  function renderTweets(tweets){
   $('.tweet-container').empty();
    for (var i = 0; i < tweets.length; i++){
      var $tweet = createTweetElement(tweets[i]);
      $('.tweet-container').prepend($tweet);
    }
  }

  function loadTweets(){
    $.ajax({
      method: 'GET',
      url: '/tweets/'
    }).success(function(data){
      renderTweets(data);
    }).error(function(error){
      console.log(error);
    });
  }
//error messages
  $('#submit-tweet').on('submit', function(event) {
    event.preventDefault();
    var textarea = $(this).find('textarea');
    var text = $(this).find('[name=text]').val();
    $('.error-message').addClass('hidden');
    if(text.length === 0){
      $('#empty-tweet').removeClass('hidden');
      return;
    }
    if(text.length > 140){
      $('#too-many').removeClass('hidden');
      return;
    }
    $.ajax({
      method: 'POST',
      url: '/tweets/',
      data: $(this).serialize()
    }).done(function(data){
      loadTweets();
      textarea.val('');
    });
  });

  $('.new-tweet').hide();
  $('.compose-button').on('click', function() {
    $('.new-tweet').slideToggle().find('textarea').focus();
  });

  loadTweets();
});


