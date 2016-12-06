angular.module('gameApp').controller('pewpewCtrl', function($scope) {

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.setAttribute("id", 'pewpewCanvas');
canvas.width = 640;
canvas.height = 850;
document.body.appendChild(canvas);

})