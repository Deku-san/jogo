//Tamanho da Bola
var tamBola = 80;
//Posição Inicial da Bola
var posXbola = 101;
var posYbola = 101;
//Posição Inicial do Quadrado
var a = 202*3 + 70;
var b = 101 -40;
//Posição Inicial do tiro
var posXtiro = posXbola +35;
var posYtiro = posYbola;
//Cores da bola
var cor1 = 124
var cor2 = 255
var cor3 = 255
//Cor do antagonista
var cor4 = 255
//Cores da divisória
var cor5 = 0
var cor6 = 255
var cor7 = 0
//Cores do lado esquerdo
var cor8 = 0
var cor9 = 0
var cor10 = 255
//Cor de Fundo
var cor11 = 0
var cor12 = 0
var cor13 = 0
//Cores do Lado Direito
var cor14 = 255
var cor15 = 0
var cor16 = 0
var vidas = 100;
var pontos = 0;
var nivel = 0;
//Movimentação do Quadrado
var resultadoA= Math.floor(Math.random()*2);
var resultadoB= Math.floor(Math.random()*2);
//Tamanho do Bloco do cenário
var tamBloco= 202;
var posAtiro = a;
var posBtiro = b+35;
var velIn = 30;
var velPr = 30;
var tela = 1;
var vetorX = [];
var vetorY = [];
var i=0;
var j=0;
var atirou = false;
var chances = 3;

function setup() {
	createCanvas(1200, 665);
	background(0);
	for(i=0; i<=10; i++){
		vetorX[i] = 101 + 202*(Math.floor(random(0,2)))
	}
	for(j=0; j<=10; j++){
		vetorY[j] = 101 + 202*(Math.floor(random(0,2)))
	}
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
	if(nivel == 4){
		cenario = [ 
  ['v', 'v', 'v', 'v', '#', '#', '#', '#'], 
  ['v', 'v', 'v', 'v', '#', '#', '#', '#'],
  ['v', 'v', 'v', 'v', '#', '#', '#', '#'],
  ['v', 'v', 'v', 'v', '#', '#', '#', '#'],
];
	}
		

function Item(cx,cy){
	ellipse(cx,cy, 20, 20);
}

function tiro(){
	//Tiro
	fill(255,0,0);
	rect(posAtiro, posBtiro, 10, 10);
	posAtiro= posAtiro - velIn
	if(posAtiro < - Math.random()*(400)-400 || posAtiro == 101){
		posAtiro = a
		posBtiro = b + 40
	}
		if((posAtiro < posXbola+40) && (posAtiro > posXbola-40) && (posBtiro > posYbola -40) && (posBtiro < posYbola + 40)){
		posAtiro = a
		posBtiro = b + 40
		vidas = vidas - 10
		}
}

function tiroBolinha(){
	//SeuTiro
	fill(0,0,255);
	ellipse(posXtiro, posYtiro, 10, 10);
	posXtiro = posXtiro + velPr
	if( ( ( posXtiro <= a + 40 ) && (posXtiro >= a - 40) && (posYtiro <= b + 40) && (posYtiro >= b-40)) || (posXtiro >=1200)){
		atirou = false;
	}
		if(( posXtiro <= a + 40 ) && (posXtiro >= a - 40) && (posYtiro <= b + 40) && (posYtiro >= b -40)){
		pontos = pontos + 100
	}


}




function draw() {
	if(nivel == 0){
		textSize(32);
		fill(255);
		text("Pressione Enter para começar", 400, 350);
		if (keyCode === ENTER && nivel ==0){
					nivel = 1
				}
	}
	
	if(nivel==1 || nivel == 2 || nivel == 3 || nivel == 4 || nivel == 5){
	background(0);
	textSize(32);
 	fill(255);
 	text("Chances: 🔵 " + chances, 210, 650);
	text("Vida: " + vidas + "%", 10, 650);
	text("Pontos: " + pontos, 1020, 650);
	text("Nível: " + nivel, 550, 650);
	resultadoA= Math.floor(Math.random()*100);
	resultadoB= Math.floor(Math.random()*100);
	if(nivel == 1){
	frameRate(30);
	}
	for ( i = 0; i < cenario.length; i++ ) { 
		for ( j = 0; j < cenario[0].length; j++ ) {  
			if ( cenario[i][j] == 'v' ) {
				image(imgParede,j*tamBloco,i*tamBloco); 
				fill(0);
				stroke(cor8,cor9,cor10);
				rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
			}
		}
	}
	for ( i = 0; i < cenario.length; i++ ) { 
		for ( j = 0; j < cenario[0].length; j++ ) {  
			if ( cenario[i][j] == '#' ) {
				image(imgTreco,j*tamBloco,i*tamBloco); 
				fill(cor11, cor12, cor13);
				stroke(cor14,cor15,cor16);
				rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
			}
		}
	}
	
	//Protagonista
	if(nivel = 1){
	fill(cor1,cor1,cor2);
	}	
	stroke(255, 0, 0);
	ellipse( posXbola ,posYbola, tamBola, tamBola);
  
	//Antagonista
	noStroke();
	fill(cor4, 0, 0);
	rect(a, b, 80, 80);
  
	//Divisória
	fill(cor5,cor6,cor7);
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
		
	if( resultadoB == 0 ){
		if( b > 200 ){
			b -= 202;
		}
	}
	if(vidas==0){
		vidas = 100
	}
	if(vetorX[i] == posXbola && vetorY[j] == posYbola){
		if(pontos == 500 || pontos == 800 || pontos == 850 || pontos == 1100 || pontos == 1150 || pontos == 1900 || pontos == 1950  || pontos == 2400 || pontos == 2450 || pontos == 3000 || pontos == 3050){
		vidas += 10
		pontos += 50	
		vetorX[i] = 101 + 202*(Math.floor(random(0,3)))
		vetorY[j] = 101 + 202*(Math.floor(random(0,3)))
		}
		if( vidas >= 100){
			vidas = 100
		}
	}
	if(pontos == 500 || pontos == 800 || pontos == 850 || pontos == 1100 || pontos == 1150 || pontos == 1900 || pontos == 1950  || pontos == 2400 || pontos == 2450 || pontos == 3000 || pontos == 3050){
		Item(vetorX[i],vetorY[j])
		}
	tiro()
	if(keyIsDown(32)){
		atirou = true;
		posXtiro = posXbola + 35
		posYtiro = posYbola
	}
	if(atirou) { 
		tiroBolinha();
	}
	if(vidas == 0){
		chances--
		vidas = 100
	}
	//NIVEL 2
	if(pontos >= 1000){
		nivel = 2
	}
}
	if(nivel == 2){
		velIn = 50
		frameRate(60);
		resultadoA= Math.floor(Math.random()*100);
		resultadoB= Math.floor(Math.random()*100);
		cor1 = cor3
		cor9 = 255
		cor10 = 0
		cor6 = 0
		cor7 = 255
			if(vidas == 0){
				pontos = 1000;
				chances --;
			}		
		}
	//NIVEL 3
	if(pontos >= 2500){
		nivel = 3;
	}
	if(nivel == 3) {
		velIn = 35;
		frameRate(60);
		resultadoA= Math.floor(Math.random()*50);
		resultadoB= Math.floor(Math.random()*50);
		cor1 = 255
		cor2 = 0
		cor5 = 255
		cor6 = 255
		cor7 = 255
		cor8 = 124
		cor9 = 124
		cor10 = 124
		cor11 = 255
		cor12 = 0
		cor13 = 0
		cor14 = 0
		cor15 = 0
		cor16 = 0
	}
	if(pontos >= 4000){
		nivel = 4;
	}
	//NIVEL 4
	if(nivel ==4){
		velIn = 35;
		frameRate(60);
		resultadoA= Math.floor(Math.random()*50);
		resultadoB= Math.floor(Math.random()*50);
	}
	if(chances<=0){
		pontos=0;
		chances=3;
		cor1 = 124
		cor2 = 255
		cor3 = 255
		//Cor do antagonista
		cor4 = 255
		//Cores da divisória
		cor5 = 0
		cor6 = 255
		cor7 = 0
		//Cores do lado esquerdo
		cor8 = 0
		cor9 = 0
		cor10 = 255
		//Cor de Fundo
		cor11 = 0
		cor12 = 0
		cor13 = 0
		//Cores do lado direito
		cor14 = 255
		cor15 = 0
		cor16 = 0
		
	}
}

	
function keyPressed() {
	
	for (i=1; i < 4; i++) { 
    	for (j=1; j < 4; j++) {  
      		if ( cenario[i][j] == 'v' ) {
        		if(keyCode === LEFT_ARROW){
					if( posXbola > 200 ){
						j -= 1/2;
						posXbola -= 101;
					}
				}
				if(keyCode === RIGHT_ARROW){
					if( posXbola <= 500 ){
						j += 1;
						posXbola += 101;
					}
				}
				if (keyCode === UP_ARROW){
					if( posYbola >= 200 ){
						i -= 1;
						posYbola -= 101;
					}
				}
				if (keyCode === DOWN_ARROW){
					if( posYbola <= 500 ){
						i += 1;
						posYbola += 101;
					}
				}
			}
		}
	}
}
