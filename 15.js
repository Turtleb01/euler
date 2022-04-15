n=20+1;
let grid=Array(n).fill().map(e=>Array(n).fill(0));
for(x=0;x<n;x++) {
  for(y=0;y<n;y++) {
    grid[x][y]=grid[x-1]?(grid[x-1][y]||0)+(grid[x][y-1]||0):1;
  }
}
console.log(grid[n-1][n-1]);
