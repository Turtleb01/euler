const { divisorsum, range } = require("./tools.js")

const abudant = range(12,28123).filter(e=>divisorsum(e)>e);
const abudantOdd = abudant.filter(e=>e%2);
const abudantEven = abudant.filter(e=>!(e%2));

function notAbSum(e) {
  if(e%2) { //number is odd, we only need to match odd numbers with even numbers
    return(!abudantOdd.some(a=>abudantEven.includes(e-a)));
  } else {
    return(!(abudantEven.some(a=>abudantEven.includes(e-a))
      ||abudantOdd.some(a=>abudantOdd.includes(e-a))));
  }
}

console.log(range(1,28124).filter(notAbSum).sum())
