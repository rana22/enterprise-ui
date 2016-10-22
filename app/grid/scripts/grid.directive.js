(function(){
'use strict';

angular
	.module("enterprise-grid")
	.directive("entGrid", entGrid);

	entGrid.$inject = [ 'dataFactory'];
	function entGrid(dataFactory){
		return{
			restriction: 'AE',
			template: '<h2> Grid directive 123</h2>',
			link: function(){
				dataFactory.getUserTransactions(2).then(function(data){
					console.log("some data " + angular.toJson(data));
				});
			}
		}
	}	
})();