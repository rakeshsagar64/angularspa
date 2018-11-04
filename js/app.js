let app =angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when("/page1",{
        templateUrl:"template/page1.html"
    }).when("/page2",{
        templateUrl:"template/page2.html"
    }).when("/page3",{
        templateUrl:"template/page3.html"
    });
})

app.controller("myController",function($scope){
    $scope.title="Hello"
})