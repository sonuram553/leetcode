function decode(encoded, first) {
  const original = [first];

  encoded.forEach((num, i) => {
    original[i + 1] = original[i] ^ num;
  });

  return original;
}
