var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(1000, 550);
	rectMode(CENTER);

	groundSprite = createSprite(width / 2, height - 10, width, 20);
	groundSprite.shapeColor = color("brown");

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	boxPosition = width / 2 - 100
	boxY = height - 70;

	boxLeftSprite = createSprite(boxPosition, boxY, 20, 100);
	boxLeftSprite.shapeColor = color(255, 0, 0);
	boxBottomSprite = createSprite(boxPosition + 100, boxY + 40, 200, 20);
	boxBottomSprite.shapeColor = color(255, 0, 0);
	boxRightSprite = createSprite(boxPosition + 200, boxY, 20, 100);
	boxRightSprite.shapeColor = color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width / 2, 200, 50,50, { restitution: 1, isStatic: true, friction: 0 });
	World.add(world, packageBody);

	ground = Bodies.rectangle(width / 2, height - 10, width, 30, { isStatic: true });
	World.add(world, ground);

	boxLeftBody = Bodies.rectangle(boxPosition + 20, boxY, 20, 100, { isStatic: true });
	World.add(world, boxLeftBody);
	boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY + 45, 200, 20, { isStatic: true });
	World.add(world, boxBottomBody);
	boxRightBody = Bodies.rectangle(boxPosition + 200 - 20, boxY, 20, 100, { isStatic: true });
	World.add(world, boxRightBody);

	Engine.run(engine);
	
}

function draw() {

	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}



