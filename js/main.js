var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: 'HomeCtrl',
        templateUrl : "templates/home.html"
    })
    .when("/list", {
        controller: 'ShopCtrl',
        templateUrl : "templates/list.html"        
    })
});


(function(app){
  "use strict";

  // List (shopping list page)
  app.controller("ShopCtrl", function($scope, $rootScope, $filter){

    $rootScope.showCopyRight = true;

   	$scope.items = [];


     

    $scope.nextId = $scope.items.length + 1
 
    $scope.clearBought = function() {
        $scope.items = _.filter($scope.items, function(item) {
            return !item.bought;
        });
    }
 
    $scope.addItem = function() {
        $scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.nextId) });
        $scope.nextId++;
        $scope.itemEntry = '';
    }
 
    $scope.$watch("items", function(n, o) {
        var trues = $filter("filter")(n, {
            bought: true
        });
        $scope.flag = trues.length;
    }, true);

    $scope.isBought = function(bought) {
        return (bought) ? 'bought' : 'not-bought';
    }
  	
  });

  // Home Page
  app.controller("HomeCtrl", function($scope, $rootScope){
    
    $rootScope.hideClearBtn = true;
    $rootScope.showCopyRight = false;

  });

})(app);


