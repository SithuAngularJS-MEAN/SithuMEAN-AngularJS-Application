//loginService.js
var app = angular.module('myApp');
app.factory('LoginService', function ($http) {
    var admin = 'admin';
    var pass = 'password';
    var isAuthenticated = false;
    return {
        login: function (username, password) {
            return $http
            .post('/users/isRegisteredUser',{"username":username,"password":password})
            .then(function(res){
                if(res.data !== ''){
                    return true;
                }else{
                    return false;
                }
            },function(error){
                console.log("Login API Error : ",error);
                return false;
            })
            // isAuthenticated = username === admin && password === pass;
            // return isAuthenticated;
        },
        isAuthenticated: function () {
            return isAuthenticated;
        }
    };
});