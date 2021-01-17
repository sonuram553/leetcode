const stringSearch = require("./index");

test("StringSearch function exists", () => {
  expect(stringSearch).toBeDefined();
});

test("StringSearch returns -1 if the inputs are invalid", () => {
  expect(
    stringSearch(
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      ""
    )
  ).toEqual(-1);

  expect(stringSearch("", "")).toEqual(-1);
  expect(stringSearch("Lorem Ipsum ", "Lorem Ipsum is simply")).toEqual(-1);
});

test("StringSearch returns -1 if the long string doesn't include the short string", () => {
  expect(stringSearch("Lorem Ipsum is simply dummy text", "dumo")).toEqual(-1);
  expect(stringSearch("Lorem Ipsum is simply dummy text", "simpy")).toEqual(-1);
});

test("StringSearch returns the index of the first-char of the short string in the long string", () => {
  expect(stringSearch("Lorem Ipsum is simply dummy text", "Ipsum")).toEqual(6);
  expect(stringSearch("Lorem Ipsum is simply dummy text", "dumm")).toEqual(22);
});
