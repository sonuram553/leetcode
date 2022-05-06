const cache = {};

function reverseBits(n) {
  if (cache[n]) return cache[n];

  let temp = n;
  const bits = [];

  while (temp) {
    bits.push(temp % 2);
    temp = Math.floor(temp / 2);
  }

  let reversed = 0;
  for (let i = 0; i < bits.length; i++) {
    reversed = 2 * reversed + bits[i];
  }

  for (let i = bits.length; i < 32; i++) {
    reversed *= 2;
  }

  cache[n] = reversed;

  return reversed;
}

reverseBits(10);
