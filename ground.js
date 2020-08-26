class Ground{
    constructor(x,y){
var options ={
    restitution:0.8,
    isStatic:true,
    density:1.2,
    friction:0.5
}
this.body=Bodies.rectangle(x,y,800,20,options);
World.add(world, this.body);
}
   display(){
 push() 
 translate(this.body.position.x,this.body.position.y)
 rotate(this.body.angle)
 rectMode(CENTER)
 rect(0,0,800,20);
     
    
     
    pop();

}
}