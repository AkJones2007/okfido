// This file handles DOM events

// When the DOM is ready...
$(function() {

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', objectifyForm(this));
    register.create(credentials, response.register);
    e.preventDefault();
  });

  $('#login').on('submit', function(e) {
    var credentials = wrap('credentials', objectifyForm(this));
    login.create(credentials, response.login);
    e.preventDefault();
  });

  $('#list-dogs').on('click', function() {
    dog.list(entity.user.token, response.listDogs);
  });

});
