function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = Array.prototype.join.call(args);
    if (key in cache) return cache[key];

    const value = fn(...args);
    cache[key] = value;

    return value;
  };
}
