class stone{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("stone.png");
        this.body=Bodies.rectangle(x, y ,w, h, options);
 		World.add(world, this.body);
}
display(){
    var Spos=this.body.position;
    push ()
    translate (Spos.x,Spos.y);
    imageMode (CENTER);
    image (this.image,0,0,this.w,this.h);
    pop ();
}

}