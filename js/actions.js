// This file handles DOM events

// When the DOM is ready...
$(function() {

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', objectifyForm(this));
    register.create(credentials);
    e.preventDefault();
  });

});
