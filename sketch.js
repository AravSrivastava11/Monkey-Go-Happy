var monkey, monkey_running;

var obstacleImage, bananaImage;
var obstacleGroup, foodGroup;

var score;
var ground;

function preload(){
 
  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png" );
 
  obstacleImg = loadImage("stone.png");
 
  bananaImg = loadImage("banana.png");
}


function setup() {
  createCanvas(600,300);
  
  monkey = createSprite(40,200,10,10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.08;
 
  ground = createSprite(120,200,800,10);
  ground.visible = false;
  ground.velocityX = -4;
  ground.x = ground.width/2;
 
  obstacleGroup = new Group();
  foodGroup = new Group();
 
  score = 0;
}


function draw(){
 
 background("cyan");
 
  monkey.collide(ground);
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
 
  monkey.velocityY = monkey.velocityY + 0.8
 

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
 
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.08;
    obstacleGroup.destroyEach();
  }
 
  if(foodGroup.isTouching(monkey)){
    score = score + 2;
    foodGroup.destroyEach();
  }
  
  switch(score){
    case 10 : monkey.scale = 0.12;
        break;
        
    case 20 : player.scale = 0.14;
      break;
      
      case 30 : player.scale = 0.16;
       break;
       
      case 40 : player.scale = 0.18;
        break;
        
      default : break;
  }

  drawSprites();
  banana();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("red");
  text("score :" +   score, 500, 50);
  
}

function banana(){
 if(frameCount%140 === 0){
  var banana = createSprite(600,90,10,10);
  banana.addImage("bananaImage", bananaImg);
   
  banana.scale = 0.05;
  banana.velocityX = -4;
  banana.lifetime = 150;
 
  foodGroup.add(banana);
}
}

function obstacles(){
  if(frameCount%300 === 0){
    var obstacle = createSprite(600,165,10,10);
    obstacle.addImage("obstacleImage", obstacleImg);
   
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
   
    obstacleGroup.add(obstacle);
}
}

