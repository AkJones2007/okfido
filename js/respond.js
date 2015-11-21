// This file defines methods to respond to HTTP requests
var respond = {

  loggedIn: function(error, data) {
    if(error) {
      return console.error(error);
    }
    entity.user = data.user;
    return window.alert('User ' + data.user.email + ' logged in.');
  },

  resultsList: function(error, data) {
    if(error) {
      return console.error(error);
    }
    var filterOptions = format.searchFilterOptions('#search');
    var filtered = [];
    data.dogs.forEach(function(dog) {
      if (poop.filterMatch(filterOptions, dog)) {
        filtered.push(dog);
      }
    });
    render.searchResults(filtered);
  },

  populateDropdowns: function(error, data) {
    var key = Object.keys(data)[0];
    data[key].forEach(function(item) {
      $('#' + key).append("<option value='" + item.name + "'>" + item.name + "</option>");
    });
  }

};
