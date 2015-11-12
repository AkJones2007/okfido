// This file handles all http requests

include('render.js');

// Information about the api
var api = {
  // Set URL
  url: "http://localhost:3000/"
};

// Register
var register = {

  create: function(credentials) {
    $.ajax({
      method: 'POST',
      url: api.url + 'register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, this.response);
  },

  response: function(error, data) {
    if(error) {
      render.formStatus(this.error);
    }
    render.formStatus(this.success);
  },

  error: "Sorry, registration has failed",

  success: function(user) {
    return "User " + user.first_name + " " + user.last_name + " created!";
  }

};
