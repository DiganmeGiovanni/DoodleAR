

function draw() 
{
	var canvas = document.getElementById("doodle-canvas");
	if (canvas.getContext) 
	{
		var ctx = canvas.getContext("2d");

		// Botones para acciones.
		ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
		ctx.fillRect (5, 10, 35, 35);
		ctx.fillRect (5, 55, 35, 35);
		ctx.fillRect (5, 100, 35, 35);

		// Triangulos
		ctx.beginPath();
		ctx.moveTo(200, 50);
		ctx.lineTo(210, 60);
		ctx.lineTo(190, 60);
		ctx.fill();

		// Pulmon izquierdo
		ctx.beginPath();
		ctx.moveTo(430, 100);
		ctx.quadraticCurveTo(405, 80, 387, 120);
		ctx.quadraticCurveTo(382, 140, 380, 180);
		ctx.quadraticCurveTo(382, 188, 390, 187);
		ctx.quadraticCurveTo(405, 180, 430, 185);
		ctx.quadraticCurveTo(438, 150, 436, 115);
		//ctx.closePath();
		ctx.stroke();

		// Pulmon derecho
		ctx.beginPath();
		ctx.moveTo(480, 100);
		ctx.quadraticCurveTo(505, 80, 518, 120);
		ctx.quadraticCurveTo(523, 140, 525, 180);
		ctx.quadraticCurveTo(523, 188, 515, 187);
		ctx.quadraticCurveTo(500, 180, 475, 185);
		ctx.quadraticCurveTo(467, 150, 471, 115);
		ctx.stroke();

	// VIAS RESPIRATORIAS

		// Alimentacion pulmon derecho
		ctx.beginPath();
		ctx.moveTo(484, 105);
		ctx.quadraticCurveTo(475, 88, 463, 83);
		ctx.moveTo(475, 123);
		ctx.quadraticCurveTo(469, 103, 455, 94);
		ctx.stroke();


		// Alimentacion pulmon izquierdo
		ctx.beginPath();
		ctx.moveTo(426, 105);
		ctx.quadraticCurveTo(435, 88, 447, 83);
		ctx.moveTo(432, 120);
		ctx.quadraticCurveTo(441, 103, 455, 94);
		ctx.stroke();

		// Esofago
		ctx.beginPath();
		ctx.moveTo(463, 83);
		ctx.quadraticCurveTo(465, 63, 463, 43);
		ctx.quadraticCurveTo(458, 28, 430, 31);
		ctx.moveTo(447, 83);
		ctx.quadraticCurveTo(452, 63, 450, 53);
		ctx.quadraticCurveTo(450, 40, 430, 37);
		ctx.stroke();

	// SILUETA HUMANA

		// Hombro izquierdo
		ctx.beginPath();
		ctx.moveTo(378, 85);
		ctx.quadraticCurveTo(386, 75, 402, 73);
		ctx.quadraticCurveTo(415, 70, 437, 68);
		ctx.quadraticCurveTo(442, 65, 440, 50);
		ctx.quadraticCurveTo(435, 46, 428, 43);
		ctx.quadraticCurveTo(427, 40, 430, 37);
		ctx.moveTo(430, 31);
		ctx.quadraticCurveTo(431, 29, 432, 27);
		ctx.quadraticCurveTo(428, 24, 427, 22);
		ctx.quadraticCurveTo(426, 21, 434, 15);
		ctx.quadraticCurveTo(438, 13, 435, 10);
		ctx.quadraticCurveTo(437,  5, 440, 0);
		ctx.stroke();

		// Hombro derecho
		ctx.beginPath();
		ctx.moveTo(530, 85);
		ctx.quadraticCurveTo(522, 75, 506, 73);
		ctx.quadraticCurveTo(483, 70, 473, 68);
		ctx.quadraticCurveTo(476, 53, 475, 38);
		ctx.quadraticCurveTo(477, 35, 480, 32);
		ctx.quadraticCurveTo(493, 0, 473, 0);
		ctx.stroke();

	}
}
