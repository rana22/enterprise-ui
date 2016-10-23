(function(){
'use strict';
	angular
		.module("ent-footer")
		.directive("enterpriseFooter", entFooter);

		function entFooter(){
			return{
				restriction: 'AE',
				templateUrl: '../views/ent-footer.html'
			}
		}
})();