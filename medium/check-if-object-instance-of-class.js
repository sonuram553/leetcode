var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;

  let currentPotentialPrototype = Object.getPrototypeOf(obj);

  while (currentPotentialPrototype) {
    if (currentPotentialPrototype === classFunction.prototype) return true;
    currentPotentialPrototype = Object.getPrototypeOf(
      currentPotentialPrototype
    );
  }

  return false;
};
