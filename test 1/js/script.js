function setup() {
  //initialize canvas and graphics state
  createCanvas(windowWidth, windowHeight);
  background('black');
  //fifty points at random
  //evenly distributed
  //all connected by straight lines
  var edgeX = width - 10;
  var edgeY = height - 10;
  var rX;
  var rY;
  var points = [];
  for (var i = 0; i < 49; i++) {
    let p = {
      rX: random(0, width);
      rY: random(0, height);
    };
    point(p.rX, p.rY);
    points[i] = p;
    stroke('white');
    strokeWeight(3);
    for (var j = 0; j < i; j++) {
      line(points[j].rX, points[j].rY, p.rX, p.rY);
    };
  }

}


function draw() {

}
