var x = 90;
var y = 520;
function setup() {
	createCanvas(1200, 600);
	background(0);
}
function draw() {
	background(0);
	//Protagonista
  fill(124,124,255);
  stroke(255, 0, 0);
  ellipse(x, y, 80, 80);
  
  //Antagonista
  noStroke();
  fill(255, 0, 0);
  rect(1100, 480, 80, 80);
  
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
	if(x>=40){
	    x-=120
	}
    }
    if ((keyCode === RIGHT_ARROW) && x<=535){
    	x+=120;
    }
    if ((keyCode === UP_ARROW) && y>=90){
    	y-=120;
    }
    if ((keyCode === DOWN_ARROW) && y<=520){
    	y+=120;
    }
}
