const shallowObjClone = require("./shallowObjClone");

test("create a clone of the object param", () => {
  const obj = { person: "John", number: 99 };
  expect(shallowObjClone(obj)).toStrictEqual(obj);
});
