class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB : bodyB,
            pointB:{x:offsetX,y:offsetY}
            
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    /*fly(){
        this.sling.bodyA = null;
    }*/

    display(){
      // if(this.sling.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY
        strokeWeight(4);

        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}