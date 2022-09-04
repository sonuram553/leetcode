function isPrimeNumber(num) {
  if (num === 0 || num === 1) return false;

  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function constructRectangle(area) {
  if (isPrimeNumber(area)) return [area, 1];

  let length = Math.floor(Math.sqrt(area));
  if (length * length === area) return [length, length];

  length++;
  while (area % length !== 0) length++;

  return [length, area / length];
}
