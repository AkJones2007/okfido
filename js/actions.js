// This file handles DOM events

// When the DOM is ready...
$(function() {

  // When the dom is ready, populate dropdown menus
  request.read('breeds', respond.populateDropdowns);
  request.read('colors', respond.populateDropdowns);

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

  // On search submit
  $('#search').on('submit', function(e) {
    request.read('dogs', respond.resultsList);
    e.preventDefault();
  });

  $('#list-favorites').on('click', function() {
    request.read('users/' + entity.user.id, respond.favoritesList);
  });

  $('#search-results').on('click', '.remove-favorite', function() {
    faveID = $(this).attr('id');
    request.destroy(faveID, 'favorites/', function(error, data) {
      if(!error) {
        window.alert('Favorite removed.');
        request.read('users/' + entity.user.id, respond.favoritesList);
      }
    });

  });

});
