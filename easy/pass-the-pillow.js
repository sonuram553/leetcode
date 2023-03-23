function passThePillow(n, time) {
  const quo = Math.floor(time / (n - 1));
  const mod = time % (n - 1);

  if (quo & 1) return n - mod;
  else return 1 + mod;
}
