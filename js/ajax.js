// This file handles all http requests

// Information about the api
var api = {
  // Set URL
  url: "http://localhost:3000/",

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

  authorize: function() {
    if (entity.user) {
      return {
        Authorization: "Token token=" + entity.user.token
      }
    }
    return false;
  },

  // Define 'read' method
  read: function(path, callback, token) {
    api.ajax({
      method: 'GET',
      url: api.url + path,
      headers: this.authorize() || null,
      dataType: 'json'
    }, callback);
  },

  // Define 'create' method`
  create: function(data, path, callback, token) {
    api.ajax({
      method: 'POST',
      url: api.url + path,
      headers: this.authorize() || null,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      dataType: 'json'
    }, callback);
  },

  // Define 'update' method
  update: function(portion, path, callback, token) {
    api.ajax({
      method: 'PATCH',
      url: api.url + path,
      headers: this.authorize() || null,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(portion),
      dataType: 'json'
    }, callback);
  },

  // Define 'destroy' method
  destroy: function(id, path, callback) {
    api.ajax({
      method: 'DELETE',
      url: api.url + path + id,
      headers: this.authorize() || null
    }, callback);
  }

};
