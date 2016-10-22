(function(){
'use strict';

angular
	.module('enterprise-service')
	.factory('dataFactory', dataFactory);

	dataFactory.$inject = ['$http'];
	function dataFactory($http){

		var requestHandler = {
			getUserTransactions	: getUserTransactions,
			addTransaction		: addTransaction,
			updateTransaction	: updateTransaction,
			deleteTransaction	: deleteTransaction

		}

		function getUserTransactions(userId){
			return $http.get('/enterprise/user/transaction/getAll/'+userId)
			.then(getTransactions)
			.catch(getTransactionsFail);

			function getTransactions(response){
				return response.data;
			}

			function getTransactionsFail(error){
				// log.error("XHR failed to get all transaction for user " + userId);
			}
		}

		function addTransaction(userId){
			return $http.post('/enterprise/user/transaction/add/'+userId);
		}

		function updateTransaction(){
			return $http.put('');
		}

		function deleteTransaction(userId){
			return $http.delete('/enterprise/user/transaction/delete/'+userId);
		}

		return requestHandler;
	}
})();