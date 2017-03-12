"use strict";
console.log("factory file");

app.factory("GuideFactory", function ($http, $q) {
  // This function will grab our guides from our json
  let getGuides = function(){
      return $q( (resolve, reject) => {
        // Where to get it from
        $http.get("/data/guides.json")
        .then( (data) => {
          console.log("data from inside getGuides:", data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
      });
  };

  return {getGuides};

});