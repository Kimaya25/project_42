

var hr,mn,sc;

 
var clock2;



function setup() {
  createCanvas(400,400);
 
  
  angleMode(DEGREES);
  

}

function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90);

  
  hr = hour();
  mn = minute();
sc = second();
  scAngle = map(sc, 0, 60 , 0, 360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  mnAngle = map(mn,0,60,0,360);
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  hrAngle = map(hr %12,0,12,0,360);
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  strokeWeight(12);
  noFill();
  arc(0,0,300,300,0,scAngle);
  arc(0,0,280,280,0,mnAngle);

  

  
  drawSprites();
}