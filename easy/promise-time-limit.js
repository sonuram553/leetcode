function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
      fn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => clearTimeout(timeoutId));
    });
  };
}

// With Promise.race
function timeLimit(fn, t) {
  return async function (...args) {
    const timeLimitPromise = new Promise((resolve, reject) =>
      setTimeout(() => reject("Time Limit Exceeded"), t)
    );
    const returnedPromise = fn(...args);
    return Promise.race([timeLimitPromise, returnedPromise]);
  };
}
