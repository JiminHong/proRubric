myApp.controller('searchController', ['$scope', '$http','$uibModal','$location', function($scope, $http, $uibModal, $location) {
var refresh = function() {
    $http.get('api/courses').success(function(response) {
    $scope.courses = response;
    
  });
};
refresh();

$scope.search = function() {
  $http.get('api/courses/').success(function(response) {
    $scope.data = response;
  var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'search.handlebars',
      controller: 'searchInstanceController',
      size: 'sm',
      
      resolve: {
        data: function () {
          return $scope.data;

      }
    }
  })
  });
};
 
}]);



myApp.controller('searchInstanceController', function ($scope, $modalInstance, data, $http, $route, $location) {
  $scope.data = data;
  $scope.selected = {
    data: $scope.data
  };
    console.log("Scopre.data modalInstance",$scope.data);
	
	var find = function() {
	    $http.get('api/find').success(function(response) {
	    $scope.courses = response;	    
	  });
	};
	find();
})
