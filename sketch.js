const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,score;

function preload(){
    polygon_img=loadImage("polygon.png");
    
    //getTime();
}

function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
    world = engine.world;
    
    text("Score:"+score,750,40);

    box1 = new Box(330,300);
    box2 = new Box(360,300);
    box3 = new Box(390,300);
    box4 = new Box(420,300);
    box5 = new Box(450,300);
    box6 = new Box(480,300);
    box7 = new Box(510,300);
    
    box8 = new Box(360,260);
    box9 = new Box(390,260);
    box10= new Box(420,260);
    box11= new Box(450,260);
    box12= new Box(480,260);

    box13= new Box(390,220);
    box14= new Box(420,220);
    box15= new Box(450,220);
   
    box16= new Box(420,180);
    table1 = new Table(435,380);
    ground1= new Ground(800,550,1600,50);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingShot = new Sling(this.ball,{x:100,y:200})
    console.log("not working")
    Engine.run(engine);
}
function draw() {
    
    background('bg')
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    // box1.score();
    // box2.score();
    // box3.score();
    // box4.score();
    // box5.score();
    // box6.score();
    // box7.score();

    // box8.score();
    // box9.score();
    // box10.score(); 
    // box11.score();
    // box12.score();
   
    // box13.score();
    // box14.score();
    // box15.score();

    // box16.score();

    imageMode(CENTER)  
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
    
    table1.display();
    ground1.display();

    slingShot.display();

    }

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(this.ball);
    }
}

// async function getTime(){
//     var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
//     var responceJSON = await responce.json();

//     var datetime = responceJSON.datetime;
//     var hour = datetime.slice(11,13);

//     if(hour>06 && hour<16){
//         bg = "light blue";
//     }
//     else{
//         bg = "grey";
//     }
    
//    // background= load(bg);

//     console.log(hour);

// }


