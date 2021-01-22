class Paper {
  constructor(x,y,width,height){
      var options = {
          'restitution':0.3,
          'isStatic':false,
          'density':1.3,
          'friction':0.5
      }
      this.image = loadImage("paper.png");
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    // this.angle = angle;
      
      World.add(world, this.body);
  }  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    
    pop();
  }
}