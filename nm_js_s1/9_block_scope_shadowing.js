// example 1
// var a = 11;
// let b = 21;
// const c = 31;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// console.log(a);
// console.log(b);
// console.log(c);
// var a = 10 shadowed var a = 11;
// bs and cs aren't shadowed

// example 2
// let a = 2;
// {
//     var a = 3;
// };
// this is illegal shadowing

// example 3
// let a = 2;
// {
//     let a = 3;
//     {
//         const a = 4;
//         {
//             let a = 5;
//         }
//     }
// };
// this is legal

// example 4
// var a = 2;
// let a = 3;
// this is illegal
// this leads to a syntax error

// block statement is also called compound statement
// it is used to combine a set of statements in place where javascript expects a single statement

// the scope rules for arrow functions are similar to the scope rules for normal functions