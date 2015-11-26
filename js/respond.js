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
    var searchTerm = $('#search-text').val();
    var finalResults = [];

    data.dogs.forEach(function(dog) {
      var dogText = format.searchResultToText(dog);
      if (utility.wordFoundInText(searchTerm, dogText)) {
        finalResults.push(dog);
      }
    });

    finalResults.forEach(function(dog, index) {
      if (!poop.filterMatch(filterOptions, dog)) {
        finalResults.splice(index, 1);
      }
    });

    render.searchResults(finalResults);
    render.addFaveButtonHandlers();
  },

  populateDropdowns: function(error, data) {
    var key = Object.keys(data)[0];
    data[key].forEach(function(item) {
      $('#' + key).append("<option value='" + item.name + "'>" + item.name + "</option>");
    });
  },

  favoritesList: function(error, data) {
    render.searchResults(data.user.dogs);
  },

  faveAdded: function(error, data) {
    return window.alert('Added ' + data.favorite.dog_id + ' to favorites');
  }

};
