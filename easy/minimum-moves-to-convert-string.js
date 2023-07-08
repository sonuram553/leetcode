function minimumMoves(s) {
  let i = 0;
  let moves = 0;

  while (i < s.length) {
    if (s[i] === "X") {
      i += 3;
      moves++;
    } else i++;
  }

  return moves;
}
