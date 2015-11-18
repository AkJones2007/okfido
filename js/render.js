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
      $('#search-results').append(string);
    });
  }

};
