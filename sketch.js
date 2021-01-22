
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var hand;
var dustbinImg,dustbinLoad

function preload(){
	dustbinLoad = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,500,75,75);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	dustbinImg = createSprite(1200,555,230,243);
	hand = new Hand(0,0,10,10);
	Engine.run(engine);
	//dustbinImg = addImage("img",dustbinLoad);
	dustbinImg.shapeColor = "green"
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  hand.display();
  paper.display();
  if(keyDown("up")){
//	  Body.applyForce(paper,hand,hand);
  }
	drawSprites();
}

