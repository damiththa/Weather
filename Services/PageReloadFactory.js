(function () {
    "use strict";
    var PageReloadFactory = function () {        		
	  var factory = {};
	  
	  var bufferTime = 10; //Buffer time (in Mins.)
	  
	  //Get Page Reload in
	  factory.getPageReloadIn = function(){		
		var mod = moment().minute() % bufferTime;	  
		var ReloadPageIn = 0;
		ReloadPageIn = moment().add(mod == 0 ? bufferTime : bufferTime - mod, "m").set('second',0).diff(moment(),'ms');
		return ReloadPageIn;		  
	  }	  
	  return factory;
    };
    
    PageReloadFactory.$inject = [];
    
    angular.module('appWeather')
	  .factory('PageReloadFactory', PageReloadFactory);
}());
