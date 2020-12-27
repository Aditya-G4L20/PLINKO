class Plinko {
    constructor(x,y,r) {
        var options = {
            isStatic: true
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = this.color(255,255,255);
        World.add(world,this.body);

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

    
        push();
        imageMode(CENTER);
        noStroke();
        FileList(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }

}