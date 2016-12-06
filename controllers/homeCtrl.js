angular.module('gameApp').controller('homeCtrl', function($scope, $state) {

	$scope.goto = function(route) {
		$('canvas').remove();
		$state.go(route)
	}



})