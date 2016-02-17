myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, data, $http, $route, $location) {
  $scope.data = data;
  $scope.selected = {
    data: $scope.data
  };
	$scope.update = function() {
	  console.log("======", $scope.data);
	  $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {
	  $modalInstance.close();
	})
};

	var refresh = function() {
	    $http.get('api/courses').success(function(response) {
	    $scope.courses = response;
	    
	  });
	};

	$scope.exit = function() {
	  $modalInstance.close();

	};

	$scope.remove = function(id) {
	  $http.delete('api/courses/' + id).success(function(response) {
	  $modalInstance.close();

	  });
	};


})
