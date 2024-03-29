// example 1 
// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namaste JavaScript");
// };
// x();
// when code execution reaches setTimeout, the callback function of the setTimeout is assigned a timer
// when the timer expires the callback function enters the callback queue
// and waits there for it's turn to get executed in the callstack

// example 2 (print 1,2,3,4,5 in intervals of 5)
// function x()
// {
//     for(var i = 1; i<=5; i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
// };
// x();
// all the callback functions will refer to the same i

// example 3 (second attempt)
// function x()
// {
//     for(let i = 1; i<=5; i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
// };
// x();
// every callback references to a new copy of i

// example 4 (third attempty)
// function x()
// {
//     for(var i = 1; i<=5; i++)
//     {
//         setTimeout((x) => {
//             console.log(x);
//         }, i*1000,i);
//     }
// };
// x();

// time tide and javascript waits for none