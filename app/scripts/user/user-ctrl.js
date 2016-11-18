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
angular.module('userModule')
  .controller('UserCtrl', [
    'AuthService',
    'RegistrationService',
    '$location',
    function (AuthService,
              RegistrationService,
              $location) {


      var vm = this;
      vm.newUser = {};
      vm.vistiorType = 'general';

      vm.onLoad = function() {
        console.log('UserCtrl inside onLoad()');
        var myParams = $location.search();
        if (myParams.type && myParams.type === 'client') {
          console.log('looks like we got a client');
          vm.newUser.type = 'client';
        } else if (myParams.type && myParams.type === 'young-attorney') {
          console.log('looks like we got a young-attorney');
          vm.newUser.type = 'young-attorney';
        } else if (myParams.type && myParams.type === 'experienced-attorney') {
          console.log('looks like we got an experienced-attorney');
          vm.newUser.type = 'experienced-attorney';
        } else {
          console.log('looks like we got a general visitor');
          vm.newUser.type = 'client';
        }
      };

      vm.login = function(user) {
        AuthService.login(user);
      };

      vm.logout = function() {
        AuthService.logout();
      };

      vm.register = function(user) {
        console.log(user);
        RegistrationService.register(user);
      };

      vm.onLoad();

  }]);
