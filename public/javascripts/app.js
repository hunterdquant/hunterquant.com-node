var app = angular.module('myApp', ['ngRoute', 'ngResource']);
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
    when('/resume', {
      templateUrl: 'partials/resume'
    }).
    otherwise({
      redirectTo: '/'
    });
});
