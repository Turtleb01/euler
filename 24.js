const { range } = require("./tools.js");

function permutation(array,index) {
  let output = [];
  //copying an array sucks, therefore i just copy the length
  let arrayL = array.length, i;
  let p = (arrayL-1).factorial();
  for(i=0; i<arrayL; i++) {
    output.push(array.splice(index/p|0,1));
    index%=p;
    p/=(arrayL-i-1);
  }
  return(output);
}

console.log(permutation(range(0,10),1000000-1).join(""));
