var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,60,100);


speed=random(55,90);
weight=random(400,1500);

car.velocity.x=speed;
}

function draw() {
  background("black");
  if(wall.x-car.x<(car.widht+wall.widht)/2){
    car.velocityx=0;}
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColour="red";
    }
     if(deformation<180&&deformation>100){
       car.shapeColour="yellow";
     }
     if(deformation<100){
       car.shapeColour="green";
     }
  
  drawSprites();
}