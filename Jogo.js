var x = 101;
var y = 101;
var a = 202*3 + 70;
var b = 101 -40;
var vidas = 100 + "%";
var pontos = 0;
var nivel = 1;
var resultadoA= Math.floor(Math.random()*2);
var resultadoB= Math.floor(Math.random()*2);
var tamBloco= 202;
var posAtiro = a
var posBtiro = b+35
function setup() {
	createCanvas(1200, 665);
	background(0);
}

function preload() {
	imgParede = loadImage("tijolo.png");
	imgTreco = loadImage("treco.png");  
}

		cenario = [ 
  ['v', 'v', 'v', '#', '#', '#'], 
  ['v', 'v', 'v', '#', '#', '#'],
  ['v', 'v', 'v', '#', '#', '#'],
]; 

function tiro(){
	
}

function draw() {
	background(0);
	textSize(32);
 	fill(255,255,255);
	text("Vida: " + vidas, 10, 650);
	text("Pontos: " + pontos, 1060, 650);
	text("Nível: " + nivel, 550, 650);
	frameRate(2);
	resultadoA= Math.floor(Math.random()*2);
	resultadoB= Math.floor(Math.random()*2);
		

	
	for ( i = 0; i < cenario.length; i++ ) { 
		for ( j = 0; j < cenario[0].length; j++ ) {  
			if ( cenario[i][j] == 'v' ) {
				image(imgParede,j*tamBloco,i*tamBloco); 
				fill(0);
				stroke(0,0,255);
				rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
			}
		}
	}
	for ( i = 0; i < cenario.length; i++ ) { 
		for ( j = 0; j < cenario[0].length; j++ ) {  
			if ( cenario[i][j] == '#' ) {
				image(imgTreco,j*tamBloco,i*tamBloco); 
				fill(0);
				stroke(255,0,0);
				rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
			}
		}
	}
	
	//Protagonista
	fill(124,124,255);
	stroke(255, 0, 0);
	ellipse(x, y, 80, 80);
	
	//Tiro
	fill(255);
	rect(posAtiro, posBtiro, 10, 10);
  
	//Antagonista
	noStroke();
	fill(255, 0, 0);
	rect(a, b, 80, 80);
  
	//Divisória
	fill(0,255,0);
	rect(600,0,10,607);
	
	
	if( resultadoA == 1 ){
		if( a < 1000 ){
			a += 202;
		}
	}
	if( resultadoA == 0 ){
		if(a > 800 ){
			a -= 202;
		}
	}
	if( resultadoB == 1 ){
		if( b <= 400 ){
			b += 202;
		}
	}
				}
	if( resultadoB == 0 ){
		if( b > 200 ){
			b -= 202;
		}
	if(posAtiro > 0){
		posAtiro - 70
	}
}
function keyPressed() {
	
	for (i=1; i < 4; i++) { 
    	for (j=1; j < 4; j++) {  
      		if ( cenario[i][j] == 'v' ) {
        		if(keyCode === LEFT_ARROW){
					if( x > 200 ){
						j -= 1/2;
						x -= 101;
					}
				}
				if(keyCode === RIGHT_ARROW){
					if( x <= 500 ){
						j += 1;
						x += 101;
					}
				}
				if (keyCode === UP_ARROW){
					if( y >= 200 ){
						i -= 1;
						y -= 101;
					}
				}
				if (keyCode === DOWN_ARROW){
					if( y <= 500 ){
						i += 1;
						y += 101;
					}
				}
			}
		}
	}
}
