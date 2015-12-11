var user = {

  current: null,

  login: function(credentials) {
    request.create(credentials, 'login', function(error, data) {

      if(error) {
        window.alert('Wrong username/password combination.');
      }

      user.current = data.user;
      $('.login-register').hide();

    });
  },

  register: function(credentials) {
    request.create(credentials, 'register', function(error, data) {

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
