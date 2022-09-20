
// variables
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;


// this draws the ball on the screen
function drawBall() {
    c.beginPath();
    c.arc(x, y, ballRadius, 0, Math.PI * 2);
    c.fillStyle = "#0095dd";
    c.fill();
    c.closePath();
}

// this clears the screen and draws the ball every frame
function draw() {
    c. clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}



setInterval(draw, 10);