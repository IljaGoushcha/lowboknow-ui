/**
 * Created by ig on 11/29/16.
 */
'use strict';

/**
 * RecaptchaCtrl
 * Controller of the lowboknowUiOneApp
 */
angular.module('RecaptchaModule')
  .controller('RecaptchaCtrl', [function () {

      var vm = this;

      vm.onLoad = function() {
        console.log('RecaptchaCtrl inside onLoad()');
      };

      vm.onLoad();

    }]);
