/** two main issues to resolve ： pollution global, dependency resolution
 * 1. inline script
 * 2. script tags
 * 3. IIFE
 * 4. CommonJS Browserify -read through all js files  . create one bundle.js file
 * 5. ES6 webpack2
 */
// CommonJS browserify-------------------------------
// js1
module.exports = function add(a, b) {
  return a + b;
};
//js2
var add = require("./add.js");

//ES6 (not supported by all)  ,  webpack2 (create bundle file) ------------------
//js1
export const subtract = (a, b) => a - b;
//or - export only one thing
export default function subtract2(a, b) {
  return a - b;
}

//js2
import { subtract } from "./subtract";
//or
import subtract2 from "/subtract";
