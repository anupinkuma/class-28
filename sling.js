class Sling{
 constructor(bodyA,pointB){
     var option={
         bodyA:bodyA,
         pointB:pointB,length:10,stiffness:0.4
     }
     this.chain=Matter.Constraint.create(option)
     this.pointB=pointB
     World.add(world,this.chain)
 }
 fly(){
     this.chain.bodyA=null;
 }
 attach(body){
     this.chain.bodyA=body

 }
 display(){
     if(this.chain.bodyA)
     {
     var ta=this.chain.bodyA.position
     var tb=this.pointB
     push()
     strokeWeight(3)
     stroke("green")
     line(ta.x,ta.y,tb.x,tb.y)
     pop()
     }
 }

}
