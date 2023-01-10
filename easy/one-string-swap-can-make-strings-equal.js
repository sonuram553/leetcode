function areAlmostEqual(s1, s2) {
  let firstMismatchIndex = -1;
  let isSwappedOnce = false;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (isSwappedOnce) return false;
      else if (firstMismatchIndex === -1) firstMismatchIndex = i;
      else {
        if (
          s1[firstMismatchIndex] === s2[i] &&
          s1[i] === s2[firstMismatchIndex]
        ) {
          isSwappedOnce = true;
          firstMismatchIndex = -1;
        } else return false;
      }
    }
  }

  return firstMismatchIndex === -1;
}
