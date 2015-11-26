// This file handles all HTML rendering in the DOM
var render = {

  formStatus: function(message) {
    $('.form-status').text('');
    $('.form-status').text(message);
  },

  result: function(list) {
    list.forEach(function(dog) {
      $('#results').append(
        '<li><img src="images/placeholder.jpg" class="result-photo left">' +
        "<div class='result-content'>" +
        '<h1>' + dog.name + '</h1>' +
        '<h2>' + dog.age + ' - ' + dog.size + ' - ' + dog.gender + '</h2>' +
        '<p>' + dog.bio + '</p>' +
        '</div></li>'
      );
      console.log(dog);
    });
  },

  searchResults: function(results) {
    results.forEach(function(result) {
      var string = '<li>' + JSON.stringify(result) + '</li>';
      var button = "<button class='add-favorite' id='" + result.id + "'>Add Fav</button>";
      $('#search-results').append(string + button);
    });
  },

  addFaveButtonHandlers: function() {
    var searchResults = $('#search-results').children('button');
    $.each(searchResults, function(index, button) {
      $(this).on('click', function() {
        var param = { favorite: {} }
        param.favorite['user_id'] = entity.user.id;
        param.favorite['dog_id'] = this.id;
        request.create(param, 'favorites', respond.faveAdded);
      });
    });
  }

};
