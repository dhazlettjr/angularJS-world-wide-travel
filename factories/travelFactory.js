angular.module("travelApp").factory("travelFactory", function($q,$http){

    // Return a promise with XHR
    let getTravelPlans = () => {
    return $q(function(resolve, reject) {
        $http
          .get("../travel.json")
          .then(
            (books) => {
              resolve(books);
            })
             .catch((err)=> {
               reject(err);
             })
             
      });
    }
    // this will return the data
    return { getTravelPlans };
    });
    