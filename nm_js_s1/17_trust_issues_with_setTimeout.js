// example 1
console.log("start");
setTimeout(() => {
    console.log("Hi");
}, 1000);
let first = Date.now();
// while(Date.now()<first+3000)
// {

// }
console.log("end");
// this will work similarly even if the timer of the setTimeout is set 0
// this timer = 0 is used to when we want to defer some piece of code

