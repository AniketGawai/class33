const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform, Score = 0 ;
var bird, slingShot,gameState = "onsling";

function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
    getBackground()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(250,120);

   // getBackground();

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:250, y:50});
}

function draw(){
   if(backgroundImg)
    background(backgroundImg);


    noStroke();
    textSize(25);
    fill("white");
    text("SCORE : " + Score,width-300,50) 
    




    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.Score();
    
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.Score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
   // if(gameState != "launch" ){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launch"
}


function keyPressed(){

if (keyCode ===32){

  Matter.Body.setPosition(bird.body,{x:250,y:50})
    bird.trajectory = [];
    slingshot.attach(bird.body);
}


}


async function getBackground(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

var responseon = await response.json();
var datetime = responseon.datetime;
console.log(responseon);
console.log(datetime);

var hour = datetime.slice(11,13);
console.log(hour); 

if(hour>=6 && hour<=19){
    backgroundImg = loadImage("sprites/bg.png");
}

else{
    backgroundImg = loadImage("sprites/bg2.jpg");
}

}




