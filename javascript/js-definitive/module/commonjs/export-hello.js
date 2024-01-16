/**
 * expose using exports object - anything assigned to exports become accessible
 *
 */
exports.hello = function (name = "commonJS") {
  console.log(`Hello ${name}`);
};
