const collectStrings = require("./index");

test("CollectStrings function exists", () => {
  expect(collectStrings).toBeDefined();
});

test("CollectStrings returns empty array if empty object is passed", () => {
  expect(collectStrings({})).toEqual([]);
});

test("CollectStrings returns array of strings", () => {
  expect(collectStrings({ firstName: "Sonu", lastName: "Ram" })).toEqual([
    "Sonu",
    "Ram",
  ]);

  expect(
    collectStrings({
      firstName: "Sonu",
      lastName: "Ram",
      address: { street: "ABC", pin: "266022" },
      age: "29",
    })
  ).toEqual(["Sonu", "Ram", "ABC", "266022", "29"]);
});
