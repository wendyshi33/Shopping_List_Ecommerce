angular.module('tobuyService', [])

	.factory('Tobuys', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/tobuys');
			},
			create : function(tobuyData) {
				return $http.post('/api/tobuys', tobuyData);
			},
			delete : function(id) {
				return $http.delete('/api/tobuys/' + id);
			}
		}
	}]);