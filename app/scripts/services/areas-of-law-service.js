/**
 * Created by ig on 11/30/16.
 */
'use strict';

angular.module('servicesModule').factory('AreasOfLawService', ['$http', function($http) {
  // var areasOfInterest = [];

  return {
    getAreasOfLaw: function(successCallback, errorCallback) {
      return $http.get('http://localhost:3001/api/AreasOfLaw').then(successCallback, errorCallback);
    },
    logout: function() {

    }
  };

}]);
