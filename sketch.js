
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(420,100,330,30);

	bobObject1 = new Bob(300,400,30);
	bobObject2 = new Bob(370,400,30);
	bobObject3 = new Bob(430,400,30);
	bobObject4 = new Bob(490,400,30);
	bobObject5 = new Bob(550,400,30);


	//Create the Bodies Here.
	rope1 = new Rope(bobObject1.body,roof.body,-125,0);
	rope2 = new Rope(bobObject2.body,roof.body,-60,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,60,0);
	rope5 = new Rope(bobObject5.body,roof.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();	

  keyPressed();
 
}

function keyPressed() {
	if (keyCode === 24) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:45});
	  console.log(bobObject1.body.position);

	}
}

