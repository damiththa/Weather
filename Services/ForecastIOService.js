(function () {
    "use strict";   
    var ForecastIOService = function ($http) { 
        return {
            getForecast: function(Forecast_secrets){
                return $http.jsonp(Forecast_secrets.url+Forecast_secrets.apikey+'/'+Forecast_secrets.latitude+','+Forecast_secrets.longitude+'?callback=JSON_CALLBACK', {                                      
                    headers : {                             
                        contentType: "application/json"
                    }
                });
            }
        };
    };
    
    ForecastIOService.$inject = ['$http'];
    
    angular.module('appWeather')
	  .service('ForecastIOService', ForecastIOService);
    
}());