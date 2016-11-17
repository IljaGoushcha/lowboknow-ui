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
    $scope.currentUser = {};
    $scope.allCases = [];

    $scope.onLoad = function() {
      console.log('inside onLoad()');
    };

    $scope.registerNewUser = function() {



    };

    $scope.getAllCases = function() {
      console.log('inside getAllCases()');
      $http.get('http://localhost:3001/api/Cases').then(function(response) {
        console.log('Success!!!');
        $scope.setAllCases(response.data);
      }, function(error) {
        console.log('Error!!!');
        console.log(error);
      });
    };

    $scope.setAllCases = function(cases) {
      console.log(cases);
      this.allCases = cases;
    };

    $scope.switchPage = function(pageName) {
      this.currentPage = pageName;
      console.log(this.currentPage);
    };

    $scope.addCase = function() {
      console.log('inside addCase()');
      var data = this.newCase;
      var config = {};
      console.log(data);

      $http.post('http://localhost:3001/api/Cases', data, config).then(function(response) {
        console.log('Success!!!');
        console.log(response);
      }, function(error) {
        console.log('Error!!!');
        console.log(error);
      });
    };

    $scope.onLoad();

  }]);
