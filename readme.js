class group_of_Boxes {
    constructor(w,h,pointA,w2,h2)
    {
        this.body=[];
        this.w2=w2;
        this.h2=h2;

        for (let g = 0; g < w; g++) 
        {
            for (let i = 0; i < h; i++) 
            {
                const pos = {x : pointA.x + (g * w2) , y : pointA.y + (i * h2)}
                const wha = Bodies.rectangle(pos.x,pos.y,w2,h2);
                World.add(world, wha);
                this.body.push(wha);
                
                
            }
            
        }
      
        
         
    }

    show()
    {
      if(this.body!=null)
        {
          for (let i = 0; i < this.body.length; i++)
          {
            var pos=this.body[i].position;
            var angle=this.body[i].angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill('orange');
            rect(0,0,this.w2,this.h2);
            pop();
            // console.log("nice");
             }
             
        }
    }

}