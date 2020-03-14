const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var p1,p2,p3,p4;
var slingshot,ball;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
    world = engine.world;

    p1 = new Platform(1050,200,200,10);
    p2 = new Platform(800,300,200,10);
    p3 = new Platform(650,100,250,10);
    p4 = new Platform(500,250,150,10);

    slingshot = new SlingShot(100,350,10,100);
    ball = new Ball(100,300,50,50);

   
    }




function draw() {
  background(0,0,0);  
  Engine.update(engine);

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  slingshot.display();
  ball.display();
  drawSprites();
}