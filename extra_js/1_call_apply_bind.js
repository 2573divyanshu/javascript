// function borrowing using call and apply method
// const obj1 = {
//     name: 'chinu',
//     age: 21,
//     intro: function(state, country){
//         console.log(`Hi I am ${this.name} from ${state} ${country}, I am ${this.age} years old`);
//     }
// };
// const obj2 = {
//     name: 'gudiya',
//     age: 20,
// };
// function anotherIntro(state,country){
//     console.log(`I am ${this.name} from ${state} ${country}, am ${this.age} years old`);
// }
// obj1.intro.call(obj2, 'India', 'Chhattisgarh');
// anotherIntro.call(obj2, 'India', 'Chhattisgarh');
// obj1.intro.apply(obj2, ['India', 'Chhattisgarh']);
// anotherIntro.apply(obj2, ['India', 'Chhattisgarh']);
// let func1 = anotherIntro.bind(obj2,'India','Chhattisgarh');
// let func2 = anotherIntro.bind(obj2,'India');
// let func3 = anotherIntro.bind(obj2);
// func1();
// func2('Chhattisgarh');
// func3('India','Chhattisgarh');