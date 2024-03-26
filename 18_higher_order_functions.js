// functional programming is not possible without higher order functions

// a function that takes another function as an argument or returns another function is known as a higher order function

// example 1
// function x(){
//     console.log("Namaste");
// };
// function y(x)
// {
//     x();
// };
// y is the higher order function
// x is the callback function

// example 2
// const radius = [1,2,3,4];
// const calculateArea = function (radiusArr){
//     const output = [];
//     for(let i = 0; i<radiusArr.length; i++)
//     {
//         output.push(radiusArr[i]*radiusArr[i]*Math.PI);
//     };
//     return output;
// };
// const calculatePerimeter = function (radiusArr){
//     const output = [];
//     for(let i = 0; i<radiusArr.length; i++)
//     {
//         output.push(radiusArr[i]*2*Math.PI);
//     };
//     return output;
// };
// const calculateDiameter = function (radiusArr){
//     const output = [];
//     for(let i = 0; i<radiusArr.length; i++)
//     {
//         output.push(radiusArr[i]*2);
//     };
//     return output;
// };
// console.log(calculateArea(radius));
// console.log(calculatePerimeter(radius));
// console.log(calculateDiameter(radius));

// example 3 (optimized version)
// const radius = [1,2,3,4];
// const calculate = function (radiusArr,func){
//     const output = [];
//     for(let i = 0; i<radiusArr.length; i++)
//     {
//         output.push(func(radiusArr[i]));
//     };
//     return output;
// };
// const area = function (radius){
//     return Math.PI*radius*radius;
// };
// const perimeter = function (radius){
//     return Math.PI*2*radius;
// };
// const diameter = function (radius){
//     return 2*radius;
// };
// console.log(calculate(radius,area));
// console.log(calculate(radius,perimeter));
// console.log(calculate(radius,diameter));

// example 4 (more optimizations)
// const radius = [1,2,3,4];
// Array.prototype.calculate = function (func){
//     const output = [];
//     for(let i = 0; i<this.length; i++)
//     {
//         output.push(func(this[i]));
//     };
//     return output;
// };
// const area = function (radius){
//     return Math.PI*radius*radius;
// };
// const perimeter = function (radius){
//     return Math.PI*2*radius;
// };
// const diameter = function (radius){
//     return 2*radius;
// };
// console.log(radius.calculate(area));
// console.log(radius.calculate(perimeter));
// console.log(radius.calculate(diameter));

