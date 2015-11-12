// This file contains arbitrary helper functions to be
// used throughout the program

// Convert a form to an object
var objectifyForm = function objectifyForm(form) {
  var object = {};
  $(form).children().each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      object[$(this).attr('name')] = $(this).val();
    }
  });
  return object;
};
