
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var ground;
var paperImg, ballImg;
function preload(){
	
	dustbinImg=loadImage("dustbingreen.png")
	ballImg=loadImage("paper.png")
}


function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1=new Ball(100,100);
	ground=new Ground(400,680);
	
	//Create the Bodies Here.
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}


	Engine.run(engine);
  v1 = Bodies.rectangle(width-300 , 615 , 20 , 70 , {isStatic:true});
	World.add(world,v1);



	// v1Sprite=createSprite(v1.position.x,v1.position.y,20,100);
	// v1Sprite.shapeColor="red";


	v2 = Bodies.rectangle(width-500 , 615 , 20 , 70 , {isStatic:true});
	World.add(world,v2);
	



	// v2Sprite=createSprite(v2.position.x,v2.position.y,20,100);
	// v2Sprite.shapeColor="red";


	h1 = Bodies.rectangle(width-400 , 650 , 175 , 20 , {isStatic:true});
	World.add(world,h1);



	// h1Sprite=createSprite(h1.position.x,h1.position.y,175,20);
    // h1Sprite.shapeColor="red";
}


function draw() {
  
  background(225);
  
 
  ground.display();
           
  
  image(dustbinImg,width-550,350);
  ball1.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:-500});
	}
}


