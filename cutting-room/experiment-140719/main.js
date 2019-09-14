createGridCellElement = function(label) {
  const cell = document.createElement('div');
  cell.className = label;
  cell.id = label;

  return cell;
};

initCellRecords = function(grid) {
  const gridWidth = 70;
  const gridHeight = 25;

  const cells = [];

  for (let i = 0; i < gridHeight; ++i) {
    const row = [];
    for (let j = 0; j < gridWidth; ++j) {
      const label = `grid__cell--${i}-${j}`;
      var cellElement = document.getElementById(label);
      if (!cellElement) {
        cellElement = createGridCellElement(label);
        grid.append(cellElement);
      }

      row.push({
        id: label,
        alive: Math.random() > 0.9
      });
    }
    cells.push(row);
  }

  return cells;
};

getNeighboursCount = function(cells, x, y) {
  const neighbours = [];

  // North
  if (y > 0) {
    neighbours.push(cells[y - 1][x]);
  }

  // North east
  if (y > 0 && x < cells[y - 1].length - 1) {
    neighbours.push(cells[y - 1][x + 1]);
  }

  // East
  if (x < cells[y].length - 1) {
    neighbours.push(cells[y][x + 1]);
  }

  // South east
  if (y < cells.length - 1 && x < cells[y + 1].length - 1) {
    neighbours.push(cells[y + 1][x + 1]);
  }

  // South
  if (y < cells.length - 1) {
    neighbours.push(cells[y + 1][x]);
  }

  // South west
  if (y < cells.length - 1 && x > 0) {
    neighbours.push(cells[y + 1][x - 1]);
  }

  // West
  if (x > 0) {
    neighbours.push(cells[y][x - 1]);
  }

  // North west
  if (y > 0 && x > 0) {
    neighbours.push(cells[y - 1][x - 1]);
  }

  return neighbours.reduce((acc, cval) => acc + (cval.alive ? 1 : 0), 0);
};

updateCells = function(cells) {
  for (let y = 0; y < cells.length; ++y) {
    for (let x = 0; x < cells[y].length; ++x) {
      if (getNeighboursCount(cells, x, y) < 2) {
        cells[y][x].alive = false;
        continue;
      }

      if (getNeighboursCount(cells, x, y) === 2) {
        continue;
      }

      if (getNeighboursCount(cells, x, y) === 3) {
        cells[y][x].alive = true;
        continue;
      }

      if (getNeighboursCount(cells, x, y) > 3) {
        cells[y][x].alive = false;
        continue;
      }
    }
  }
};

renderCells = function(cells) {
  cells.forEach(row => {
    row.forEach(cell => {
      const element = document.getElementById(cell.id);
      if (cell.alive) {
        element.className = `${cell.id} grid__cell--alive`;
      } else {
        element.className = `${cell.id} grid__cell--dead`;
      }
    });
  });
};

window.onload = function() {
  const grid = document.getElementById('grid');

  if (!grid) {
    console.log('ERROR', 'DOM must contain an element names grid.');
    return false;
  }

  const cells = initCellRecords(grid);
  callback = function() {
    updateCells(cells);
    renderCells(cells);
  };

  window.setInterval(callback, 1000);
};
