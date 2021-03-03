var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3,ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255,0,0);

    
	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	
	 
	rect1 = new Box(600,650,100,20);
	rect2 = new Box(650,585,20,150);
	rect3 = new Box(550,585,20,150);
    ball = new paper(110,635,50);
    console.log(ball.x);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	background(0);
	Engine.update(engine);
  
  rect1.display();
  rect2.display();
  rect3.display();
  ball. display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
  }function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
  } 


