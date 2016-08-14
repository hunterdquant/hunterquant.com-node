var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngAnimate']);
app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home'
    }).
    when('/about', {
      templateUrl: 'partials/about'
    }).
    when('/skills', {
      templateUrl: 'partials/skills'
    }).
    when('/projects', {
      templateUrl: 'partials/projects'
    }).
    when('/contact', {
      templateUrl: 'partials/contact'
    }).
    otherwise({
      redirectTo: '/'
    });
});

app.controller('ctrl', function($scope, $rootScope){
	  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
  		$rootScope.animation = currRoute.animation;
    });
});
