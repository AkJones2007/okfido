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

// Calculate a dog's age
var getAge = function getAge(dob) {
    today = new Date();
    dob = new Date(dob);
    age = today.getFullYear() - dob.getFullYear();

    dob.setFullYear(2015);

    if (today < dob) {
        age--;
    }

    return age;
};

// Classify a dog by age (ex. Young)
var classifyAge = function classifyAge(age) {

    if (age < 1) {
      return 'Baby';
    }
    else if(age < 4) {
      return 'Young';
    }
    else if(age < 8) {
      return 'Adult';
    }
    else if(age >= 8) {
      return 'Senior'
    }
    else {
      return null;
    }

};

// Classify a dog by size (ex. Large)
var classifySize = function classifySize(size) {

  switch(size) {
    case 1:
      return 'Very Small';
    case 2:
      return 'Small';
    case 3:
      return 'Medium';
    case 4:
      return 'Large';
    case 5:
      return 'Very Large'
    default:
      return null;
  }

};
