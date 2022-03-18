/* eslint-disable no-multi-spaces */
/* eslint-disable semi */
// function hoisting

// const doc = doctorize('Hari');
// console.log(doc);
// function doctorize (firstname) {
//   return `Dr. ${firstname}`
// }
// function anonymous

// function (firstname) {
//     return `Dr. ${firstname}`
// }
// function expression

const doctorize = function (firstname) {
  return `Dr. ${firstname}`
}
const doc = doctorize('Hari');
console.log(doc);

// these are not hoisted

// arrow functions
const inchToCM = inches => {
  return inches * 2.54;
}

const resultCM = inchToCM(10)
console.log(resultCM);

const funcA = () => {
  console.log('Hi');
}
funcA();

const add = (a, b = 3) => a + b;        // when we have two parameters we use () if one no need of paranthesis
const inchToCM1 = inches => inches * 2.54;

console.log(add(100))
console.log(inchToCM1(25));

const makeAperson = (first, last) => ({ name: `${first} ${last}`, age: 0 });
const person = makeAperson('hari', 'haran');
console.log(person);

// self calling function
(function (age) {
  console.log(`You are cool and your age is ${age}`);
})(10);

// paranthesis runs first in js ,so we wrapped function in ()
// the function immediately runs
// the arguement passed here is 10 for parameter age
// it works only for one time
