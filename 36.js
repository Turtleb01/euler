const { genprimes, range } = require("./tools.js");

console.log(
  range(1e6)
  .filter(e=>e.toString()===e.toString().split("").reverse().join(""))
  .filter(e=>e.toString(2)===e.toString(2).split("").reverse().join(""))
  .sum()
);
