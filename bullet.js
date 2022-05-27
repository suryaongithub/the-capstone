class CannonBall {
    constructor(x, y) {
      var options = {
        isStatic: true,
        mass:0.1
      };
      this.r = 15;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("./assets/cannonball.png");
      World.add(world, this.body);
    
    }
    display() 
    {
      var pos = this.body.position;
      push();
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.r)
      pop();
    }

      shoot()
  {
    var newAngle = 10-30;
    newAngle = newAngle * (3.14/180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Body.setStatic(this.body,false);
    Body.setVelocity(this.body,{
      x:velocity.x*(180/3.14),
      y:velocity.y*(180/3.14)
    });

    
  }

}
