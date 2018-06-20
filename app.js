var canvas;
var canvasContext;

function init() {
    console.log("Hi mom");
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.msGetInputContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}
