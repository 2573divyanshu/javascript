// promises are used to handle async operations in javascript
// const cart = ["kurta","pehjama","watch"];
// apis:
// - createOrder(cart) (returns orderID)
// - proceedToPayment(orderID) (returns )
// these two apis are async and dependent on each other
// second one to be called after first one

// handling them using callbacks
// createOrder(cart,function(){
//     proceedToPayment(orderID);
// });
// problems: inversion of control and callback hell

// solution promises?
// createOrder won't take callback
// it will return promise
// we will capture this promise into a variable
// promise object is an empty object
// createOrde is async operation
// when crateOrder is done, the promise object will be filled with the returned data 
// we will attach a callback function to the promise object
// this callback function will be invoked when the promise object gets filled with data
// and this callback function will be executed only once

// we are not passing the callback function
// we are attaching the callback function
// to the promise object
// we are attaching so we are not giving control to the outer function

// example 
// const user = fetch("https://api.github.com/users/2573divyanshu");
// console.log(user);
// user.then(function(data){
//     console.log(data);
// });
// we have a promiseState
// we have a promiseResult

// promise state 
// - pending 
// - fulfilled
// - rejected

// promise result
// - stores the data

// when use was logged promise wasn't resolved
// so we got pending
// few ms after promise gets resolved
// data gets into promise object

// promise objecs are immutable

// promise is an object representing eventual completion or failure of aysnc operation.

// promises also solves the pyramid of doom problem

// example 2
// createOrder(cart)
// .then(function(orderID){
//     return proceedToPayment(orderID);
// })
// .then(function(paymentInfo){
//     return showOrderedSummary(paymentInfo);
// })
// .then(function(){
//     return updateWallet();
// })
createOrder(cart)
.then(orderID => proceedToPayment(orderID))
.then(paymentInfo => showOrderedSummary(paymentInfo))
.then(orderSummary => updateWallet(orderSummary));