class Thief {

constructor(x,y,image){

this.body = Bodies.circle(x,y,50,{isStatic : true});
this.image = loadImage(image);
this.r = 50;

World.add(world,this.body);


}

display(){

    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,400,500);
    

}




}