a=600851475143;
for(i=2;i<=Math.sqrt(a);i++) {
  if(a%i==0) {
//    console.log(i + ' ' + a)
    a=a/i;
  }
}
console.log(a);
