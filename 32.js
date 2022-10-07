const { range } = require("./tools.js");

products = [];

function pandigital(str) {
  return str.split("").sort().reduce((v,e)=>(v=="b"||v==e)?"b":e,"a")!=="b";
}

range(12,100-12).forEach(a=>{
  aarr=String(a).split("").concat("0");
  range(123,1000-123).forEach(b=>{
    if(String(b).split("").some(e=>aarr.includes(e))) return; //some optimization
    let product=a*b;
    if(pandigital(""+a+b+product+"0")) {
      products.push(product);
    }
  });
});

range(1,10-1).forEach(a=>{
  aarr=String(a).split("").concat("0");
  range(1234,10000-1234).forEach(b=>{
    if(String(b).split("").some(e=>aarr.includes(e))) return; //some optimization
    let product=a*b;
    if(pandigital(""+a+b+product+"0")) products.push(product);
  });
});

console.log([...new Set(products)].sum());
