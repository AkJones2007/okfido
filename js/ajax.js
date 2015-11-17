// This file handles all http requests

// Information about the api
var api = {
  // Set URL
  url: "https://intense-badlands-4571.herokuapp.com/",

  // Configure AJAX
  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  }

};

var request = {

  // Define 'read' method
  read = function(path, callback, token) {
    api.ajax({
      method: 'GET',
      url: api.url + path,
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
      dataType: 'json'
    }, callback);
  },

  // Define 'create' method`
  create = function(data, path, callback, token) {
    api.ajax({
      method: 'POST',
      url: api.url + path,
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      dataType: 'json'
    }, callback);
  },

  // Define 'update' method
  update = function(portion, path, callback, token) {
    api.ajax({
      method: 'PATCH',
      url: api.url + path,
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(portion),
      dataType: 'json'
    }, callback);
  },

  // Define 'destroy' method
  destroy = function(id, path, callback, token) {
    api.ajax({
      method: 'DELETE',
      url: api.url + path,
      headers: {
        Authorization: 'Token token=' + entity.user.token
      },
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
    $.each(data.dogs, function(index, dog) {
      dog['age'] = classifyAge(getAge(dog.dob));
      dog.size = classifySize(dog.size);
      entity.dogs.push(dog);
    });
  },

  breedList: function(error, data) {
    if (error) {
      this.error(error);
    }
    render.formStatus(JSON.stringify(data.breeds));
  },

  colorList: function(error, data) {
    if (error) {
      this.error(error);
    }
    render.formStatus(JSON.stringify(data.colors));
  },

  favoriteAdded: function(error, data) {
    if (error) {
      this.error(error);
    }
    render.formStatus(JSON.stringify(data.favorite));
    console.log(data);
  }
};
