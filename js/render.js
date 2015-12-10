// This file handles all HTML rendering in the DOM
var render = {

  searchResults: function() {
      search.results.map(function(dog) {
        return format.dogView(dog);
      });
      var data = {dogs: search.results};
      var templateTarget = $('#search-result-template').html();
      var template = Handlebars.compile(templateTarget);
      var content = template(data);
      $('#search-results').html(content);
  },

  favoritesList: function() {
    search.results.forEach(function(result) {
      var string = '<li>' + JSON.stringify(result) + '</li>';
      var button = "<button class='remove-favorite' id='" + result.id + "'>Remove Favorite</button>";
      $('#search-results').append(string + button);
    });
  },

  populateDropdowns: function() {
    request.read('breeds', function(error, data) {
      var key = Object.keys(data)[0];
      data[key].forEach(function(item) {
        $('#' + key).append("<option value='" + item.name + "'>" + item.name + "</option>");
      });
    });

    request.read('colors', function(error, data) {
      var key = Object.keys(data)[0];
      data[key].forEach(function(item) {
        $('#' + key).append("<option value='" + item.name + "'>" + item.name + "</option>");
      });
    });

  }

};
