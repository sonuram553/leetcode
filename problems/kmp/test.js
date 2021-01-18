const kmpSearch = require("./index");

test("KmpSearch function exists", () => {
  expect(kmpSearch).toBeDefined();
});

test("KmpSearch returns null if the inputs are invalid", () => {
  expect(
    kmpSearch(
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      ""
    )
  ).toEqual(null);

  expect(kmpSearch("", "")).toEqual(null);
  expect(kmpSearch("Lorem Ipsum ", "Lorem Ipsum is simply")).toEqual(null);
});

test("KmpSearch returns [] if the long string doesn't include the short string", () => {
  expect(kmpSearch("Lorem Ipsum is simply dummy text", "dumo")).toEqual([]);
  expect(kmpSearch("Lorem Ipsum is simply dummy text", "simpy")).toEqual([]);
});

test("KmpSearch returns the index of the first-char of the short string in the long string", () => {
  expect(kmpSearch("Lorem Ipsum is simply dummy text", "Ipsum")).toEqual([6]);
  expect(kmpSearch("Lorem Ipsum dumm is simply dummy text", "dumm")).toEqual([12, 27]);
});
