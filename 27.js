const { genprimes, divisors, range } = require("./tools.js");
const bc = genprimes(1001).map((e,i)=>e?i:false).filter(e=>e);

Array.prototype.arrMax = function() {
  return this.reduce((v,e)=>(e[0]>v[0])?e:v,[-Infinity]);
}

function seqLength(a,b) {
  let n;
  for(n=0; true; n++) {
    if(divisors(Math.abs(n**2+a*n+b)).length>1) {
      break;
    }
  }
  return(n);
}

let best = bc.concat(bc.map(e=>-e)).map(b=>{
  return [
    ...(range(-999,1999).map(a=>[seqLength(a,b),a]).arrMax()),
    b
  ];
}).arrMax();
console.log(`Consecutive: ${best[0]} a: ${best[1]} b: ${best[2]}`);
console.log("Product: "+best[1]*best[2]);
