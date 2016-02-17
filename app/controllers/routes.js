var myApp = angular.module('myApp', ['ngRoute','ngAnimate','ui.bootstrap','ngProgress']);

myApp.config(['$interpolateProvider', function($interpolateProvider){
  // $interpolateProvider used to differentiate uses for angular from express
  $interpolateProvider.startSymbol('{[{'); 
  $interpolateProvider.endSymbol('}]}'); 
}])

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : '/signin.handlebars',
				controller  : 'signinController'
			})
			.when('/signup', {
				templateUrl : '/signup.handlebars',
				controller  : 'signupController'
			})
			// route for the about page
			.when('/myCourse', {
				templateUrl : '/my_courses.handlebars',
				controller  : 'dashboardController'
			})
			.when('/editRubric', {
				templateUrl : '/edit_rubric.handlebars',
				controller  : 'rubricController'
			})
			.when('/audit', {
				templateUrl : '/audit.handlebars',
				controller  : 'auditController'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : '/activites.handlebars',
				controller  : 'contactController'
			})

			.when('/dashboard', {
				templateUrl : '/dashboard.handlebars',
				controller  : 'dashboardController'

			})
			.when('/form', {
				templateUrl : '/form.handlebars',
				controller  : 'AccordionDemoCtrl'
			})
			.when('/rubric', {
				templateUrl : '/rubric.handlebars',
				controller  : 'rubricController'

			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller('signinController', function($scope){

	});
	
	myApp.controller('signupController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});
