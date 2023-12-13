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
let book0, book1, book2, book01, book02, book03;
let event0, event1, event2, event00, event01, event02;
let blackValue = 0;
let floorDisplay = false;
let horizonDisplay = false;
let trans = 255;
let moving = false;
//let merge = true;
let trans_new = 0;
let l = 0;
let v = 5;
let p = 0;
let q = 0;
let fallMode = true;
let dropMode = false;

let drop, fall, kitchenSound, meal_1, meal_2, kid_1, kid_2, kidVoice_1, kidVoice_2, kidVoice_3, kidWalk, toyTrain, tunnelSound, typing, writing, coffee, sliding_1, sliding_2, sliding_3, sliding_4, sliding_5, drop_1, drop_2, melting;

let forwardDistance = 0;
let distanceCounter = 0;
let horizontalDistance = 0;
let xPos;
let yPos;
let r;
let r_new;
let tables, kitchen, train, trains, horse, horses, snowman, toy, entrance, entrances, exit, tunnel_1, tunnel_2, tunnel_3, book, books, slideSound, events, event;
let h = 255;
let i, j;
let k = 0;
let pow1 = 1.1;
let pow2 = 1.125;
let pow3 = 1.25;
let pow4 = 1.055;
let pow5 = 1.05;
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
  
  book0 = loadImage('book/0.png');
  book1 = loadImage('book/1.png');
  book2 = loadImage('book/2.png');
  
  book00 = loadImage('book/00.png');
  book01 = loadImage('book/01.png');
  book02 = loadImage('book/02.png');
  
  event00 = loadImage('event/00.png');
  event01 = loadImage('event/01.png');
  event02 = loadImage('event/02.png');
  
  event0 = loadImage('event/0.png');
  event1 = loadImage('event/1.png');
  event2 = loadImage('event/2.png');
  
  drop = loadSound('sound/drop.mp3');
  fall = loadSound('sound/fall.mp3');
  kitchenSound = loadSound('sound/kitchen.mp3');
  meal_1 = loadSound('sound/meal.mp3');
  meal_2 = loadSound('sound/meal_better.mp3');
  kid_1 = loadSound('sound/kid1.mp3');
  kid_2 = loadSound('sound/kid2.mp3');
  kidVoice_1 = loadSound('sound/kid shout.mp3');
  kidVoice_2 = loadSound('sound/kid shout2.mp3');
  kidVoice_3 = loadSound('sound/kid shout3.mp3');
  kidWalk = loadSound('sound/kid step.mp3');
  toyTrain = loadSound('sound/toy train.mp3');
  tunnelSound = loadSound('sound/tunnel.mp3');
  typing = loadSound('sound/typing.mp3');
  writing = loadSound('sound/writing.mp3');
  coffee = loadSound('sound/coffee.mp3');
  sliding_1 = loadSound('sound/ice cube sliding.mp3');
  sliding_2 = loadSound('sound/sliding_1.mp3');
  sliding_3 = loadSound('sound/sliding_2.mp3');
  sliding_4 = loadSound('sound/sliding_3.mp3');
  sliding_5 = loadSound('sound/slide backup.mp3');
  drop_1 = loadSound('sound/drop_1.mp3');
  drop_2 = loadSound('sound/drop_2.mp3');
  melting = loadSound('sound/melt.mp3');
  
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
  book = [book0, book1, book2];
  books = [book00, book01, book02];
  events = [event00, event01, event02];
  event = [event0, event1, event2];
  
  slideSound = [sliding_1, sliding_2, sliding_3, sliding_4, sliding_5];
  
  fall.playMode('untilDone');
  drop.playMode('untilDone');
  kitchenSound.playMode('untilDone');
  meal_1.playMode('untilDone');
  meal_2.playMode('untilDone');
  kid_1.playMode('untilDone');
  kid_2.playMode('untilDone');
  kidVoice_1.playMode('untilDone');
  kidVoice_2.playMode('untilDone');
  kidVoice_3.playMode('untilDone');
  kidWalk.playMode('untilDone');
  toyTrain.playMode('untilDone');
  tunnelSound.playMode('untilDone');
  typing.playMode('untilDone');
  writing.playMode('untilDone');
  coffee.playMode('untilDone');
  sliding_1.playMode('untilDone');
  sliding_2.playMode('untilDone');
  sliding_3.playMode('untilDone');
  sliding_4.playMode('untilDone');
  sliding_5.playMode('untilDone');
  drop_1.playMode('untilDone');
  drop_2.playMode('untilDone');
  melting.playMode('untilDone');
  
  
  createCanvas(1290*windowHeight/2796, windowHeight);
  //createCanvas(1290/5, 2796/5);
  //createCanvas(windowWidth, windowHeight);
  xPos = width/2;
  yPos = 1.55*height/2;
  r = width/20;
  R = width/25;
  r_new = width/1.9;
  imageMode(CENTER);
}

function draw() {
  
  if(fallMode == true){
    fall.play();
    drop.play();
  }
  fallMode = false;
  
  i = floor(random(0, 3));
  j = floor(random(0, 5));
  
  drop.setVolume(2.5);
  slideSound[j].setVolume(0.5);
  kitchenSound.setVolume(1.5);
  meal_1.setVolume(1.5);
  toyTrain.setVolume(3);
  tunnelSound.setVolume(2.5);
  typing.setVolume(0.75);
  writing.setVolume(1.5);
  coffee.setVolume(3);
  drop_1.setVolume(2);
  drop_2.setVolume(3.75);
  
  background(0, 0, 0, 100);


if(blackValue <= 255){
  
  if(mouseIsPressed) {
    //forwardDistance += 0.05;
    forwardDistance += 0.1;
    slideSound[j].play();
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
  
  distanceCounter = floor(forwardDistance);
  
  if(distanceCounter > 184 && distanceCounter < 215){
     distanceCounter = 184;
     }
  if(distanceCounter > 249 && distanceCounter < 258){
     distanceCounter = 249;
     }
  if(distanceCounter > 288){
     distanceCounter = 288;
     }
  
  console.log(distanceCounter);
  
  
  switch (distanceCounter) {
      
  case 0:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width, Math.pow(pow3, 0)*height/1.5);
  floorDisplay = true;
  h -= Math.pow(pow5, p)/10;
  p += 0.1;
  break;

  case 1:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width, Math.pow(pow3, 1)*height/1.5);  
  kitchenSound.play();
  break;
  
  case 2:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width, Math.pow(pow3, 2)*height/1.5);
  break;
  
  case 3:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width, Math.pow(pow3, 3)*height/1.5);
  break;
  
  case 4:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width, Math.pow(pow3, 4)*height/1.5); 
  break;
  
  case 5:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width, Math.pow(pow3, 5)*height/1.5);  
  break;
  
  case 6:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width, Math.pow(pow3, 6)*height/1.5);
  stroke(5);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;
  
  case 7:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width, Math.pow(pow3, 7)*height/1.5); 
  stroke(15);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;
  
  case 8:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width, Math.pow(pow3, 8)*height/1.5);
  stroke(35);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;

  case 9:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width, Math.pow(pow3, 9)*height/1.5);
  stroke(55);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;

  case 10:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width, Math.pow(pow3, 10)*height/1.5);
  stroke(75);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;
  
  case 11:
  tint(255, 255, 255, 255);
  image(kitchens[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width, Math.pow(pow3, 11)*height/1.5);
  stroke(95);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;
  
  case 12:
  stroke(115);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;

  case 13:
  stroke(135);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);  
  break;
  
  case 14:
  stroke(155);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10); 
  break;
  
  case 15:
  stroke(175);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;
  
  case 16:
  stroke(195);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;

  case 17:
  stroke(215);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;
  
  case 18:
  stroke(235);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;
      
  case 19:
  stroke(255);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;

  case 20:
  tint(255, 255, 255, 7.5);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/2, Math.pow(pow2, 0)*height/4);
  stroke(205);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;

  case 21:
  tint(255, 255, 255, 15);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/2, Math.pow(pow2, 1)*height/4);
  stroke(155);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.2*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.2*height/10, 5.8*width/10, 7.2*height/10);
  break;

  case 22:
  tint(255, 255, 255, 30);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/2, Math.pow(pow2, 2)*height/4);
  stroke(105);
  scribble.scribbleLine(4*width/10, 7.1*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 7.1*height/10, 5.8*width/10, 7.88*height/10);
  scribble.scribbleLine(4*width/10, 7.1*height/10, 5.8*width/10, 7.1*height/10);
  break;

  case 23:
  tint(255, 255, 255, 45);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/2, Math.pow(pow2, 3)*height/4);
  stroke(55);
  scribble.scribbleLine(3.95*width/10, 7*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.85*width/10, 7*height/10, 5.85*width/10, 7.88*height/10);
  scribble.scribbleLine(3.95*width/10, 7*height/10, 5.85*width/10, 7*height/10);
  break;

  case 24:
  tint(255, 255, 255, 60);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/2, Math.pow(pow2, 4)*height/4);
  stroke(5);
  scribble.scribbleLine(3.9*width/10, 6.7*height/10, 4*width/10, 7.88*height/10);
  scribble.scribbleLine(5.8*width/10, 6.7*height/10, 5.9*width/10, 7.88*height/10);
  scribble.scribbleLine(3.9*width/10, 6.7*height/10, 5.9*width/10, 6.7*height/10);
  break;
  
  case 25:
  tint(255, 255, 255, 75);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/2, Math.pow(pow2, 5)*height/4);
  kitchenSound.stop();
  meal_2.play();
  break;
  
  case 26:
  tint(255, 255, 255, 90);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/2, Math.pow(pow2, 6)*height/4);
  break;

  case 27:
  tint(255, 255, 255, 105);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/2, Math.pow(pow2, 7)*height/4);
  break;

  case 28:
  tint(255, 255, 255, 120);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/2, Math.pow(pow2, 8)*height/4);
  break;

  case 29:
  tint(255, 255, 255, 135);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/2, Math.pow(pow2, 9)*height/4);
  break;

  case 30:
  tint(255, 255, 255, 150);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/2, Math.pow(pow2, 10)*height/4);
  break;

  case 31:
  tint(255, 255, 255, 165);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/2, Math.pow(pow2, 11)*height/4);
  break;

  case 32:
  tint(255, 255, 255, 180);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/2, Math.pow(pow2, 12)*height/4);
  break;

  case 33:
  tint(255, 255, 255, 190);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/2, Math.pow(pow2, 13)*height/4);
  break;
  
  case 34:
  tint(255, 255, 255, 205);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 14)*width/2, Math.pow(pow2, 14)*height/4);
  break;

  case 35:
  tint(255, 255, 255, 220);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 15)*width/2, Math.pow(pow2, 15)*height/4);
  break;

  case 36:
  tint(255, 255, 255, 235);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 16)*width/2, Math.pow(pow2, 16)*height/4);
  break;

  case 37:
  tint(255, 255, 255, 250);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 17)*width/2, Math.pow(pow2, 17)*height/4);
  break;

  case 38:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 18)*width/2, Math.pow(pow2, 18)*height/4);
  break;

  case 39:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 19)*width/2, Math.pow(pow2, 19)*height/4);
  break;

  case 40:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 20)*width/2, Math.pow(pow2, 20)*height/4);
  meal_1.play()
  break;

  case 41:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 21)*width/2, Math.pow(pow2, 21)*height/4);
  break;

  case 42:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 22)*width/2, Math.pow(pow2, 22)*height/4);
  break;

  case 43:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 23)*width/2, Math.pow(pow2, 23)*height/4);
  break;

  case 44:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 24)*width/2, Math.pow(pow2, 24)*height/4);
  break;

  case 45:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 25)*width/2, Math.pow(pow2, 25)*height/4);
  break;

  case 46:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 26)*width/2, Math.pow(pow2, 26)*height/4);
  break;

  case 47:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 27)*width/2, Math.pow(pow2, 27)*height/4);
  break;

  case 48:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 28)*width/2, Math.pow(pow2, 28)*height/4);
  break;

  case 49:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 29)*width/2, Math.pow(pow2, 29)*height/4);
  break;

  case 50:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 30)*width/2, Math.pow(pow2, 30)*height/4);
  tint(255, 255, 255, 45);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 51:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 31)*width/2, Math.pow(pow2, 31)*height/4);
  tint(255, 255, 255, 90);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 52:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 32)*width/2, Math.pow(pow2, 32)*height/4);
  tint(255, 255, 255, 135);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 53:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 33)*width/2, Math.pow(pow2, 33)*height/4);
  tint(255, 255, 255, 180);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;
  
  case 54:
  tint(255, 255, 255, 255);
  image(tables[i], width/2, 7.9*height/10, Math.pow(pow1, 34)*width/2, Math.pow(pow2, 34)*height/4);
  tint(255, 255, 255, 215);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 55:
  tint(255, 255, 255, 250);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 56:
  tint(255, 255, 255, 255);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 57:
  tint(255, 255, 255, 255);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 58:
  tint(255, 255, 255, 250);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 59:
  tint(255, 255, 255, 200);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 60:
  tint(255, 255, 255, 150);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 61:
  tint(255, 255, 255, 100);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 62:
  tint(255, 255, 255, 50);
  image(train[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 63:
  tint(255, 255, 255, 50);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 64:
  tint(255, 255, 255, 70);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
  break;

  case 65:
  tint(255, 255, 255, 90);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
  meal_1.stop();
  meal_2.stop();
  toyTrain.play();
  break;

  case 66:
  tint(255, 255, 255, 110);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
  break;

  case 67:
  tint(255, 255, 255, 130);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
  break;

  case 68:
  tint(255, 255, 255, 150);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
  break;

  case 69:
  tint(255, 255, 255, 170);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
  break;

  case 70:
  tint(255, 255, 255, 190);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
  toyTrain.play();
  break;

  case 71:
  tint(255, 255, 255, 210);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
  break;

  case 72:
  tint(255, 255, 255, 230);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
  break;

  case 73:
  tint(255, 255, 255, 250);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
  break;

  case 74:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
  break;

  case 75:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13)*height/2);
  toyTrain.play();
  break;

  case 76:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 14)*height/2);
  break;

  case 77:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 15)*height/2);
  break;

  case 78:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 16)*width/1, Math.pow(pow1, 16)*height/2);
  break;

  case 79:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 17)*width/1, Math.pow(pow1, 17)*height/2);
  break;

  case 80:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 18)*width/1, Math.pow(pow1, 18)*height/2);
  toyTrain.play();
  break;

  case 81:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 19)*width/1, Math.pow(pow1, 19)*height/2);
  break;

  case 82:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 20)*width/1, Math.pow(pow1, 20)*height/2);
  break;

  case 83:
  tint(255, 255, 255, 255);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 21)*width/1, Math.pow(pow1, 21)*height/2);
  break;

  case 84:
  tint(255, 255, 255, 215);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 22)*width/1, Math.pow(pow1, 22)*height/2);
  break;
  
  case 85:
  tint(255, 255, 255, 175);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 23)*width/1, Math.pow(pow1, 23)*height/2);
  toyTrain.play();
  break;

  case 86:
  tint(255, 255, 255, 135);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 24)*width/1, Math.pow(pow1, 24)*height/2);
  tint(255, 255, 255, 50);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/1, Math.pow(pow1, 0)*height/2);
  break;

  case 87:
  tint(255, 255, 255, 95);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 25)*width/1, Math.pow(pow1, 25)*height/2);
  tint(255, 255, 255, 100);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.1)*width/1, Math.pow(pow1, 0.1)*height/2);
  break;

  case 88:
  tint(255, 255, 255, 55);
  image(trains[i], width/2, 7.9*height/10, Math.pow(pow1, 26)*width/1, Math.pow(pow1, 26)*height/2);
  tint(255, 255, 255, 150);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.2)*width/1, Math.pow(pow1, 0.2)*height/2);
  break;

  case 89:
  tint(255, 255, 255, 200);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.3)*width/1, Math.pow(pow1, 0.3)*height/2);
  break;

  case 90:
  tint(255, 255, 255, 250);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.4)*width/1, Math.pow(pow1, 0.4)*height/2);
  break;

  case 91:
  tint(255, 255, 255, 255);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.5)*width/1, Math.pow(pow1, 0.5)*height/2);
  break;

  case 92:
  tint(255, 255, 255, 250);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.6)*width/1, Math.pow(pow1, 0.6)*height/2);
  break;

  case 93:
  tint(255, 255, 255, 200);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.7)*width/1, Math.pow(pow1, 0.7)*height/2);
  break;

  case 94:
  tint(255, 255, 255, 150);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.8)*width/1, Math.pow(pow1, 0.8)*height/2);
  break;

  case 95:
  tint(255, 255, 255, 100);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 0.9)*width/1, Math.pow(pow1, 0.9)*height/2);
  break;

  case 96:
  tint(255, 255, 255, 50);
  image(horse[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 97:
  tint(255, 255, 255, 50);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 98:
  tint(255, 255, 255, 80);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
  break;

  case 99:
  tint(255, 255, 255, 110);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
  break;

  case 100:
  tint(255, 255, 255, 140);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
  toyTrain.stop();
  kid_1.play();
  break;

  case 101:
  tint(255, 255, 255, 170);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
  break;

  case 102:
  tint(255, 255, 255, 200);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
  break;

  case 103:
  tint(255, 255, 255, 230);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
  break;

  case 104:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
  break;

  case 105:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
  break;

  case 106:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
  break;

  case 107:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
  break;

  case 108:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
  break;

  case 109:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13)*height/2);
  tint(255, 255, 255, 50);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 0)*width/1, Math.pow(pow1, 0)*height/2);
  break;

  case 110:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 14)*height/2);
  tint(255, 255, 255, 70);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 111:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 15)*height/2);
  tint(255, 255, 255, 90);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
  break;

  case 112:
  tint(255, 255, 255, 255);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 16)*width/1, Math.pow(pow1, 16)*height/2);
  tint(255, 255, 255, 110);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
  break;

  case 113:
  tint(255, 255, 255, 250);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 17)*width/1, Math.pow(pow1, 17)*height/2);
  tint(255, 255, 255, 130);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
  break;

  case 114:
  tint(255, 255, 255, 220);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 18)*width/1, Math.pow(pow1, 18)*height/2);
  tint(255, 255, 255, 150);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
  break;

  case 115:
  tint(255, 255, 255, 190);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 19)*width/1, Math.pow(pow1, 19)*height/2);
  tint(255, 255, 255, 170);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
  kidVoice_1.play();
  break;

  case 116:
  tint(255, 255, 255, 160);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 20)*width/1, Math.pow(pow1, 20)*height/2);
  tint(255, 255, 255, 190);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
  break;

  case 117:
  tint(255, 255, 255, 130);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 21)*width/1, Math.pow(pow1, 21)*height/2);
  tint(255, 255, 255, 210);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
  break;

  case 118:
  tint(255, 255, 255, 100);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 22)*width/1, Math.pow(pow1, 22)*height/2);
  tint(255, 255, 255, 230);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
  break;

  case 119:
  tint(255, 255, 255, 70);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 23)*width/1, Math.pow(pow1, 23)*height/2);
  tint(255, 255, 255, 250);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
  break;

  case 120:
  tint(255, 255, 255, 40);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 24)*width/1, Math.pow(pow1, 24)*height/2);
  tint(255, 255, 255, 255);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
  kid_2.play();
  break;

  case 121:
  tint(255, 255, 255, 40);
  image(horses[i], width/2, 7.9*height/10, Math.pow(pow1, 25)*width/1, Math.pow(pow1, 25)*height/2);
  tint(255, 255, 255, 250);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
  break;

  case 122:
  tint(255, 255, 255, 220);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13)*height/2);
  break;

  case 123:
  tint(255, 255, 255, 190);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 14)*height/2);
  break;

  case 124:
  tint(255, 255, 255, 160);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 15)*height/2);
  break;

  case 125:
  tint(255, 255, 255, 130);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 16)*width/1, Math.pow(pow1, 16)*height/2);
  break;

  case 126:
  tint(255, 255, 255, 100);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 17)*width/1, Math.pow(pow1, 17)*height/2);
  break;

  case 127:
  tint(255, 255, 255, 70);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 18)*width/1, Math.pow(pow1, 18)*height/2);
  tint(255, 255, 255, 50);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/1, Math.pow(pow1, 0)*height/2);
  break;

  case 128:
  tint(255, 255, 255, 55);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 19)*width/1, Math.pow(pow1, 19)*height/2);
  tint(255, 255, 255, 70);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 129:
  tint(255, 255, 255, 40);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 20)*width/1, Math.pow(pow1, 20)*height/2);
  tint(255, 255, 255, 90);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
  break;

  case 130:
  tint(255, 255, 255, 40);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 21)*width/1, Math.pow(pow1, 21)*height/2);
  tint(255, 255, 255, 110);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
  kidVoice_3.play();
  break;

  case 131:
  tint(255, 255, 255, 40);
  image(snowman[i], width/4, 7.9*height/10, Math.pow(pow1, 22)*width/1, Math.pow(pow1, 22)*height/2);
  tint(255, 255, 255, 130);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
  break;

  case 132:
  tint(255, 255, 255, 150);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
  break;

  case 133:
  tint(255, 255, 255, 170);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
  break;

  case 134:
  tint(255, 255, 255, 190);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
  break;

  case 135:
  tint(255, 255, 255, 210);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
  break;

  case 136:
  tint(255, 255, 255, 230);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
  break;

  case 137:
  tint(255, 255, 255, 250);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
  break;

  case 138:
  tint(255, 255, 255, 255);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
  break;

  case 139:
  tint(255, 255, 255, 250);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
  break;

  case 140:
  tint(255, 255, 255, 220);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13)*height/2);
  break;

  case 141:
  tint(255, 255, 255, 190);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 14)*height/2);
  break;

  case 142:
  tint(255, 255, 255, 160);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 15)*height/2);
  break;

  case 143:
  tint(255, 255, 255, 130);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 16)*width/1, Math.pow(pow1, 16)*height/2);
  break;

  case 144:
  tint(255, 255, 255, 100);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 17)*width/1, Math.pow(pow1, 17)*height/2);
  break;

  case 145:
  tint(255, 255, 255, 70);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 18)*width/1, Math.pow(pow1, 18)*height/2);
  break;

  case 146:
  tint(255, 255, 255, 40);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 19)*width/1, Math.pow(pow1, 19)*height/2);
  break;

  case 147:
  tint(255, 255, 255, 20);
  image(toy[i], width/2, 7.9*height/10, Math.pow(pow1, 20)*width/1, Math.pow(pow1, 20)*height/2);
  break;

  case 148:
  tint(255, 255, 255, 10);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 21)*width/1, Math.pow(pow1, 21)*height/2);
  break;

  case 149:
  tint(255, 255, 255, 10);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 22)*width/1, Math.pow(pow1, 22)*height/2);
  break;

  case 150:
  tint(255, 255, 255, 50);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/1, Math.pow(pow1, 0)*height/2);
  break;

  case 151:
  tint(255, 255, 255, 100);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.1)*width/1, Math.pow(pow1, 0.1)*height/2);
  break;

  case 152:
  tint(255, 255, 255, 150);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.2)*width/1, Math.pow(pow1, 0.2)*height/2);
  break;

  case 153:
  tint(255, 255, 255, 200);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.3)*width/1, Math.pow(pow1, 0.3)*height/2);
  break;

  case 154:
  tint(255, 255, 255, 250);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.4)*width/1, Math.pow(pow1, 0.4)*height/2);
  break;

  case 155:
  tint(255, 255, 255, 255);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.5)*width/1, Math.pow(pow1, 0.5)*height/2);
  break;

  case 156:
  tint(255, 255, 255, 250);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.6)*width/1, Math.pow(pow1, 0.6)*height/2);
  break;

  case 157:
  tint(255, 255, 255, 200);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.7)*width/1, Math.pow(pow1, 0.7)*height/2);
  break;

  case 158:
  tint(255, 255, 255, 150);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.8)*width/1, Math.pow(pow1, 0.8)*height/2);
  break;

  case 159:
  tint(255, 255, 255, 100);
  image(entrance[i], width/2, 7.9*height/10, Math.pow(pow1, 0.9)*width/1, Math.pow(pow1, 0.9)*height/2);
  break;

  case 160:
  tint(255, 255, 255, 50);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/1, Math.pow(pow1, 1)*height/2);
  break;

  case 161:
  tint(255, 255, 255, 70);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/1, Math.pow(pow1, 2)*height/2);
  break;

  case 162:
  tint(255, 255, 255, 90);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/1, Math.pow(pow1, 3)*height/2);
  break;

  case 163:
  tint(255, 255, 255, 110);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/1, Math.pow(pow1, 4)*height/2);
  break;

  case 164:
  tint(255, 255, 255, 130);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/1, Math.pow(pow1, 5)*height/2);
  break;

  case 165:
  tint(255, 255, 255, 150);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/1, Math.pow(pow1, 6)*height/2);
  kidVoice_2.play();
  break;

  case 166:
  tint(255, 255, 255, 170);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/1, Math.pow(pow1, 7)*height/2);
  break;

  case 167:
  tint(255, 255, 255, 190);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/1, Math.pow(pow1, 8)*height/2);
  break;

  case 168:
  tint(255, 255, 255, 210);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/1, Math.pow(pow1, 9)*height/2);
  break;

  case 169:
  tint(255, 255, 255, 230);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/1, Math.pow(pow1, 10)*height/2);
  break;

  case 170:
  tint(255, 255, 255, 250);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/1, Math.pow(pow1, 11)*height/2);
  break;

  case 171:
  tint(255, 255, 255, 255);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/1, Math.pow(pow1, 12)*height/2);
  break;

  case 172:
  floorDisplay = true;
  tint(255, 255, 255, 255);
  image(entrances[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/1, Math.pow(pow1, 13.5)*height/2);
  break;

  case 173:
  floorDisplay = false;
  tint(255, 255, 255, 250);
  image(entrances[i], width/2, 8*height/10, Math.pow(pow1, 14)*width/1, Math.pow(pow1, 15)*height/2);
  break;

  case 174:
  tint(255, 255, 255, 200);
  image(entrances[i], width/2, 8.5*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 16.5)*height/2);
  break;

  case 175:
  tint(255, 255, 255, 150);
  image(entrances[i], width/2, 9*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 17)*height/2);
  break;

  case 176:
  tint(255, 255, 255, 100);
  image(entrances[i], width/2, 9.5*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 18.5)*height/2);
  break;

  case 177:
  tint(255, 255, 255, 50);
  image(entrances[i], width/2, 9.5*height/10, Math.pow(pow1, 15)*width/1, Math.pow(pow1, 20)*height/2);
  break;

  case 178:
  tint(255, 255, 255, 50);
  image(tunnel_3[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  break;

  case 179:
  tint(255, 255, 255, 100);
  image(tunnel_2[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  break;

  case 180:
  tint(255, 255, 255, 150);
  image(tunnel_1[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  break;

  case 181:
  tint(255, 255, 255, 200);
  image(tunnel_3[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  break;

  case 182:
  tint(255, 255, 255, 250);
  image(tunnel_2[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  break;

  case 183:
  tint(255, 255, 255, 255);
  image(tunnel_1[i], 0.9*width/2, 9.5*height/10, Math.pow(pow1, 12.5)*width/1, Math.pow(pow1, 12.6)*height/1.75);
  break;

  case 184:
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
  tunnelSound.play();
  break;

  case 215:
  tint(255, 255, 255, 50);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 0)*height/10, Math.pow(pow1, 13.5)*width/1, Math.pow(pow1, 13.6)*height/1.75);
  break;

  case 216:
  tint(255, 255, 255, 80);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 1)*height/10, Math.pow(pow1, 14.5)*width/1, Math.pow(pow1, 14.6)*height/1.75);
  break;

  case 217:
  tint(255, 255, 255, 110);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 2)*height/10, Math.pow(pow1, 15.5)*width/1, Math.pow(pow1, 15.6)*height/1.75);
  break;

  case 218:
  tint(255, 255, 255, 140);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 3)*height/10, Math.pow(pow1, 16.5)*width/1, Math.pow(pow1, 16.6)*height/1.75);
  break;

  case 219:
  tint(255, 255, 255, 170);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 4)*height/10, Math.pow(pow1, 17.5)*width/1, Math.pow(pow1, 17.6)*height/1.75);
  break;

  case 220:
  tint(255, 255, 255, 200);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 5)*height/10, Math.pow(pow1, 18.5)*width/1, Math.pow(pow1, 18.6)*height/1.75);
  break;

  case 221:
  tint(255, 255, 255, 230);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 6)*height/10, Math.pow(pow1, 19.5)*width/1, Math.pow(pow1, 19.6)*height/1.75);
  break;

  case 222:
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 7)*height/10, Math.pow(pow1, 20.5)*width/1, Math.pow(pow1, 20.6)*height/1.75);
  break;

  case 223:
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 8)*height/10, Math.pow(pow1, 21.5)*width/1, Math.pow(pow1, 21.6)*height/1.75);
  break;

  case 224:
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 9)*height/10, Math.pow(pow1, 22.5)*width/1, Math.pow(pow1, 22.6)*height/1.75);
  break;

  case 225:
  tint(255, 255, 255, 255);
  image(exit[i], 0.9*width/2, 10*Math.pow(pow4, 10)*height/10, Math.pow(pow1, 23.5)*width/1, Math.pow(pow1, 23.6)*height/1.75);
  break;

  case 226:
  tint(255, 255, 255, 255);
  image(exit[i], 0.85*width/2, 10*Math.pow(pow4, 11)*height/10, Math.pow(pow1, 24.5)*width/1, Math.pow(pow1, 24.6)*height/1.75);
  break;

  case 227:
  tint(255, 255, 255, 255);
  image(exit[i], 0.8*width/2, 10*Math.pow(pow4, 12)*height/10, Math.pow(pow1, 25.5)*width/1, Math.pow(pow1, 25.6)*height/1.75);
  break;

  case 228:
  tint(255, 255, 255, 255);
  image(exit[i], 0.75*width/2, 10*Math.pow(pow4, 13.1)*height/10, Math.pow(pow1, 26.5)*width/1, Math.pow(pow1, 26.6)*height/1.75);
  break;

  case 229:
  tint(255, 255, 255, 255);
  image(exit[i], 0.7*width/2, 10*Math.pow(pow4, 14.2)*height/10, Math.pow(pow1, 27.5)*width/1, Math.pow(pow1, 27.6)*height/1.75);
  break;

  case 230:
  tint(255, 255, 255, 255);
  image(exit[i], 0.65*width/2, 10*Math.pow(pow4, 15.3)*height/10, Math.pow(pow1, 28.5)*width/1, Math.pow(pow1, 28.6)*height/1.75);
  break;

  case 231:
  tint(255, 255, 255, 255);
  image(exit[i], 0.6*width/2, 10*Math.pow(pow4, 16.5)*height/10, Math.pow(pow1, 29.5)*width/1, Math.pow(pow1, 29.6)*height/1.75);
  break;

  case 232:
  tint(255, 255, 255, 255);
  image(exit[i], 0.55*width/2, 10*Math.pow(pow4, 17.6)*height/10, Math.pow(pow1, 30.5)*width/1, Math.pow(pow1, 30.6)*height/1.75);
  break;

  case 233:
  tint(255, 255, 255, 230);
  image(exit[i], 0.5*width/2, 10*Math.pow(pow4, 19)*height/10, Math.pow(pow1, 31.5)*width/1, Math.pow(pow1, 31.6)*height/1.75);
  break;

  case 234:
  tint(255, 255, 255, 200);
  image(exit[i], 0.5*width/2, 10*Math.pow(pow4, 20.3)*height/10, Math.pow(pow1, 32.5)*width/1, Math.pow(pow1, 32.6)*height/1.75);
  break;

  case 235:
  tint(255, 255, 255, 170);
  image(exit[i], 0.5*width/2, 10*Math.pow(pow4, 21.5)*height/10, Math.pow(pow1, 33.5)*width/1, Math.pow(pow1, 33.6)*height/1.75);
  break;

  case 236:
  tint(255, 255, 255, 140);
  image(exit[i], 0.5*width/2, 10*Math.pow(pow4, 22.8)*height/10, Math.pow(pow1, 34.5)*width/1, Math.pow(pow1, 34.6)*height/1.75);
  break;

  case 237:
  tint(255, 255, 255, 110);
  image(exit[i], 0.5*width/2, 10*Math.pow(pow4, 24.2)*height/10, Math.pow(pow1, 35.5)*width/1, Math.pow(pow1, 35.6)*height/1.75);
  break;

  case 238:
  tint(255, 255, 255, 80);
  image(exit[i], 0.5*width/2, 10*Math.pow(pow4, 25.7)*height/10, Math.pow(pow1, 36.5)*width/1, Math.pow(pow1, 36.6)*height/1.75);
  break;

  case 239:
  tint(255, 255, 255, 50);
  image(exit[i], 0.5*width/2, 10*Math.pow(pow4, 27.3)*height/10, Math.pow(pow1, 37.5)*width/1, Math.pow(pow1, 37.6)*height/1.75);
  break;

  case 240:
  tint(255, 255, 255, 30);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  break;

  case 241:
  tint(255, 255, 255, 60);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  break;

  case 242:
  tint(255, 255, 255, 90);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  break;

  case 243:
  tint(255, 255, 255, 120);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  break;

  case 244:
  tint(255, 255, 255, 150);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  break;

  case 245:
  tint(255, 255, 255, 180);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  break;

  case 246:
  tint(255, 255, 255, 210);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  break;
  
  case 247:
  tint(255, 255, 255, 240);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  break;

  case 248:
  tint(255, 255, 255, 255);
  image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
  horizondisplay = false;
  break;

  case 249:
  horizonDisplay = true;
  break;

  case 258:
  tint(255, 255, 255, 30);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 0)*width/2, Math.pow(pow2, 0)*height/4);
  tunnelSound.stop();
  typing.play();
  break;

  case 259:
  tint(255, 255, 255, 60);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 1)*width/2, Math.pow(pow2, 1)*height/4);
  break;

  case 260:
  tint(255, 255, 255, 90);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 2)*width/2, Math.pow(pow2, 2)*height/4);
  break;

  case 261:
  tint(255, 255, 255, 120);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 3)*width/2, Math.pow(pow2, 3)*height/4);
  break;

  case 262:
  tint(255, 255, 255, 150);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 4)*width/2, Math.pow(pow2, 4)*height/4);
  break;

  case 263:
  tint(255, 255, 255, 180);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 5)*width/2, Math.pow(pow2, 5)*height/4);
  break;

  case 264:
  tint(255, 255, 255, 210);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 6)*width/2, Math.pow(pow2, 6)*height/4);
  break;

  case 265:
  tint(255, 255, 255, 240);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 7)*width/2, Math.pow(pow2, 7)*height/4);
  writing.play();
  break;

  case 266:
  tint(255, 255, 255, 255);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 8)*width/2, Math.pow(pow2, 8)*height/4);
  break;

  case 267:
  tint(255, 255, 255, 250);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 8.2)*width/2, Math.pow(pow2, 8.2)*height/4);
  break;

  case 268:
  tint(255, 255, 255, 200);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 8.4)*width/2, Math.pow(pow2, 8.4)*height/4);
  break;

  case 269:
  tint(255, 255, 255, 150);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 8.6)*width/2, Math.pow(pow2, 8.6)*height/4);
  break;

  case 270:
  tint(255, 255, 255, 100);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 8.8)*width/2, Math.pow(pow2, 8.8)*height/4);
  break;

  case 271:
  tint(255, 255, 255, 50);
  image(book[i], width/2, 7.9*height/10, Math.pow(pow1, 9)*width/2, Math.pow(pow2, 9)*height/4);
  break;

  case 272:
  tint(255, 255, 255, 50);
  image(books[i], width/2, 7.9*height/10, Math.pow(pow1, 10)*width/2, Math.pow(pow2, 10)*height/4);
  break;

  case 273:
  tint(255, 255, 255, 80);
  image(books[i], width/2, 7.9*height/10, Math.pow(pow1, 11)*width/2, Math.pow(pow2, 11)*height/4);
  break;

  case 274:
  tint(255, 255, 255, 110);
  image(books[i], width/2, 7.9*height/10, Math.pow(pow1, 12)*width/2, Math.pow(pow2, 12)*height/4);
  break;

  case 275:
  tint(255, 255, 255, 140);
  image(books[i], width/2, 7.9*height/10, Math.pow(pow1, 13)*width/2, Math.pow(pow2, 13)*height/4);
  horizonDisplay = true;
  typing.stop();
  writing.stop();
  coffee.play();
  break;

  case 276:
  tint(255, 255, 255, 170);
  image(books[i], width/2, Math.pow(pow5, 0)*7.9*height/10, Math.pow(pow1, 14)*width/2, Math.pow(pow2, 14)*height/4);
  horizonDisplay = false;
  break;

  case 277:
  tint(255, 255, 255, 200);
  image(books[i], width/2, Math.pow(pow5, 1)*7.9*height/10, Math.pow(pow1, 15)*width/2, Math.pow(pow2, 15)*height/4);
  break;

  case 278:
  tint(255, 255, 255, 230);
  image(books[i], width/2, Math.pow(pow5, 2)*7.9*height/10, Math.pow(pow1, 16)*width/2, Math.pow(pow2, 16)*height/4);
  break;

  case 279:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 3)*7.9*height/10, Math.pow(pow1, 17)*width/2, Math.pow(pow2, 17)*height/4);
  break;

  case 280:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 4)*7.9*height/10, Math.pow(pow1, 18)*width/2, Math.pow(pow2, 18)*height/4);
  
  break;

  case 281:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 5)*7.9*height/10, Math.pow(pow1, 19)*width/2, Math.pow(pow2, 19)*height/4);
  break;

  case 282:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 6.2)*7.9*height/10, Math.pow(pow1, 20)*width/2, Math.pow(pow2, 20)*height/4);
  break;

  case 283:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 7.5)*7.9*height/10, Math.pow(pow1, 21)*width/2, Math.pow(pow2, 21)*height/4);
  break;

  case 284:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 8.9)*7.9*height/10, Math.pow(pow1, 22)*width/2, Math.pow(pow2, 22)*height/4);
  break;

  case 285:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 10.1)*7.9*height/10, Math.pow(pow1, 23)*width/2, Math.pow(pow2, 23)*height/4);
  break;

  case 286:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 10.1)*7.9*height/10, Math.pow(pow1, 24)*width/2, Math.pow(pow2, 23)*height/4);
  break;

  case 287:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 10.1)*7.9*height/10, Math.pow(pow1, 25)*width/2, Math.pow(pow2, 23)*height/4);
  break;

  case 288:
  tint(255, 255, 255, 255);
  image(books[i], width/2, Math.pow(pow5, 10.1)*7.9*height/10, Math.pow(pow1, 26)*width/2, Math.pow(pow2, 23)*height/4);
  blackValue += 1.5;
  //blackValue += 50;
  break;
  
}
  
  if(blackValue == 255){
     xPos = width/2;
     yPos = height;
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
  
  /*
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
  */
    
    tint(255, 255, 255, 255);
    image(horizon, 0.9*width/2, 1.27*height/2, 1.2*width, height);
    image(j8, 1.2*width/2, 1.42*height/2, 2*width, 0.55*height);
  }
  
  
  if(horizonDisplay == true){
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
  
  
  background(0, blackValue);
  
  
//////////////////////////////////////////////////////////////////////////////////
}else{
//////////////////////////////////////////////////////////////////////////////////
 
  if(yPos >= height/5.5){
     
    if(keyIsDown(LEFT_ARROW)){
      xPos -= 1;
      slideSound[j].play();
       }
  
    if(keyIsDown(RIGHT_ARROW)){
      xPos += 1;
      slideSound[j].play();
       }
  
    if(keyIsDown(UP_ARROW)){
      yPos -= 1;
      slideSound[j].play();
       }
  
    if(keyIsDown(DOWN_ARROW)){
      yPos += 1;
      slideSound[j].play();
    }
  
    r += random(-width/2000, width/2050);
    R += random(-width/2000, width/2050);
  
  
    background(0, 0, 0);
    
    tint(255, 255, 255, q);
    image(events[i], width/2, 0.5*height/2, width, 1.05*height/2);
    q += 1.5;
  
  
    scribble.maxOffset = 1;
  
    stroke(255, 255, 255, q);
    strokeWeight(3);
    scribble.scribbleRect(xPos, yPos, r+R, r+R);
  
    stroke(255, 255, 255, q);
    strokeWeight(1);
    scribble.scribbleFilling([xPos - r/2, xPos + r/2, xPos + r/2, xPos - r/2], [yPos - r/2, yPos - r/2, yPos + r/2, yPos + r/2], 1.25, 150);
  
    stroke(100, 100, 100, q);
    strokeWeight(1);
    scribble.scribbleFilling([xPos - (r+R)/2, xPos + (r+R)/2, xPos + (r+R)/2, xPos - (r+R)/2], [yPos - (r+R)/2, yPos - (r+R)/2, yPos + (r+R)/2, yPos + (r+R)/2], 1.25, 150);
  
  
    //background(0, 0, 0, trans);
    //trans -= 1;
    
  }else{
    
    tint(255, 255, 255, 255);
    image(events[i], width/2, 0.5*height/2, width, 1.05*height/2);
  
  
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
    
    background(0, 0, 0, k/10);
    tint(255, 255, 255, k);
    image(event[i], width/2, 0.5*height/2, width, 1.05*height/2);
    
    r -= width/1000;
    R -= width/1500;
    
    if(r <= 0){
      r = 0;
    }
    
    if(R <= 0){
      R = 0;
    }
       
    k += 5;
    
    if(k == 100){
      drop_1.play();
    }
    
    if(k == 255){
      drop_2.play();
    }
    
    if(k > 255){
      //scribble.bowing = 0;
      scribble.roughness = random(0.15, 0.35);
      scribble.maxOffset = 0.15;
      stroke(255);
      strokeWeight(random(width/500, width/200));
      fill(255, 255, 255, trans_new);
      scribble.scribbleEllipse(1.09*width/2, height/16, r_new, r_new);
      r_new += width/5000;
      trans_new += 0.15;
      
      melting.setVolume(v);
      melting.play();
      
      if(r_new >= width/1.4){
        
        r_new = width/1.4;
        l += 0.5;
        
      }
      
      //background(255, 255, 255, l);
      
    }
       
  }
  
   
}
  
  background(255, 255, 255, l);
  if(l >= 300){
    melting.stop();
  }
  background(0, 0, 0, h);

}
