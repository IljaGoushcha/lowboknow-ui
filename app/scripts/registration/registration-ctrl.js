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
    'vcRecaptchaService',
    function (AuthService,
              RegistrationService,
              $location,
              $state,
              vcRecaptchaService) {


      var vm = this;
      vm.newAppUser = {};
      vm.newAddress = {};
      vm.newUserType = {};
      vm.newQuestionnaire = {};
      vm.vistiorType = 'general';
      vm.recaptchaKey = '6LcLWg0UAAAAAObm56SvUAW7BEfIgzmxryjWg2WN';
      vm.recaptchaId = '';

      vm.onLoad = function() {
        console.log('RegistrationCtrl inside onLoad()');
        var myParams = $location.search();
        $state.transitionTo('registration.initial');
        console.log(myParams);
        if (myParams.type && myParams.type === 'client') {
          console.log('looks like we got a client');
          vm.newUserType.value = 'client';
        } else if (myParams.type && myParams.type === 'newAttorney') {
          console.log('looks like we got a newAttorney');
          vm.newUserType.value = 'newAttorney';
        } else if (myParams.type && myParams.type === 'experiencedAttorney') {
          console.log('looks like we got an experiencedAttorney');
          vm.newUserType.value = 'experiencedAttorney';
        } else {
          console.log('looks like we got a general visitor');
          vm.newUserType.value = 'client';
        }
      };

      vm.setRecaptchaId = function(widgetId) {
        console.log('widgetId: ' + widgetId);
        vm.recaptchaId = widgetId;
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

      // Need to think of better mechanism for navigation decisions
      vm.goToStep = function(currentStep) {
        var nextStep = '';

        switch(currentStep) {
          case 'initial':
            if (vm.newUserType.value === 'client') {
              nextStep = 'income';
            } else {
              nextStep = 'bar';
            }
            break;
          case 'income':
            nextStep = 'full';
            break;
          case 'bar':
            nextStep = 'full';
            break;
          default:
            console.log('could not find proper next step');
            console.log(vcRecaptchaService.getResponse(vm.recaptchaId));
        }

        console.log('AppUser: ', vm.newAppUser);
        console.log('Address: ', vm.newAddress);
        console.log('UserType', vm.newUserType);
        console.log('Questionnaire', vm.newQuestionnaire);
        console.log('go to step: ' + nextStep);


        try {
          $state.transitionTo('registration.' + nextStep);
        }
        catch (e) {
          console.log(e);
        }
      };

      vm.onLoad();

    }]);
