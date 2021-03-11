

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background(0);

  
  fill(200);
  textSize(40);
  text("I",520,200);   
  text("II",615,283); 
  text("III",645,410); 
  text("IV",605,530); 
  text("V",520,615); 
  text("VI",395,640); 
  text("VII",255,614);  
  text("VIII",175,525);
  text("IX",145,415);
  text("X",175,290); 
  text("XI",255,200); 
  text("XII",375,150);

  var hr = hour();
  var m = minute();
  var s = second();

  translate(400,400);
  rotate(-90)

  var scAngle = map(s,0,60,0,360);
  var mnAngle = map(m,0,60,0,360);
  var hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("cyan");
  strokeWeight(9);
  line(0,0,200,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(9);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  

  strokeWeight(11);
  noFill();
  stroke("cyan");
  arc(0,0,605,605,0,scAngle);

  stroke("red");
  arc(0,0,630,630,0,mnAngle);
  
  stroke("yellow");
  arc(0,0,655,655,0,hrAngle);
  
  
}

  
