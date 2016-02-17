myApp.controller('dashboardController', ['$scope', '$http','$uibModal','$location', function($scope, $http, $uibModal, $location) {
//reload the page on success
  var refresh = function() {
      $http.get('api/courses').success(function(response) {
      $scope.courses = response;
    });
  };
  refresh();

  $scope.remove = function(id) {
    $http.delete('api/courses/' + id).success(function(response) {
      refresh();
    });
  };

  $scope.search = function(id) {
    $http.get('api/courses/' + id).success(function(response) {
      
      refresh();
    });
  };

  $scope.view = function(id) {
    $http.get('api/courses/' + id).success(function(response) {
      $scope.data = response;
//open up a modal to view ==========================================
    var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'view.handlebars',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        
        resolve: {
          data: function () {
            return $scope.data;
        }
      }
    })
    });
  };

  $scope.audit = function(id) {
    $http.get('api/courses/' + id).success(function(response) {
    $scope.data = response;
//open up a modal to view ==========================================
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'audit.handlebars',
      controller: 'auditController',
      size: 'lg',
      resolve: {
        data: function () {
          return $scope.data;
      }
    }
  })
  });
};

  //edit a course 
  $scope.edit = function(id) {
    $http.get('api/courses/' + id).success(function(response) {
      $scope.data = response;
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'modal.handlebars',
          controller: 'ModalInstanceCtrl',
          size: 'lg',
          resolve: {
            data: function () {
              return $scope.data;
          }
      }
    })
    });
  }; 

  $scope.update = function() {
    $http.put('api/courses/' + $scope.courses._id, $scope.courses).success(function(response) {
      refresh();
    })
  };
  $scope.deselect = function() {
    $scope.contact = "";
  }
}]);