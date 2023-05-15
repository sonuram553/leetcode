function curry(fn) {
  const argsList = [];

  return function _curry(...args) {
    for (const arg of args) argsList.push(arg);
    if (argsList.length === fn.length) return fn(...argsList);
    return _curry;
  };
}
