// promise.all
// it is used for making parallel api calls
// it takes an array of promises
// promise.all([p1,p2,p3]);
// p1 takes 3 seconds
// p2 takes 2 seconds
// p3 takes 1 seconds
// CASE 1 all success
// output of promise.all will be an array of result of the 3 promises
// time taken: 3 seconds
// CASE 2 a promise gets rejected
// as soon as a promise gets rejected, promise.all will throw that same error
// promise.all won't wait for other promises to get resolved
// but what if we want to get the result of the promises that get resolved
// solution is promise.allSettled

// promise.allSettled
// it also makes parallel api calls
// it also takes an array of promises
// promise.allSettled([p1,p2,p3]);
// it waits for all the promises to get settled
// then it gives us an array of results of all the promises (whether they get resolved or rejected)

// promise.race
// it also makes parallel api calls
// it also takes an array of promises
// it waits for the first promise gets settled
// it will give the result of the first promise that gets settled (be it resolved or rejected)

// promise.any
// it also makes parallel api calls
// it also takes an array of promises
// it waits forr the first promise to get resolved
// it will give the result of the first promise that gets resolved
// CASE every promises gets rejected
// the return result will be an array of aggreate error

const p1 = new Promise((resolve, reject) => {
     setTimeout(() => {
        // resolve('p1 success');
        reject('p1 failed');
     }, 3000);
});
const p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
        // resolve('p2 success');
        reject('p2 failed');
     }, 1000);
});
const p3 = new Promise((resolve, reject) => {
     setTimeout(() => {
        // resolve('p3 success');
        reject('p3 failed');
     }, 2000);
});

// Promise.all([p1,p2,p3])
// .then(function(result)
// {
//     console.log(result);
// })
// .catch(function(err)
// {
//     console.error(err);
// });

// Promise.allSettled([p1,p2,p3])
// .then(function(result)
// {
//     console.log(result);
// })
// .catch(function(err)
// {
//     console.error(err);
// });

// Promise.race([p1,p2,p3])
// .then(function(result)
// {
//     console.log(result);
// })
// .catch(function(err)
// {
//     console.error(err);
// });

Promise.any([p1,p2,p3])
.then(function(result)
{
    console.log(result);
})
.catch(function(err)
{
    console.error(err);
    console.error(err.errors);
});