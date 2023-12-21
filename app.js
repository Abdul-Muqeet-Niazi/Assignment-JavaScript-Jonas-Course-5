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

//                                          MOST IMPORTANT TOPIC

// “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being 
// referenced is a regular function, “this” references the global object. If the function that is being referenced is a method in an object, “this” references the object itself.
//                  OR
// In an object method, "this" refers to the object.
// Alone, "this" refers to the global object.
// In a function, "this" refers to the global object.
// In a simple call function (not in object method), in strict mode, "this" is undefined (if "strict mode is off" then it refers to global object).
// In an add-event-listener , "this" refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer "this" to any object (Learn later).

// "This" keyword is not static (static means: not moving or changing, Not static or actually word is 'dynamic' means: moving or changing), It depends on how the function is called;

console.log(this); // here "this" will reference as parent element which is windows.

function any(birthyear) {
    const year = 2023;
    console.log(year - birthyear);
    console.log(this); // here in strict mode it will show undefined but if we remove strict mode then it will show windows as parent element
}
any(2005); // Here we call function as simple way

const so = (birthyear) => {
    const year = 2023;
    console.log(year - birthyear);
    console.log(this); // But in arrow-function it is possible as in strict mode to show the parent element.
}
so(2006); // Here we call function as simple way

const obj = {
    year: 2023,
    now: function (birthyear2)  {
        const year = 2023;
        console.log(this); // Now in object method THIS shows the object as parent element.
        console.log(this.year - birthyear2) // Now it shows the year as parent element of object.
    }
}
console.log(obj.now(2007));

const juicy = {
    year: 2023,
}

juicy.now = obj.now; // Thats called methd borrowing simply means that we copy a function or code from one to another and paste it.
console.log(juicy);
console.log(juicy.now);

// Now look at some Regular function and arrow function while using this method.

var lastName = 'Khan'; 
const example4 = {
    firstName: 'Abid',
    year: 1998,

    // Simple/Regular Function
    reference: function() {
        console.log(`Assalam-o-laikum ${this.firstName}`); // This shows as parent element of which is object => firstName 
        console.log(this); // This shows us object (Parent element)
    },

    // Arrow Function   (Magic Begins)
    anotherReference: () => {
        console.log(`Assalam-o-laikum ${this.firstName}`); // This shows us as undefined because the parent element is now window not firstname 
        console.log(`Assalam-o-laikum ${this.lastName}`); // Now it pick up the "This" as global element which is var and access it into log
        console.log(this);   // Hence when you open the window panel in console then you will find lastName which is as global element
        // You shoud have to not avoid as well as never used (var and this) in arrow function
    }
}
example4.reference();
example4.anotherReference();

const example5 = {
    firstName: "Sulaman",
    class: "O Level",

    year: function() {
        console.log(this);
        console.log(this.firstName);
        
        // const summary = function() {
            // console.log(this);  // Here it cant read properties of this as parent element,
            // console.log(this.class); // Here it cant read properties of this as parent element, Because
        // }   
        // summary(); // We call as a regular function which is simply gave error/undefined
    }

}
example5.year();

// For solving this problem we have a way which is below present

const example6 = {
    firstName: "Sulaman",
    class: "O Level",

    year: function() {
        console.log(this);
        console.log(this.firstName);
        
        // Solution 1
        var self = this
        const summary = function() {
            console.log(self);  // Here it can read properties of this as parent element,
            console.log(self.class); // Here it can read properties of this as parent element, Because
        }   
        summary(); // We call as a regular function but we have a var keyword present outside the function

        // Solution 2 (Arrow Function)
        const remember = () => {
            console.log(this);
            console.log(this.firstName);
            console.log(this.class);
        }
        remember();
    }

}
example6.year();
example6.remember;

// Arguments keywords

const Arguments = function(a, b) {
    console.log(arguments);
    return a + b;
}
Arguments(2, 5, 12)

// const arg = (a, b) => {
//     console.log(arguments); 
//     return a + b;
// }
// arg(4, 5) // In arrow function argument agve error!
// For avoiding errors we have to commit it!

// Primitive vs Objects:

// Primitive: In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:

// string
// number
// bigint
// boolean
// undefined
// symbol
// null

// Objects: As you know better!

// Primitive Example:

const bio = {
    name: "Sam",
    lastName: "Davis"
};
const anotherbio = bio; // It basically just copying the object into another.
bio.lastName = "Williams"
console.log(anotherbio);
console.log(bio); 

// Now here it takes the result as same like lastname davis is not change so for this wierd behaviour we have a solution which is given below ↓
                            // New element discovered "object.assign"
        // What does it do? it simply merge two objects and make one object in heap.
const bio2 = {
    name: "Sam",
    lastName: "Davis"
};
const newelement = Object.assign({}, bio2);
bio2.lastName = "Williams"
console.log(newelement);
console.log(bio2);

// Now it makes sense !
// but we still have a problem: (1) It is immutable in only first phase or level means if we have an array or object inside an object then it will change value of parent element (Only 1st phase) example below ↓↓

const bio3 = {
    name: "Sam",
    lastName: "Davis",
    family: ["Alice","Bob"]
};
const upperelement = Object.assign({}, bio3);
bio3.lastName = "Williams" // It can change bcz it is immutable in first phase

upperelement.family.push("Mary"); // It will add in both objects obj3 = {empty obj} same as in upper behaviour

console.log(upperelement);
console.log(bio3);

// We will learn in next lessons about this !
