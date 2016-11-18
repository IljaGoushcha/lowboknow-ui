/**
 * Created by ig on 11/17/16.
 */
'use strict';

/**
 * @ngdoc function
 * @name lowboknowUiOneApp.controller:ClientsCtrl
 * Controller of the Clients
 */
angular.module('clientModule')
  .controller('ClientCtrl', [

    function () {

      var vm = this;

      vm.onLoad = function() {
        console.log('ClientCtrl inside onLoad()');
      };

      vm.onLoad();

    }]);
