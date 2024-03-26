// map is used for transforming an array
// example 1
// const arr = [1,2,3,4];
// const newArr = arr.map((x)=>x*2);
// console.log(arr);
// console.log(newArr);

// example 2
// const arr = [1,2,3,4];
// const newArr = arr.filter((x)=>!(x%2));
// console.log(arr);
// console.log(newArr);

// example 3
// const arr = [1,2,3,4,5];
// const sum = arr.reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// },10);
// console.log(sum);
// const maxi = arr.reduce((acc,curr)=>{
//     if(curr>acc)
//     {
//         acc=curr;
//     };
//     return acc;
// });
// console.log(maxi);
// const mini = arr.reduce((acc,curr)=>{
//     if(curr<acc)
//     {
//         acc=curr;
//     };
//     return acc;
// });
// console.log(mini);

// example 4 (map example)
// const arr = [
//     {firstName: "chinu", lastName: "sahu"},
//     {firstName: "gudiya", lastName: "sahu"},
//     {firstName: "purab", lastName: "sahu"},
//     {firstName: "ashu", lastName: "sahu"},
//     {firstName: "vaibhav", lastName: "sahu"},
//     {firstName: "chiku", lastName: "sahu"},
// ];
// console.log(arr);
// const newArr = arr.map((obj)=>{
//     return obj.firstName + " " + obj.lastName;
// });
// console.log(newArr);

// example 5 (reduce example)
// const arr = [
//     {name: "chinu1", age: 21},
//     {name: "chinu6", age: 19},
//     {name: "chinu2", age: 21},
//     {name: "chinu5", age: 20},
//     {name: "chinu3", age: 21},
//     {name: "chinu4", age: 20},
// ];
// const obj = arr.reduce((acc,curr)=>{
//     if(!acc[curr.age.toString()])
//     {
//         acc[curr.age.toString()] = 0;
//     };
//     acc[curr.age.toString()]++;
//     return acc;
// },{});
// console.log(obj);

// example 6 (first name of all the people whose age is less than 30)
const arr = [
    {name: "chinu1", lastName: "dubey", age: 21},
    {name: "chinu6", lastName: "sodhi", age: 19},
    {name: "chinu2", lastName: "khan", age: 21},
    {name: "chinu5", lastName: "bond", age: 20},
    {name: "chinu3", lastName: "jain", age: 21},
    {name: "chinu4", lastName: "nobi", age: 20},
];
console.log(arr);
const newArr1 = arr.filter((obj)=>obj.age>20).map((obj)=>obj.name);
console.log(newArr1);
const newArr2 = arr.reduce((acc,curr)=>{
    if(curr.age>20)
    {
        acc.push(curr.name);
    };
    return acc;
},[])
console.log(newArr2);