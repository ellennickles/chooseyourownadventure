// https://p5js.org/reference/#/p5/createA

let img;

function preload() {
  img = loadImage(
    "/assets/cat.gif"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let link = createA("/", "Go back")
  link.position(50, 50)
  link.style("color", "white")
}

function draw() {
  image(img, 0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}