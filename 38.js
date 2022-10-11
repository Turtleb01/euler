const { range } = require("./tools.js");

function numpandigital(s) {
  return range(1,9).every(e=>s.includes(String(e))) && s.length===9;
}

let ans = [];
let str = "";

for(i=1; i<1e6; i++) {
  str=String(i);
  for(j=2;j<10; j++) {
    str+=String(i*j)
    if(str.length>=9) break;
  }
  if(str.length==9&&numpandigital(str)) {
    ans.push(Number(str));
  }
}

console.log(ans.join(" "))
