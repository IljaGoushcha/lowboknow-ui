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
      .state('registration.one', {
        url: '/one',
        templateUrl: '../views/registration/registration-step-one.html'
      })
      .state('registration.two', {
        url: '/two',
        templateUrl: '../views/registration/registration-step-two.html'
      })
      .state('registration.three', {
        url: '/three',
        templateUrl: '../views/registration/registration-step-three.html'
      })

      .state('client', {
        url: '/client',
        templateUrl: '../views/client.html',
        controller: 'ClientCtrl',
        controllerAs: 'clientCtrl'
      });



});
