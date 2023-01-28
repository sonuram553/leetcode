function isRectangleOverlap(rec1, rec2) {
  // Check if either rectangle is a line
  if (
    rec1[0] === rec1[2] ||
    rec1[1] === rec1[3] ||
    rec2[0] === rec2[2] ||
    rec2[1] === rec2[3]
  )
    return false;

  // Left or Right
  if (rec1[0] >= rec2[2] || rec1[2] <= rec2[0]) return false;

  // Top or Bottom
  if (rec1[3] <= rec2[1] || rec1[1] >= rec2[3]) return false;

  return true;
}
