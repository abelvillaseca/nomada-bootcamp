const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2);
ctx.fill();