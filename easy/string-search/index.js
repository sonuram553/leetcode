function stringSearch(long, short) {
  if (short.length > long.length || !long || !short) return -1;

  for (let i = 0; i <= long.length - short.length; i++) {
    if (short[0] !== long[i]) continue;

    let isSub = true;
    for (let j = 1; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        isSub = false;
        break;
      }
    }

    if (isSub) return i;
  }

  return -1;
}

module.exports = stringSearch;
