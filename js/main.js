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
		{id: 1, text: 'Item 1', bought: true},
		{id: 2, text: 'Item 2', bought: false},
		{id: 3, text: 'Item 3', bought: false}
	];
	$scope.addItem = function() {
		$scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.items.length + 1) });
		$scope.itemEntry = '';
	}
	
  });
})(app);





