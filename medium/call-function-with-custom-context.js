Function.prototype.callPolyfill = function (context, ...args) {
  Object.defineProperty(context, "fn", {
    value: this,
    enumerable: false,
  });

  return context.fn(...args);
};

// Using Symbol
Function.prototype.callPolyfill = function (context, ...args) {
  const uniqueSymbol = Symbol();
  context[uniqueSymbol] = this;
  const result = context[uniqueSymbol](...args);
  delete context[uniqueSymbol];
  return result;
};
