class Bob{
    constructor(x,y,r){
        var options ={
        isStatic : false,
        density : 1.2,
        restitution : 1,
        friction : 0.01
        }
    
this.body = Bodies.circle(x,y,r/2,options);
this.r = r
//console.log(this.body);
World.add(world,this.body);
}
display(){
    var pos = this.body.position

    push ();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop ();
}

}