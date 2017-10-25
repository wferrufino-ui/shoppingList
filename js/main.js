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


(function(app){
  "use strict";
  app.controller("ShopCtrl", function($scope){
   	$scope.items = [
		{id: 1, text: 'Milk', bought: true},
		{id: 2, text: 'Bread', bought: false},
		{id: 3, text: 'Cheese', bought: false}
	];
	$scope.addItem = function() {
		$scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.items.length + 1) });
		$scope.itemEntry = '';
	}
	
  });
})(app);





