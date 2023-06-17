function numRookCaptures(board) {
  let rookPosition;
  const n = board.length;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === "R") {
        rookPosition = [row, col];
        break;
      }
    }
    if (rookPosition) break;
  }

  const [row, col] = rookPosition;

  let index = row - 1;
  let capturesCount = 0;

  // North Direction
  while (index >= 0) {
    if (board[index][col] === "p") {
      capturesCount++;
      break;
    }

    if (board[index][col] === "B") break;
    index--;
  }

  // South Direction
  index = row + 1;
  while (index < n) {
    if (board[index][col] === "p") {
      capturesCount++;
      break;
    }

    if (board[index][col] === "B") break;
    index++;
  }

  // East Direction
  index = col + 1;
  while (index < n) {
    if (board[row][index] === "p") {
      capturesCount++;
      break;
    }

    if (board[row][index] === "B") break;
    index++;
  }

  // West Direction
  index = col - 1;
  while (index >= 0) {
    if (board[row][index] === "p") {
      capturesCount++;
      break;
    }

    if (board[row][index] === "B") break;
    index--;
  }

  return capturesCount;
}
