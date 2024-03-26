// example 1 
// const cart = ["shoes","pants","kurta"];
// // with the help of this cart we have create an order
// const prom = createOrder(cart);
// // console.log(prom);
// prom.then(function(orderID){ // this is promise consumption
//     // proceedToPayment(orderID);
//     // console.log(prom);
//     console.log(orderID);
//     return orderID;
// })
// .then(function(orderID){
//     return proceedToPayment(orderID);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
// })
// .catch(function(er)
// {
//     console.log(er);
//     console.log(er.message);
// });
// function createOrder(cart)
// {
//     const pr = new Promise((resolve, reject) => { // this is promise creation
//         if(!validateCart(cart))
//         {
//             const err = new Error("cart is not valid");
//             reject(err);
//         };
//         const orderID = 1234;
//         if(orderID)
//         {
//             setTimeout(() => {
//                 resolve(orderID);
//             }, 5000);
//         };
//     });
//     return pr;
// };
// function validateCart(cart)
// {
//     // return true;
//     return false;
// };
// red color error means error wasn't handled
// callbacks (that are to be executed on the successfule completion of the code) are written inside the then function
// callbacks (that are to be exedcuted on the unsuccessful completiohn of code) are written inside the catch function

// the catch at the end will handle any error that occurs in the then above it

// if a catch is in between, then it will handle the then above it, the thens after this catch will work in either case (success or failure)

// finally for handleing code that needs to executed in either case (success or failure)

// homework

const cart = ["ring","laptop","books","gita"];
function createOrder(cart){
    console.log("creating order");
    return new Promise((resolve, reject) => {
        if(validateCart(cart))
        {
            const orderID = 1234;
            console.log("order created");
            resolve(orderID);
        }
        else
        {
            const err = new Error("couldn't validate cart");
            reject(err);
        };
    });
};
function proceedToPayment(orderID){
    console.log("proceeding to payment");
    return new Promise((resolve, reject) => {
        if(validateOrderID(orderID))
        {
            const paymentID = 5678;
            console.log("proceeded to payment");
            resolve(paymentID);
        }
        else
        {
            const err = new Error("couldn't validate orderID");
            reject(err);
        };
    });
};
function showOrderSummary(paymentID){
    console.log("creating order summary");
    return new Promise((resolve, reject) => {
        if(validatePaymentID(paymentID))
        {
            const summaryID = 9101112;
            console.log("order summary created");
            resolve(summaryID);
        }
        else
        {
            const err = new Error("couldn't validate paymentID");
            reject(err);
        };
    });
};
function updateWallet(summaryID){
    console.log("creating order summary");
    return new Promise((resolve, reject) => {
        if(validateSummaryID(summaryID))
        {
            const updationID = 13141516;
            console.log("udpation done");
            resolve(updationID);
        }
        else
        {
            const err = new Error("couldn't validate summaryID");
            reject(err);
        };
    });
};
createOrder(cart)
.then(function(orderID){
    console.log(orderID);
    return proceedToPayment(orderID);
})
.then(function(paymentID){
    console.log(paymentID);
    return showOrderSummary(paymentID);
})
.then(function(summaryID){
    console.log(summaryID);
    return updateWallet(summaryID);
})
.then(function(updationID){
    console.log(updationID);
})
.catch(function(err){
    console.log(err);
});
function validateCart(cart){return false};
function validateOrderID(orderID){return false};
function validatePaymentID(paymentID){return false};
function validateSummaryID(summaryID){return false};