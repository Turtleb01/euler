for(c=2;c<1000;c++) {
  for(b=1;b<c;b++) {
    a=Math.sqrt(c**2-b**2);
    if(b>a&&(a==Math.floor(a))) {
      if(a+b+c==1000) {
        console.log(`Found answer: a: ${a} b: ${b} c: ${c}`);
        console.log(`Product: ${a*b*c}`);
      }
    }
  }
}
