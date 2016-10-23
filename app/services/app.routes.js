(function(){
'use strict';

angular
	.module('enterprise-service')
	.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider){
		$stateProvider
			.state('home',{
				url:'/enterprise/home',
				templateUrl: '../views/dashboard.html',
				controller: 'dashboardCtrl'
			})
	}
})();