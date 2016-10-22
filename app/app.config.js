(function(){
'use strict';

angular
	.module('enterprise')
	.config(config)
	.run(enterpriseRun);

	config.inject = ['$httpProvider', '$urlRouterProvider', '$stateProvider'];
	function config($httpProvider, $urlRouterProvider, $stateProvider){
		//Enable cross domain call
		$httpProvider.defaults.useXDomain = true;

		//redirect non existing url to page not found 
		$urlRouterProvider.otherwise('/enterprise/home');

		//Remove the header used to identify ajax call that wold prevent CORS from working 
		delete $httpProvider.defaults.headers.common['X-Reqested-With'];
	}

	enterpriseRun.$inject = ['$rootScope', '$state'];
	function enterpriseRun($rootScope, $state){
		$rootScope.$state = $state;
	}
})();