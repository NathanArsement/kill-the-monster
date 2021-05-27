class obstacle {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':1.0,
          'density':0.3,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color="red";
      World.add(world, this.body);
    }
     display(){
      
       
        push();
          translate(this.body.position.x, this.body.position.y);
          
          rectMode(CENTER);
          fill(this.color);
          rect(0, 0, this.width, this.height);
          pop();
       
       
         
       
       
     }
    
    
    
    
    };