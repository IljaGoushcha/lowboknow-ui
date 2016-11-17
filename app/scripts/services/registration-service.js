/**
 * Created by ig on 11/16/16.
 */
/**
 * Created by ig on 11/16/16.
 */
'use strict';

angular.module('lowboknowUiOneApp').factory('RegistrationService', ['$http', function($http) {

  return {
    register: function(user) {
      console.log('inside register()');
      console.log(user);

      var data = user;
      var config = {};

      $http.post('http://localhost:3001/api/appusers', data, config).then(function(response) {
        console.log('Success!!!');
        console.log(response);
      }, function(error) {
        console.log('Error!!!');
        console.log(error);
      });
    }
  };
}]);
