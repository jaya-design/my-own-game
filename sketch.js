// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;

// make all var/variable.
var player1 , player2 , player3;
var enemy1 , enemy2 , enemy3;
var bg; 
var player , form , game;
var anamies;
var gun1;
var wall1 , wall2 , wall3 , wall4 , wall5 , wall6 , wall7 , wall8 , wall9 , wall10;
var allPlayers;
var game;

//preload all img/images

function preload(){
  // gun
  gunImg = loadImage("Images/mag7.png")

  // players 1 , 2 , 3 load images

  player1Img = loadImage("Images/friend1.png");
  player2Img = loadImage("Images/friend2.png");
  player3Img = loadImage("Images/style1.png");

  // background/map load image
  
  bg = loadImage("Images/Map.jpeg");

  // enemy 1 , 2 , 3 load images

  enemy1Img = loadImage("Images/anamy2.png");
  enemy2Img = loadImage("Images/anamy1.png");
  enemy3Img = loadImage("Images/anamy3.png");
  //enemyGroup = new Group();

}

//create setup

function setup() {

  // create canvas

  createCanvas(windowWidth,windowHeight);

  // database

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  // engine = Engine.create();
  // world = engine.world();
 
  // create sprite of player 1 , 2 , 3
  
  // player1 = createSprite(200, height-200, 50, 50);
  // player1.addImage(player1Img);
  // player2 = createSprite(250, 200, 50, 50);
  // player2.addImage(player2Img);
  // player3 = createSprite(300, 200, 50, 50);
  // player3.addImage(player3Img);

  gun1 = createSprite(438,207,10,10);
  gun1.scale = 0.25
  gun1.addImage(gunImg);

  wall1 = createSprite(580,275,10,50);
  wall1.visible = false;
  
}

// create function draw

function draw() {
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    spawn();
    spawn2();
    spawn3();
  }
  if(gameState === 2 ){
    game.end();
  }

 // background(bg);
  fill("black")
  text(mouseX + "  " + mouseY,mouseX,mouseY)
  
  
 // Engine.update(engine);

 //spawner();

 //console.log('GAME_STARTED');
 console.log(frameCount);

  drawSprites();


}


// move player 1



//snawner [it help's to spawn enemy randomly on screen]

function spawner(){
  console.log(frameCount);
if (frameCount % 20 === 0) {
  anamies = createSprite(random(width+100, 100), 0, 100, 100);
  anamies.velocityY = 1;
 // anamies.velocityX = -1
   var rand = Math.round(random(1,3));
   switch(rand){
       case 1: anamies.addImage("enemy1Img",enemy1Img);
       break;
       case 2: anamies.addImage("enemy1Img",enemy2Img);
       break;
       case 3: anamies.addImage("enemy1Img",enemy3Img);
       break;

   }
  // enemyGroup.add(anamies);
   
}
}
