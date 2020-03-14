class SlingShot{
    constructor(x,y,width,height){
        var options = {
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   /* attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA = null;
    }*/

    display(){
         var pos = this.body.position;
         rectMode(CENTER);
         fill("brown");
         rect(pos.x, pos.y, this.width, this.height);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);

            if(pointA.x<220){

            
            strokeWeight(7);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();
        }
    }
    
}