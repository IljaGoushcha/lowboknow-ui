/**
 * Created by ig on 11/16/16.
 */
'use strict';

/**
 * @ngdoc function
 * @name lowboknowUiOneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lowboknowUiOneApp
 */
angular.module('usersModule')
  .controller('UsersCtrl', ['AuthService', 'RegistrationService', function (AuthService, RegistrationService) {

    var vm = this;

    vm.onLoad = function() {
      console.log('UsersCtrl inside onLoad()');
    };

    vm.login = function(user) {
      AuthService.login(user);
    };

    vm.logout = function() {
      AuthService.logout();
    };

    vm.register = function(user) {
      RegistrationService.register(user);
    };

    vm.onLoad();

  }]);
