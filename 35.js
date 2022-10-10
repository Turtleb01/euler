const { genprimes, range } = require("./tools.js");

const prime = genprimes(1e6);

function genrotations(a) {
  const nums = String(a);
  return range(nums.length).map(e=>nums.slice(e).concat(nums.slice(0,e))).map(e=>Number(e));
}

//console.log(genrotations(971));

console.log(range(1e6).filter(e=>prime[e]).filter(e=>genrotations(e).every(f=>prime[f])).length)
