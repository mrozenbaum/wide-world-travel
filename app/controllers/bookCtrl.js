"use strict";

console.log("controller file");

app.controller("BookCtrl", function($scope, GuideFactory) {
// Grad info from factory and print out to DOM
let printGuides = function(){
  // Getting the guides from the guide factory
  GuideFactory.getGuides()
  .then( (guides) => {
    console.log("data inside printGuides:", guides.data.guides);
    $scope.guides = guides.data.guides;
    // console.log("$scope.guides:", $scope.guides);
  });
};
printGuides();
$scope.newGuide = {
  title: "Baltimore",
  type: "Best city evaaaa"
};

$scope.newGuide.price = "$45"
});