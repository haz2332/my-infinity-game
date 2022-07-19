var player
var road
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,bannanaG
var restart;


//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("mainPlayer1.png","mainPlayer2.png");
  boy2Img= loadAnimation("mainPlayer3.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  bannanaImg= loadImage("fruit4.png")
  endImg =loadAnimation("gameOver.png");
  restartImg=loadAnimation("restart.png")
}

function setup(){
  
//create a canvas


 createCanvas(600,400);


// Moving background

road=createSprite(width/2,200);
road.addImage(pathImg);
road.velocityX = 4;



//creating boy running
player = createSprite(width/2,height-20,20,20);
player.addAnimation("mainPlayer2",boyImg);
player.scale=0.08;
player.visible = 1;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
bannanaG= new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
 
  player.x= World.mouseX
  
  edges= createEdgeSprites();
  player.collide(edges);
  
  //code to reset the background


   if(road.x > width ){
     road.x = width/2;
   }
  
    createCash();
    createDiamonds();
    createJwellery();
    createBannana();

    if (cashG.isTouching(player)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (diamondsG.isTouching(player)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(jwelleryG.isTouching(player)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(bannanaG.isTouching(player)) {
        gameState=END;
        
        endgame= createSprite(width/2,height-200,250,250);
        endgame.addAnimation("gameOver.png",endImg);
        endgame.scale = 1;

        restart=createSprite(width/2,height-300,50,250)
        restart.addAnimation("restart.png",restartImg)
        restart.scale=1;

        player2 = createSprite(width/2,height-80,20,20);
        player2.addAnimation("mainPlayer3",boy2Img);
        player2.scale= 0.08;

        player.visible = 0;
      
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        bannanaG.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        bannanaG.setVelocityYEach(0);
      }
      else{
        if(mousePressedOver(restart)){
          score=0
          //gameState==PLAY;
          //PLAY =1;
          //gameState==PLAY
          //createDiamonds
          //bannanaG.destroyEach()
  //jwelleryG.destroyEach()
         //diamondsG.destroyEach()
  //cashG.destroyEach()
      }
      }  
  }
 

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY= 5;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createBannana(){
  if (World.frameCount % 300== 0) {
  var bannana = createSprite(Math.round(random(50, width-50),40, 10, 10));
  bannana.addImage(bannanaImg);
  bannana.scale=0.1;
  bannana.velocityY = 4;
  bannana.lifetime = 200;
  bannanaG.add(bannana);
  }
}

//function reset(){
 // gameState==PLAY
  //bannanaG.destroyEach()
  //jwelleryG.destroyEach()
  //diamondsG.destroyEach()
  //cashG.destroyEach()
  //restart.visible=true;
  //score=0
//}
