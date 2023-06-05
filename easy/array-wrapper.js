var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  if (this.nums.length) return this.nums.reduce((sum, num) => sum + num);
  return 0;
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join()}]`;
};
