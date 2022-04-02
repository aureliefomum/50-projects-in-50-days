const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, math.PI * 2, true);
}
