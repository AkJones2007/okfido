// This file handles all HTML rendering in the DOM
var render = {

  formStatus: function(message) {
    $('.form-status').text('');
    $('.form-status').text(message);
  },

  result: function(dog) {
    var profile = '<li><h1>' + dog.name + '</h1>' +
                      '<h3>' + classifyAge(getAge(dog.dob)) + ' - '
                             + classifySize(dog.size) + ' - '
                             + dog.gender + ' - '
                             + 'some breed' + '</h3>' +
                      '</h3>'+ 'Some Shelter' + 'Some Location' + '</h3>' +
                      '<p>'  + dog.bio + '<p>';
    $('.results').append(profile);
  }

};
