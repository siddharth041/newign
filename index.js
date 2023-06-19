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

// Use Recursion to Create a Countdown
function countdown(n){
  if(n < 1){
    return [];
  } else{
    const count = countdown(n - 1);
    count.push(n);
    return count;
  }
  
}
// Only change code above this line
console.log(countdown(10).reverse());

// For reverse order
function countdown(n){
  if(n < 1){
    return [];
  } else{
    const count = countdown(n - 1);
    count.unshift(n);
    return count;
  }
  
}
// Only change code above this line
console.log(countdown(10));

function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}

//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
if(endNum < startNum){
  return [];
}else{
  const arr = rangeOfNumbers(startNum, endNum - 1);
  arr.push(endNum);
  return arr;
}
}

console.log(rangeOfNumbers(1, 10));

//Records collection
function updateRecords(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];
  // Update the album
  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }
  // Return the full collection
  return records;
}
