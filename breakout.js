var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "teal";
ctx.fill();
ctx.closePath();

