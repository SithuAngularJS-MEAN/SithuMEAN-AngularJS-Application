//loginController-js 
var app = angular.module('myApp');
app.controller('RegisterController', function ($scope, $rootScope, $stateParams, $state, RegisterService,$http) {
    console.log("i am in registerController");
    $scope.registerSubmit = function () {
        var params = {
            "FirstName": $scope.firstname,
            "LastName": $scope.lastname,
            "UserName": $scope.username,
            "Password": $scope.password
        };
        
        //console.log("RegisterService.register(params) ",RegisterService.register(params));
        if (RegisterService.register(params)) {
            console.log("Registration Success");
            $scope.error = '';
            $state.transitionTo('home');
        } else {
            console.log("Registration Failed");
            $scope.error = "Something went to wrong! - Registration Failed";
        }
       
    };
});