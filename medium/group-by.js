Array.prototype.groupBy = function (fn) {
  const map = {};

  this.forEach((obj) => {
    const key = fn(obj);
    if (key in map) map[key].push(obj);
    else map[key] = [obj];
  });

  return map;
};
