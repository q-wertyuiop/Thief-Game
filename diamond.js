class Diamond{
   constructor(){

   this.body = Bodies.circle(750,50,20,{isStatic : true});
   this.r = 20;
   this.image = loadImage("Untitled.png");
   
   World.add(world,this.body);

   }
   display(){

    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,30,30);
    

}

}