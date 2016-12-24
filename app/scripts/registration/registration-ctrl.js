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
    'AreasOfLawService',
    'QuestionsStatementsService',
    'lodash',
    function (AuthService,
              RegistrationService,
              $location,
              $state,
              vcRecaptchaService,
              AreasOfLawService,
              QuestionsStatementsService,
              lodash) {


      var vm = this;
      vm.newAppUser = {};
      vm.newAddress = {};
      vm.newQuestionnaire = {};
      vm.vistiorType = 'general';
      vm.recaptchaKey = '6LcLWg0UAAAAAObm56SvUAW7BEfIgzmxryjWg2WN';
      vm.recaptchaId = '';
      vm.areasOfLaw = [];
      vm.selectedAreasOfLaw = [];
      vm.questionsStatements = [];

      vm.onLoad = function() {
        console.log('RegistrationCtrl inside onLoad()');
        var myParams = $location.search();

        // load all areas of law
        AreasOfLawService.getAreasOfLaw(function(response) {
          angular.copy(response.data, vm.areasOfLaw);
          console.log(vm.areasOfLaw);
        }, function(error) {
          console.log(error);
        });

        // load all questions and statements
        QuestionsStatementsService.getQuestionsStatements(function(response) {
          angular.copy(response.data, vm.questionsStatements);
          lodash.forEach(vm.questionsStatements, function(elem) {elem.checked = false;});
          console.log(vm.questionsStatements);
        }, function(error) {
          console.log(error);
        });

        $state.transitionTo('registration.type');
        console.log(myParams);
        if (myParams.type && myParams.type === 'client') {
          console.log('looks like we got a client');
          vm.newAppUser.userTypeId = 2;
        } else if (myParams.type && myParams.type === 'newAttorney') {
          console.log('looks like we got a newAttorney');
          vm.newAppUser.userTypeId = 3;
        } else if (myParams.type && myParams.type === 'experiencedAttorney') {
          console.log('looks like we got an experiencedAttorney');
          vm.newAppUser.userTypeId = 4;
        } else {
          console.log('looks like we got a general visitor');
          vm.newAppUser.userTypeId = 2;
        }
      };

      // This is needed to prevent reCaptcha error
      vm.setRecaptchaId = function(widgetId) {
        console.log('widgetId: ' + widgetId);
        vm.recaptchaId = widgetId;
      };

      vm.setUserType = function(userType) {
        console.log('userType: ' + userType);
      };

      vm.login = function(user) {
        AuthService.login(user);
      };

      vm.logout = function() {
        AuthService.logout();
      };

      vm.register = function(user) {
        vm.selectedAreasOfLaw.forEach(function(areaOfLaw) {
          delete areaOfLaw.ticked;
        });
        vm.generateQuestionnaire();
        user.address = vm.newAddress;
        user.selectedAreasOfLaw = vm.selectedAreasOfLaw;
        user.questionnaire = vm.newQuestionnaire;
        user.reCaptchaResponse = vcRecaptchaService.getResponse(vm.recaptchaId);

        console.log(user);
        RegistrationService.register(user);
      };

      // this function puts all confirmed/checked questions/statements and
      // stores them in questionnaire array. This shows what questions user
      // agreed to
      vm.generateQuestionnaire = function() {
        vm.newQuestionnaire = lodash.find(vm.questionsStatements, function(elem) {
          return elem.checked === true;
        });
      };

      // Need to think of better mechanism for navigation decisions
      vm.goToStep = function(currentStep) {
        var nextStep = '';

        switch(currentStep) {
          case 'initial':
            if (vm.newAppUser.userTypeId === 2) {
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
        }

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
