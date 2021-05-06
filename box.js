class Box {
    constructor(x, y) {
        var options = {
            'restitution': 0.5,
            'isStatic': false
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.image = loadImage("box.png")
        World.add(world, this.body);
        this.Visiblity = 255;
    }

    display() {
        console.log(this.body.speed);
        if (this.body.speed < 3) {
            push();
           
            fill("blue");
            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y, 30, 30);
            pop();
        }

        else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image,this.body.position.x,this.body.position.y,30,30);
            pop();
        }
    }
    // //score(){
    //   //  if(this.Visiblity<0 && this.Visiblity> - 105){
    //         score++;
    //     }
    // }
}
