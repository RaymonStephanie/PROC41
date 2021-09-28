class Umbrella {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x + 50, y + 50, 50, { isStatic: true });
    World.add(world, this.body);
  }
  show() {
    var pos = this.body.position;
    image(boyumbr, pos.x - 100, pos.y - 50, 200, 200);
  }
}
