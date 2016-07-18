var app = angular.module('portfolioApp',[]);
app.controller('portfolioController', function($scope){
    $scope.portfolios = [
        {
            url : 'portfolio/01.html',
            thumb : 'images/thumb/01.jpg',
            date : ‘2015’,
            name : ‘손소의프로젝트’
        },
        {
            url : 'portfolio/01.html',
            thumb : 'images/thumb/01.jpg',
            date : '작업년도',
            name : '프로젝트명'
        }
    ];
});
