
//registerService.js
var app = angular.module('myApp');
app.factory('RegisterService', function ($http) {
    return {
        register: function (params) {
            
           return $http
                .post('/users/registerUser', params)
                .then(function (response) {
                    return true;
                },function (error) {
                    console.log("error is  : ", error);
                    return false;
                });
        }
    };
});