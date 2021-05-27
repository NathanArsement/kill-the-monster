class ground{
    constructor(x,y,w,h){
        var opt={
            isStatic:true,
            restitution:1.0,
            density:1.0,
            friction:0.8
        };
        this.body=Matter.Bodies.rectangle(x,y,w,h,opt);
        this.width=w;
        this.height=h;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("grey");
        rect(0, 0, this.width, this.height);
        pop(); 
    }
}