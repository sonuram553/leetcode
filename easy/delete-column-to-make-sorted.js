function minDeletionSize(strs) {
  let minDeleteCount = 0;

  for (let col = 0; col < strs[0].length; col++) {
    let code = strs[0].charCodeAt(col);

    for (let row = 1; row < strs.length; row++) {
      const nextCode = strs[row].charCodeAt(col);
      if (nextCode < code) {
        minDeleteCount++;
        break;
      } else code = nextCode;
    }
  }

  return minDeleteCount;
}
