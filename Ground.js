class Ground extends BaseClass {
    constructor(x,y,width,height) {
     super(x,y,width,height)
    Matter.Body.setStatic(this.body,true)
  this.image=loadImage('sprites/ground.png')  
  }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    super.display()
    }
  };