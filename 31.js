const coinlist = [200,100,50,20,10,5,2];

let answers = 0;

function recurse(left,list) {
  if(list.length == 0) {
    answers++;
    return;
  }
  let i, coin=list[0];
  for(i=0; i*coin<=left; i++) {
    recurse(left-i*coin,list.slice(1));
  }
}

recurse(200,coinlist,[]);

console.log(answers);
