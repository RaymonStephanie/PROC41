const Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  World = Matter.World;

var engine,
  world,
  boyumbr,
  umbrella,
  drops = [],
  thunder,
  t1,
  t2,
  t3,
  t4,
  tframe;

function preload() {
  boyumbr = loadImage("./man/walking_5.png");
  t1 = loadImage("./thunderbolt/1.png");
  t2 = loadImage("./thunderbolt/2.png");
  t3 = loadImage("./thunderbolt/3.png");
  t4 = loadImage("./thunderbolt/4.png");
}

function setup() {
  createCanvas(320, 688);
  engine = Engine.create();
  world = engine.world;
  umbrella = new Umbrella(100, 500);
}

function draw() {
  Engine.update(engine);
  background(color("#111827"));
  if (frameCount % 50 == 0)
    for (let i = 0; i < 10; ++i)
      drops.push(new Drop(random(0, 400), random(0, 50)));
  umbrella.show();
  for (let i = 0; i < drops.length; ++i) {
    drops[i].update();
    drops[i].show();
  }
  if (frameCount % 80 === 0) {
    rand = Math.round(random(1, 4));
    tframe = frameCount;
    thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
    switch (rand) {
      case 1:
        thunder.addImage(t1);
        break;
      case 2:
        thunder.addImage(t2);
        break;
      case 3:
        thunder.addImage(t3);
        break;
      case 4:
        thunder.addImage(t4);
        break;
      default:
        break;
    }
    thunder.scale = random(0.2, 1);
  }
  if (tframe + 10 == frameCount && thunder) thunder.destroy();
  drawSprites();
}
