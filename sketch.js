var a, b;

function setup() {
  createCanvas(800,400);
  
  a = createSprite(400, 200, 50, 50);
  b = createSprite(300, 100, 20, 80);

  a.shapeColor = "orange";
  a.shapeColor = "orange";
}

function draw() {
  background(255,255,255);  

  a.x = World.mouseX;
  a.y = World.mouseY;

  var averageWidth = (a.width / 2) + (b.width / 2);
  var averageHeight = (a.height / 2) + (b.height / 2);

  if (a.x - b.x < averageWidth && b.x - a.x < averageWidth && a.y - b.y < averageHeight && b.y - a.y < averageHeight) {
    a.shapeColor = "red";
    b.shapeColor = "red";
  } else {
    a.shapeColor = "orange";
    b.shapeColor = "orange";
  }

  drawSprites();
}