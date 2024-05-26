/*
----- Coding Tutorial by Patt Vira ----- 
Name: Wave Pattern 
Video Tutorial: https://youtu.be/DNZPyoMBiFw?si=YFHNTw_vTuaozTkv

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/


let grid = [];
let cols = 15;
let rows = 15; 
let loc = 100;
function setup() {
  createCanvas(window.innerWidth*0.98,window.innerHeight*0.96);
  let rowSize = height/rows;
  let colSize = width/cols; 
  
  for (let i=0; i<cols; i++){
    grid[i] = []
    for (let j=0; j<rows; j++){
      grid[i][j] = new Cell(colSize/2+i*colSize, rowSize/2+j*rowSize, rowSize/2, i*loc+j*loc);
    }
  }
}

function draw() {
  background(0);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      grid[i][j].update()
      grid[i][j].display()
    }
  }
}