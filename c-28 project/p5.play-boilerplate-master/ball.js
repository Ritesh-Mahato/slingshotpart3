class Ball {
    constructor(x,y,width,height){
      super(x,y,50,50);
      this.trajectory=[];
    }
  
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      fill("red");
      var pos = this.body.position;
      rect(pos.x, pos.y, this.width, this.height);
      
    }
}
  