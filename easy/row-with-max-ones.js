function rowAndMaximumOnes(mat) {
  let maxOnesCount = 0;
  let minIndex = 0;

  for (let row = 0; row < mat.length; row++) {
    let count = 0;
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col]) count++;
    }

    if (count > maxOnesCount) {
      minIndex = row;
      maxOnesCount = count;
    }
  }

  return [minIndex, maxOnesCount];
}
