  const Engine = Matter.Engine;
  const World  = Matter.World;
  const Bodies = Matter.Bodies;

  var engine,world,ground,ball;
   function setup () {
  createCanvas(400,400);
  var g_options ={
    isStatic: true
  }
  var b_options ={
    restitution: 1
  }
  engine = Engine.create();
  world = engine.world;
ball = Bodies.circle(200,100,40,b_options);
World.add(world,ball);
  ground = Bodies.rectangle(200,380,400,20,g_options);
  World.add(world,ground);
}

  function draw () {
  background("pink");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40,);
}

