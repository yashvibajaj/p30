//constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables for objects in the game
var ground, stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14;
var block15, block16;
var bblock1, bblock2, bblock3, bblock4, bblock5, bblock6, bblock7, bblock8, bblock9;
var polygon, polygonImage;
var chain;

function preload() {
  //loading the polygon image
  polygonImage = loadImage("polygon.png");
}

function setup(){
  //creating a canvas
  createCanvas(1100,700);
  //rect mode to CENTER
  rectMode(CENTER);

  //creating the engine
  engine = Engine.create();
  world = engine.world;

  //creating the ground and the two stands
  ground = new Ground(600, 689, 1200, 20);
  stand1 = new Ground(420, 500, 280, 10);
  stand2 = new Ground(800, 300, 280, 10);

  //creating the bottom row of the first tower
  block1 = new BlueBlock(330, 475, 30, 40);
  block2 = new BlueBlock(360, 475, 30, 40);
  block3 = new BlueBlock(390, 475, 30, 40);
  block4 = new BlueBlock(420, 475, 30, 40);
  block5 = new BlueBlock(450, 475, 30, 40);
  block6 = new BlueBlock(480, 475, 30, 40);
  block7 = new BlueBlock(510,475, 30, 40);
  //creating the second to last row of the first tower
  block8 = new PinkBlock(360, 435, 30, 40);
  block9 = new PinkBlock(390, 435, 30, 40);
  block10 = new PinkBlock(420, 435, 30, 40);
  block11 = new PinkBlock(450, 435, 30, 40);
  block12 = new PinkBlock(480, 435, 30, 40);
  //creating the third to last/second row of the first tower
  block13 = new TurquoiseBlock(390, 395, 30, 40);
  block14 = new TurquoiseBlock(420, 395, 30, 40);
  block15 = new TurquoiseBlock(450, 395, 30, 40);
  //creating the top row of the first tower
  block16 = new BlueBlock(420, 355, 30, 40);

  //creating the bottom row of the second tower
  bblock1 = new BlueBlock(730, 275, 30, 40);
  bblock2 = new BlueBlock(760, 275, 30, 40);
  bblock3 = new BlueBlock(790, 275, 30, 40);
  bblock4 = new BlueBlock(820, 275, 30, 40);
  bblock5 = new BlueBlock(850, 275, 30, 40);
  //creating the second to last/second row of the second tower
  bblock6 = new TurquoiseBlock(760, 235, 30, 40);
  bblock7 = new TurquoiseBlock(790, 235, 30, 40);
  bblock8 = new TurquoiseBlock(820, 235, 30, 40);
  //creating the top row of the second tower
  bblock9 = new PinkBlock(790, 195, 30, 40);

  //creating the polygon and adding it to world
  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  //creating the chain
  chain = new Chain(this.polygon, {x: 150, y: 260});

  //running the engine
  Engine.run(engine);
}

function draw(){
  //background colour
  background(59, 45, 45);
  //updating the engine
  Engine.update(engine);  

  //writing the information text
  fill(242, 240, 208);
  textSize(20);
  text("Drag the hexagonal stone and release it to launch it towards the blocks.", 150, 140);

  //writing the information text
  fill(242, 240, 208);
  textSize(20);
  text("Press space to get a second chance to play!", 600, 580);

  //drawing the sprites
  drawSprites();

  //displaying the ground and two stands
  ground.display();
  stand1.display();
  stand2.display();

  //displaying the blocks of the first tower
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //displaying the blocks of the second tower
  bblock1.display();
  bblock2.display();
  bblock3.display();
  bblock4.display();
  bblock5.display();
  bblock6.display();
  bblock7.display();
  bblock8.display();
  bblock9.display();

  //displaying the chain
  chain.display();

  //adding the image to the polygon
  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

  }

  //function mousedragged
  function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }

  //function mousereleased
  function mouseReleased(){
    chain.fly();
  }

  //function keypressed
  function keyPressed(){
    if(keyCode === 32){
      chain.attach(this.polygon);
    }
  }