var bullet, wall, thickness, speed, weight, damage;

function setup() {
  createCanvas(800,200);
 
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,100,50,10); 
  bullet.shapeColor = color(255)
  bullet.velocityX = speed/6;

  wall = createSprite(750,100,thickness,100);
  wall.shapeColor = color(80)

}

function draw() {
  background("lightGrey");  

  if(touching(wall,bullet)){
   
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if (damage>10){
      bullet.shapeColor = color(255,0,0)
    }

    if (damage<10 || damage === 10){
      bullet.shapeColor = color(0,255,0)
    }
console.log("Damage: " + damage)
  }

  drawSprites();
}

function touching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 || 
    object1.x - object2.x === object1.width/2 + object2.width/2){
      return true;
    } else {
      return false;
    }
}