// This file contains object constructors
// for each entity in the application

// User
var User = function User(firstName, lastName, email, city, state, token) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.city = city;
  this.state = state;
  this.token = token;
};
