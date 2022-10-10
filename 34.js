const { range } = require("./tools.js");

//array lookup is faster than calculating
const fmap = range(10).map(e=>range(1,e).product());

function factorialsum(a) {
  //trying to make this pretty fast, no stringcasting this time :)
  let numbers = [];
  while(a>0) {
    numbers.push(a%10);
    a=Math.floor(a/10);
  }
  return numbers.map(e=>fmap[e]).sum();
}

let digitfactorials = [];

//looks like it can't be larger than 2e6
for(i=3; i<2000000; i++) {
  if(i==factorialsum(i)) {
    digitfactorials.push(i);
  }
}

console.log(digitfactorials.sum());
