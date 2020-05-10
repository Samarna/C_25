var raindrop;

function setup() {
  createCanvas(800,400);
  fill("blue");
  raindrop = new Raindrop(random,random,20,20);
}

function draw() {
  background("darkblue");
  raindrop.display();
}
