// example 1
// console.log(getName);
// getName();
// console.log(x);
// var x = 7;
// function getName(){
//     console.log("Namaste JavaScript");
// };
// console.log(getName);
// hoisting is a phenomeno in javascript due to which we can access variables and functions even before we have intialized them

// example 2
// console.log(getName);
// // getName();
// console.log(x);
// var x = 7;
// var getName = ()=>{
//     console.log("Namaste JavaScript");
// };
// console.log(getName);
// arrow functions are hoisted with undefined (they behave like variables)

// example 3
console.log(getName);
// getName();
console.log(x);
var x = 7;
var getName = function(){
    console.log("Namaste JavaScript");
};
console.log(getName);
// function expressions are hoisted with undefined (they behave like variables)