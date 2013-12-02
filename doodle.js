
var ctx;

// Variables para particulas.
var aX1 = 40;
var aY1 = 10;
var aX2 = 40;
var aY2 = 20;
var aX3 = 40;
var aY3 = 30;
var aX4 = 40;
var aY4 = 10;
var aX5 = 40;
var aY5 = 20;
var aX6 = 40;
var aY6 = 30;

// booleanos de caida
var bajando1 = false;
var bajando2 = false;
var bajando3 = false;

// Contador
var counter = 0;

// Id de animaciones smog.
var refreshIntervalId = null;

var colorParticulas = "rgb(0, 0, 0)";

// Variables para relleno de pulmones
var red  =0;
var green=0;
var blue =0;
var alpha=0;
var afectacion = "none";

var img;
var showInfo = true;

function init() 
{
    var canvas = document.getElementById("doodle-canvas");
    if (canvas.getContext) 
    {
        ctx = canvas.getContext("2d");
        drawEscena(ctx);
        particulasSmog();
        
        drawImg();


        // Listener para el mouse
        canvas.addEventListener('click', clickManager, false);
    }
}

function drawImg()
{
    //var ctx = document.getElementById('canvas').getContext('2d');
    img = new Image();
    img.onload = function()
    {
        ctx.clearRect(0, 0, 600, 200);
        ctx.drawImage(img,0,0, 300, 200);
        drawEscena(ctx);
        drawSmog();
    }
    img.src = 'landscape2.jpg';
}

function drawEscena(ctx) 
{
    // Botones para acciones.
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (5, 10, 35, 35);
    //ctx.fillRect (5, 55, 35, 35);
    //ctx.fillRect (5, 100, 35, 35);

    //ctx.drawImage(img, 0, 0);
    

// DIBUJAMOS LOS PULMONES Y EL CUERPO HUMANO
    drawPulmones(ctx);       // Dibujamos los pulmones
    drawViasResp(ctx);      // VIAS RESPIRATORIAS
    drawSiluetaHumana(ctx);  // SILUETA HUMANA
}

function drawPulmones(ctx)
{
    //var ctx = canvas.getContext('2d');

    if (afectacion == "smok")
    {
        ctx.fillStyle = "rgba(0, 0, 0,"+ alpha +")";
        infoSmog();
    }
    else if (afectacion == "sanos") 
    {
        //ctx.fillStyle = "rgba("+red+","+green+","+blue+","+alpha+")";
        ctx.fillStyle = "rgba(255, 128, 128,"+alpha+")";
        infoSanos();
    }
    else if (afectacion == "agua")
    {
        ctx.fillStyle = "rgba(0, 196, 196,"+alpha+")";
        infoAgua();
    }
    else if (afectacion == "none") 
    {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    }

    // Pulmon izquierdo
    ctx.beginPath();
    ctx.moveTo(430, 100);
    ctx.quadraticCurveTo(405, 80, 387, 120);
    ctx.quadraticCurveTo(382, 140, 380, 180);
    ctx.quadraticCurveTo(382, 188, 390, 187);
    ctx.quadraticCurveTo(405, 180, 430, 185);
    ctx.quadraticCurveTo(438, 150, 436, 115);
    //ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Pulmon derecho
    ctx.beginPath();
    ctx.moveTo(480, 100);
    ctx.quadraticCurveTo(505, 80, 518, 120);
    ctx.quadraticCurveTo(523, 140, 525, 180);
    ctx.quadraticCurveTo(523, 188, 515, 187);
    ctx.quadraticCurveTo(500, 180, 475, 185);
    ctx.quadraticCurveTo(467, 150, 471, 115);
    ctx.fill();
    ctx.stroke();
}

function drawViasResp(ctx)
{
    //var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";

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
}

function drawSiluetaHumana(ctx)
{
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";

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

function particulasSmog()
{
    drawImg()
}

function drawSmog()
{
    //var canvas = document.getElementById('doodle-canvas');
    //var ctx = canvas.getContext('2d');
    //ctx.clearRect(0, 0, 600, 200);
    //drawImg();
    //ctx.drawImage(img, 0, 0);
    //drawEscena(ctx);
    
    if(aX1 < 230) {
        aX1+=10;
        aY1+=5;
    }
    else if(aX1 >= 230 && aX1 <= 450) {   
        aY1-=5;
        aX1+=10;
        if (aY1 <= 34) {
            aY1 +=5;
        }
    }
    if (aX1 >= 450 && aX1 <= 495) {
        aY1+=5;
        if (aY1 >= 90) {
            aX1+=4;
            aY1+=3;
        }
    }
    
    // Dibujamos la particula
    ctx.beginPath();
    ctx.moveTo(aX1, aY1);
    ctx.lineTo(aX1+2, aY1+4);
    ctx.lineTo(aX1-2, aY1+4);
    ctx.fillStyle = colorParticulas;
    ctx.fill();
    
    counter++;
    if(counter >=3)
    {
        drawSmog2(ctx);
    }
}

function drawSmog2(ctx)
{
    if(aX2 < 230) {
        aX2+=10;
        aY2+=5;
    }
    else if(aX2 >= 230 && aX2 <= 450) {   
        aY2-=5;
        aX2+=10;
        if (aY2 <= 34) {
            aY2 +=5;
        }
    }
    if (aX2 >= 450 && aX2 <= 490) {
        aY2+=5;
        if (aY2 >= 90) {
            aX2+=4;
            aY2+=3;
        }
    }

    // Dibujamos la particula
    ctx.beginPath();
    ctx.moveTo(aX2, aY2);
    ctx.lineTo(aX2+2, aY2+4);
    ctx.lineTo(aX2-2, aY2+4);
    ctx.fillStyle = colorParticulas;
    ctx.fill();

    if (counter>=5)
    {
        drawSmog3(ctx);
    }
}

function drawSmog3(ctx)
{
    if(aX3 < 230) {
        aX3+=10;
        aY3+=5;
    }
    else if(aX3 >= 230 && aX3 <= 450) {   
        aY3-=5;
        aX3+=10;
        if (aY3 <= 34) {
            aY3 +=5;
        }
    }
    if (aX3 >= 450 && aX3 <= 485) {
        aY3+=5;
        if (aY3 >= 90) {
            aX3+=4;
            aY3+=3;
        }
    }
    
    // Dibujamos la particula
    ctx.beginPath();
    ctx.moveTo(aX3, aY3);
    ctx.lineTo(aX3+2, aY3+4);
    ctx.lineTo(aX3-2, aY3+4);
    ctx.fillStyle = colorParticulas;
    ctx.fill();

    if (counter >= 7) 
    {
        drawSmog4(ctx);
    }
}

function drawSmog4(ctx)
{
    if (!bajando1)
    {
        if(aX4 < 230) {
            aX4+=10;
            aY4+=5;
        }
        else if(aX4 >= 230 && aX4 <= 450) {   
            aY4-=5;
            aX4+=10;
            if (aY4 <= 35)
            {
                aY4+=5;
            }
        }
        if(aX4 >= 450 && aY4 < 86) {
            aY4+=5;
            if (aY4 >= 87) { bajando1 = true;}
        }
    }
    if (bajando1 && aX4 >= 400) 
    {
        aY4+=2;
        aX4-=4;
    }
    
    // Dibujamos la particula
    ctx.beginPath();
    ctx.moveTo(aX4, aY4);
    ctx.lineTo(aX4+2, aY4+4);
    ctx.lineTo(aX4-2, aY4+4);
    ctx.fillStyle = colorParticulas;
    ctx.fill();
    
    if(counter >=9)
    {
        drawSmog5(ctx);
    }
}

function drawSmog5(ctx)
{
    if (!bajando2)
    {
        if(aX5 < 230) {
            aX5+=10;
            aY5+=5;
        }
        else if(aX5 >= 230 && aX5 <= 450) {   
            aY5-=5;
            aX5+=10;
            if (aY5 <= 35)
            {
                aY5+=5;
            }
        }
        if(aX5 >= 450 && aY5 < 86) {
            aY5+=5;
            if (aY5 >= 87) { bajando2 = true;}
        }
    }
    if (bajando2 && aX5 >= 406) 
    {
        aY5+=2;
        aX5-=4;
    }

    // Dibujamos la particula
    ctx.beginPath();
    ctx.moveTo(aX5, aY5);
    ctx.lineTo(aX5+2, aY5+4);
    ctx.lineTo(aX5-2, aY5+4);
    ctx.fillStyle = colorParticulas;
    ctx.fill();

    if (counter>=11)
    {
        drawSmog6(ctx);
    }
}

function drawSmog6(ctx)
{
    if (!bajando3)
    {
        if(aX6 < 230) {
            aX6+=10;
            aY6+=5;
        }
        else if(aX6 >= 230 && aX6 <= 450) {   
            aY6-=5;
            aX6+=10;
            if (aY6 <= 35)
            {
                aY6+=5;
            }
        }
        if(aX6 >= 450 && aY6 < 86) {
            aY6+=5;
            if (aY6 >= 87) { bajando3 = true;}
        }
    }
    if (bajando3 && aX6 >= 413) 
    {
        aY6+=2;
        aX6-=4;
        alpha+=0.03;
    }
    
    // Dibujamos la particula
    ctx.beginPath();
    ctx.moveTo(aX6, aY6);
    ctx.lineTo(aX6+2, aY6+4);
    ctx.lineTo(aX6-2, aY6+4);
    ctx.fillStyle = colorParticulas;
    ctx.fill();

    // reseteamos
    if (bajando3 && aX6 <= 413)
    {
        clearInterval(refreshIntervalId);
        aX1 = 40;
        aY1 = 10;
        aX2 = 40;
        aY2 = 20;
        aX3 = 40;
        aY3 = 30;
        aX4 = 40;
        aY4 = 10;
        aX5 = 40;
        aY5 = 20;
        aX6 = 40;
        aY6 = 30;

        bajando1 = false;
        bajando2 = false;
        bajando3 = false;
        counter = 0;
        refreshIntervalId = null;
        alpha = 0;
    }
}

function clickManager(e)
{
    if (refreshIntervalId == null)
    {
        refreshIntervalId = setInterval(particulasSmog, 50);
    }
}

/* Cambia los colores de las particulas y de los pulmones en base a la seleccion del usuario */
function cambiaColores()
{
    var combo = document.getElementById("tipo-particulas");

    if (combo.selectedIndex == 0)
    {
        afectacion = "none";
        colorParticulas = "rgb(25, 25, 25)";
    }
    else if (combo.selectedIndex == 1)
    {
        afectacion = "smok";
        colorParticulas = "rgb(0, 0, 0)";
    }
    else if (combo.selectedIndex == 2)
    {
        afectacion = "agua";
        colorParticulas = "rgb(0, 196, 196)";
    }
    else if (combo.selectedIndex == 3)
    {
        afectacion = "sanos";
        colorParticulas = "rgb(255, 128, 128)";
    }
    showInfo = false;
}

/* Muestra un area dezlizable con informacion sobre como el smog Afecta al aparato respiratorio. */
function infoSmog()
{
    if (!showInfo) 
    {
        location.href="#info-smog";
        showInfo = true;
    }
}

/* Muestra un area deslizable con informacion sobre como el agua afecta a los pulmones */
function infoAgua()
{
    if (!showInfo) 
    {
        location.href="#info-agua";
        showInfo = true;
    }
}

/* Muestra informacion sobre como beneficia el aire limpio a los pulmones */
function infoSanos()
{
    if (!showInfo) 
    {
        location.href="#info-sanos";
        showInfo = true;
    }
}
