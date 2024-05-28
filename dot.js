class Dot {
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.collide = false;
      this.fillColor = random(colorArray);
      this.alpha = int(random(100, 200));
    }
    
    drawDot(x, y){
      ellipse(this.x, this.y, 10, 10);
      let tempColor = this.fillColor;
      tempColor.setAlpha(int(random(80, 120)));
      fill(tempColor);
    }
    
    collided() {
      if (this.x == mouseX && this.y == mouseY) {
        this.collide = true;
      }
    }
  }