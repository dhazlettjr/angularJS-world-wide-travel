"use strict";

// set up module and route providers

angular.module("travelApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html",
      controller: "travelCtrl"
    })
    .otherwise("/")
});
