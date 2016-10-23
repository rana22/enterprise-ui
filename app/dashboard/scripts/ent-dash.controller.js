(function(){
'use strict';
angular
	.module("ent-dashboard")
	.controller("dashboardCtrl", dashboardCtrl);
	dashboardCtrl.$inject = ['$scope', 'dataFactory']
	function dashboardCtrl($scope, dataFactory){
		$scope.totalTranscations = 123;
		$scope.completedTransactions = 67;

		//get the transaction info
	}
})();