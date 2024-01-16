const assert = require("assert");

// invoke immediately after declaration (function(){})()
// avoid global pollution

(function (name) {
  console.log(`Hello ${name}`);
})("World");
