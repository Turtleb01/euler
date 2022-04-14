f=[1,2];
for(i=2;f[i-1]!=0;i++) {
  f[i]=f[i-1]+f[i-2];
  (f[i]>=4000000)&&(f[i]=0);
}
console.log(f);
console.log(f.filter(e=>!(e%2)).reduce((v,e)=>v+e,0));
