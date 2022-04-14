//oh god this is bad

function factors(a) {
  let b=[], i;
  for(i=999;(a>1&&i>99);i--) {
    while(a%i==0) {
      b.push(i);
      a=a/i;
    }
  }
  return(a==1?b:undefined);
}

for(i=999;i>99;i--) {
  y=i*1000+parseInt(Array.from(i.toString()).reverse().join("")); //hell
//  console.log(y);
  x=factors(y);
  if(x&&x.every(e=>e.toString().length<4)) {
    console.log("Found answer "+y+" from " + x.join(" "));
  }
}
