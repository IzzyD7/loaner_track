angular.module("loanerInv").component("loanerInv",{
  templateUrl: "/js/template/loaner-list.template.html",
  controller: function MainCtrl ($http){
    var self = this;

    $http.get("/inv").then(function(response){
      self.loaners = response.data;
    });
  }
});
