
// variables
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let rightPressed = false;
let leftPressed = false;


// this draws the ball on the screen
function drawBall() {
    c.beginPath();
    c.arc(x, y, ballRadius, 0, Math.PI * 2);
    c.fillStyle = "#0095dd";
    c.fill();
    c.closePath();
}

function drawPaddle() {
    c.beginPath();
    c.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    c.fillStyle = "#0095dd";
    c.fill();
    c.closePath();
}

// this clears the screen and draws the ball every frame
function draw() {
    c. clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    if (rightPressed) {
        paddleX = Math.min(paddleX + 5, canvas.width - paddleWidth);
    }  else if (leftPressed) {
        paddleX = Math.max(paddleX - 5, 0);
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    }   else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    }   else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

setInterval(draw, 10);