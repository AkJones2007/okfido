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

    $('#search-results').empty();

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
    var favorites = data.user.favorites;
    var dogs = { list: [] };
    $('#search-results').empty();
    favorites.forEach(function(fave) {
      request.read('dogs/' + fave.dog_id, function(error, data) {
        $('#search-results').append('<li>' + JSON.stringify(data.dog) + '</li>'
          + "<button class='remove-favorite' id='" + fave.id + "'>Remove</button>");
      });
    });
  },

  faveAdded: function(error, data) {
    return window.alert('Added ' + data.favorite.dog_id + ' to favorites');
  },

  faveRemoved: function(error, data) {
    return window.alert('Favorite Removed');
  }

};
