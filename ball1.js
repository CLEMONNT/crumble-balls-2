class Ball{
    constructor(x,y){
    var options ={
    restitution:0.3,
    isStatic:false,
    density:1.2,
    friction:0.5
}
     this.body=Bodies.circle(x,y,50,options);
     World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       imageMode(CENTER);
       image(ballImg,0,0);

        pop();

    }
}