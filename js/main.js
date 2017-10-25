var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html"
    })
    .when("/list", {
        templateUrl : "templates/list.html"
    })




});