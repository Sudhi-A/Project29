class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetx=offsetX
        this.offsety=offsetY
        var option={
            bodya:body1,
            bodyb:body2,
            pointB:{x:this.offsetx,y:this.offsety}
        }
        this.body=Constraint.create(option)
        World.add(world.this.rope)
    }
    display(){
        var pointA=this.rope.bodya.position
        var pointB=this.rope.bodyb.position

        strokeWeight(2)

        var Anchor1x=pointA.x
        var Anchor1y=pointA.y

        var Anchor2x=pointB.x
        var Anchor2y=pointB.y

        line(Anchor1x,Anchor1y,Anchor2x,Anchor2y)
    }
}