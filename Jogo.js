//Tamanho da Bola
var tamBola = 80;
//Posição Inicial da Bola
var posXbola = 101;
var posYbola = 101;
//Posição Inicial do Quadrado
var a = 202*3 + 70;
var b = 101 - 40;
//Falso Quadrado
var c = 202*3 + 70;
var d = 101- 40;
//Posição Inicial do tiro
var posXtiro = posXbola +35;
var posYtiro = posYbola;
//Posição da barreira
var posDiv = 600;
//Cores da bola
var cor1 = 124;
var cor2 = 255;
var cor3 = 255;
//Cor do falso antagonista
var cor17 = 0;
var cor23 = 0;
var cor24 = 0;
//Cor do antagonista
var cor4 = 255;
var cor18 = 0
var cor19 = 0
//Cores da divisória
var cor5 = 0;
var cor6 = 255;
var cor7 = 0;
//Cores do lado esquerdo
var cor8 = 0;
var cor9 = 0;
var cor10 = 255;
var cor20 = 0
var cor21 = 0
var cor22 = 0
//Cor de Fundo
var cor11 = 0;
var cor12 = 0;
var cor13 = 0;
//Cores do Lado Direito
var cor14 = 255;
var cor15 = 0;
var cor16 = 0;
var vidas = 100;
var pontos = 0;
var nivel = 0;
//Velocidade do quadrado
var vel = 70
//Movimentação do Quadrado
var resultadoA= Math.floor(Math.random()*vel);
var resultadoB= Math.floor(Math.random()*vel);
var maxXquadrado = 1000
var maxYquadrado = 400
var minXquadrado = 800
var minYquadrado = 200
//Movimentação do Falso Quadrado
var resultadoC= Math.floor(Math.random()*2);
var resultadoD= Math.floor(Math.random()*2);
//Tamanho do Bloco do cenário
var tamBloco= 202;
var posAtiro = a;
var posBtiro = b+35;
var velIn = 30;
var velPr = 30;
var tela = 'inicio';
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
	imgBarreira = loadImage("barreira.png");
}
	
		cenario = [ 
  ['v', 'v', 'v', '#', '#', '#'], 
  ['v', 'v', 'v', '#', '#', '#'],
  ['v', 'v', 'v', '#', '#', '#'],
];

		
		

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

function perdeuVida(){
	if( nivel == 1){
		cor1 = 0
		cor2 = 0
		cor3 = 255
	}
	if ( nivel == 2 ){
		cor1 = 0
		cor2 = 0
		cor3 = 0
	}
	if( nivel == 3 ){
		cor1 = 0
		cor2 = 0
		cor3 = 0
	}
	if( nivel == 4 ){
		cor1 = 0
		cor2 = 0
		cor3 = 0
}
	if( nivel == 5){
		cor1 = 255
		cor2 = 255
		cor3 = 255
	}
}

function tiroBolinha(){
	//SeuTiro
	fill(0,0,255);
	ellipse(posXtiro, posYtiro, 10, 10);
	posXtiro = posXtiro + velPr
	if( ( ( posXtiro <= a + 40 ) && ( posXtiro >= a - 40 ) && ( posYtiro <= b + 40 ) && ( posYtiro >= b - 40 ) ) || (posXtiro >=1200) ){
		atirou = false;
	}
	if( ( posXtiro <= a + 40 ) && ( posXtiro >= a - 40 ) && (posYtiro <= b + 40) && (posYtiro >= b -40)){
		pontos = pontos + 100
	}
}	
function draw() {
	if(tela == 'inicio'){
		textSize(32);
		fill(0,255,255);
		text("⚪ " + " Balls vs Squares " + " ⬜", 450, 250);
		fill(255)
		text("Pressione Enter para começar", 400, 350);
		if (keyCode === ENTER && tela == 'inicio'){
					tela = 'jogo';
					nivel = 1;
				}
	}
	
	if(nivel==1 || nivel == 2 || nivel == 3 || nivel == 4 || nivel == 5 || tela == 'jogo'){
	background(0);
	textSize(32);
 	fill(255);
 	text("Chances: 🔵 " + chances, 210, 650);
	text("Vida: " + vidas + "%", 10, 650);
	text("Pontos: " + pontos, 980, 650);
	text("Nível: " + nivel, 550, 650);
	resultadoA= Math.floor(Math.random()*vel);
	resultadoB= Math.floor(Math.random()*vel);
	resultadoC= Math.floor(Math.random()*100);
	resultadoD= Math.floor(Math.random()*100);
	if(nivel == 1 || nivel == 2 || nivel == 3 || nivel == 4 || nivel == 5){
	frameRate(30);
	}
	for ( i = 0; i < cenario.length; i++ ) { 
		for ( j = 0; j < cenario[0].length; j++ ) {  
			if ( cenario[i][j] == 'v' ) {
				image(imgParede,j*tamBloco,i*tamBloco); 
				fill(cor20, cor21, cor22);
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
	fill(cor1,cor1,cor2);
	ellipse( posXbola ,posYbola, tamBola, tamBola);
  
  	//Falso Antagonista
	noStroke();
	fill(cor17, cor23, cor24);
	rect(c, d, 80, 80);
	
	//Antagonista
	noStroke();
	fill(cor4, cor18, cor19);
	rect(a, b, 80, 80);
	
  
	//Divisória
	fill(cor5,cor6,cor7);
	rect(posDiv,0,10,607);
	
	//Movimentos do Quadrado
		if( resultadoA == 1 ){
			if( a < maxXquadrado ){
				a += 202;
			}
		}
		if( resultadoA == 0 ){
			if(a > minXquadrado ){
				a -= 202;
			}
		}
		if( resultadoB == 1 ){
			if( b <= maxYquadrado ){
				b += 202;
			}
		}
			
		if( resultadoB == 0 ){
			if( b > minYquadrado ){
				b -= 202;
			}
		}
	//Movimentos do Falso antagonista
	if( resultadoC == 1 ){
		if( c < 1000 ){
			c += 202;
		}
	}
	if( resultadoC == 0 ){
		if(	c > 800 ){
			c -= 202;
		}
	}
	if( resultadoD == 1 ){
		if( d <= 400 ){
			d += 202;
		}
	}
	if( resultadoD == 0 ){
		if( d > 200 ){
			d -= 202;
		}
	}
	//Item
	if(vetorX[i] == posXbola && vetorY[j] == posYbola){
		if(pontos == 500 || pontos == 800 || pontos == 850 || pontos == 1100 || pontos == 1150 || pontos == 1900 || pontos == 1950  || pontos == 2400 || pontos == 2450 || pontos == 3000 || pontos == 3050 || pontos == 4000 || pontos == 4050 || pontos == 4500 || pontos == 4550 || pontos == 5000 || pontos == 5500 || pontos == 6050 || pontos == 6000 || pontos == 6500 || pontos == 6550 || pontos == 9000 || pontos == 9050 || pontos == 10000 || pontos == 10050 ){
			vidas += 10
			pontos += 50	
			if(nivel == 1 || nivel == 2 || nivel == 3 || nivel == 4){
				vetorX[i] = 101 + 202*(Math.floor(random(0,3)))
				vetorY[j] = 101 + 202*(Math.floor(random(0,3)))
			}
		if( vidas > 100){
			vidas = 100
			chances += 1
		}
	}
}
	if(pontos == 500 || pontos == 800 || pontos == 850 || pontos == 1100 || pontos == 1150 || pontos == 1900 || pontos == 1950  || pontos == 2400 || pontos == 2450 || pontos == 3000 || pontos == 3050 || pontos == 4000 || pontos == 4050 || pontos == 4500 || pontos == 4550 || pontos == 5000 || pontos == 5500 || pontos == 6050 || pontos == 6000 || pontos == 6500 || pontos == 6550 || pontos == 9000 || pontos == 9050 || pontos == 10000 || pontos == 10050 ){
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
	
	//NIVEL 2
	if(pontos >= 2000){
		nivel = 2
	}
	if(nivel == 2){
		velIn = 40
		vel = 20
		resultadoA= Math.floor(Math.random()*vel);
		resultadoB= Math.floor(Math.random()*vel);
		cor1 = cor3
		cor9 = 255
		cor10 = 0
		cor6 = 0
		cor7 = 255
		cor17 = 124
		cor23 = 124
		cor24 = 255
		cor11 = 124;
		cor12 = 124;
		cor13 = 255;
	}
}
	//NIVEL 3
	if(pontos >= 4500){
		nivel = 3;
	}
	if(nivel == 3){
		velIn = 30;
		vel = 20
		resultadoA= Math.floor(Math.random()*vel);
		resultadoB= Math.floor(Math.random()*vel);
		resultadoC= Math.floor(Math.random()*vel);
		resultadoD= Math.floor(Math.random()*vel);
		cor11 = 0
		cor17 = 255
		cor24 = 0
		cor23 = 0
	}
	
	//NIVEL 4
	if(pontos >= 7500){
		nivel = 4;
	}
	if(nivel == 4) {
		velIn = 50;
		vel = 10
		velPr = 50
		resultadoA= Math.floor(Math.random()*vel);
		resultadoB= Math.floor(Math.random()*vel);
		cor1 = 255
		cor2 = 0
		cor3 = 255
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
		cor17 = 255
		cor23 = 0
		cor24 = 0
	}
	
	
	//NIVEL 5	
	if(pontos >= 11000){
		nivel = 5
	}

	if(nivel == 5){
		vel = 10
		resultadoA= Math.floor(Math.random()*vel);
		resultadoB= Math.floor(Math.random()*vel);
		resultadoC= Math.floor(Math.random()*vel);
		resultadoD= Math.floor(Math.random()*vel);
		cor11 = 0;
		cor17 = 0;
		posDiv = 202
		posXbola = 101;
		velIn = 50;
		velPr = 50
		cor1 = 0
		cor2 = 0
		cor3 = 0
		cor4 = 255
		cor6 = 0
		cor18 = 255
		cor19 = 255
		cor20 = 124;
		cor21 = 124;
		cor22 = 255;
		cor11 = 0;
		cor12 = 0;
		cor13 = 0; 
		cor14 = 0; 
		cor15 = 0; 
		cor16 = 255; 
		cor8 = 255; 
		cor9 = 0; 
		cor10 = 0
}

	
	//Animação da Morte
	if(vidas <= -10 && (nivel == 1 || nivel == 2 || nivel == 3 || nivel == 4 || nivel == 5 )){
		chances--
		vidas = 100
		frameRate(2)
	}
	if( vidas == 0 ){
		perdeuVida()
		vidas -= 10
	}
	if(vidas == 100){
		if(nivel == 1){
			cor1 = 124
			cor2 = 255
			cor3 = 255
		}
		if(nivel == 2){
			cor1 = 255
			cor2 = 255
			cor3 = 255
		}
		if(nivel == 3){
			cor1 = 255
			cor2 = 255
			cor3 = 255
		}
		if(nivel == 4){
			cor1 = 255
			cor2 = 0
			cor3 = 255
		}
		if(nivel == 5){
			cor1 = 0
			cor2 = 0
			cor3 = 0
		}
		
	}
	
	//GANHAR
	if(pontos >= 15000){
		tela = 'ganhou'
	}
	if(tela == 'ganhou'){
		background(0);
		textSize(32);
		fill(255);
		text("Parabéns, Você Ganhou 😁", 400, 350)
		text("Pressione F5 para recomeçar", 400, 400)
		if(tela == 'ganhou' && keyCode === ENTER){
			tela = 'inicio'
		}
	}

	//Fim de Jogo
		if(chances < 0){
			tela = 'perdeu'
		}
	if(tela == 'perdeu'){
		background(0);
		textSize(32);
		fill(255);
		text("Você perdeu ☠", 400, 350)
		text("Pressione F5 para recomeçar", 400, 400)
		if(tela === 'perdeu' && keyCode === ENTER){
			tela = 'inicio'
		}
	}
}
	
function keyPressed() {
	for (i=1; i < 4; i++) { 
    	for (j=1; j < 4; j++) {  
      		if ( cenario[i][j] == 'v' ) {
				if(keyCode === LEFT_ARROW && nivel !=5 ){
					if( posXbola > 200 ){
						j -= 1/2;
						posXbola -= 101;
					}
				}
				if(keyCode === RIGHT_ARROW && nivel !=5){
					if( posXbola <= 500 ){
						j += 1;
						posXbola += 101;
					}
				}
				if (keyCode === UP_ARROW){
					if( posYbola >= 200 ){
						j = j
						i -= 1;
						posYbola -= 101;
					}
				}
				if (keyCode === DOWN_ARROW){
					if( posYbola <= 500 ){
						j = j
						i += 1;
						posYbola += 101;
					}
				}
			}
		}
	}
}
