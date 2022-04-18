//brute force time
//this probably should be done some other way than with BigInt, but well...

let a=1n, b=1n, c=2;
const limit = 10n**999n;

while(b<limit) {
  [a,b] = [b,a+b]
  c++;
}
console.log(b.toString().length);
console.log(c);
