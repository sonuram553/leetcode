const { Node, LinkedList } = require("./index");

test("Node is a class", () => {
  expect(typeof Node.prototype.constructor).toEqual("function");
});

test("LinkedList is a class", () => {
  expect(typeof LinkedList.prototype.constructor).toEqual("function");
});
