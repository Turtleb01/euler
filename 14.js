function collatz(a) {
  let i;
  for(i=1;a!=1;i++) {
    a=a%2?3*a+1:a/2;
  }
  return(i);
}

let hc=0,hi=0,i;
for(i=1;i<1000000;i++) {
  c=collatz(i);
  if(c>hc){
    hi=i;
    hc=c;
  }
}

console.log(hi);
