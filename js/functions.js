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

// Wrap data in an object for Ajax requests
var wrap = function wrap(key, data) {
  var wrapped = {};
  wrapped[key] = data;
  return wrapped;
};

var poop = {
  filterMatch: function filterMatch(options, searchResult) {
    searchResult.age = format.classifyAge(format.calculateAge(searchResult.dob));
    searchResult.size = format.classifySize(searchResult.size);

    var truth = true;

    for (var key in options) {

      if(Array.isArray(searchResult[key])) {
        var isFound = false;
        searchResult[key].forEach(function(item) {
          if(item.name === options[key]) {
              isFound = true;
          };
        });
        if(!isFound) { truth = false; };
      }

      else if (options[key] !== searchResult[key]) {
        truth = false;
      }
    }
    return truth;
  }
};
