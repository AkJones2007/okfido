// This file handles DOM events

// When the DOM is ready...
$(function() {

  // When the dom is ready, populate dropdown menus
  render.populateDropdowns();

  // Hide registration on page load
  $('#register').hide();
  $('#show-login-form').hide();

  // Show registration
  $('#show-register-form').on('click', function(e) {
    e.preventDefault();

    $('#login').hide();
    $(this).hide();

    $('#register').show();
    $('#show-login-form').show();
  });

  // Show login
  $('#show-login-form').on('click', function(e) {
    e.preventDefault();

    $('#register').hide();
    $(this).hide();

    $('#login').show();
    $('#show-register-form').show();
  });

  // Login
  $('#login').on('submit', function(e) {
    var credentials = utility.wrapObject('credentials', utility.formToObject(this));
    user.login(credentials);
    e.preventDefault();
  });

  // Submit
  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', utility.formToObject(this));
    user.register(credentials);
    e.preventDefault();
  });

  // Search
  $('#search').on('submit', function(e) {
    dogs.list();
    e.preventDefault();
  });

  // Load Favorites
  $('#list-favorites').on('click', function() {
    favorites.list();
  });

  // Add Favorite
  $('#search-results').on('click', '.add-favorite', function() {
    dogID = $(this).attr('id');
    favorites.add(dogID);
  });

  // Remove Favorite
  $('#search-results').on('click', '.remove-favorite', function() {
    faveID = $(this).attr('id');
    favorites.remove(faveID);
  });

});
