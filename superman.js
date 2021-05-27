class superman{
    constructor(x,y,w,h){
        var opt={density:1.0, restitution:1.0, isStatic:false, friction:0.5};
        this.body=Matter.Bodies.rectangle(x,y,w,h,opt);
        this.width=w;
        this.height=h;
        this.image=loadImage("img/Superman.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop(); 
    }
}