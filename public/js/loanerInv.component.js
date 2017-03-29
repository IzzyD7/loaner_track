var myApp = angular.module('myApp', ['ngRoute']);

myApp.config([
  "$routeProvider",
  function($routeProvider){

    $routeProvider

      .when("/inv", {
        templateUrl: "js/template/loaner-list.template.html",
        controller: "ListLoanersController"
      })
      .when("/inv/:loanerId", {
        templateUrl: "js/template/loaner-list.template.html",
        controller: "ListLoanersController"
      })
      .when("/inv/:loanerId/update", {
        templateUrl: "js/template/loaner-list.template.html",
        controller: "ListLoanersController"
      })
      .when("/inv/:loanerId/delete", {
        templateUrl: "js/template/loaner-list.template.html",
        controller: "ListLoanersController"
      })
      .when("/inv/:loanerId/status", {
        templateUrl: "js/template/loaner-list.template.html",
        controller: "ListLoanersController"
      })

      .otherwise("/inv");


  }


]);
