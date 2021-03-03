class paper {
    constructor (x,y,r){
        var options={
            'isStatic':true,
            'friction':0.5,
            'restitution':0.3,
            'density':0


        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var p=this.body.position;

        push();
        translate(p.x,p.y);
        rectMode(CENTER);
        strokeWeight(3);
        
        ellipse(0,0,this.r,this.r);
        pop();
    }
}