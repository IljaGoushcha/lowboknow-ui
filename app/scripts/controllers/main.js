'use strict';

/**
 * @ngdoc function
 * @name lowboknowUiOneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lowboknowUiOneApp
 */
angular.module('lowboknowUiOneApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.currentPage = 'Home';
    $scope.authenticationToken = '';

    $scope.onLoad = function() {
      console.log('inside onLoad()');
    };

    $scope.registerNewUser = function() {
      console.log('inside registerNewUser()');
      console.log(this.email);
      console.log(this.password);

      var data = {
        email: this.email,
        password: this.password
      };
      var config = {};

      $http.post('http://localhost:3001/api/users', data, config).then(function(response) {
        console.log('Success!!!');
        console.log(response);
      }, function(error) {
        console.log('Error!!!');
        console.log(error);
      });


    };

    $scope.loginUser = function() {
      var data = {
        email: this.userEmail,
        password: this.userPassword
      };
      var config = {};

      $http.post('http://localhost:3001/api/users/login', data, config).then(function(response) {
        console.log('Success!!!');
        console.log(response);
        $scope.setAuthenticationToken(response.data.id);
      }, function(error) {
        console.log('Error!!!');
        console.log(error);
      });
    };

    $scope.setAuthenticationToken = function(token) {
      this.authenticationToken = token;
      $http.defaults.headers.common.Authorization = this.authenticationToken;
      console.log('Authentication token: ' + this.authenticationToken);
    };

    $scope.logout = function() {
      var data = {};
      var config = {};

      $http.post('http://localhost:3001/api/users/logout', data, config).then(function(response) {
        console.log('Success!!!');
        console.log(response);
      }, function(error) {
        console.log('Error!!!');
        console.log(error);
      });
    };

    $scope.getAllCases = function() {
      console.log('inside getAllCases()');
    };

    $scope.switchPage = function(pageName) {
      this.currentPage = pageName;
      console.log(this.currentPage);
    };

    $scope.onLoad();

  }]);
