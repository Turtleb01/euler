function divisorsum(a) {
  let b=1, c=Math.sqrt(a);
  for(let i=2;i<c;i++) {
    if(!(a%i)) {
      b+=i;
      b+=a/i;
    }
  }
  Number.isInteger(c)&&(b+=c);
  return(a<2?0:b);
}

console.log(Array(10000)
            .fill()
            .map((_,i)=>divisorsum(i))
            .filter((e,i,a)=>(a[e]==i&&e!=i))
            .reduce((v,e)=>v+e,0)
);
