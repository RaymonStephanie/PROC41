class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, 5, {
      isStatic: false,
      restitution: 0.3,
      friction: 0.8,
    });
    World.add(world, this.body);
  }
  update() {
    if (this.body.position.y > height)
      Matter.Body.setPosition(this.body, {
        x: random(100, 200),
        y: 0,
      });
  }
  show() {
    var pos = this.body.position;
    fill(color("#3B82F6"));
    noStroke();
    ellipse(pos.x, pos.y, 10);
  }
}
