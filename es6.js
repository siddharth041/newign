//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
s[0]= 2;
s[1]= 5;
s[2]= 7;
  // Only change code above this line
}
editInPlace();

//Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Use Arrow Functions to Write Concise Anonymous Functions

const magic = ()=> {
   return new Date();
 };

const magic = () => new Date();

//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
increment(5);

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

//Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 8));

//Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES;
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line

//Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const{today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line

//Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const {today:{low:lowToday,high:highToday}} = LOCAL_FORECAST;
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line

//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

//Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a, b, ...shorterList] = list; // Change this line
//   // Only change code above this line
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);
// console.log(sourceWithoutFirstTwo);

function removeFirstTwo(list) {
  // Only change code below this line
  const [, , ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);

//Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i = 0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

//The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.

import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Reuse JavaScript Code Using import

  import {uppercaseString, lowercaseString} from "./string_functions.js"
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

const makeServerRequest = new Promise((resolve, reject)=>{

});

//Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//Handle a Fulfilled Promise with then
//Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
//makeServerRequest.then(result =>{console.log(result);});
makeServerRequest.then(result =>{
  console.log(result);
});

//Handle a Rejected Promise with catch

//Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

/*makeServerRequest.then(result => {
  console.log(result);
});*/

//makeServerRequest.catch(error => {console.log(error)});
makeServerRequest.catch(error => {
  console.log(error)
  });
