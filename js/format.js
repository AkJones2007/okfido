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

  dogData: function(data) {
    data.breeds = format.listWithSlashes(data.breeds);
    data.colors = format.listWithSlashes(data.colors);
    data.age = format.classifyAge(data.age);
    data.location = format.cityState(data.location);
    data.size = format.classifySize(data.size);
    return data;
  },

  searchFilterOptions: function(form) {
    var object = {};
    $(form).children('select').each(function(index, elem) {
      var key = $(this).attr('id');
      object[key] = $(this).val();
    });
    return object;
  }

};
