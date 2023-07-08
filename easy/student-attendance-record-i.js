function checkRecord(str) {
  let absence = 0;
  let consecutiveLate = 0;

  for (const ch of str) {
    if (ch === "L") consecutiveLate++;
    else {
      if (ch === "A") absence++;
      consecutiveLate = 0;
    }

    if (absence === 2 || consecutiveLate === 3) return false;
  }

  return true;
}
