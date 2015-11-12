// This file handles all http requests
var okfidoAPI = {
  // Set URL
  apiurl: "http://localhost:3000/",
  ajax: $.ajax,

  // Register
  register: function register(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.apiurl + 'register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    });
  },

  // Login
  login: function login(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.apiurl + 'login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    });
  }

};
