/* eslint-disable func-call-spacing */
/* eslint-disable new-parens */
/* eslint-disable no-var */
/* eslint-disable new-cap */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-control-regex */
/* eslint-disable no-new-object */
/* eslint-disable quotes */
/* eslint-disable no-new-func */
/* eslint-disable semi */
var cody = new Object;
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function () { return cody.gender; };
console.log(cody.getGender());

const myobject = new Object;
myobject['0'] = 'f';
myobject['1'] = 'o';
myobject['2'] = 'o';
console.log(myobject);

const myString = new String('foo');
console.log(myString);

const person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () { return this.gender; };
};

const smith = new person(true, 33, 'male');
console.log(smith);

const myNumber = new Number(23);
const myString1 = new String('male');
const myBoolean = new Boolean(false);
const myObject = new Object();
const myArray = new Array('foo', 'bar');
const myFunction = new Function ("x", "y", "return x*y");
const myDate = new Date();
const myRegExp = new RegExp('\bt[a-z]+\b');
const myError = new Error('Sorry!');

console.log(myNumber.constructor);
console.log(myString1.constructor);
console.log(myBoolean.constructor);
console.log(myObject.constructor);
console.log(myArray.constructor);
console.log(myFunction.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myError.constructor);
