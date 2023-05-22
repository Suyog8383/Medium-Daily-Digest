/* let a;
console.log(a); // Output: undefined

let b = null;
console.log(b); // Output: null

//hoisting
console.log(a1); // Output: undefined
var a1 = 10;

// The above code is equivalent to the following

var a2;
console.log(a2); // Output: undefined
a2 = 10;

a2 = 10;
console.log(a2); // Output: 10
var a2;

//closure
function outer() {
  let b = 10;
  function inner() {
    console.log(b);
  }
  return inner;
}

let innerFunc = outer();
innerFunc(); // Output: 10

// Synchronous code:

console.log("Start");
console.log("Middle");
console.log("End");

// Output:
// Start
// Middle
// End

// Asynchronous code:

console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 1000);
console.log("End"); */

// Output:
// Start
// End
// Middle

var a3 = 10;
let b3 = 20;
const c3 = 30;

function example() {
  console.log(a3); // Output: undefined
  console.log(b3); // Output: ReferenceError: b is not defined
  console.log(c3); // Output: 30

  var a3 = 1;
  let b3 = 2;
  const c3 = 3;
}

example();

console.log(a3); // Output: 10
console.log(b3); // Output: ReferenceError: b is not defined
console.log(c3); // Output: ReferenceError: c is not defined
