function syt(a,b) {
  while (b) [a,b]=[b,a%b];
  return(a);
}

let a=[...Array(21).keys()].splice(1);
console.log(a.reduce((v,e)=>v*e/syt(e,v),1));
//minimal version
//90 characters
//[...Array(20).keys()].reduce((v,e)=>{a=e+1;b=v;while(b)[a,b]=[b,a%b];return(v*(e+1)/a)},1)
