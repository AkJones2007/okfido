// This file handles all http requests

// Information about the api
var api = {
  // Set URL
  url: "http://localhost:3000/",

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  }

};

// Register
var register = {
  url: api.url + 'register',

  create: function(credentials, callback) {
    api.ajax({
      method: 'POST',
      url: this.url,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  }
};

// Login
var login = {
  url: api.url + 'login',

  create: function(credentials, callback) {
    api.ajax({
      method: 'POST',
      url: this.url,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  }

};

var dog = {

  list: function(token, callback) {
    api.ajax({
      method: 'GET',
      url: api.url + 'dogs',
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
    }, callback);
  }

};

// Callbacks
response = {

  error: function(error) {
    console.error(error);
    render.formStatus('status: ' + error.status + ', error: ' +error.error);
  },

  register: function(error, data) {
    if (error) {
      this.error(error);
    }
    render.formStatus(JSON.stringify(data));
  },

  login: function(error, data) {
    if (error) {
      this.error(error);
    }
    entity.user = data.user;
    render.formStatus(JSON.stringify(entity.user));
  },

  listDogs: function(error, data) {
    if (error) {
      this.error(error);
    }
    render.formStatus(JSON.stringify(data.dogs));
  }

};
