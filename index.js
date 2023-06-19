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
  
  //Use Recursion to Create a Range of Numbers
  function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
  return [];
  }
  else{
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};
console.log(rangeOfNumbers(1, 21));
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

//Iterate with JavaScript While Loops
const myArray = [];

// Only change code below this line
let i = 5;
while(i >= 0){
  myArray.push(i);
  i--;
}
console.log(myArray);

//Iterate with JavaScript For Loops
const myArray = [];

// Only change code below this line
for(let i = 1; i<=5; i++){
  myArray.push(i);
}
console.log(myArray);

//Iterate Odd Numbers With a For Loop
const myArray = [];

// Only change code below this line
for(let i = 1; i<=9; i+=2){
  myArray.push(i);
}
console.log(myArray);

//Count Backwards With a For Loop
const myArray = [];

// Only change code below this line
for(let i = 9; i >= 1; i-=2){
  myArray.push(i);
}
console.log(myArray);

//Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for(let i = 0; i < myArr.length; i++){
  total += myArr[i];
}
console.log(total);

//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

let res = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(res);

//Replace Loops using Recursion
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0){
    return 0;
  }
  else{
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
console.log(sum([2, 3, 4, 5], 3));

//Profile Lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
      if(contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      }else {
        return "No such property";
      }

    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

//Generate Random Fractions with JavaScript
function randomFraction() {

  // Only change code below this line
  let a = Math.random();
  return a;

  // Only change code above this line
}
console.log(randomFraction());

//Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  let a = Math.floor(Math.random() * 10);
  return a;
}
console.log(randomWholeNum());

//Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  let a = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return a;
}
console.log(randomRange(2, 20));

//Use the parseInt Function
function convertToInteger(str) {
let a = parseInt(str);
return a;
}

console.log(convertToInteger("56"));

//Use the parseInt Function with a Radix
function convertToInteger(str) {
  let a = parseInt(str, 2);
  return a;
}

console.log(convertToInteger("111001"));

//Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
 return a === b?"Equal":"Not Equal";
}

console.log(checkEqual(2, 2));

//Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
return (num > 0) ? "positive"
:(num < 0) ? "negative"
: "zero";
}

checkSign(0);

//Use Recursion to Create a Countdown
function countdown(n){
  if(n < 1){
    return[];
  }
  else{
    let countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line
console.log(countdown(5));
