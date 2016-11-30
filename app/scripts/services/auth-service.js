/**
 * Created by ig on 11/16/16.
 */
'use strict';

angular.module('servicesModule').factory('AuthService', ['$http', function($http) {
  var currentUser;
  var authenticationToken;
  var setAuthenticationToken = function(token) {
    authenticationToken = token;
    $http.defaults.headers.common.Authorization = authenticationToken;
    console.log('Authentication token: ' + authenticationToken);
  };


  return {
    login: function(user) {
      var data = user;
      var config = {};

      console.log(user);

      $http.post('http://localhost:3001/api/appusers/login', data, config).then(function(response) {
        console.log('Success!!!');
        console.log(response);
        currentUser = response.data;
        setAuthenticationToken(currentUser.id);
      }, function(error) {
        console.log('Error!!!');
        console.log(error);
      });
    },
    logout: function() {
      var data = {};
      var config = {};

      $http.post('http://localhost:3001/api/appusers/logout', data, config).then(function(response) {
        console.log('Success!!!');
        console.log(response);
        setAuthenticationToken(null);
      }, function(error) {
        console.log('Error!!!');
        console.log(error);
      });
    },
    isLoggedIn: function() {},
    getCurrentUser: function() {
      return currentUser;
    }
  };
}]);
