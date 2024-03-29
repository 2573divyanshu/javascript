// callstack is present inside the javascript engine
// js engine is inside a brower

// browsers gives us superpowers like:
// - localstorage
// - setTimeout
// - DOM APIs
// - fetch
// - console.log
// - location

// engine access these superpowers from the Web APIs of the browsers
// engine access the Web APIs using the window object

// working of setTimeout
// when execution reaches the setTimeout line, a timer is attached to the callback function of the setTimeout
// when the timer expires
// the callback function enters the callback queue
// in the callback queue it waits for the callstack to get empty
// when callstack is empty, it enters callstack and get's executed

// event loop
// checks the callstack 
// if it's empty
// it pushes the first callback function from the callback queue to the callstack
// manages the callbacks in the callback queue (macro task queue) 
// why manage because we have only one callstack

// eventlisteners
// aren't given a timer
// they enter the callback queue when the event is trigerred

// fetch
// when the content is fetched
// the callback of the fetch (the function inside the then) enters the micro task queue 
// micro task queue has more priority than the macro task queue

// microtask queue contains:
// - callbacks of promises
// - callbacks of mutation observers

// if a microtask creates another microtask queue, then this may lead to starvation of callback queue