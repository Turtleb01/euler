const names = require("./22.json").sort();
console.log(names
            .map((e,i)=>(i+1)*
                         Array.from(e).map(e=>e.charCodeAt(0)-64)
                                      .reduce((v,e)=>v+e,0))
            .reduce((v,e)=>v+e,0));
