var search = {

  options: format.searchFilterOptions('#search'),
  results: [],

  term: function() {
    return $('#search-text').val();
  },

  resultToText: function(result) {
    var values = [
      result.name,
      result.gender,
      format.classifyAge(format.calculateAge(result.dob)),
      result.bio,
      format.classifySize(result.size),
      result.location.city,
      result.location.state,
      result.shelter.name,
    ];

    result.breeds.forEach(function(breed) {
      values.push(breed.name);
    });

    result.colors.forEach(function(color) {
      values.push(color.name);
    });

    return values.join(' ');
  },

  wordFound: function(word, text) {
    word = utility.wordToLowerCase(word);
    text = utility.textToLowerCase(text).split(' ');
    var found = false;

    if (word === '') {
      return true;
    }

    text.forEach(function(string) {
      if (word === string) {
        found = true;
      }
    });
    return found;
  },

  clear: function() {
    if(this.results) {
      this.results = [];
      $('#search-results').html('');
    }
  },

  filterMatch: function(options, searchResult) {
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
