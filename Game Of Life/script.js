// If the current state is 1 ("alive"):
// If the neighbor total is less than 2: New state is 0 ("death by loneliness")
// Else if the neighbor total is greater than 3: New state is 0 ("death by overcrowding")
// Else: State remains the same ("alive")
// If the current state is 0 ("dead"):
// If the neighbour total is exactly 3: New state is 1 ("reproduction")
// Else: State remains the same ("dead")

let columns, rows;
let cellSize = 15;
let cells = [];
let newCells = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  columns = floor(width/cellSize);
  rows = floor(height/cellSize);
  for (let c = 0; c < columns; c++) {
    cells[c] = [];
    newCells[c] = [];
    for (let r = 0; r < rows; r++) {
      cells[c][r] = floor(random(2));
      newCells[c][r] = cells [c][r];
    }
  }

}

function draw() {
	for (let c = 0; c < columns; c++) {
		for (let r = 0; r < rows; r++) {
			if (c <= 0 || c > columns - 1 || r <= 0 || r > rows - 1) {
				cells[c][r] = 0;
				//newCells[c][r] = 1;
			}
			else {
				//neighbours
				let N = cells[c][r - 1];
				let S = cells[c][r + 1];
				let E = cells[c + 1][r];
				let W = cells[c - 1][r];
				let NE = cells[c + 1][r - 1];
				let NW = cells[c - 1][r - 1];
				let SE = cells[c + 1][r + 1];
				let SW = cells[c + 1][r - 1];
				let sum = N + S + E + W + NE + NW + SE + SW
				if (sum >= 0 && sum <= 3) {
						newCells[c][r] = 1;
					}
					else {
						newCells[c][r] = 0;
					}
					if (cells[c][r] == 1) {
						if (sum < 2 || sum > 3) {
							newCells = 0;
						}
						else {
							newCells = 1;
						}
					}
			}
		}
	}
	for (let c = 0; c < columns; c++) {
		for (let r = 0; r < rows; r++) {
			fill(cells[c][r] * 255);
			stroke(50);
			rect(c*cellSize, r*cellSize, cellSize, cellSize);
			cells[c][r] = newCells[c][r];
		}
	}
}
