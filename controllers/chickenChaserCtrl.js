angular.module('gameApp').controller('chickenChaserCtrl', function($scope) {

// Canvas Creation
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background Image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero Image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Chicken Image
var chickenReady = false;
var chickenImage = new Image();
chickenImage.onload = function () {
	chickenReady = true;
};
chickenImage.src = "images/chicken.png";

// Objects
var hero = {
	speed: 256
};
var chicken = {};
var chickensCaught = 0;

// Keyboard Controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset when player catches chicken
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw random chicken
	chicken.x = 32 + (Math.random() * (canvas.width - 64));
	chicken.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update Objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Collision
	if (hero.x <= (chicken.x + 32)
		&& chicken.x <= (hero.x + 32)
		&& hero.y <= (chicken.y + 32)
		&& chicken.y <= (hero.y + 32)
	) {
		++chickensCaught;
		reset();
	}
};

// Drawing
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (chickenReady) {
		ctx.drawImage(chickenImage, chicken.x, chicken.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Chickens caught: " + chickensCaught, 32, 32);
};

// Game Loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play!!!
var then = Date.now();
reset();
main();


})