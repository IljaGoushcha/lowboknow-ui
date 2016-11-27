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
      .state('registration', {
        url: '/registration',
        templateUrl: '../views/registration/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registrationCtrl'
      })
      .state('client', {
        url: '/client',
        templateUrl: '../views/client.html',
        controller: 'ClientCtrl',
        controllerAs: 'clientCtrl'
      })
      .state('email', {
        url: '/email',
        templateUrl: '../views/email.html',
        controller: 'MailchimpCtrl',
        controllerAs: 'mailchimpCtrl'
      });



});
