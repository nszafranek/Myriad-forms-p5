/*On a wall (paper) divided vertically into fifteen equal parts, vertical lines, (not) straight, using four colors in all one-, two-, three-, and four-part combinations.*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  stroke(0);
  strokeWeight(1);
  let columns = 15;
  let c = "cyan";
  let m = "magenta";
  let y = "yellow";
  let k = "black";
  let cWidth = width/columns;
  let h = height;
  let xp;
  let lineN = 16;
  let lineW = cWidth/lineN;
  let lp;
  let palette = [
    [c],
    [m],
    [y],
    [k],
    [c,m],
    [c,y],
    [c,k],
    [m,y],
    [m,k],
    [y,k],
    [c,m,y],
    [c,y,k],
    [c,m,k],
    [m,y,k],
    [c,m,y,k]
  ];
  for (let i = 0; i < columns; i++) {
    let colours = palette[i];
    xp= i*cWidth;
    strokeWeight(2);
    line(xp, 0, xp, h);
    for (let j = 0; j < lineN; j++) {
      stroke(colours[j % palette[i].length]);
      strokeWeight(0.3);
      lp = xp + (j*lineW);
      line(lp, 0, lp, h);
    }
  }
}
