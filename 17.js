//reading this code? ignore the variable names, I am not a native english speaker yada yada.
const digits=["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens=["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens=["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

let total=0;
const digitsL=digits.reduce((v,e)=>v+e.length,0);
const teensL=teens.reduce((v,e)=>v+e.length,0);
const tensL=tens.reduce((v,e)=>v+(e.length*10+digitsL),0);
const hundredL=digitsL+teensL+tensL;
total+=hundredL;
total+=digits.reduce((v,e)=>v+(e.length+7),0); //even hundreds
total+=digits.reduce((v,e)=>v+((e.length+7+3)*99+hundredL),0); //everything else
total+=11; //one thousand
console.log(total);
