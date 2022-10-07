const { range } = require("./tools.js");

function fifthpow(a) {
  return a===(String(a).split("").map(e=>Number(e)**5).sum());
}

console.log(range(2,999999).filter(fifthpow).sum());
