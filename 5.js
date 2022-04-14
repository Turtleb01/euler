function syt(a,b) {
  while (b) [a,b]=[b,a%b];
  return(a);
}

let a=[...Array(21).keys()].splice(1);
console.log(a.reduce((v,e)=>v*e/syt(e,v),1));
