myApp.controller("ListLoanersController", [
  "$scope",
  "$http",
  "$route",
  "$routeParams",
  function($scope, $http, $route, $routeParams) {

    $http({
      method: "GET",
      url: `http://localhost:8080/inv`
    })
    .then(
      function(response) {
        $scope.data = response.data;
      },
      function(response) {
        alert("Problem in listing ListLoanersController");
      }
    );

    $scope.deleteLoaner = function(id) {
      $http({
        method: "POST",
        url: `http://localhost:8080/inv/${id}/delete`
      })
        .then(
          function(response) {
            $scope.data = response.data;
            $scope.status = response.status;
            $route.reload();
          },
          function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );
    };

    $scope.newPc = function() {
      var newMachine = {
        pcName: $scope.newPcName
      };

      $http({
        method: "POST",
        url: `http://localhost:8080/inv`,
        data: newMachine
      })
        .then(
          function(response) {
            $scope.data = response.data;
            $scope.status = response.status;
            $route.reload();
          },
          function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );
    };

    $scope.updateLoaner = function(myUpdatedLoaner) {
      if(myUpdatedLoaner.pcName === ''){return;};
      $http({
        method: "POST",
        url: `http://localhost:8080/inv/${myUpdatedLoaner._id}/update`,
        data: myUpdatedLoaner
      })
        .then(
          function(response) {
            $scope.data = response.data;
            $scope.status = response.status;
            $route.reload();
          },
          function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );
    };

    $scope.updateStatus = function(id) {
      $http({
        method: "POST",
        url: `http://localhost:8080/inv/${id}/status`
      })
        .then(
          function(response) {
            $scope.data = response.data;
            $scope.status = response.status;
            $route.reload();
          },
          function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );
    };

  }
]);
