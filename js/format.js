var format = {

  listWithSlashes: function(data) {
    var list = data.map(function(object) {
      return object.name;
    });
    return list.join('/');
  },

  cityState: function(data) {
    var location = data.city + ', ' + data.state;
    return location;
  },

  classifyAge: function(age) {
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
  },

  classifySize: function(size) {
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
  },

  searchFilterOptions: function(form) {
    var object = {};
    $(form).children('select').each(function(index, elem) {
      var key = $(this).attr('id');
      if ($(this).val() !== 'default') {
        object[key] = $(this).val();
      }
    });
    return object;
  },

  calculateAge: function(dob) {
    var today = new Date();
    var birthdate = new Date(dob);
    var age = today.getFullYear() - birthdate.getFullYear();

    if (today.getMonth() < birthdate.getMonth()) {
        age--;
    }

    if (today.getMonth() === birthdate.getMonth() &&
        today.getDate() < birthdate.getDate()) {
            age--;
    }

    return age;
  },

  dogView: function(dog) {
    var dogAge = format.calculateAge(dog.dob);
    dog.size = format.classifySize(dog.size);
    dog.age = format.classifyAge(dogAge);
    dog.breeds = format.listWithSlashes(dog.breeds);
    dog.colors = format.listWithSlashes(dog.colors);
    dog.location = format.cityState(dog.location);
    return dog;
  }



};
