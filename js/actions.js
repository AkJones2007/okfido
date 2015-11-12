// This file handles DOM events
include('functions.js');
include('ajax.js');

// When the DOM is ready...
$(function() {

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', objectifyForm(this));
    register.create(credentials);
    e.preventDefault();
  });

});
