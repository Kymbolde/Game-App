angular.module('gameApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

	$stateProvider
            .state('home', {
                url: '/',
                templateUrl: './htmls/home.html',
                controller: 'homeCtrl'
            })
            .state('chickenChaser', {
                url: '/chickenChaser',
                templateUrl: './htmls/chickenChaser.html',
                controller: 'chickenChaserCtrl'
            })
            .state('pewpew', {
                url: '/pewpew',
                templateUrl: './htmls/pewpew.html',
                controller: 'pewpewCtrl'
            })
            .state('jumper', {
                url: '/jumper',
                templateUrl: './htmls/jumper.html',
                controller: 'jumperCtrl'
            })
})