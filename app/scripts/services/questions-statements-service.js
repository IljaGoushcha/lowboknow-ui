/**
 * Created by ig on 12/1/16.
 */
'use strict';

angular.module('servicesModule').factory('QuestionsStatementsService', ['$http', function($http) {

  return {
    getQuestionsStatements: function(successCallback, errorCallback) {
      return $http.get('http://localhost:3001/api/QuestionsStatements').then(successCallback, errorCallback);
    }
  };

}]);
