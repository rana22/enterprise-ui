(function(){
'use strict';

angular
	.module('enterprise-service')
	.factory('httpInterceptor', httpInterceptor);

	httpInterceptor.$inject = ['$location'];

	function httpInterceptor($location){
		var _path = 'http://localhost:8080';

		return {
			request: function(){
				if(config.url.indexOf('enterprise')>-1){
					config.url = _path + config.url;
				}else{
					config.url = config.url
				}
			return config;
			},
			setPath: function(path){
				_path = path;
			},
			response: function(response){
				return response;
			},
			responseError: function(response){
				if(response.status === 404){
					$location.path("/err/pageNotFount.html")
				}
			}
		}
	}

})();