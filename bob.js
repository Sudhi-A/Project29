class Bob{
    constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)  
    World.add(world, this.body);
    
}
display(){
    var paperpos=this.body.position
     var bobDiameter=r*2
    push()
    translate(paperpos.x,paperpos.y)
    rectMode(CENTER)
    fill(255,0,255)
    ellipse(0,0,this.r,this.r)
    pop()
}
}