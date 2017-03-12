"use strict";
console.log("app.js file");
var app = angular.module('TravelApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: "partials/guideList.html",
    controller: "BookCtrl"
  }).
  otherwise("/");
});