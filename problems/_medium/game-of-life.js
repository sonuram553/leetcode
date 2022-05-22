// If value is set to -1 that means the original value of the cell was 1 and final value will be 0.
// Similarly, if value is set to 2 that means the original value of the cell was 0 and final value will be 1.

function gameOfLife(board) {
  for (let row = 0; row < board.length; row++) {
    const arr = board[row];
    
    for (let col = 0; col < arr.length; col++) {
      let adjacentLiveCells = 0;

      // Vertical cells
      if (row > 0 && [1, -1].includes(board[row - 1][col]))
        adjacentLiveCells += 1;
      if (row < board.length - 1 && [1, -1].includes(board[row + 1][col]))
        adjacentLiveCells += 1;

      // Horizontal cells
      if (col > 0 && [1, -1].includes(board[row][col - 1]))
        adjacentLiveCells += 1;
      if (col < arr.length - 1 && [1, -1].includes(board[row][col + 1]))
        adjacentLiveCells += 1;

      // Diagonal cells
      if (col > 0) {
        if (row > 0 && [1, -1].includes(board[row - 1][col - 1]))
          adjacentLiveCells += 1;
        if (row < board.length - 1 && [1, -1].includes(board[row + 1][col - 1]))
          adjacentLiveCells += 1;
      }

      if (col < arr.length - 1) {
        if (row > 0 && [1, -1].includes(board[row - 1][col + 1]))
          adjacentLiveCells += 1;
        if (row < board.length - 1 && [1, -1].includes(board[row + 1][col + 1]))
          adjacentLiveCells += 1;
      }

      if (board[row][col] === 1) {
        if (adjacentLiveCells < 2 || adjacentLiveCells > 3)
          board[row][col] = -1;
      } else if (adjacentLiveCells === 3) board[row][col] = 2;
    }
  }

  // Replace interim values -1 with 0 and 2 with 1;
  for (let row = 0; row < board.length; row++)
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === -1) board[row][col] = 0;
      if (board[row][col] === 2) board[row][col] = 1;
    }
}

const board = [
  [0, 1, 1],
  [1, 0, 1],
];

gameOfLife(board);
