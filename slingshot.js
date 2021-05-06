class Slingshot{
	constructor(bodyA,pointA)
	{
		var options={ 
            bodyA:bodyA,			 
			pointA:pointA, 
			stiffness:0.004, 
			length:1	
		}
		
		this.sling = Matter.Constraint.create(options)
		World.add(world,this.sling)
		this.bodyA = bodyA
		this.pointA = pointA
		
    }
    attach(bodyA){
		this.sling.bodyA=bodyA;
	}

	fly()
	{
		this.sling.bodyA=null;
	}

	display()
	{
		if(this.sling.bodyA)
		{
			var pointB=this.bodyA.position;
			var pointA=this.pointA

			strokeWeight(2);		
			line(pointB.x,pointB.y,pointA.x,pointA.y);
		}
	}
}