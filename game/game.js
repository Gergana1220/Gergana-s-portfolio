const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const colorPink   = "#FAE3E3";
const colorGray   = "#575A4B";
const colorBlack  = "#2A2C24";
const colorGreen  = "#C1FF9B";
const colorPurple = "#846B8A";

const playerWidth  = 100;
const playerHeight = 100;
const playerColor = colorPurple;
let x = 400;
let y = 300;

function update() {
    x = x + 5;

    context.clearRect(0, 0, 800, 600);

    context.fillStyle = playerColor;
    context.fillRect(
        x - (playerWidth / 2),
        y - (playerHeight / 2),
        playerWidth,
        playerHeight);

    requestAnimationFrame(update);
}

update();