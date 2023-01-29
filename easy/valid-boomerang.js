function isBoomerang(points) {
  const [a, b, c] = points;

  return (
    a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]) !== 0
  );
}
