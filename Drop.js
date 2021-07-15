class Drop{
   constructor(x,y){
     var options = {
      friction: 0.001,
       restitution:0.1
    }
this.rain = Bodies.cricle(x,y,5);
this.radius = 5;
World.add(world, this.rain);
}
 update(){
  if(this.rain.position.y > heught){

    Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
  }
  
  for(var i = 0; i<maxDrops; i++){ 
    drops[i].showDrop(); 
    drops[i].updateY()
}
 }

  showDrop(){
      fill("blue");
      ellipseMode(CENTER);
      ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);


  }


}