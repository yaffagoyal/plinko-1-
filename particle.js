class Particle{
    constructor(x, y, radius ) {
        var options = {
            isStatic:false,
            restitution:0.3
           
        }
        this.body = Bodies.circle(x, y, 10,options);
        this.radius = 10;
       // this.x=x;
       // this.y=y;
        this.color= color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(0,0, this.radius,this.radius);
       pop();
      }
}