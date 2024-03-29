"use strict";

// this behaves differently in different environments

// this behaves differently in strict mode and non strict mode

// this in global space points to the global object
// console.log(this)

// this inside functions is undefined
// in case of strict mode this substitution doesn't happens
// in case of non strict mode this substitution happens
// function x(){
//     console.log(this);
// };
// x();

// values of this inside functions depends upon how function is called
// function x(){
//     console.log(this);
// };
// x(); // this will give undefined
// window.x(); // this will give window object

// this inside object's method
// const obj = {
//     name: "divyanshu",
//     class: 12,
//     intro: function(){
//         console.log(this);
//         // console.log(`Hi there I am ${obj.name}`);
//     },
// };
// obj.intro();

// call apply bind are used for sharing methods
// while using call apply and bind the value this changes to the environment we are calling the method in

// this inside arrow functions
// arror functions do not have their own this binding
// the value of this is derived from the enclosing lexical context
// const obj = {
//     name: "divyanshu",
//     class: 12,
//     intro: ()=>{
//         console.log(this);
//     },
// };
// obj.intro();
// another example 
// const obj = {
//     name: "divyanshu",
//     class: 12,
//     intro: function(){
//         const y = ()=>{
//             console.log(this);
//         };
//         y();
//     },
// };
// obj.intro();

// value of this inside DOM element is the element itself

// this inside class constructors (later)