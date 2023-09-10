function isValidSudoku(board) {
  const size = 9;

  // Check for rows
  for (let r = 0; r < size; r++) {
    const set = new Set();
    for (let c = 0; c < size; c++) {
      const digit = board[r][c];
      if (digit !== ".") {
        if (set.has(digit)) return false;
        set.add(digit);
      }
    }
  }

  // Check for columns
  for (let c = 0; c < size; c++) {
    const set = new Set();
    for (let r = 0; r < size; r++) {
      const digit = board[r][c];
      if (digit !== ".") {
        if (set.has(digit)) return false;
        set.add(digit);
      }
    }
  }

  // Check for 3x3 boxes
  for (let row = 0; row < size; row += 3) {
    for (let col = 0; col < size; col += 3) {
      const set = new Set();
      for (let r = row; r < row + 3; r++) {
        for (let c = col; c < col + 3; c++) {
          const digit = board[r][c];
          if (digit !== ".") {
            if (set.has(digit)) return false;
            set.add(digit);
          }
        }
      }
    }
  }

  return true;
}
