const { range } = require("./tools.js");

console.log(range(2,99).map(a=>range(2,99).map(b=>BigInt(a**b))).flat().sort().reduce((v,e)=>(e!==v[0])?[e,v[1]+1]:v,[0,0])[1]);
