var dogs = {

  // Search
  list: function() {
    request.read('dogs', function(error, data) {
      search.clear();

      data.dogs.forEach(function(dog) {
        var dogText = search.resultToText(dog);
        if(search.term()) {
          if(search.wordFound(search.term(), dogText)) {
            search.results.push(dog);
          }
        } else {
          search.results.push(dog);
        }
      });

      search.results.forEach(function(dog, index) {
        if (!search.filterMatch(search.filterOptions, dog)) {
          search.results.splice(index, 1);
        }
      });

      render.searchResults();
    });
  },

  // Get One
  get: function(id) {
    var dogURL = 'dogs/' + id;
    request.read(dogURL, function(error, data) {
      if(error) {
        return console.error(error);
      }

      this.buffer = data.dog;
    });
  },

  buffer: null

  // Create
  // Destroy

};
