// example 1
// var n = 2;
// function square(num)
// {
//     var ans = num * num;
//     return ans;
// };
// var square2 = square(n);
// var square4 = square(4);
// console.log(square2);
// console.log(square4);

// behind the scences
// the execution context is created in two phases: memory creation phase and code execution phase

// memory creation phase
// memory is allocated to n, square2, square4 and square
// they are assigned undefined
// square is assigned the function definition

// code execution phase
// n is assigned 2
// now line number 8 is executed
// it's a function call!
// so a new execution context is created
// memory is allocated to num and ans
// num and ans are assigned undefined
// code execution phase starts
// num * num is calculared
// this value is assigned to the ans
// we reach return statement
// control is returned to the place where the function was invoked
// ans is returned
// execution context is deleted
// the variable square2 is assigned value 4
// similar exection occurs for line number 9
// console.log() is executed
// output is logged to console

// callstack
// the stack that manages the execution context
// at the bottom of stack we have a global execution context
// when a function is invoked a new execution context is created and pushed into the callstack
// when a function is done it's correpsonding execution stack is popped of the callstack
// when whole code is done the gec is popped of from the call stack
// callstack maintains the order of execution contexts

// callstack is also known as:
// execution context stack
// program stack
// control stack
// runtime stack
// machine stack