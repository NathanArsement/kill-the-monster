const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base, hero;
var bg;
var flew;
var boxes=[];
var monst;

function preload() {
getBG();

}

function setup() {
  createCanvas(1600, 800);
  background(bg);
  engine = Engine.create();
  world = engine.world;

  base = new ground(500, 500, 1000, 30);

  hero = new superman(100, 250, 250, 150);

flew = new fly(hero.body, {x:100, y:0});

for (var j = 350; j >100; j=j-50) 
    {
    
       boxes.push(new obstacle(300, j, 50, 50));
    }
    for (var j = 350; j >50; j=j-50) 
    {
    
       boxes.push(new obstacle(375, j, 50, 50));
    }
    for (var j = 350; j >100; j=j-50) 
    {
    
       boxes.push(new obstacle(450, j, 50, 50));
    }
    for (var j = 350; j >150; j=j-50) 
    {
    
       boxes.push(new obstacle(525, j, 50, 50));
    }
    for (var j = 350; j >50; j=j-50) 
    {
    
       boxes.push(new obstacle(600, j, 50, 50));
    }
  monst = new monster(800, 400, 200, 200);
}

function draw() {
  background(bg);
  Engine.update(engine);

  base.display();
  hero.display();
  flew.display();
 
  for (var i = 0; i < boxes.length; i++) {
     
    boxes[i].display();
    
  }
  monst.display();
  //drawSprites();

}
async function getBG(){
  time= (new Date()).getHours();
  if(time>=6 && time<=19){
    bg = loadImage("img/day.png");
   
  }
  else{
    bg = loadImage("img/night.jpg");
   
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
  flew.fly();
}