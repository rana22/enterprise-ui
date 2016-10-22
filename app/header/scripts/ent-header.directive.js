(function(){
'use strict';
angular
	.module("entprise-header")
	.directive("enterpriseHeader",entHeader);
	entHeader.$inject =[];
	function entHeader(){
		return {
			restriction: 'AE',
			templateUrl: '../views/header.html',
			scope:{

			},
			link: function(){
				
			}
		}
	};
})();