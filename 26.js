const { range } = require("./tools.js");

function cyclelength(a) {
  let n=1, nc=[];
  while(true) {
//    console.log(n + " " + a);
//    console.log(nc);
    if(nc.includes(n)) return(n&&(nc.length-nc.indexOf(n)));
    nc.push(n);
    n*=10;
    n%=a;
//    [n,a]=[n%a,n/a|0];
  }
}

console.log(range(2,1000-2).map(e=>[e,cyclelength(e)]).reduce((v,e)=>(e[1]>v[1])?e:v,[0,0]));
