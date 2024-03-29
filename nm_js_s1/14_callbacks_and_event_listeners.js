// callback function is the function that is passed to another function as an argument
// function outer(x)
// {
//     console.log("Outer");
//     x();
// };
// function inner()
// {
//     console.log("Inner");
// };
// outer(inner);
// we gave the responsibility of inner function to the outer function

// async callback
// setTimeout(() => {
//     console.log("Hi");
// }, 3000);
// callback functions give us the power of async

// eventlisteners
// document.getElementById('p1').addEventListener('click',func);
// function func(){
//     console.log("Hi");
// };
// the callback function of the eventlisteners enters the callstack when the event is trigerred.

// confidential counter
// function implement() {
//     let counter = 0;
//     return function func() {
//         counter++;
//         console.log("click" , counter);
//     };
// };
// implement();
// document.getElementById('p1').addEventListener('click',implement());

// why do we need to remove eventlisteners
// because eventlisteners are heavy
// it forms closures, which occupies space
// this can lead to performance issues