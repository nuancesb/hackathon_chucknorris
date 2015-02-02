$(function() {
  $('#norrisMe').click(function() {
    $.icndb.getRandomJoke(function(joke) {
      $joke = $('<p class="animated zoomOutUp">').text(joke.joke);
      $("#test").html($joke);
    })
  })
})