'use strict';
var canvas;
var context;
var player;
var ball;
var interval;
var Player = function () {
    this.height = 20;
    this.width = 100;
    this.posX = canvas.width / 2 - this.width / 2;
    this.posY = canvas.height - this.height * 2;
    this.color = 'white';
    this.speed = 20;
    this.moveRight = function () {
        this.posX = (this.posX + this.speed) > (canvas.width - this.width) ? canvas.width - this.width : this.posX + this.speed;
    };
    this.moveLeft = function () {
        this.posX = (this.posX - this.speed) < 0 ? 0 : this.posX - this.speed;
    };
    this.draw = function () {
        context.fillStyle = this.color;
        context.fillRect(this.posX, this.posY, this.width, this.height);
    }
};

var Ball = function () {
    this.radius = 20;
    this.color = 'blue';
    this.posX = canvas.width / 2;
    this.posY = canvas.height / 2;
    this.speedX = 3;
    this.speedY = 3;
    this.move = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        if (this.posX < this.radius || this.posX > canvas.width - this.radius) {
            this.speedX = -this.speedX;
        }
        if (this.posY < this.radius) {
            this.speedY = -this.speedY;
        }
        if (this.posY + this.radius >= player.posY && this.posX >= player.posX && this.posX <= player.posX + player.width) {
            this.speedY = -this.speedY;
        }
        if (this.posY > canvas.height - this.radius) {
            stopGame();
        }
    };
    this.draw = function () {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, true);
        context.fill();
    };
};
function draw() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
    ball.move();
    ball.draw();
}
function startGame() {
    interval = setInterval(draw, 10);
}
function stopGame() {
    clearInterval(interval);
    ball.posX = canvas.width / 2;
    ball.posY = canvas.height / 2;
    player.posX = canvas.width / 2 - player.width / 2;
    draw();
}
function init() {
    canvas = document.getElementById('pong');
    context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);
    player = new Player();
    ball = new Ball();
    draw();
}
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 39:
            player.moveRight();
            break;
        case 37:
            player.moveLeft();
            break;
        case 83:
            startGame();
            break;
        case 32:
            stopGame();
            break;
    }
});

window.onload = function () {
    init();
};
