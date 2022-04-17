let day=1, mday=1, wday=1, month=1, year=1900;
let sdays=0;
while(year<2001) {
  //correct overflows
  if((mday==29&&month==2&&!(year%4==0&&year!=1900))
    ||(mday==30&&month==2)
    ||(mday==31&&(month==4||month==6||month==9||month==11))
    ||(mday==32)) {
    mday=1;
    month++;
  }
  if(month==13) {
    month=1;
    year++;
  }
  if(wday==8) {
    wday=1;
  }

  console.log(`wday: ${wday} date: ${mday}.${month}.${year}`);
  //check if day fills criteria
  if(wday==7&&mday==1&&year>=1901) {
    sdays++;
  }


  day++;
  mday++;
  wday++;
}
console.log(sdays);
