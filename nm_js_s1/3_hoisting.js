// example 1
// console.log(getName); // gives undefined
// getName(); // function invoked!
// console.log(x);
// var x = 7;
// function getName(){
//     console.log("Namaste JavaScript");
// };
// console.log(getName);
// hoisting is a phenomena in javascript due to which we can access variables and functions even before we have intialized them

// example 2
// console.log(getName);
// console.log(x); // gives undefined
// getName(); // will throw error
// var x = 7;
// var getName = ()=>{
//     console.log("Namaste JavaScript");
// };
// console.log(getName);
// arrow functions are hoisted with undefined (they behave like variables)

// example 3
// console.log(getName);
// getName();
// console.log(x);
// var x = 7;
// var getName = function(){
//     console.log("Namaste JavaScript");
// };
// console.log(getName);
// function expressions are hoisted with undefined (they behave like variables)

// variables, function expressions and arrow functions are hoisted with value undefined
// normal functions (function statements) are hoisted with the function definitions