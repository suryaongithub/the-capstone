class Box{
    constructor(x,y,width,height){

     this.option=
    {
    restitution:0,
    label:"A BOX",
    timeScale:1,
    friction:0.1,
    mass:10

    }

    this.colors=
    [
        
        "purple"
       ]

    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,this.option);
    this.color=anyOne(this.colors)
    World.add(world,this.body);

    
    }
    
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0,this.width,this.height);
    pop();

    
    }
    }