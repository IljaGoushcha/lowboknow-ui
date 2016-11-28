/**
 * Created by ig on 11/23/16.
 */
'use strict';

/**
 * RegistrationCtrl
 * Controller of the lowboknowUiOneApp
 */
angular.module('registrationModule')
  .controller('RegistrationCtrl', [
    'AuthService',
    'RegistrationService',
    '$location',
    '$state',
    function (AuthService,
              RegistrationService,
              $location,
              $state) {


      var vm = this;
      vm.newUser = {};
      vm.vistiorType = 'general';
      vm.currentStep = 1;

      vm.onLoad = function() {
        console.log('RegistrationCtrl inside onLoad()');
        $state.transitionTo('registration.one');
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

      vm.goToStep = function(step) {
        console.log('go to step: ' + step);
        try {
          $state.transitionTo('registration.' + step);
        }
        catch (e) {
          console.log(e);
        }
      };

      vm.onLoad();

    }]);
