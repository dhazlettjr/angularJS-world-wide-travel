'use strict';

// this will set up the controller for the project
angular.module("travelApp").controller("travelCtrl", function($scope, travelFactory) {

  // getmushrooms is a function that will push the firebase data in a new array
  travelFactory.getTravelPlans()
  .then( (travelData) => {
$scope.books = travelData.data.guides;
console.log($scope.books)
  });
  
});
