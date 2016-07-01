(function () {
    "use strict";
    var mainController = function ($scope, $interval, SecretsService, ForecastIOService, PageReloadFactory) {
      
      var Secret_return = SecretsService.getKeys();
      Secret_return.then(function(data){
        var Secrets = data;
        $scope.Forecast_secrets = Secrets.data.secrets.Forecast;
        $scope.headerCityZip = Secrets.data.secrets.Forecast.headerCityZip;
        //console.log($scope.Forecast_secrets);
		
        var ReloadIn,
            PageReloader;
        //Page Reload - Start
        $scope.Start_PageReloader = function(){
          $scope.Forecasting();
          $scope.Stop_PageReloader();
          ReloadIn = PageReloadFactory.getPageReloadIn();
          PageReloader = $interval(function(){$scope.Start_PageReloader(); /*console.log(ReloadIn);*/},ReloadIn);
        };
        //Page Reload - Stop
        $scope.Stop_PageReloader = function(){	  	
        $interval.cancel(PageReloader);
        };
        $scope.$on('$destroy', function(){$interval.cancel(PageReloader);});	 

        //Forecast data
        $scope.Forecasting = function(){
          var Forecast_return = ForecastIOService.getForecast($scope.Forecast_secrets);
          Forecast_return.then(function(data){
            $scope.Forecast_data = data;
              //console.log($scope.Forecast_data);
              //console.log($scope.Forecast_data.data.currently);
              //console.log($scope.Forecast_data.data.daily);
              //Currently
              var Forecast_currently = $scope.Forecast_data.data.currently;
              $scope.NowSummary = Forecast_currently.summary;
              $scope.Icon = Forecast_currently.icon;
              $scope.FeelsLike = Forecast_currently.apparentTemperature;
              $scope.Temp = Forecast_currently.temperature;
              //Daily
              var Forecast_daily = $scope.Forecast_data.data.daily.data[0]
              $scope.DailySummary = Forecast_daily.summary;
              $scope.MaxTemp = Forecast_daily.temperatureMax;
              $scope.MaxTemp_Time = Forecast_daily.temperatureMaxTime;
              $scope.MinTemp = Forecast_daily.temperatureMin;
              $scope.MinTemp_Time = Forecast_daily.temperatureMinTime;

              //Skycon
              var Skycon = new Skycons({
                "color": "#666"
              });
              var weatherType = $scope.Icon,
                elements = angular.element(document.getElementsByClassName('SkyConIs'));
              Skycon.set(elements[0], weatherType);
              Skycon.play();
          });
        };

        //Init
        function init(){
          $scope.Start_PageReloader();
        };
        init();

      }).catch(function(){
        console.log('Error loading secrets');
      });
    };
    
    mainController.$inject = ['$scope', '$interval', 'SecretsService', 'ForecastIOService', 'PageReloadFactory'];

    angular.module('appWeather')
        .controller('mainController', mainController);    
}());

