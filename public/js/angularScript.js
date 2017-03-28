const app = angular.module('loanerInvApp',[]);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

const loanerList = function() {
  $http.get('/inv');
};

loanerList();
]
