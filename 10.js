//time to steal some code from 7.js
primes=[];
for(i=2;i<2000000;i++) {
  let a=Math.sqrt(i),b=1;
  for(j=0;primes[j]<=a&&b;j++) {
    b=i%primes[j];
  }
  b&&primes.push(i);
}
console.log(primes.reduce((v,e)=>v+e,0));
