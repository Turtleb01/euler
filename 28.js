const { range } = require("./tools.js");

function layer(i) {
  if(i==1) return 1;
  let prevNum = ((i-1)*2-1)**2;
  let sideLength = (i-1)*2; //doesn't work for i=1 but I don't care
  return(4*(prevNum+2.5*sideLength)); //avg(1..4)=2.5
}
console.log(range(1,501).map(e=>layer(e)).sum());
