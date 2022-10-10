//output the sum of all proper divisors
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

//output an array of all proper divisors
function divisors(a) {
  let b=[1], c=Math.sqrt(a);
  for(let i=2;i<c;i++) {
    if(!(a%i)) {
      b.push(i);
      b.push(a/i);
    }
  }
  Number.isInteger(c)&&b.push(c);
  return(a<2?[]:b);
}

//calculate the length of a collatz sequence
function collatz(a) {
  let i;
  for(i=1;a!=1;i++) {
    a=a%2?3*a+1:a/2;
  }
  return(i);
}

//greatest common denominator
function gcd(a,b) {
  while (b) [a,b]=[b,a%b];
  return(a);
}

//generate prime array
function genprimes(a) {
  let primes=Array(a).fill(true);
  primes.splice(0,2,false,false);
  for(let i=2; i<=Math.sqrt(a); i++) {
    if(primes[i]) {
      for(let j=i*2; j<a; j+=i) {
        primes[j]=false;
      }
    }
  }
  return(primes);
}

Array.prototype.sum = function() {
  return(this.reduce((v,e)=>v+e,0));
}

Array.prototype.product = function() {
  return(this.reduce((v,e)=>v*e,1));
}

Number.prototype.factorial = function() {
  return(Array(this.valueOf()).fill().reduce((v,_,i)=>v*(i+1),1));
}

Number.prototype.factorialBigInt = function() {
  return(Array(this.valueOf()).fill().reduce((v,_,i)=>v*BigInt(i+1),1n));
}

function range(a,b) {
  b===undefined&&([a,b]=[0,a]);
  return Array(b).fill().map((_,i)=>i+a);
}

module.exports = {
  collatz, gcd, divisors, divisorsum, range, genprimes
};
