var favorites = {

  list: function() {

    if(!user.current) {
      return console.error('Nobody is logged in.');
    }

    $('#search-results').html('');

    request.read('users/' + user.current.id, function(error, data) {

      if(error) {
        console.error(error);
      }

      var favorites = data.user.favorites;

      favorites.forEach(function(fave) {
        request.read('dogs/' + fave.dog_id, function(error, data) {

          if(error) {
            console.error(error);
          }

          format.dogView(data.dog);
          data.dog.favorite_id = fave.id;

          var templateTarget = $('#favorites-result-template').html();
          var template = Handlebars.compile(templateTarget);
          var content = template(data.dog);
          console.log(data.dog);

          $('#search-results').append(content);
        });
      });
    });
  },

  add: function(dogID) {

    if(!user.current) {
      return console.error('Nobody is logged in.');
    }

    favorite = {
      user_id: user.current.id
    }
    favorite.dog_id = Number(dogID);

    params = utility.wrapObject('favorite', favorite);

    request.create(params, 'favorites', function(error, data) {
      return window.alert('Added ' + data.favorite.dog_id + ' to favorites');
    });

  },

  remove: function(faveID) {
    request.destroy(faveID, 'favorites/', function(error, data) {
      if(!error) {
        window.alert('Favorite removed.');
      }
      favorites.list();
    });
  }
};
