const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var time;
var ground,ground2;
var boxes=[];
var ball;
var info = {
  square:{
    checker:true,
    side:25
    },
  rectangle:{
    checker:false,
    width:25,
    height:35
  },
  circle:{
    checker:false,
    radius:25
  }}
var eligible = {boxes:true,bullets:true,launched:"not yet",start:false,swal:true};
var objects = [];
var times_alert=2;
var bullets = [];
var captain,captain_img;
var cannon_img,cannon_base_image;


function preload()
{
  captain_img = loadImage("./assets/captain.png");
  cannon_img = loadImage('./assets/canon.png');
  cannon_base_image = loadImage('./assets/cannonBase.png')

}
function setup() {
  createCanvas(750,400);

  engine = Engine.create();
  world = engine.world;

  captain = Bodies.rectangle(650,50,50,50);
  World.add(world,captain);


boxes.push(new group_of_Boxes(2,1,{x:600,y:150},10,90));
boxes.push(new group_of_Boxes(2,1,{x:650,y:150},10,90));
boxes.push(new group_of_Boxes(2,1,{x:700,y:150},10,90));
boxes.push(new group_of_Boxes(1,1,{x:650,y:50},125,5));
boxes.push(new group_of_Boxes(2,1,{x:675,y:25},10,90));
boxes.push(new group_of_Boxes(2,1,{x:625,y:25},10,90));
boxes.push(new group_of_Boxes(1,1,{x:650,y:-50},125,5));



ground = new Ground(375,395,790,5);
ground2 = new Ground(650,225,175,5);






  
   
  
  // rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  frameRate(30)
  Engine.update(engine);

  push();
  imageMode(CENTER);
  image(captain_img,captain.position.x,captain.position.y,50,50)
  image(cannon_base_image,50,300,75,75);
  image(cannon_img,50,300,50,50);
  fill('brown');
  rect(23,330,50,65);
  pop();
  
  

  ground.show();
  ground2.show();

  for (var i = 0 ;objects.length>i;i++)
    {
      objects[i].display()
    }
  for (var i = 0 ;bullets.length>i;i++)
  {
      bullets[i].display()
    }

    for (var i = 0 ;boxes.length>i;i++)
    {
        boxes[i].show()
      }

  if(eligible.launched == "not yet" && objects.length>=1)
{
  eligible.launched="yep";
  launch();
  eligible.start=true;

}

if (time!=0 && eligible.start==true) {
  time--;
  
}

else
{
  time=60;
}
push();
rectMode(CENTER);
rect(375,5,time*2,5);
pop();


if(captain.position.y>400)
{
  if(eligible.swal){
  // swal("Have a nice day!");
  swal(
    {
      title: 'job done',
      text: "Thanks for playing!!",
      imageUrl:
        "assets/captain.png",
      imageSize: "150x150",
      confirmButtonColor : red,
      confirmButtonText: "Play Again"
    }
   
  ); 
  location.reload();
  eligible.swal=false
 }
}
}




function mouseClicked() {
  console.log('mouse was clicked at '+'x : '+mouseX + ' y : ' + mouseY)
  
  if(mouseX<490 && eligible.boxes == true)
  {
    setTimeout(turn,1000);
    objects[objects.length] = new Box (mouseX,mouseY,info.rectangle.width,info.rectangle.height);
    eligible.boxes = false;
}

if(mouseX>490 && times_alert>0){
  alert('you cannot spawn a box that far from cannon');
  times_alert--;
}
}

function anyOne(array)
{
  return array[Math.round(random(0,array.length-1))];
}

function turn(){
  eligible.boxes = true;
}

function turn2(){
  eligible.bullets = true;
}

/*
sometimes just you just have to complecate your life because no on else will
*/

// document.addEventListener("keydown", function(event) {
//   if (event.keyCode === 65 && eligible.bullets) {
//     var cannonBall = new CannonBall(50,300);
//     bullets.push(cannonBall);
//     eligible.bullets=false;
    
//   }
// });

// document.addEventListener("keyup", function(event) {
//   if (event.keyCode === 65) {
//     
//     setTimeout(turn2,1000);
    
//   }
// });

function launch()
{
  var cannonBall = new CannonBall(50,300);
  cannonBall.shoot();

  bullets.push(cannonBall);
  setTimeout(launch,2000);
}

