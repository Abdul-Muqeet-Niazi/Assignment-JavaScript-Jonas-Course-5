"use strict";

// Declaration:
// var a;

// Inialization:
// let a = 5    // Assigning value

// Lexical scope is the ability for a function scope to access variables from the parent scope.

// Scopes:

let a = 5;

const example = `He have ${a} apples`;
console.log(example);

function example2() {
  let b = 6;
  const line = `He have ${b} apples`; // Now here it access the variable of "a" bcz it is global variable;
}
example2();

// But Now magic begins
// const example3 = `He got ${b} number of errors` (Gave reference errors)
// Here scoping meaning is now clearing that a variable declared in any function does not access outside of the function.

// So in this way:
let anything = true;
if (anything) {
  var b = 1;
  let a = 2;
  const c = 3;
}
// console.log(`you have ${b} , ${c} , ${a} numbers`); (Gave reference errors)
// Here var is not a block scope it can access all over the program but if var is present in function then it cant have access as global variable

// Program gave us reference error bcz of a and c it is a block scope in if condition it have not access as global variable
// So basically the variables (let and const) have access of retrieve variables from parent function or blocks or programs but have not access to
// gave his variable out of his function and if the function has been made inside of function then outer function becomes parent for child function so same rules apply.
