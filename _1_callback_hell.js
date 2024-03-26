// example 1
// console.log('start');
// setTimeout(() => {
//     console.log("inside setTimeout")
// }, 3000);
// console.log('end');

// example 2
const cart = ["shoes","pants","kurta"];
// list of apis that we have:
// - api.createOrder();
// - api.proceedToPayment();
// - api.showOrderSummary();
// - api.updateWallet();
api.createOrder(cart,function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        });
    });
});

// problems with this code
// - this code is growing horizontally (this is callback hell) (this makes our code unreadable, unmaintainable) (this structure is known as pyramid of doom)
// - inversion of control

// inversion of control
// - the responsiblity of calling the callback function to the outer function
// - we are blindly trusting the outer function
// - this is risky
// - inner function (which is an important part of our code)
// - may be inneer function isn't called, what if it is called twice
// - intern may have written the code