class fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 350
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.pointB.x = mouseX;
        this.pointB.x = mouseX;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            strokeWeight(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
                
            
           
            
            pop();
        }
    }
    
}