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

          var dog = data.dog;

          var html = '<li>' + JSON.stringify(dog) + '</li>';
          var removeButton = "<button class='remove-favorite' id='" + fave.id + "'>Remove Favorite</button>";
          $('#search-results').append(html + removeButton);
        });
      });
    });

    render.favoritesList();
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
