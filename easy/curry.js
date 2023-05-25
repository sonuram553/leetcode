function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

// With bind
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return curried.bind(this, ...args);
  };
}
