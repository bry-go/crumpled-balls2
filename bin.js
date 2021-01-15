class Bin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
       
     }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen img.png");
      
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);

      fill(255);

      image(this.image,this.body.position.x, this.body.position.y, this.width, this. height);
    }
  };