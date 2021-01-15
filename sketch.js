
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var bin;


var world;
var groundObject;



function preload()
{
	binImg=loadImage("dustbingreen img.png");
	
}

function setup() {
	createCanvas(800, 700);

	bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 600, 10);

	ground = new Ground(400, 680, 800, 20);
	
	leftSide = new Bin(550, 620, 20, 100);
	bottom = new Bin(610, 660, 100, 20);
	rightSide = new Bin(670, 620, 20, 100);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  Engine.update(engine);

  paper.display();

  ground.display();

  
  leftSide.display();
  bottom.display();
  rightSide.display();

  var paperObject;
  var bin;


var world;
var groundObject;

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y: -85})
	}
  }



