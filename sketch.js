var runnerImage,runner,roadImage,road,invisibleRoad;


function preload(){
  //pre-load images
  runnerImage=loadAnimation("Runner-1.png","Runner-2.png");
  roadImage=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 road=createSprite(200,200,400,400); 
 road.addImage("road",roadImage);
 road.scale=1.3;
 road.velocityY=4;
 road.y=road.height/10;

 

runner=createSprite(200,300,10,10);
runner.addAnimation("running" , runnerImage);
runner.scale=0.1;

invisibleRoad=createSprite(190,200,400,400);
 invisibleRoad.visible=false;



}

function draw() {
  background(0);


  if(road.y >= 400){
  road.y = height/12;  
  }
  runner.x=mouseX;

  invisibleRoad.collide(runner);

drawSprites();
}
