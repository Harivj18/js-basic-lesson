/* eslint-disable semi */
/* eslint-disabled */
const age = 100;
const money = 100.50;
console.log(typeof age);
console.log(typeof money);
console.log('10' - '10');
console.log(Math.round(2.2));
console.log(Math.floor(2.6));
console.log(Math.ceil(5.5));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const each = Math.floor(sweets / kids);
console.log(each)

const leftsweets = sweets % kids;
console.log(leftsweets);

let x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3);
console.log(x);

console.log(0.1 + 0.2);

// let costOfProducts = 100.95;
// let costOfProducts = 10095; // in paise
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

let y = 100;
let result = Number.isInteger(y);
console.log(`Is Y a number : ${result}`);

let z = "abcd";
result = Number.isInteger(z);
console.log(`Is Z a number : ${result}`);

result = (typeof z === 'string');
console.log(`Is Y a string : ${result}`);

let flag = true;
result = (typeof flag === 'boolean');
console.log(`Is flag is bolean : ${result}`);

let nos =[1, 2, 3, 4, 5];
result = (typeof nos === 'object');
console.log(`Is nos is object : ${result}`);

