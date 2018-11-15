var star1, star2;

var rotateSpeed;
var d;
var waveScale = 0;
function setup() {
  createCanvas(800, 600);
   d = distance(width/2,height/2,mouseX,mouseY)
  rotateSpeed = random(0.1,2*PI)
  // Pick colors randomly
  star1 = new Star(50);
  star2 = new Star(25);
}

function draw() {
  background(255);
  // Draw a circle
  ellipseMode(CENTER);
  
  d = distance(width/2,height/2,mouseX,mouseY);
  translate(width/2,height/2);
  star1.update(d,d);
  star1.display(rotateSpeed);
  
  star2.update(d,d);
  star2.display(rotateSpeed);
  
  wave();
}

// When the user clicks the mouse
function mousePressed() {
  rotateSpeed = random(0.1,2*PI);
}

function distance(x1,y1,x2,y2){
  var dx = x1-x2;
  var dy = y1-y2;
  var d = sqrt(dx*dx+dy*dy);
  return d;
}

function wave(){
  if(waveScale>400){
    waveScale = 0;
  }
  push();
    if(d>100){
    stroke(0);
    noFill();
    ellipse(0,0,waveScale,waveScale);
    waveScale+=20;
  }
  pop();
}

function Star(n){
  this.xPos = new Array(n);
  this.yPos = new Array(n);
  
  this.update = function(newX,newY){
    for(var i=0;i<this.xPos.length-1;i++){
      this.xPos[i] = this.xPos[i+1];
      this.yPos[i] = this.yPos[i+1];
    }
    this.xPos[this.xPos.length-1] = newX;
    this.yPos[this.yPos.length-1] = newY;
  };
  
  this.display = function(rotateSpeed){
    for(var i=0;i<this.xPos.length-1;i++){
      noStroke();
      fill(255-i*5);
      ellipse(this.xPos[i],this.yPos[i],i,i);
      rotate(rotateSpeed);
    }
  }
}
