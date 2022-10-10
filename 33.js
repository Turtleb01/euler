const { gcd, range } = require("./tools.js");

let fractions = [];

function cancelnum(a,b) {
  let [as,bs]=[a,b].map(e=>String(e).split("").map(s=>Number(s)));
  return range(1,9).map(e=>[as,bs].map(g=>g.filter(f=>f!=e)).map(f=>(f.length===1)?f[0]:NaN)).map(e=>e[0]/e[1])
}

let a, b;
for(b=12; b<100; b++) {
  if(!(b%10)||!(b%11)) {
      //trivial example
  } else {
    for(a=12; a<b; a++) {
      if(!(a%10)||!(a%11)) {
        //trivial example
      } else {
        if(cancelnum(a,b).includes(a/b)) {
          fractions.push([a,b]);
        }
      }
    }
  }
}

console.log(fractions.reduce((v,e)=>[v[0]*e[0],v[1]*e[1]],[1,1]).map((e,_,a)=>e/gcd(...a)).join("/"))
