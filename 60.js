const { genprimes } = require("./tools.js");

const primes = genprimes(100000);
const primeList = primes.map((e,i)=>e?i:false).filter(e=>e);
function bigprime(a) {
  return(primeList.every(e=>a%e));
}

let a, i, j;
for(i=0; i<primes.length; i++) {
  if(primes[i]) {
    a = [i];
    for(j=2; j<i; j++) {
      if(primes[j]&&a.every(e=>bigprime(parseInt(""+e+j))&&bigprime(parseInt(""+j+e)))) {
        a.push(j);
      }
    }
    if(a.length>=5) {
      console.log(a.join(" "));
      break;
    }
  }
}
