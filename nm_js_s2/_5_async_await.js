// ASYNC FUNCTIONS
// an async function always returns a promise
// either we can make an async function that returns a promise
// or we can make an async function that returns something (but not a promise) (but this function will wrap the return value inside a promise and will then return a promise)
// async function getHair1()
// {
//     return "hair";
// };
// async function getHair2()
// {
//     return new Promise((resolve, reject) => {
//         resolve("hair");
//     });
// };
// const data = getHair1();
// getHair1()
// .then(function(result)
// {
//     console.log(result);
// });
// getHair2()
// .then(function(value)
// {
//     console.log(value);
// });

// ASYNC AND AWAIT
// are used to handle promises

// HANDLING PROMISES WITHOUT ASYNC AND AWAIT
// const prom1 = new Promise((resolve, reject) => {
//     resolve("promise resolved");
// });
// function getHair(){
//     prom1.then(function(value){
//         console.log(value);
//     });
//     console.log("after the then statementt")
// };
// getHair();

// HANDLING PROMISES USING ASYNC AWAIT
// const prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise1 resolved");
//     }, 10000);
// });
// const prom2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise2 resolved");
//     }, 20000);
// });
// console.log("before async function")
// async function getHair1(){
//     const res1 = await prom1;
//     console.log(res1);
//     // const res2 = await prom1;
//     // console.log(res2);
//     const res3 = await prom2;
//     console.log(res3);
//     // const res2 = await res1;
// };
// async function getHair2(){
//     const res1 = await prom2;
//     console.log(res1);
//     const res2 = await prom1;
//     console.log(res2);
// };
// console.log("after async function")
// getHair1();
// getHair2();
// await keyword is used in from of promises
// await can only be used inside an async function
// have multiple awaits? the api calls will be parallel 😎
// when js engine encounters an await statement
// js known that this code is async
// so it pauses the execution of the async function
// and goes to execute the code after the async func call

// BTS
// getHair1 enters the callstack
// execution starts
// await statements is encountered
// is the promise resolved (if yes then execution goes on) (if no then execution stops) 
// getHair1 leaves callstack
// rest of code is executed
// when the encountered awaits promise gets resolved 
// the getHair1() function enters the callback queue (macro task)
// when callstack is empty, getHair1() enters the callsttack
// execution starts from the point where execution had stopped

// REAL WORLD EXAMPLE OF ASYNC AWAIT WITH ERROR HANDLING USING TRY CATCH
async function handlePromise()
{
    try
    {
        const res1 = await fetch("dkttps://api.github.com/users/2573divyanshu");
        console.log(res1);
        const res2 = await res1.json();
        console.log(res2);
    }
    catch(err)
    {
        console.log(err);
    }
};
console.log("before func");
handlePromise();
console.log("after func");
// fetch returns a response object
// this response needs to converted to json
// for this we will be use .json() function
// .json() again is a promise

// WAYS TO HANDLE ERRORS IN ASYNC AWAIT SYNTAX
// either use try catch 

// or use .catch()
// ASYNC AWAIT V/S PROMISE THEN CATCH
// async await is just syntactic sugar
// behind the scences promise then catch are being used
// we don't have to do promise chaining when we use the async await syntax

