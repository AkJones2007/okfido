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

var request = {
  url: api.url + 'register',

  // Register
  registration: function(credentials, callback) {
    api.ajax({
      method: 'POST',
      url: api.url + 'register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  // Login
  login: function(credentials, callback) {
    api.ajax({
      method: 'POST',
      url: api.url + 'login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  // List ALL THE DOGS!
  allDogs: function(callback) {
    api.ajax({
      method: 'GET',
      url: api.url + 'dogs',
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
      dataType: 'json'
    }, callback);
  },

  // List the breed mix of a given dog
  breedMix: function(dogID, callback) {
    api.ajax({
      method: 'GET',
      url: api.url + 'dog/breeds/' + dogID,
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
      dataType: 'json'
    }, callback);
  },

  // List the color mix of a given dog
  colorMix: function(dogID, callback) {
    api.ajax({
      method: 'GET',
      url: api.url + 'dog/colors/' + dogID,
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
      dataType: 'json'
    }, callback);
  },

  // Find dogs of a given breed
  dogsOfBreed: function(breedID, callback) {
    api.ajax({
      method: 'GET',
      url: api.url + 'breed/dogs/' + breedID,
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
      dataType: 'json'
    }, callback);
  }

};

// Callbacks
response = {

  // Universal error response
  error: function(error) {
    console.error(error);
    render.formStatus('status: ' + error.status + ', error: ' +error.error);
  },

  registered: function(error, data) {
    if (error) {
      this.error(error);
    }
    render.formStatus(JSON.stringify(data));
  },

  loggedIn: function(error, data) {
    if (error) {
      this.error(error);
    }
    entity.user = data.user;
    render.formStatus(JSON.stringify(entity.user));
  },

  dogList: function(error, data) {
    if (error) {
      this.error(error);
    }
    render.formStatus(JSON.stringify(data.dogs));
  },

  breedList: function(error, data) {
    if (error) {
      this.error(error);
    }
    render.formStatus(JSON.stringify(data.breeds));
  }


};
