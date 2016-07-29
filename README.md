
This uses Forecast.io v2 api. 
Forecast.io claims to be "The easiest, most advanced, weather API on the web". 
https://developer.forecast.io/

Done with AngularJs. 

Usage
-----------
You need an account with Forecast.io. 
In rename the file ```None_secretKeys.json``` as ```secretKeys.json``` and in there replace _YOUR API KEY_ with your valid api key along with your _latitude_ and _longitude_
You may find your citys' coordinates by going to [LatLong.net.](http://www.latlong.net/)

Weather forecast info is called by ```ForecastIOService.js``` which takes four arguments, that are passed from ```secretKeys.json``` file.
* baseURL (required, which is _https://api.forecast.io/forecast_)
* apiKey (required)
* latitude (required)
* longitude (required)
 
Output
----
After plugging in with your parameters, code will generate this.

![this.](https://cloud.githubusercontent.com/assets/4027889/16498972/4c0cf05a-3ecc-11e6-9d8e-c2faa64f4e8b.PNG)

Also, to keep the weather into up-to-date as possible, with the use of ```PageReloadFactory.js``` this page is automatically set to refresh on the 10th minute of the hour (i.e. 9:10AM, 9:20AM etc.).

Scripts
----
css
---
* [Picnic](http://picnicss.com/)
* [Pure](http://purecss.io/)

js
---
* [Skycons](https://darkskyapp.github.io/skycons/)

Version
----
1.0 Written by [damiththa](https://github.com/damiththa)

