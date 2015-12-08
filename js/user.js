var user = {

  current: null,

  login: function(credentials) {
    request.create(credentials, 'login', function(error, data) {

      if(error) {
        return console.error(error);
      }

      user.current = data.user;
      return window.alert('User ' + user.current.email + ' logged in.');

    });
  },

  register: function(credentials) {
    request.registration(credentials, function(error, data) {

      if(error) {
        console.error(error);
      }

    });
  },

  clear: function() {
    if(this.current) {
      this.current = null;
    }
  }

};
