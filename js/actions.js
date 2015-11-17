// This file handles DOM events

// When the DOM is ready...
$(function() {

  // On Login
  $('#login').on('submit', function(e) {
    var credentials = wrap('credentials', objectifyForm(this));
    request.create(credentials, 'login', respond.loggedIn);
    e.preventDefault();
  });

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', objectifyForm(this));
    request.registration(credentials, response.registered);
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
