var x = 1;
a();
b();
console.log(x);
function a(){
    var x = 2;
    console.log(x);
};
function b(){
    var x = 3;
    console.log(x);
};
// x is allocated memory
// x is assigned 1
// a is allocated memory
// a is assigned the function definition
// b is allocated memory
// b is assigned the function definition
// code execution starts
// x is assigned 1
// function a is called
// new ec is created
// x is allocated memory
// x is assigned 2
// local x is logged into the console
// control is returned
// b is called (similarly)
// whole code done, gec is popped off the call stack