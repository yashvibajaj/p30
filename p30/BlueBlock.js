//class for the blue coloured blocks
class BlueBlock{
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed < 4){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke(0);
      fill(103, 209, 234);
      rect(0,0, this.width, this.height);
      pop();
    } 
    else {
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      pop();
    }
  }
}