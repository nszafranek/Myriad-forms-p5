/* Lines to points on a grid. A six-inch (15 cm) grid covering the wall.
Lines from the corners, sides, and center of the walls to random points on the grid.
Composite (seventh wall): red lines from the midpoints of four sides,
blue lines from four corners, yellow lines from the center., 1975
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(34);
  let rows = 7;
  let columns = 6;
  let gridH = height/columns;
  let gridW = width/rows;
  stroke('red');
  strokeWeight('3');
  let points = [];
	let p = [];
  let xp, yp;
//Create points on Grid
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
    let points = {
        xp: i*gridW,
        yp: j*gridH
      };
      points[i] = p;
      point(p.xp, p.yp);
    }
  }
//yellow lines from the center
  stroke("yellow");
  for (let p of points) {
  line(width/2, height/2, p.xp, p.yp);
  }
// blue lines from four corners
  stroke("blue");
  for (let p of points) {
    line(0, 0, p.xp, p.yp);
    line(width, 0, p.xp, p.yp);
    line(0, width, p.xp, p.yp);
    line(height, 0, p.xp, p.yp);
    line(0, height, p.xp, p.yp)
  }
// red lines from the midpoints of four sides
  stroke("red");
  for (let p of points) {
    line (width/2, 0, p.xp, p.xp)
  }
}
