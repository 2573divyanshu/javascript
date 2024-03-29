// scope chain is directly related to lexical environment

// example 1
// function a(){
//     console.log(b);
// };
// var b = 10;
// a();
// b isn't in local environment of a
// so value of b is searched in the parent's environment
// means the code inside the function a is able to access the code outside the function a

// example 2
// function a(){
//     c();
//     function c(){
//         console.log(b);
//     };
// };
// var b = 10;
// a();
// this too works

// example 3
// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     };
// };
// a();
// b is accessible withing function a and function c
// b isn't accessible from outside of the function

// what is the scope of a variable m
// means in which region of code the variable m is accessible

// lexical environment is the local environment + the lexical environment of the parent
// it's created whenever a ec is created

// the chain of lexical environments that the js engine traverses in order to find the value of a variable or a function is the scope chain

// example 4
// function a(){
//     var var1 = 1;
//     b();
//     function b(){
//         var var2 = 2;
//         c();
//         function c(){
//             var var3 = 3;
//             console.log(var1,var2,var3);
//         };
//     };
// };
// a();