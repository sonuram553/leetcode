function minTimeToType(word) {
  let time = 0;
  let prevCh = "a";

  for (const ch of word) {
    const gap = Math.abs(prevCh.charCodeAt(0) - ch.charCodeAt(0));
    time += Math.min(gap, 26 - gap);
    time++;
    prevCh = ch;
  }

  return time;
}
