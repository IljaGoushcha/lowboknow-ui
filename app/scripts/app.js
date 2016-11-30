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
  .module('lowboknowUiOneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'appModules',
    'ui.router',
    'noCAPTCHA'
  ])
  .config(['noCAPTCHAProvider', function (noCaptchaProvider) {
    noCaptchaProvider.setSiteKey('6LcLWg0UAAAAAObm56SvUAW7BEfIgzmxryjWg2WN');
    noCaptchaProvider.setTheme('dark');
  }]);


