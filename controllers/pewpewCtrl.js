angular.module('gameApp').controller('pewpewCtrl', function($scope) {



// Cross-browser support for requestAnimationFrame
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();


// Canvas Creation
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.setAttribute("id", 'pewpewCanvas');
canvas.width = 640;
canvas.height = 850;
document.body.appendChild(canvas);


// Game Loop
var lastTime;
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
};








})