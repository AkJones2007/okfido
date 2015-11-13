// This file handles DOM events

// When the DOM is ready...
$(function() {

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', objectifyForm(this));
    request.registration(credentials, response.registered);
    e.preventDefault();
  });

  $('#login').on('submit', function(e) {
    var credentials = wrap('credentials', objectifyForm(this));
    request.login(credentials, response.loggedIn);
    e.preventDefault();
  });

  $('#list-dogs').on('click', function() {
    request.allDogs(response.dogList);
  });

  $('#search').on('click', function() {
    request.allDogs(response.dogList);
    render.result(entity.dogs);
  });

});
