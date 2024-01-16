const assert = require("assert");

// browser : window = globalThis

/**
 * window - for browser only
 * global - for nodejs only
 * globalThis - for browser and nodejs
 */
// console.log(window);

assert.strictEqual(global, globalThis);
