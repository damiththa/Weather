(function () {
    "use strict";   
    var SecretsService = function ($http) {
        var SecretsMethods = {
            getKeys: function(){
                return $http.get('Secrets/secretKeys.json');
            }
        };
        return SecretsMethods;
    };
    
    SecretsService.$inject = ['$http'];
        
    angular.module('appWeather')
	  .service('SecretsService', SecretsService);    
}());