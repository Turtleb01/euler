console.log(Array.from(BigInt(2**1000).toString()).reduce((v,e)=>v+parseInt(e),0));
