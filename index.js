function checkEqual(a, b) {
  let retVal = (a == b ? "Equal" : "Not Equal");
  return retVal;
}

let cheEq = checkEqual(1, 2);
console.log(cheEq);


function checkSign(num) {
  let check = num > 0 ? "positive" 
  : num < 0 ? "negative" 
  : num == 0 ? "zero" 
  : num === "" ? "Its a string, not a number" //this line is not working
  : "Empty space";
  return check;
}

let res = checkSign();
console.log(res);
