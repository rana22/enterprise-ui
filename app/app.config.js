(function(){
'use strict';

angular
	.module('enterprise')
	.config(config)
	.run(enterpriseRun);

	config.inject = ['$httpProvider', '$urlRouterProvider'];
	function config($httpProvider, $urlRouterProvider){
		//Enable cross domain call
		$httpProvider.defaults.useXDomain = true;

		//redirect non existing url to page not found 
		// $urlRouterProvider.otherwise('enter-404-URL');

		//Remove the header used to identify ajax call that wold prevent CORS from working 
		delete $httpProvider.defaults.headers.common['X-Reqested-With'];		
	}

	enterpriseRun.$inject = ['$rootScope', '$state'];
	function enterpriseRun($rootScope, $state){

	}
})();