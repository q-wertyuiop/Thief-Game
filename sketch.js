const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thief1, thief2, thiefs;
var laser1,laser2,laser3,laser4,laser5;
var lasers = [];
var b1,b2,b3,b4;
var diamond,thiefi,diam;

var gameState = "PLAY";

function preload(){

  thiefi = loadImage("thief3.png");
  diam = loadImage("Untitled.png");
}

function  setup(){
    createCanvas(800,500);
engine = Engine.create();
world = engine.world;

thief1 = createSprite(100,450,2,2);
thief1.addImage("thief3.png",thiefi);
thief1.scale = 0.5;
thief1.setCollider("circle",0,0,100);
thief1.debug = false;

diamond = createSprite(750,50,20,20);
diamond.addImage(diam);
diamond.scale = 0.2;
diamond.setCollider("circle",0,0,100);
diamond.debug = false;

createEdgeSprites();

for(var i =0;i<8;i++){

  if(i===1||i===5||i===6||i===7){
    lasers[i]= createSprite(random(0,800),random(0,400),5,random(100,200));
   // lasers[i].velocityX = random()
    lasers[i].velocityY = 0;

    if(round(random(1,2))==1){
    lasers[i].velocityX =3;

    }
    else{
      lasers[i].velocityX=-3;
    }

    lasers[i].shapeColor = 'lime';
   
  }
  else{
    lasers[i]= createSprite(random(0,800),random(0,400),random(100,300),5);
    lasers[i].velocityX = 0;
 
    lasers[i].velocityY = (-3,3);
    lasers[i].shapeColor = 'lime';
   
  }

  
}

}
function draw(){
    background("tan");
  Engine.update(engine);
 
  edges = createEdgeSprites();

for(var i=0;i<7;i++){
lasers[i].bounceOff(edges);
}

if( keyIsDown(UP_ARROW)){
  thief1.y -= 4;
}
if( keyIsDown(DOWN_ARROW)){
  thief1.y += 4;
}
if( keyIsDown(LEFT_ARROW)){
  thief1.x -= 4;
}
if( keyIsDown(RIGHT_ARROW)){
  thief1.x += 4;
}

for(var i =0;i<8;i++){
  if(lasers[i].isTouching(thief1)){
    gameState="END";
    lasers[i].velocityX=0;
    lasers[i].velocityY=0;
    lasers[i].shapeColor="red";

    textSize(20);
    text("The Thief Was Caught",300,200);
    

  }
}
if(thief1.isTouching(diamond)){
  gameState = "END";
  textSize(30);
  text("The Thief Stole The Diamond",300,300);

  
 
}


if(gameState==="END"){
 
  for(var i =0;i<8;i++){
   
      lasers[i].velocityX=0;
      lasers[i].velocityY=0;
      lasers[i].shapeColor="red";

  }


}
drawSprites();
console.log(gameState);
}


