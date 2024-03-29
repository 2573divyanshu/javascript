// function statement or function declaration
// function a(){
//     console.log("Hi");
// };
// a();

// named function expression
// var b = function a(){
//     console.log("Hi");
// };
// b();
// a() won't work, because a is local to the function

// normal function expression
// var b = function(){
//     console.log("Hi");
// };
// b();

// anonymous function
// a function without a name
// a anonymous function looks like a function statements but it doesn't have a name 
// they are used in a place where functions are used as values 
// they are used in function expressions
// var b = function (){
//     console.log("Hi");
// };
// b();
// the function assigned to b is an anonymous function
// function expressions can either use an anonymous function or a non-anonymous function

// difference between function declaration and function expression
// function declarations are hoisted with the function definition
// function expressions are hoisted with undefined (they are treated like variables)

// arguments v/s parameters
// parameters are the placeholders or the identifiers which receive the arguments, they are used in the function definition
// arguments are the values that are passed to a function, they are used in function invokation

// first class functions 
// A programming language is said to have First-class functions when functions in that language are treated like any other variable.

// first class citizens in javascript
// an entity which supports all the operations generally available to other entities.

// arrow functions
let a = ()=>{
    console.log("Hii");
};
a();