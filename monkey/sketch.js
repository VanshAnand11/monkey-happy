
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup ,obstacleGroup
var score

var survivalTime = 0
function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
   bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  foodImage = loadImage("banana.png")
  obstacleImage = loadImage("obstacle.png")
}



function setup() {
  
 monkey = createSprite(80,315,20,20)
  monkey.addAnimation( "moving",monkey_running)
  monkey.scale = 0.1
  
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
  ground = createSprite(400,350,900,10)
  ground.velocityX =-4
  ground.x = ground.width/2
  console.log(ground.x)
  

}


function draw() {

  background("white")
  stroke("white")
  textSize (20)
  fill("white")
  text("score : " + score,500,500);
  stroke("black")
  textSize(20)
  fill("black")     
  survivalTime  = Math.ceil(frameCount/frameRate())
  text("survivalTime :" +survivalTime,100,50)
   if(keyDown("space")&&monkey.y>=200 ) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY+ 0.8
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground)
  
  spawnFood()
  spawnObstacles()
  drawSprites()
}
 
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(foodImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     
    food.lifetime = 200;

   FoodGroup.add(food);
  }
}
 
function spawnObstacles() {
 if (frameCount % 300 === 0) {
    var obstacle = createSprite(300,310);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3
     
    obstacle.lifetime = 200;

   obstaclesGroup.add(obstacle);
  }
}



