const Contraint=Matter.Contraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
   bobDiameter=
   bobObject1=new Bob(100,300,5)
   bobObject2=new Bob(108,300,5)
   bobObject3=new Bob(113,300,5)
   bobObject4=new Bob(118,300,5)
   bobObject5=new Bob(123,300,5)
   roofObject=new Roof(100,100,10,140)
   rope1=new Rope(bobObject1,roofObject,-bobDiameter*2,0)
   rope2=new Rope(bobObject2,roofObject,-bobDiameter*2,0)
   rope3=new Rope(bobObject3,roofObject,-bobDiameter*2,0)
   rope4=new Rope(bobObject4,roofObject,-bobDiameter*2,0)
   rope5=new Rope(bobObject5,roofObject,-bobDiameter*2,0)



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



