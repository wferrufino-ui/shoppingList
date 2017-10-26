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
  app.controller("ShopCtrl", function($scope, $rootScope){

    // if($scope.items.length >= 1) {
    //   $rootScope.hideClearBtn = false;
    // }
    // else {
    //   $rootScope.hideClearBtn = true;
    // }
      


      $rootScope.showCopyRight = true;

     	$scope.items = [
    		/* {id: 1, text: 'Item 1', bought: true} */
    	];

      $scope.clearBought = function() {
        $scope.items = _.filter($scope.items, function(item) {
          return !item.bought;
        });
      }

    	$scope.addItem = function() {
    		$scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.items.length + 1) });
    		$scope.itemEntry = '';
    	}
  	
  });

  // Home Page
  app.controller("HomeCtrl", function($scope, $rootScope){
    
    $rootScope.hideClearBtn = true;
    $rootScope.showCopyRight = false;

  });

})(app);


