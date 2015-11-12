// This file handles all http requests

// Information about the api
var api = {
  // Set URL
  url: "http://localhost:3000/"
};

// Register
var register = {

  create: function(credentials) {
    var request = $.ajax({
      method: 'POST',
      url: api.url + 'register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    });

    request.done(this.success);
    request.fail(this.error);
  },

  error: function() {
    message = "Sorry, registration has failed";
    render.formStatus(message);
  },

  success: function(user) {
    message = JSON.stringify(user);
    render.formStatus(message);
  }

};

// Login
var login = {

  create: function(credentials) {
    var request = $.ajax({
      method: 'POST',
      url: api.url + 'login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    });

    var success = function(data) {
      entity.user = data.user;
      render.formStatus(JSON.stringify(entity.user));
    };

    var error = function(error) {
      var message = JSON.stringify(error);
      render.formStatus(message);
    };

    request.done(success);
    request.fail(error);
  }

}

var dogs = {

  url: api.url + 'dogs',

  list: function() {
    request = $.ajax({
      method: 'GET',
      url: this.url,
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
      dataType: 'json'
    });

    var success = function(list) {
      list.dogs.forEach(function(dog) {
        render.result(dog);
      });
    };

    var error = function(error) {
    };

    request.done(success);
    request.fail(error);
  }

};
