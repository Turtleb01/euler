function divisors(a) {
  let b=[];
  for(let i=1;i<=Math.sqrt(a);i++) {
    if(!(a%i)) {
      b.push(i);
      b.push(a/i);
    }
  }
  return(b);
}

function triangle(a) {
  return([...Array(a+1).keys()].reduce((v,e)=>v+e,0));
}

for(i=1;;i++) {
  t=triangle(i);
  if(divisors(t).length>500) {
    console.log(t);
    break;
  }
}
