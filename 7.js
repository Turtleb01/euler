//sieve? seems like no
//for some reason the "stupid algorithm" is just as fast (checking every single number if it's a prime and implementing the prime check by checking every single number below its square root)
//It does 2873593 total cycles in the nested loops, this does 788865.
//Seems like the difference is small enough not to matter in execution speed.
//But if you increase the target number 100-fold, my algorithm is >5x faster. I win!

primes=[];
for(i=2;primes.length<10001;i++) {
  let a=Math.sqrt(i),b=1;
  for(j=0;primes[j]<=a&&b;j++) {
  //i had a beautiful array method thing going on here, it sadly did 20x more cycles without this square root optimization
  //can't figure out how to interrupt Array.some prematurely with the correct return values
    b=i%primes[j];
  }
  b&&primes.push(i);
}
console.log(primes[10000]);
