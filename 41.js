const { range, genprimes } = require("./tools.js");
const primes = genprimes(10000000);

function pandigital(num) {
  return String(num)
    .split("")
    .map(e=>Number(e))
    .sort((a,b)=>a-b)
    .every((e,i)=>e==i+1);
}

console.log(primes.map((e,i)=>(e&&pandigital(i))?i:false).filter(e=>e).reverse()[0])
