module.exports = function solveSudoku(matrix, row = 0, col = 0) {
  const cell = findCellWithZero(matrix, row, col);

  if (cell[0] == -1) {
      return matrix;
  }

  row = cell[0];
  col = cell[1];

  for (let i = 1; i <= 9; i++) {

      if ( testNumber(matrix, row, col, i) ) {
          matrix[row][col] = i;

          if ( solveSudoku(matrix, row, col) ) {
              return matrix;
          }

          matrix[row][col] = 0;
      }
  }


  return false;
}




function findCellWithZero(matrix, row, col) {
  for (let i = row; i < 9 ; col = 0, i++) {
    for (let j = col; j < 9 ; j++) {
      if (matrix[i][j] == 0) return [i, j];
    }
  }
  return [-1, -1];
}




function testNumber(matrix, row, col, num) {
  return (testByRow(matrix, row, num) && testByCol(matrix, col, num) && testByBox(matrix, row, col, num)) ? true : false;
}

function testByRow(matrix, row, num) {
  for (let i = 0; i < 9; i++){
    
    if (matrix[row][i] == num) return false;
  }

  return true;
}

function testByCol(matrix, col, num) {
  for (let i = 0; i < 9; i++){
    
    if (matrix[i][col] == num) return false;
  }

  return true;
}

function testByBox(matrix, row, col, num) {
  row = Math.floor(row / 3) * 3;
  col = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      if (matrix[row + i][col + j] == num) return false;
    }
  }

  return true;
}