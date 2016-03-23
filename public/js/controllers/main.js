angular.module('tobuyController', [])

	// inject the Tobuy service factory into our controller
	.controller('mainController', ['$scope','$http','Tobuys', function($scope, $http, Tobuys) {
		$scope.formData = {};
		$scope.loading = true;

		Tobuys.get()
			.success(function(data) {
				$scope.tobuys = data;
				$scope.loading = false;
			});


		$scope.createTobuy = function() {


			if ($scope.formData.text != undefined) {
				$scope.loading = true;


				Tobuys.create($scope.formData)

					// if successful creation, call our get function to get all the new tobuys
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.tobuys = data; 
					});
			}
		};

		// DELETE ==================================================================
		// delete a tobuy after checking it
		$scope.deleteTobuy = function(id) {
			$scope.loading = true;

			Tobuys.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.tobuys = data;
				});
		};
	}]);