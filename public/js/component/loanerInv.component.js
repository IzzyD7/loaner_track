var myApp = angular.module('myApp', ['ngRoute']);

myApp.config([
  "$routeProvider",
  function($routeProvider){

    $routeProvider

      .when("/inv", {
        templateUrl: "js/templates/loaner-list.template.html",
        controller: "ListLoanersController"
      })
      .when("/inv/:loanerId", {
        templateUrl: "js/templates/loaner-list.template.html",
        controller: "ListLoanersController"
      })
      .when("/inv/:loanerId/update", {
        templateUrl: "js/templates/loaner-list.template.html",
        controller: "ListLoanersController"
      })
      .when("/inv/:loanerId/delete", {
        templateUrl: "js/templates/loaner-list.template.html",
        controller: "ListLoanersController"
      })
      .when("/inv/:loanerId/status", {
        templateUrl: "js/templates/loaner-list.template.html",
        controller: "ListLoanersController"
      })

      .otherwise("/inv/");


  }


]);
