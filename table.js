class Table{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.table = Bodies.rectangle(x,y,250,30,options);
    World.add(world,this.table);
    }
    display(){
      push ();
      rectMode(CENTER);
      rect(this.table.position.x,this.table.position.y,250,30);
      pop()
    }
}
