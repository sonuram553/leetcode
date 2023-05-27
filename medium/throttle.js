function throttle(fn, t) {
  let timeoutInProgress = null;
  let argsToProcess = null;

  function timeoutFunction() {
    if (argsToProcess === null) {
      timeoutInProgress = null; // enter the waiting phase
    } else {
      fn(...argsToProcess);
      argsToProcess = null;
      timeoutInProgress = setTimeout(timeoutFunction, t);
    }
  }

  return function (...args) {
    if (timeoutInProgress) {
      argsToProcess = args;
    } else {
      fn(...args); // enter to looping phase
      timeoutInProgress = setTimeout(timeoutFunction, t);
    }
  };
}

// Using setInterval
function throttle(fn, t) {
  let intervalInProgress = null;
  let argsToProcess = null;

  function intervalFunction() {
    if (argsToProcess) {
      fn(...argsToProcess);
      argsToProcess = null;
    } else {
      clearInterval(intervalInProgress);
      intervalInProgress = null;
    }
  }

  return function (...args) {
    if (intervalInProgress) {
      argsToProcess = args;
    } else {
      fn(...args);
      intervalInProgress = setInterval(intervalFunction, t);
    }
  };
}
