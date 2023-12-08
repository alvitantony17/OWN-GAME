const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var gameState="play"

var bg;
var bgImage;
var play;
var playImage;
var logo;
var logoImage;
var player;
var playerImage;
var zombie;
var zombieImage;
var zombie2;
var zombie2Image;
var zombie3;
var zombie3Image;
var playerleft;
var plImage;
var bullet;
var bulletImage;
var score = 0;

var zombieGroup1;
var zombieGroup2;
var zombieGroup3

function preload(){
bgImage=loadImage("assets/photo.png")
playerImage=loadAnimation("assets/playerright.png","assets/playerright.png","assets/playerright.png","assets/playerright2.png","assets/playerright2.png")
zombieImage=loadAnimation("assets/zombie1.png","assets/zombie2.png","assets/zombie3.png")
zombie2Image=loadAnimation("assets/zb1.png","assets/zb2.png","assets/zb3.png","assets/zb4.png","assets/zb5.png","assets/zb6.png","assets/zb7.png")
zombie3Image=loadAnimation("assets/zom.png","assets/zom1.png","assets/zom2.png","assets/zom3.png","assets/zom4.png")
bulletImage=loadImage("assets/bullet.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
    
bg=createSprite(800,300)
bg.addImage("bg",bgImage)
bg.scale=8

player=createSprite(width/2,height/2+240)
player.addAnimation("player",playerImage)
player.scale=0.8
player.frameDelay=15


zombieGroup1=createGroup()
zombieGroup2=createGroup()
zombieGroup3=createGroup()

score=0
}

function draw(){
    background(200,200);
    Engine.update(engine);

    if(gameState=="play"){
        spawnZombies()
    

        if(keyDown("RIGHT_ARROW") || keyDown("D")){
            player.x=player.x+10
            //bullet.x=bullet.x+10
           
        }
    
        if(keyDown("LEFT_ARROW") || keyDown("A")){
            player.x=player.x-10
            //bullet.x=bullet.x-10
        }
    
        if(player.x>width){
            player.x=width
        }
    
        if(player.x<0){
            player.x=0
        }


        

       // if()
    }
    

    /*if(zombieGroup.isTouching(bullet)){
        bullet.visible=false
        zombieGroup.destroyEach()
        score=score+1
    }*/


    

    
    drawSprites()
    
    push()
    textSize(50)
    fill("#85ff66")
    text("Score : " + score ,120,150)
    pop()
    

    

}

function spawnZombies(){
  if(frameCount%80===0){
    
    
    
    //zombie.velocityX=-1

    var rand = Math.round(random(1,3))
    switch(rand){
        case 1 :
        var zombie1=createSprite(width/2-200,height/2-100)    
        zombie1.addAnimation("zombie1",zombieImage)
         //zombie1
    zombie1.x=width/2-300
    zombie1.y=150
    zombie1.scale=0.4
    zombie1.velocityX=-0.4
    zombie1.velocityY=0.9
    zombie1.frameDelay=10
    zombieGroup1.add(zombie1)  
    zombieGroup1.lifetime=100
                break;
        case 2 : 
        var zombie2=createSprite(width/2,height/2-100)
        zombie2.addAnimation("zombie2",zombie2Image)
        //zombie2
    zombie2.x=width/2
    zombie2.y=150
    zombie2.scale=0.4
    //zombie2.velocityX=-0.9
    zombie2.velocityY=0.9
    zombie2.frameDelay=10
    zombieGroup2.add(zombie2)  
    zombieGroup2.lifetime=100
                break;
        case 3 :
        var zombie3=createSprite(width/2+200,height/2-100)    
        zombie3.addAnimation("zombie3",zombie3Image)
         

    //zombie3
    zombie3.x=width/2+300
    zombie3.y=150
    zombie3.scale=0.4
    //zombie3.velocityX=
    zombie3.velocityY=0.9
    zombie3.frameDelay=10
    zombieGroup3.add(zombie3)  
    zombieGroup3.lifetime=100

        default:break;
    }
   


  }
}

/*function shoot(){
    bullet=createSprite(player.x+90,player.y-150)
    bullet.addImage("bullet",bulletImage)
    bullet.scale=0.07
    bullet.setVelocity(5,-3)
  }*/


function keyPressed(){

    if(keyCode===32){
        bullet=createSprite(player.x+40,player.y-120)
        bullet.addImage("bullet",bulletImage)
        bullet.scale=0.07
    }


 
}

function keyReleased(){
   if(keyCode===32){
    bullet.setVelocity(20,-10)
   }
}