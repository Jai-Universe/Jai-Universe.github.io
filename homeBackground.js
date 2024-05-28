dots = [];
let cr = 10;
let cols; let rows;
let size = 30;
speed = 30;
var fillColor;


function setup() {
    colorArray = [
        color(167, 41, 32),
        color(232, 140, 0),
        color(5, 139, 140),
        color(0, 117, 119),
        color(5, 139, 140),
        color(232, 140, 0),
        color(49, 79, 111),
        color(241, 221, 56),
        color(167, 41, 32),
      ];
      
  createCanvas(window.innerWidth*0.992, window.innerHeight*0.96);
  cols = width/size;
  rows = height/size;
  for (let i=0; i<cols; i++){
    dots[i] = [];
    for (let j=0; j<rows; j++){
      dots[i][j] = new Dot((i*size), j*size);
    }
  }
}

function draw() {
  background(0);
  //speed = Math.abs(0.02*mouseX);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      dots[i][j].drawDot(dots[i][j].x,dots[i][j].y);
      dots[i][j].x += speed;
      if (dots[i][j].x > width + 18.33335) {
        dots[i][j].x = 0;
      }
    }
  }
}
