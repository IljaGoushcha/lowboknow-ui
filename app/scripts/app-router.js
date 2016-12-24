/**
 * Created by ig on 11/16/16.
 */
'use strict';

/**
 * @ngdoc overview
 * @name lowboknowUiOneApp
 * @description
 * # lowboknowUiOneApp
 *
 * Main module of the application.
 */
angular
  .module('lowboknowUiOneApp').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../views/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../views/login.html',
        controller: 'UserCtrl',
        controllerAs: 'userCtrl'
      })

      // registration related routes, for three step process
      .state('registration', {
        url: '/registration',
        templateUrl: '../views/registration/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registrationCtrl'
      })
      .state('registration.initial', {
        url: '/initial',
        templateUrl: '../views/registration/registration-initial.html'
      })
      .state('registration.income', {
        url: '/income',
        templateUrl: '../views/registration/registration-income.html'
      })
      .state('registration.full', {
        url: '/full',
        templateUrl: '../views/registration/registration-full.html'
      })
      .state('registration.bar', {
        url: '/bar',
        templateUrl: '../views/registration/registration-bar.html'
      })
      .state('registration.type', {
        url: '/type',
        templateUrl: '../views/registration/registration-type.html'
      })

      .state('client', {
        url: '/client',
        templateUrl: '../views/client.html',
        controller: 'ClientCtrl',
        controllerAs: 'clientCtrl'
      });



});
