const { range } = require("./tools.js");

let i, str="";
for(i=0; str.length<=1e6; i++) {
  str+=i;
}

console.log(range(7)
  .map(e=>10**e)
  .map(e=>Number(str[e]))
  .product()
);
