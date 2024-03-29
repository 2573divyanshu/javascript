// example 1
// function x(){
//     y();
//     var a = 7;
//     function y(){
//         console.log(a);
//     };
// };
// x();
// a closure is a function bundled together with it's lexical environment

// example 2
// function x(y){
//     var a = 7;
//     y();
// };
// x(function(){
//     console.log(a);
// })
// proof that a function remembers the environment in which it was originally present and does give a fuck about the foreign environment in which it is being executed

// example 3
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     };
//     a = 8;
//     return y;
// };
// var z = x();
// z();
// even if the function is returned, it will remember it's original lexical scope

// example 4
// function z() {
//     var b = 8;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a,b);
//         };
//         a = 8;
//         y();
//     };
//     x();
// };
// z();

// closures are used in:
// - module design pattern
// - currying
// - functions like once
// - memoize
// - maintaining state in async world
// - setTimeouts
// - iterators
// - and many more

