// example 1
// console.log(b);
// console.log(a);
// let a = 2;
// var b = 3;
// this will throw referencerror cannot access a before intialization
// let is also hoisted but they are not attached to the window object and remains in TDZ before code exection reaches the initialization line
// they are stored in different memory space
// we cannot access them before some value is put inside them
// after a let or const variable is hoisted, it goes into tdz untill code execution reaches the line of it's initialization

// var declaration are attached to the window object
// let and const declarations are not attached to the window object

// example 2
// let a = 2;
// let a = 3;
// var b = 3;
// var b = 4;
// let is more strcit than a
// this is syntax error

// example 3
// const a = 2;
// a = 4;
// this will give a type error
// const is even more stricter
// we cannot re-assign it another value
// we need to intialize the const variable with a value at the time of it's declaration

// typeeror: re-assigning a constant variable
// syntaxerror: missing initializer in const declaration
// referencerror: cannot access a before initializations, m is not defined

// use const
// use let if value could change
// avoid var

// to avoid tdz, have intializations at the top