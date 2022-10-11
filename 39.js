const { range } = require("./tools.js");

let squares = range(500).map(e=>e**2);

let triangles = squares
  .map((e,i)=>squares.map((f,j)=>[e,f,i,j]))
  .flat()
  .filter(e=>e.every(f=>f))
  .filter(e=>e[2]<e[3])
  .map(e=>[...e, squares.indexOf(e[0]+e[1])])
  .filter(e=>e[4]!==-1)
  .map(e=>e[2]+e[3]+e[4])
  .filter(e=>e<=1000);


let counts = Array(1001).fill(0);

triangles.forEach(e=>counts[e]++);

console.log(counts.indexOf(Math.max(...counts)));
