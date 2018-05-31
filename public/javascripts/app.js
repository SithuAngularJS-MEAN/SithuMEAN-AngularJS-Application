(function() {
    var app = angular.module('myApp', ['ui.router']);
    
     app.run(function($rootScope, $location, $state, LoginService) {
       console.clear();
       console.log('running');
      if(!LoginService.isAuthenticated()) {
          $state.transitionTo('login');
        }
    });
    
    app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url : '/login',
          templateUrl : 'views/login/login.view.html',
          controller : 'LoginController'
        })
        .state('home', {
          url : '/home',
          templateUrl : 'views/home/home.view.html',
          controller : 'HomeController'
        })
        .state('register', {
          url : '/register',
          templateUrl : 'views/register/register.view.html',
          controller : 'RegisterController'
        });
        
         $urlRouterProvider.otherwise('/login');
    }]);
   
  })();