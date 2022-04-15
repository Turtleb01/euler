a=[...Array(101).keys()];
console.log(
  a.reduce((v,e)=>v+e,0)**2-
  a.reduce((v,e)=>v+e**2,0)
);
