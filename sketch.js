var jake,runner_running;
var path,pathImg;
var invisibleGround , invisibleGround1;
function preload(){
  
   pathImg = loadImage ("path1.png");
 runner_running = loadAnimation ("Runner1.png","Runner2.png");

}

function setup(){
  createCanvas(400,400);
  
path = createSprite(200,200);
path.addImage (pathImg);
path.velocityY = 3;
path.scale = 1.2;
path.y = height/2;

runner = createSprite(200,300,10,10);
runner.addAnimation("runner",runner_running);
runner.scale = 0.1;

invisibleGround = createSprite(20,200,5,400);
invisibleGround.visible = false;

invisibleGround1 = createSprite(380,200,5,400);
invisibleGround1.visible = false;

}

function draw() {

  background(0);
 
if (path.y > 400){
  path.y = height/2;
}
runner.x = World.mouseX;
runner.collide(invisibleGround);
runner.collide(invisibleGround1);

drawSprites ();
}
