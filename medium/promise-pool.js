async function promisePool(functions, n) {
  return new Promise((resolve, reject) => {
    let inProgressCount = 0;
    let functionIndex = 0;

    function helper() {
      if (functionIndex >= functions.length) {
        if (inProgressCount === 0) resolve();
        return;
      }

      while (inProgressCount < n && functionIndex < functions.length) {
        inProgressCount++;
        const promise = functions[functionIndex++]();
        promise().then(() => {
          inProgressCount--;
          helper();
        });
      }
    }

    helper();
  });
}

// With Promise.all
async function promisePool(functions, n) {
  async function evaluateNext() {
    if (functions.length === 0) return;
    const fn = functions.shift();
    await fn();
    await evaluateNext();
  }

  const nPromises = Array(n).fill().map(evaluateNext);
  await Promise.all(nPromises);
}

// 2 Liner
async function promisePool(functions, n) {
  const evaluateNext = () => functions[n++]?.().then(evaluateNext);
  await Promise.all(functions.slice(0, n).map((fn) => fn().then(evaluateNext)));
}
