var nemo;
var bg;
var obstacle1,obstacle1Img,obstacle2,obstacle2Img,obstacle3,obstacle3Img;
var gameState = "serve";
var life=3;
var heart1,heart1Img,heart2,heart2Img,heart3,heart3Img;
var gameover,gameoverImg,start;

function preload() {
  bgImg = loadImage("bg.png")
  nemoImg = loadImage("nemo.png")
  obstacle1Img = loadImage("obstacleO.png")
  obstacle2Img = loadImage("obstacleT.png")
  obstacle3Img = loadImage("obstacle3 (2).png")
  heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")
  gameoverImg = loadImage("gameover.png")
  startImg = loadImage("start.png")
}

function setup() {
  createCanvas(1000,600);
 // background("blue");  

  sea = createSprite(200,200,20,20)
  sea.addImage(bgImg);
  sea.scale = 1.5

  nemo = createSprite(65,220,50,50);
  nemo.addImage(nemoImg);
  nemo.scale = 0.25;

  obstaclesGroup = new Group();

  heart3 = createSprite(350,40,20,20)
  heart3.addImage("heart3",heart3Img)
  heart3.scale = 0.3

  heart2 = createSprite(350,40,20,20)
  heart2.addImage("heart2",heart2Img)
  heart2.scale = 0.3
  heart2.visible = false;

  heart1 = createSprite(350,40,20,20)
  heart1.addImage("heart1",heart1Img)
  heart1.scale = 0.3
  heart1.visible = false;
  
  start = createSprite(250,230,10,10)
  start.addImage(startImg)
  start.scale = 0.7
  start.visible=true;

  gameover = createSprite(250,250,10,10)
  gameover.addImage(gameoverImg)
  gameover.scale = 0.8
  gameover.visible=false;

}

function draw() {

  //  if(gameState==="serve"){
   
  //  }  
  
  if(keyDown("space")){
    gameState="play";
    
  }
  
  if(gameState=="play"){
  spawnobstacle1();
  spawnobstacle2();
  spawnobstacle3();
  handleNemo();

  start.visible = false;

  if(life===3){
    heart3.visible = true
  }
  if(life===2){
   heart2.visible = true
   heart3.visible = false
  }
  if(life===1){
    heart2.visible = false
    heart3.visible = false
    heart1.visible = true
  }

  //go to gameState "lost" when 0 lives are remaining
  if(life===0){
    heart1.visible = false
    gameState = "end";
    
  }


   if(nemo.isTouching(obstaclesGroup)){

 for(var i=0;i<obstaclesGroup.length;i++){     
      
  if(obstaclesGroup[i].isTouching(nemo)){
       obstaclesGroup[i].destroy()
//Decrease the life
       life = life-1
       }  } } 

  }

  if (gameState=="end") {
    gameover.visible = true;
    nemo.destroy();
    obstaclesGroup.destroyEach();
  }
   
 
  drawSprites()}
  
 function spawnobstacle1() {
  
  if (World.frameCount%100===0) {
  obstacle1 = createSprite(430,random(50,450),50,50);
  obstacle1.addImage(obstacle1Img);
  obstacle1.velocityX=-4;
  obstacle1.scale=0.23;
  obstacle1.lifetime=90;
  obstaclesGroup.add(obstacle1);
  }
  }
  
 function spawnobstacle2() {
  
  if (World.frameCount%150===0) {
  obstacle2 = createSprite(450,random(50,450),50,50);
  obstacle2.addImage(obstacle2Img);
  obstacle2.velocityX=-5;
  obstacle2.scale=0.27;
  obstacle2.lifetime=90;
  obstaclesGroup.add(obstacle2);
  } 
  } 
  
 function spawnobstacle3() {
  
  if (World.frameCount%250===0) {
  obstacle3 = createSprite(440,random(50,450),50,50);
  obstacle3.addImage(obstacle3Img);
  obstacle3.velocityX=-7;
  obstacle3.scale=0.47;
  obstacle3.lifetime=90;
  obstaclesGroup.add(obstacle3);
  }
  } 
  
function handleNemo() {

  if (keyDown("UP_ARROW")) {
   nemo.y=nemo.y-12;
  }
  
  if (keyDown("DOWN_ARROW")) {
  nemo.y=nemo.y+12;
  }

}