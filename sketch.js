
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bin1,bin2,bin3,paper;
var ground;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(500,390,1000,20);

    bin1=new Bin(650,345,10,80);
    bin2=new Bin(750,345,10,80);
    bin3=new Bin(700,380,90,10);

    paper= new Paper(50,300,10);



    
    



}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    bin1.display();
    bin2.display();
    bin3.display();
    paper.display();
    
   
}

function keyPressed(){

    if(keyCode===UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:4,y:-4})


        
    }
}