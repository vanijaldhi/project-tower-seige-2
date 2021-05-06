class Polygon{
    constructor(){
        var options={
              'density':0.5  
        }
        this.poly = Bodies.rectangle(200,200,30,40);
        this.polygon = loadImage("polygon.png");
        World.add(world,this.poly);
    }
    display(){
        push ();
        imageMode(CENTER);
        image(this.polygon,200,200,50,50);
        pop ();
    }
}