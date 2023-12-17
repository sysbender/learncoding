const assert = require("assert");
// catch is optional

function tryWithoutCatch() {
  try {
    a + "hi";
    return "succeeded";
  } catch {
    return "failed";
  }
}
assert.strictEqual(tryWithoutCatch(), "failed");
