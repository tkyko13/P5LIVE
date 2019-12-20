class MyClass {
  constructor() {
    this.life = 500;
    this.x = width / 2;
    this.y = height / 2;
  }
  draw() {
    this.life--;
    this.x += random(-2, 2);
    this.y += random(-2, 2)
    fill(255, this.life);
    ellipse(this.x, this.y, 20, 20);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if (!__myCache.myClasses) __myCache.myClasses = [];
  if (frameCount % 60 == 0) __myCache.myClasses.push(new MyClass());

  __myCache.myClasses.forEach(e => {
    e.draw();
  });