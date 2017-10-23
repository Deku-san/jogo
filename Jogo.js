var x = 90;
var y = 520;
var a = 1070
var b = 480
var vidas = 100 + "%";
var pontos = 0;
var nivel = 1;
function setup() {
	createCanvas(1200, 650);
	background(0);
	
}
function draw() {
	background(0);
	textSize(32);
	fill(255,255,255);
	text("Vida: " + vidas, 10, 650);
	text("Pontos: " + pontos, 1060, 650);
	text("Nível: " + nivel, 550, 650);
	
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
  rect(600,0,10,600);
  
  //Área do protagonista
  fill(0,0,255);
  rect(0,400,600,10);
  rect(0,200,600,10);
  rect(190,0,10,600);
  rect(390,0,10,600);
  
  //Área do antagonista
  fill(255,0,0);
  rect(1000,0,10,600);
  rect(800,0,10,600);
  rect(610,400,600,10);
  rect(610,200,600,10);
}
function keyPressed() {
    
    if(keyCode === LEFT_ARROW){
	if(x>90){
	    x-=205
	}
    }
    if ((keyCode === RIGHT_ARROW) && x<=300){
    	x+=205;
    }
    if ((keyCode === UP_ARROW) && y>120){
    	y-=210;
    }
    if ((keyCode === DOWN_ARROW) && y<505){
    	y+=210;
    }
}
