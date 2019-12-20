class MyClass {
  constructor() {
    this.life = 255;
  }
  draw() {
    this.life--;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  if (!__myCache.myClasses) !__myCache.myClasses = [];
  if (frameCount % 60 == 0) __myCache.myClasses.push(new MyClass());

  __myCache.myClasses = __myCache.myClasses.filter(e => e.life > 0);
}
