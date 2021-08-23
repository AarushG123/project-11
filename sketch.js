var road
var road1
var runner
var runner1
function preload(){
  //pre-load images
  road1 = loadImage("path.png")
  runner1 = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  road = createSprite(200,200)
  road.addImage("road", road1)
  road.scale = 0.5

  runner = createSprite(200,350)
  runner.addAnimation("runner", runner1)
  runner.scale = 0.06
  //create sprites here
}

function draw() {
  background("grey")
  road.velocityY = 7
  drawSprites()
  if (road.y >= 250){
    road.y = 200
  }
  runner.x = World.mouseX

}
