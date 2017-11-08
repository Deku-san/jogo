var x = 101;
var y = 101;
var a = 665;
var b = 55;
var vidas = 100 + "%";
var pontos = 0;
var nivel = 1;
var resultadoA= Math.floor(Math.random()*2);
var resultadoB= Math.floor(Math.random()*2);
var tamBloco= 202;
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

function draw() {
	background(0);
	textSize(32);
 	fill(255,255,255);
	text("Vida: " + vidas, 10, 650);
	text("Pontos: " + pontos, 1060, 650);
	text("Nível: " + nivel, 550, 650);
	frameRate(1);
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
	

	if(a<950){
		if(resultadoA=1){
			a+=205;
		}
	}
	if(a>665){
		if(resultadoA=0){
			a-=155;
		}
	}
	if(b<305){
		if(resultadoB=1){
			b+=205;
		}
	}
	if(b>55){
		if(resultadoB==0){
			b-=205;
		}
	}
	
	//Protagonista
	fill(124,124,255);
	stroke(255, 0, 0);
	ellipse(x, y, 80, 80);
  
	//Antagonista
	noStroke();
	fill(255, 0, 0);
	rect(a, b, 80, 80);
  
	//Divisória
	fill(0,255,0);
	rect(600,0,10,607);
	
	

}

function keyPressed() {
	
	for (i=1; i < 4; i++) { 
    	for (j=1; j < 4; j++) {  
      		if ( cenario[i][j] == 'v' ) {
        		if(keyCode === LEFT_ARROW){
					if( x > 200 ){
						j -= 1;
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
