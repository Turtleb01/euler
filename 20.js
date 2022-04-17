//bigint cheating, again
let num=Array(100).fill().reduce((v,_,i)=>v*BigInt(i+1),1n);
console.log(num);
console.log(Array.from(num.toString()).reduce((v,e)=>v+parseInt(e),0))
