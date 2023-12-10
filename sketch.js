let horizon, j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, w1, w2, w3, w4, w5, w6, w7, w8, w9, w10;
let kitchen00, kitchen01, kitchen02;
let table00, table01, table02;
let train0, train1, train2, train00, train01, train02;
let horse0, horse1, horse2, horse00, horse01, horse02;
let snowman00, snowman01, snowman02;
let toy00, toy01, toy02;
let entrance0, entrance1, entrance2, entrance00, entrance01, entrance02;
let exit00, exit01, exit02;
let tunnel00_1, tunnel01_1, tunnel02_1;
let tunnel00_2, tunnel01_2, tunnel02_2;
let tunnel00_3, tunnel01_3, tunnel02_3;
let floorDisplay = true;

let forwardDistance = 0;
let horizontalDistance = 0;
let xPos;
let yPos;
let r;
let tables, kitchen, train, trains, horse, horses, snowman, toy, entrance, entrances, exit, tunnel_1, tunnel_2, tunnel_3;
let i;
let pow1 = 1.1;
let pow2 = 1.125;
let pow3 = 1.25;
var scribble = new Scribble(); 

function preload() {
  horizon = loadImage('assets/horizon.png');
  j1 = loadImage('assets/j1.png');
  j2 = loadImage('assets/j2.png');
  j3 = loadImage('assets/j3.png');
  j4 = loadImage('assets/j4.png');
  j5 = loadImage('assets/j5.png');
  j6 = loadImage('assets/j6.png');
  j7 = loadImage('assets/j7.png');
  j8 = loadImage('assets/j8.png');
  j9 = loadImage('assets/j9.png');
  j10 = loadImage('assets/j10.png');
  w1 = loadImage('assets/w1.png');
  w2 = loadImage('assets/w2.png');
  w3 = loadImage('assets/w3.png');
  w4 = loadImage('assets/w4.png');
  w5 = loadImage('assets/w5.png');
  w6 = loadImage('assets/w6.png');
  w7 = loadImage('assets/w7.png');
  w8 = loadImage('assets/w8.png');
  w9 = loadImage('assets/w9.png');
  w10 = loadImage('assets/w10.png');
  
  table00 = loadImage('table/00.png');
  table01 = loadImage('table/01.png');
  table02 = loadImage('table/02.png');
  
  kitchen00 = loadImage('kitchen/00.png');
  kitchen01 = loadImage('kitchen/01.png');
  kitchen02 = loadImage('kitchen/02.png');
  
  train0 = loadImage('train/0.png');
  train1 = loadImage('train/1.png');
  train2 = loadImage('train/2.png');
  train00 = loadImage('train/00.png');
  train01 = loadImage('train/01.png');
  train02 = loadImage('train/02.png');
  
  horse0 = loadImage('horse/0.png');
  horse1 = loadImage('horse/1.png');
  horse2 = loadImage('horse/2.png');
  horse00 = loadImage('horse/00.png');
  horse01 = loadImage('horse/01.png');
  horse02 = loadImage('horse/02.png');
  
  snowman00 = loadImage('snowman/00.png');
  snowman01 = loadImage('snowman/01.png');
  snowman02 = loadImage('snowman/02.png');
  
  toy00 = loadImage('toy/00.png');
  toy01 = loadImage('toy/01.png');
  toy02 = loadImage('toy/02.png');
  
  entrance0 = loadImage('entrance/0.png');
  entrance1 = loadImage('entrance/1.png');
  entrance2 = loadImage('entrance/2.png');
  entrance00 = loadImage('entrance/00.png');
  entrance01 = loadImage('entrance/01.png');
  entrance02 = loadImage('entrance/02.png');
  
  exit00 = loadImage('exit/0.png');
  exit01 = loadImage('exit/1.png');
  exit02 = loadImage('exit/2.png');
  
  tunnel00_1 = loadImage('tunnel1/0.png');
  tunnel01_1 = loadImage('tunnel1/1.png');
  tunnel02_1 = loadImage('tunnel1/2.png');
  
  tunnel00_2 = loadImage('tunnel2/0.png');
  tunnel01_2 = loadImage('tunnel2/1.png');
  tunnel02_2 = loadImage('tunnel2/2.png');
  
  tunnel00_3 = loadImage('tunnel3/0.png');
  tunnel01_3 = loadImage('tunnel3/1.png');
  tunnel02_3 = loadImage('tunnel3/2.png');
  
} 

function setup() {
  
  tables = [table00, table01, table02];
  kitchens = [kitchen00, kitchen01, kitchen02];
  train = [train0, train1, train2];
  trains = [train00, train01, train02];
  horse = [horse0, horse1, horse2];
  horses = [horse00, horse01, horse02];
  snowman = [snowman00, snowman01, snowman02];
  toy = [toy00, toy01, toy02];
  entrance = [entrance0, entrance1, entrance2];
  entrances = [entrance00, entrance01, entrance02];
  tunnel_1 = [tunnel00_1, tunnel01_1, tunnel02_1];
  tunnel_2 = [tunnel00_2, tunnel01_2, tunnel02_2];
  tunnel_3 = [tunnel00_3, tunnel01_3, tunnel02_3];
  exit = [exit00, exit01, exit02];
  
  
  //createCanvas(1290/5, 2796/5);
  createCanvas(windowWidth, windowHeight);
  xPos = width/2;
  yPos = 1.55*height/2;
  r = width/20;
  R = width/25;
  imageMode(CENTER);
}

function draw() {
  
  i = floor(random(0, 3));
  
  background(0, 0, 0, 100);
  
  if(mouseIsPressed) {
    //forwardDistance += 0.05;
    forwardDistance += 0.2;
  }
  
  if(keyIsDown(DOWN_ARROW)) {
    //forwardDistance -= 0.05;
    forwardDistance -= 0.2;
  }
  
  if(keyIsDown(LEFT_ARROW)) {
    horizontalDistance += 0.05;
  }
  
  if(keyIsDown(RIGHT_ARROW)) {
    horizontalDistance -= 0.05;
  }
  
  console.log(forwardDistance);
  
  if (forwardDistance >= 0 && forwardDistance <= 1) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width, Math.pow(pow3, 0)*height/1.5);
} else if (forwardDistance > 1 && forwardDistance <= 2) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width, Math.pow(pow3, 1)*height/1.5);  
} else if (forwardDistance > 2 && forwardDistance <= 3) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width, Math.pow(pow3, 2)*height/1.5);  
} else if (forwardDistance > 3 && forwardDistance <= 4) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width, Math.pow(pow3, 3)*height/1.5);  
} else if (forwardDistance > 4 && forwardDistance <= 5) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width, Math.pow(pow3, 4)*height/1.5);  
} else if (forwardDistance > 5 && forwardDistance <= 6) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width, Math.pow(pow3, 5)*height/1.5);  
} else if (forwardDistance > 6 && forwardDistance <= 7) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width, Math.pow(pow3, 6)*height/1.5);
  stroke(5);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 7 && forwardDistance <= 8) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width, Math.pow(pow3, 7)*height/1.5); 
  stroke(15);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 8 && forwardDistance <= 9) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width, Math.pow(pow3, 8)*height/1.5);
  stroke(35);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 9 && forwardDistance <= 10) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width, Math.pow(pow3, 9)*height/1.5);
  stroke(55);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 10 && forwardDistance <= 11) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width, Math.pow(pow3, 10)*height/1.5);
  stroke(75);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 11 && forwardDistance <= 12) {
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width, Math.pow(pow3, 11)*height/1.5);
  stroke(95);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 12 && forwardDistance <= 13) {
  stroke(115);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 13 && forwardDistance <= 14) {
  stroke(135);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);  
} else if (forwardDistance > 14 && forwardDistance <= 15) {
  stroke(155);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10); 
} else if (forwardDistance > 15 && forwardDistance <= 16) {
  stroke(175);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 16 && forwardDistance <= 17) {
  stroke(195);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 17 && forwardDistance <= 18) {
  stroke(215);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 18 && forwardDistance <= 19) {
  stroke(235);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 19 && forwardDistance <= 20) {
  stroke(255);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 20 && forwardDistance <= 21) {
  tint(255, 255, 255, 7.5);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/2, Math.pow(pow2, 0)*height/4);
  stroke(205);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 21 && forwardDistance <= 22) {
  tint(255, 255, 255, 15);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/2, Math.pow(pow2, 1)*height/4);
  stroke(155);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
} else if (forwardDistance > 22 && forwardDistance <= 23) {
  tint(255, 255, 255, 30);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/2, Math.pow(pow2, 2)*height/4);
  stroke(105);
  scribble.scribbleLine(4*width/10, 7.1*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.1*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.1*height/10, 5.8*width/10, 7.1*height/10);
} else if (forwardDistance > 23 && forwardDistance <= 24) {
  tint(255, 255, 255, 45);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/2, Math.pow(pow2, 3)*height/4);
  stroke(55);
  scribble.scribbleLine(3.95*width/10, 7*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.85*width/10, 7*height/10, 5.85*width/10, 7.88*height/10);
  scribble.scribbleLine(3.95*width/10, 7*height/10, 5.85*width/10, 7*height/10);
} else if (forwardDistance > 24 && forwardDistance <= 25) {
  tint(255, 255, 255, 60);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/2, Math.pow(pow2, 4)*height/4);
  stroke(5);
  scribble.scribbleLine(3.9*width/10, 6.7*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 6.7*height/10, 5.9*width/10, 7.88*height/10);
  scribble.scribbleLine(3.9*width/10, 6.7*height/10, 5.9*width/10, 6.7*height/10);
} else if (forwardDistance > 25 && forwardDistance <= 26) {
  tint(255, 255, 255, 75);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/2, Math.pow(pow2, 5)*height/4);
} else if (forwardDistance > 26 && forwardDistance <= 27) {
  tint(255, 255, 255, 90);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/2, Math.pow(pow2, 6)*height/4);
} else if (forwardDistance > 27 && forwardDistance <= 28) {
  tint(255, 255, 255, 105);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/2, Math.pow(pow2, 7)*height/4);
} else if (forwardDistance > 28 && forwardDistance <= 29) {
  tint(255, 255, 255, 120);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/2, Math.pow(pow2, 8)*height/4);
} else if (forwardDistance > 29 && forwardDistance <= 30) {
  tint(255, 255, 255, 135);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/2, Math.pow(pow2, 9)*height/4);
} else if (forwardDistance > 30 && forwardDistance <= 31) {
  tint(255, 255, 255, 150);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/2, Math.pow(pow2, 10)*height/4);
} else if (forwardDistance > 31 && forwardDistance <= 32) {
  tint(255, 255, 255, 165);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/2, Math.pow(pow2, 11)*height/4);
} else if (forwardDistance > 32 && forwardDistance <= 33) {
  tint(255, 255, 255, 180);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/2, Math.pow(pow2, 12)*height/4);
} else if (forwardDistance > 33 && forwardDistance <= 34) {
  tint(255, 255, 255, 190);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/2, Math.pow(pow2, 13)*height/4);
} else if (forwardDistance > 34 && forwardDistance <= 35) {
  tint(255, 255, 255, 205);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 14)*width/2, Math.pow(pow2, 14)*height/4);
} else if (forwardDistance > 35 && forwardDistance <= 36) {
  tint(255, 255, 255, 220);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 15)*width/2, Math.pow(pow2, 15)*height/4);
} else if (forwardDistance > 36 && forwardDistance <= 37) {
  tint(255, 255, 255, 235);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 16)*width/2, Math.pow(pow2, 16)*height/4);
} else if (forwardDistance > 37 && forwardDistance <= 38) {
  tint(255, 255, 255, 250);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 17)*width/2, Math.pow(pow2, 17)*height/4);
} else if (forwardDistance > 38 && forwardDistance <= 39) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 18)*width/2, Math.pow(pow2, 18)*height/4);
} else if (forwardDistance > 39 && forwardDistance <= 40) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 19)*width/2, Math.pow(pow2, 19)*height/4);
} else if (forwardDistance > 40 && forwardDistance <= 41) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 20)*width/2, Math.pow(pow2, 20)*height/4);
} else if (forwardDistance > 41 && forwardDistance <= 42) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 21)*width/2, Math.pow(pow2, 21)*height/4);
} else if (forwardDistance > 42 && forwardDistance <= 43) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 22)*width/2, Math.pow(pow2, 22)*height/4);
} else if (forwardDistance > 43 && forwardDistance <= 44) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 23)*width/2, Math.pow(pow2, 23)*height/4);
} else if (forwardDistance > 44 && forwardDistance <= 45) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 24)*width/2, Math.pow(pow2, 24)*height/4);
} else if (forwardDistance > 45 && forwardDistance <= 46) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 25)*width/2, Math.pow(pow2, 25)*height/4);
} else if (forwardDistance > 46 && forwardDistance <= 47) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 26)*width/2, Math.pow(pow2, 26)*height/4);
} else if (forwardDistance > 47 && forwardDistance <= 48) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 27)*width/2, Math.pow(pow2, 27)*height/4);
} else if (forwardDistance > 48 && forwardDistance <= 49) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 28)*width/2, Math.pow(pow2, 28)*height/4);
} else if (forwardDistance > 49 && forwardDistance <= 50) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 29)*width/2, Math.pow(pow2, 29)*height/4);
} else if (forwardDistance > 50 && forwardDistance <= 51) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 30)*width/2, Math.pow(pow2, 30)*height/4);
  tint(255, 255, 255, 45);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 51 && forwardDistance <= 52) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 31)*width/2, Math.pow(pow2, 31)*height/4);
  tint(255, 255, 255, 90);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 52 && forwardDistance <= 53) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 32)*width/2, Math.pow(pow2, 32)*height/4);
  tint(255, 255, 255, 135);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 53 && forwardDistance <= 54) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 33)*width/2, Math.pow(pow2, 33)*height/4);
  tint(255, 255, 255, 180);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 54 && forwardDistance <= 55) {
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 34)*width/2, Math.pow(pow2, 34)*height/4);
  tint(255, 255, 255, 215);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 55 && forwardDistance <= 56) {
  tint(255, 255, 255, 250);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 56 && forwardDistance <= 57) {
  tint(255, 255, 255, 255);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 57 && forwardDistance <= 58) {
  tint(255, 255, 255, 255);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 58 && forwardDistance <= 59) {
  tint(255, 255, 255, 250);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 59 && forwardDistance <= 60) {
  tint(255, 255, 255, 200);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 60 && forwardDistance <= 61) {
  tint(255, 255, 255, 150);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 61 && forwardDistance <= 62) {
  tint(255, 255, 255, 100);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 62 && forwardDistance <= 63) {
  tint(255, 255, 255, 50);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 63 && forwardDistance <= 64) {
  tint(255, 255, 255, 50);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 64 && forwardDistance <= 65) {
  tint(255, 255, 255, 70);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
} else if (forwardDistance > 65 && forwardDistance <= 66) {
  tint(255, 255, 255, 90);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
} else if (forwardDistance > 66 && forwardDistance <= 67) {
  tint(255, 255, 255, 110);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
} else if (forwardDistance > 67 && forwardDistance <= 68) {
  tint(255, 255, 255, 130);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
} else if (forwardDistance > 68 && forwardDistance <= 69) {
  tint(255, 255, 255, 150);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
} else if (forwardDistance > 69 && forwardDistance <= 70) {
  tint(255, 255, 255, 170);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
} else if (forwardDistance > 70 && forwardDistance <= 71) {
  tint(255, 255, 255, 190);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
} else if (forwardDistance > 71 && forwardDistance <= 72) {
  tint(255, 255, 255, 210);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
} else if (forwardDistance > 72 && forwardDistance <= 73) {
  tint(255, 255, 255, 230);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
} else if (forwardDistance > 73 && forwardDistance <= 74) {
  tint(255, 255, 255, 250);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
} else if (forwardDistance > 74 && forwardDistance <= 75) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
} else if (forwardDistance > 75 && forwardDistance <= 76) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13)*height/2);
} else if (forwardDistance > 76 && forwardDistance <= 77) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 14)*height/2);
} else if (forwardDistance > 77 && forwardDistance <= 78) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 15)*height/2);
} else if (forwardDistance > 78 && forwardDistance <= 79) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 16)*width/1, Math.pow(pow1, 16)*height/2);
} else if (forwardDistance > 79 && forwardDistance <= 80) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 17)*width/1, Math.pow(pow1, 17)*height/2);
} else if (forwardDistance > 80 && forwardDistance <= 81) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 18)*width/1, Math.pow(pow1, 18)*height/2);
} else if (forwardDistance > 81 && forwardDistance <= 82) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 19)*width/1, Math.pow(pow1, 19)*height/2);
} else if (forwardDistance > 82 && forwardDistance <= 83) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 20)*width/1, Math.pow(pow1, 20)*height/2);
} else if (forwardDistance > 82 && forwardDistance <= 83) {
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 21)*width/1, Math.pow(pow1, 21)*height/2);
} else if (forwardDistance > 83 && forwardDistance <= 84) {
  tint(255, 255, 255, 215);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 22)*width/1, Math.pow(pow1, 22)*height/2);
} else if (forwardDistance > 84 && forwardDistance <= 85) {
  tint(255, 255, 255, 175);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 23)*width/1, Math.pow(pow1, 23)*height/2);
} else if (forwardDistance > 85 && forwardDistance <= 86) {
  tint(255, 255, 255, 135);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 24)*width/1, Math.pow(pow1, 24)*height/2);
  tint(255, 255, 255, 50);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/1, Math.pow(pow1, 0)*height/2);
} else if (forwardDistance > 86 && forwardDistance <= 87) {
  tint(255, 255, 255, 95);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 25)*width/1, Math.pow(pow1, 25)*height/2);
  tint(255, 255, 255, 100);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.1)*width/1, Math.pow(pow1, 0.1)*height/2);
} else if (forwardDistance > 87 && forwardDistance <= 88) {
  tint(255, 255, 255, 55);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 26)*width/1, Math.pow(pow1, 26)*height/2);
  tint(255, 255, 255, 150);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.2)*width/1, Math.pow(pow1, 0.2)*height/2);
} else if (forwardDistance > 88 && forwardDistance <= 89) {
  tint(255, 255, 255, 200);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.3)*width/1, Math.pow(pow1, 0.3)*height/2);
} else if (forwardDistance > 89 && forwardDistance <= 90) {
  tint(255, 255, 255, 250);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.4)*width/1, Math.pow(pow1, 0.4)*height/2);
} else if (forwardDistance > 90 && forwardDistance <= 91) {
  tint(255, 255, 255, 255);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.5)*width/1, Math.pow(pow1, 0.5)*height/2);
} else if (forwardDistance > 91 && forwardDistance <= 92) {
  tint(255, 255, 255, 250);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.6)*width/1, Math.pow(pow1, 0.6)*height/2);
} else if (forwardDistance > 92 && forwardDistance <= 93) {
  tint(255, 255, 255, 200);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.7)*width/1, Math.pow(pow1, 0.7)*height/2);
} else if (forwardDistance > 93 && forwardDistance <= 94) {
  tint(255, 255, 255, 150);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.8)*width/1, Math.pow(pow1, 0.8)*height/2);
} else if (forwardDistance > 94 && forwardDistance <= 95) {
  tint(255, 255, 255, 100);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.9)*width/1, Math.pow(pow1, 0.9)*height/2);
} else if (forwardDistance > 95 && forwardDistance <= 96) {
  tint(255, 255, 255, 50);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 96 && forwardDistance <= 97) {
  tint(255, 255, 255, 50);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 97 && forwardDistance <= 98) {
  tint(255, 255, 255, 80);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
} else if (forwardDistance > 98 && forwardDistance <= 99) {
  tint(255, 255, 255, 110);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
} else if (forwardDistance > 99 && forwardDistance <= 100) {
  tint(255, 255, 255, 140);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
} else if (forwardDistance > 100 && forwardDistance <= 101) {
  tint(255, 255, 255, 170);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
} else if (forwardDistance > 101 && forwardDistance <= 102) {
  tint(255, 255, 255, 200);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
} else if (forwardDistance > 102 && forwardDistance <= 103) {
  tint(255, 255, 255, 230);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
} else if (forwardDistance > 103 && forwardDistance <= 104) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
} else if (forwardDistance > 104 && forwardDistance <= 105) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
} else if (forwardDistance > 105 && forwardDistance <= 106) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
} else if (forwardDistance > 106 && forwardDistance <= 107) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
} else if (forwardDistance > 107 && forwardDistance <= 108) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
} else if (forwardDistance > 108 && forwardDistance <= 109) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13)*height/2);
  tint(255, 255, 255, 50);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 0)*width/1, Math.pow(pow1, 0)*height/2);
} else if (forwardDistance > 109 && forwardDistance <= 110) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 14)*height/2);
  tint(255, 255, 255, 70);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 110 && forwardDistance <= 111) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 15)*height/2);
  tint(255, 255, 255, 90);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
} else if (forwardDistance > 111 && forwardDistance <= 112) {
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 16)*width/1, Math.pow(pow1, 16)*height/2);
  tint(255, 255, 255, 110);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
} else if (forwardDistance > 112 && forwardDistance <= 113) {
  tint(255, 255, 255, 250);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 17)*width/1, Math.pow(pow1, 17)*height/2);
  tint(255, 255, 255, 130);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
} else if (forwardDistance > 113 && forwardDistance <= 114) {
  tint(255, 255, 255, 220);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 18)*width/1, Math.pow(pow1, 18)*height/2);
  tint(255, 255, 255, 150);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
} else if (forwardDistance > 114 && forwardDistance <= 115) {
  tint(255, 255, 255, 190);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 19)*width/1, Math.pow(pow1, 19)*height/2);
  tint(255, 255, 255, 170);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
} else if (forwardDistance > 115 && forwardDistance <= 116) {
  tint(255, 255, 255, 160);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 20)*width/1, Math.pow(pow1, 20)*height/2);
  tint(255, 255, 255, 190);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
} else if (forwardDistance > 116 && forwardDistance <= 117) {
  tint(255, 255, 255, 130);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 21)*width/1, Math.pow(pow1, 21)*height/2);
  tint(255, 255, 255, 210);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
} else if (forwardDistance > 117 && forwardDistance <= 118) {
  tint(255, 255, 255, 100);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 22)*width/1, Math.pow(pow1, 22)*height/2);
  tint(255, 255, 255, 230);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
} else if (forwardDistance > 118 && forwardDistance <= 119) {
  tint(255, 255, 255, 70);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 23)*width/1, Math.pow(pow1, 23)*height/2);
  tint(255, 255, 255, 250);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
} else if (forwardDistance > 119 && forwardDistance <= 120) {
  tint(255, 255, 255, 40);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 24)*width/1, Math.pow(pow1, 24)*height/2);
  tint(255, 255, 255, 255);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
} else if (forwardDistance > 120 && forwardDistance <= 121) {
  tint(255, 255, 255, 40);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 25)*width/1, Math.pow(pow1, 25)*height/2);
  tint(255, 255, 255, 250);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
} else if (forwardDistance > 121 && forwardDistance <= 122) {
  tint(255, 255, 255, 220);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13)*height/2);
} else if (forwardDistance > 122 && forwardDistance <= 123) {
  tint(255, 255, 255, 190);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 14)*height/2);
} else if (forwardDistance > 123 && forwardDistance <= 124) {
  tint(255, 255, 255, 160);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 15)*height/2);
} else if (forwardDistance > 124 && forwardDistance <= 125) {
  tint(255, 255, 255, 130);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 16)*width/1, Math.pow(pow1, 16)*height/2);
} else if (forwardDistance > 125 && forwardDistance <= 126) {
  tint(255, 255, 255, 100);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 17)*width/1, Math.pow(pow1, 17)*height/2);
} else if (forwardDistance > 126 && forwardDistance <= 127) {
  tint(255, 255, 255, 70);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 18)*width/1, Math.pow(pow1, 18)*height/2);
  tint(255, 255, 255, 50);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/1, Math.pow(pow1, 0)*height/2);
} else if (forwardDistance > 127 && forwardDistance <= 128) {
  tint(255, 255, 255, 55);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 19)*width/1, Math.pow(pow1, 19)*height/2);
  tint(255, 255, 255, 70);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 128 && forwardDistance <= 129) {
  tint(255, 255, 255, 40);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 20)*width/1, Math.pow(pow1, 20)*height/2);
  tint(255, 255, 255, 90);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
} else if (forwardDistance > 129 && forwardDistance <= 130) {
  tint(255, 255, 255, 40);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 21)*width/1, Math.pow(pow1, 21)*height/2);
  tint(255, 255, 255, 110);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
} else if (forwardDistance > 130 && forwardDistance <= 131) {
  tint(255, 255, 255, 40);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 22)*width/1, Math.pow(pow1, 22)*height/2);
  tint(255, 255, 255, 130);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
} else if (forwardDistance > 131 && forwardDistance <= 132) {
  tint(255, 255, 255, 150);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
} else if (forwardDistance > 132 && forwardDistance <= 133) {
  tint(255, 255, 255, 170);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
} else if (forwardDistance > 133 && forwardDistance <= 134) {
  tint(255, 255, 255, 190);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
} else if (forwardDistance > 134 && forwardDistance <= 135) {
  tint(255, 255, 255, 210);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
} else if (forwardDistance > 135 && forwardDistance <= 136) {
  tint(255, 255, 255, 230);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
} else if (forwardDistance > 136 && forwardDistance <= 137) {
  tint(255, 255, 255, 250);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
} else if (forwardDistance > 137 && forwardDistance <= 138) {
  tint(255, 255, 255, 255);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
} else if (forwardDistance > 138 && forwardDistance <= 139) {
  tint(255, 255, 255, 250);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
} else if (forwardDistance > 139 && forwardDistance <= 140) {
  tint(255, 255, 255, 220);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13)*height/2);
} else if (forwardDistance > 140 && forwardDistance <= 141) {
  tint(255, 255, 255, 190);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 14)*height/2);
} else if (forwardDistance > 141 && forwardDistance <= 142) {
  tint(255, 255, 255, 160);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 15)*height/2);
} else if (forwardDistance > 142 && forwardDistance <= 143) {
  tint(255, 255, 255, 130);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 16)*width/1, Math.pow(pow1, 16)*height/2);
} else if (forwardDistance > 143 && forwardDistance <= 144) {
  tint(255, 255, 255, 100);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 17)*width/1, Math.pow(pow1, 17)*height/2);
} else if (forwardDistance > 144 && forwardDistance <= 145) {
  tint(255, 255, 255, 70);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 18)*width/1, Math.pow(pow1, 18)*height/2);
} else if (forwardDistance > 145 && forwardDistance <= 146) {
  tint(255, 255, 255, 40);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 19)*width/1, Math.pow(pow1, 19)*height/2);
} else if (forwardDistance > 146 && forwardDistance <= 147) {
  tint(255, 255, 255, 20);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 20)*width/1, Math.pow(pow1, 20)*height/2);
} else if (forwardDistance > 147 && forwardDistance <= 148) {
  tint(255, 255, 255, 10);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 21)*width/1, Math.pow(pow1, 21)*height/2);
} else if (forwardDistance > 148 && forwardDistance <= 149) {
  tint(255, 255, 255, 10);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 22)*width/1, Math.pow(pow1, 22)*height/2);
} else if (forwardDistance > 149 && forwardDistance <= 150) {
  tint(255, 255, 255, 50);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/1, Math.pow(pow1, 0)*height/2);
} else if (forwardDistance > 150 && forwardDistance <= 151) {
  tint(255, 255, 255, 100);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.1)*width/1, Math.pow(pow1, 0.1)*height/2);
} else if (forwardDistance > 151 && forwardDistance <= 152) {
  tint(255, 255, 255, 150);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.2)*width/1, Math.pow(pow1, 0.2)*height/2);
} else if (forwardDistance > 152 && forwardDistance <= 153) {
  tint(255, 255, 255, 200);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.3)*width/1, Math.pow(pow1, 0.3)*height/2);
} else if (forwardDistance > 153 && forwardDistance <= 154) {
  tint(255, 255, 255, 250);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.4)*width/1, Math.pow(pow1, 0.4)*height/2);
} else if (forwardDistance > 154 && forwardDistance <= 155) {
  tint(255, 255, 255, 255);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.5)*width/1, Math.pow(pow1, 0.5)*height/2);
} else if (forwardDistance > 155 && forwardDistance <= 156) {
  tint(255, 255, 255, 250);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.6)*width/1, Math.pow(pow1, 0.6)*height/2);
} else if (forwardDistance > 156 && forwardDistance <= 157) {
  tint(255, 255, 255, 200);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.7)*width/1, Math.pow(pow1, 0.7)*height/2);
} else if (forwardDistance > 157 && forwardDistance <= 158) {
  tint(255, 255, 255, 150);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.8)*width/1, Math.pow(pow1, 0.8)*height/2);
} else if (forwardDistance > 158 && forwardDistance <= 159) {
  tint(255, 255, 255, 100);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.9)*width/1, Math.pow(pow1, 0.9)*height/2);
} else if (forwardDistance > 159 && forwardDistance <= 160) {
  tint(255, 255, 255, 50);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
} else if (forwardDistance > 160 && forwardDistance <= 161) {
  tint(255, 255, 255, 70);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
} else if (forwardDistance > 161 && forwardDistance <= 162) {
  tint(255, 255, 255, 90);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
} else if (forwardDistance > 162 && forwardDistance <= 163) {
  tint(255, 255, 255, 110);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
} else if (forwardDistance > 163 && forwardDistance <= 164) {
  tint(255, 255, 255, 130);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
} else if (forwardDistance > 164 && forwardDistance <= 165) {
  tint(255, 255, 255, 150);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
} else if (forwardDistance > 165 && forwardDistance <= 166) {
  tint(255, 255, 255, 170);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
} else if (forwardDistance > 166 && forwardDistance <= 167) {
  tint(255, 255, 255, 190);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
} else if (forwardDistance > 167 && forwardDistance <= 168) {
  tint(255, 255, 255, 210);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
} else if (forwardDistance > 168 && forwardDistance <= 169) {
  tint(255, 255, 255, 230);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
} else if (forwardDistance > 169 && forwardDistance <= 170) {
  tint(255, 255, 255, 250);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
} else if (forwardDistance > 170 && forwardDistance <= 171) {
  tint(255, 255, 255, 255);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
} else if (forwardDistance > 171 && forwardDistance <= 172) {
  floorDisplay = true;
  tint(255, 255, 255, 255);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13.5)*height/2);
} else if (forwardDistance > 172 && forwardDistance <= 173) {
  floorDisplay = false;
  tint(255, 255, 255, 250);
  image(entrances[i], width/2, 8*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 15)*height/2);
} else if (forwardDistance > 173 && forwardDistance <= 174) {
  tint(255, 255, 255, 200);
  image(entrances[i], width/2, 8.5*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 16.5)*height/2);
} else if (forwardDistance > 174 && forwardDistance <= 175) {
  tint(255, 255, 255, 150);
  image(entrances[i], width/2, 9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 17)*height/2);
} else if (forwardDistance > 175 && forwardDistance <= 176) {
  tint(255, 255, 255, 100);
  image(entrances[i], width/2, 9.5*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 18.5)*height/2);
} else if (forwardDistance > 176 && forwardDistance <= 177) {
  tint(255, 255, 255, 50);
  image(entrances[i], width/2, 9.5*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 20)*height/2);
} else if (forwardDistance > 177 && forwardDistance <= 178) {
  tint(255, 255, 255, 50);
  image(tunnel_3[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
} else if (forwardDistance > 178 && forwardDistance <= 179) {
  tint(255, 255, 255, 100);
  image(tunnel_2[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
} else if (forwardDistance > 179 && forwardDistance <= 180) {
  tint(255, 255, 255, 150);
  image(tunnel_1[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
} else if (forwardDistance > 180 && forwardDistance <= 181) {
  tint(255, 255, 255, 200);
  image(tunnel_3[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
} else if (forwardDistance > 181 && forwardDistance <= 182) {
  tint(255, 255, 255, 250);
  image(tunnel_2[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
} else if (forwardDistance > 182 && forwardDistance <= 183) {
  tint(255, 255, 255, 255);
  image(tunnel_1[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
} else if (forwardDistance > 183 && forwardDistance <= 215) {
  let phase3 = floor(forwardDistance) % 3;
  if(phase3 === 0){
    tint(255, 255, 255, 255);
    image(tunnel_3[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  }
  if(phase3 === 1){
    tint(255, 255, 255, 255);
    image(tunnel_2[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  }
  if(phase3 === 2){
    tint(255, 255, 255, 255);
    image(tunnel_1[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  }
} else if (forwardDistance > 215 && forwardDistance <= 216) {
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 13.5)*width/1, Math.pow(pow1, 13.6)*height/1.75);
} else if (forwardDistance > 216 && forwardDistance <= 217) {
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 14.5)*width/1, Math.pow(pow1, 14.6)*height/1.75);
} else if (forwardDistance > 217 && forwardDistance <= 218) {
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 15.5)*width/1, Math.pow(pow1, 15.6)*height/1.75);
} else if (forwardDistance > 218 && forwardDistance <= 219) {
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 16.5)*width/1, Math.pow(pow1, 16.6)*height/1.75);
} else if (forwardDistance > 219 && forwardDistance <= 220) {
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 17.5)*width/1, Math.pow(pow1, 17.6)*height/1.75);
}
  
  
  let phase1 = floor(forwardDistance) % 10;
  let phase2 = floor(abs(horizontalDistance)) % 10;

  if(floorDisplay == true){
    
  if(phase1 === 0) {
    tint(255, 255, 255, 255);
    image(w1, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 1){
    tint(255, 255, 255, 255);
    image(w2, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 2){
    tint(255, 255, 255, 255);
    image(w3, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 3){
    tint(255, 255, 255, 255);
    image(w4, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 4){
    tint(255, 255, 255, 255);
    image(w5, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 5){
    tint(255, 255, 255, 255);
    image(w6, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 6){
    tint(255, 255, 255, 255);
    image(w7, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 7){
    tint(255, 255, 255, 255);
    image(w8, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 8){
    tint(255, 255, 255, 255);
    image(w9, width/2, 1.4*height/2, width, 0.55*height);
  }else if(phase1 === 9){
    tint(255, 255, 255, 255);
    image(w10, width/2, 1.4*height/2, width, 0.55*height);
  }
  
  if(phase2 === 0) {
    tint(255, 255, 255, 255);
    image(j1, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 1){
    tint(255, 255, 255, 255);
    image(j2, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 2){
    tint(255, 255, 255, 255);
    image(j3, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 3){
    tint(255, 255, 255, 255);
    image(j4, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 4){
    tint(255, 255, 255, 255);
    image(j5, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 5){
    tint(255, 255, 255, 255);
    image(j6, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 6){
    tint(255, 255, 255, 255);
    image(j7, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 7){
    tint(255, 255, 255, 255);
    image(j8, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 8){
    tint(255, 255, 255, 255);
    image(j9, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }else if(phase2 === 9){
    tint(255, 255, 255, 255);
    image(j10, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }
    
    tint(255, 255, 255, 255);
    image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  }
  
  scribble.maxOffset = 1;
  
  stroke(255);
  strokeWeight(3);
  scribble.scribbleRect(xPos, yPos, r+R, r+R);
  
  stroke(255);
  strokeWeight(1);
  scribble.scribbleFilling([xPos - r/2, xPos + r/2, xPos + r/2, xPos - r/2], [yPos - r/2, yPos - r/2, yPos + r/2, yPos + r/2], 1.25, 150);
  
  stroke(100);
  strokeWeight(1);
  scribble.scribbleFilling([xPos - (r+R)/2, xPos + (r+R)/2, xPos + (r+R)/2, xPos - (r+R)/2], [yPos - (r+R)/2, yPos - (r+R)/2, yPos + (r+R)/2, yPos + (r+R)/2], 1.25, 150);

}