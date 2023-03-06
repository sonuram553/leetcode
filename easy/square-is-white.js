function squareIsWhite(coordinates) {
  const [col, row] = coordinates.split("");
  const charCode = col.charCodeAt(0);

  if ((charCode - 97 + 1) & 1) {
    if (Number(row) & 1) return false;
  } else if (Number(row) % 2 === 0) return false;

  return true;
}
