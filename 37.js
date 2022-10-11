const { genprimes, range } = require("./tools.js");

let primes = Array(1e6).fill(true);
primes.splice(0,2,false,false);
let tprimes = [];
for(i=0;tprimes.length<(11+4)&&i<1e6;i++) {
  if(primes[i]) {
    for(let j=i*2; j<1e7; j+=i) {
      primes[j]=false;
    }
    si=String(i);
    if(
      range(1,si.length-1).every(e=>primes[Number(si.slice(e))]) &&
      range(1,si.length-1).every(e=>primes[Number(si.slice(0,-e))])
    ) {
      tprimes.push(i);
    }
  }
}

console.log(tprimes.slice(4).length)
console.log(tprimes.slice(4).sum())
