function numSpecial(mat) {
  const m = mat.length;
  const n = mat[0].length;
  let count = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (mat[r][c] === 1) {
        let isSpecial = true;

        // Check for other ones Horizontally
        for (let i = 0; i < n; i++) {
          if (i !== c && mat[r][i]) {
            isSpecial = false;
            break;
          }
        }

        if (isSpecial) {
          // Check for other ones Vertically
          for (let i = 0; i < m; i++) {
            if (i !== r && mat[i][c]) {
              isSpecial = false;
              break;
            }
          }
        }

        if (isSpecial) count++;
        break;
      }
    }
  }

  return count;
}
