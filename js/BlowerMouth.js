class BlowerMouth {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.image = loadImage("./assets/trampoline3.png");
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}

