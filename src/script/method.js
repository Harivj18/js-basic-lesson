/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */
const employee = {
  name: "hari haran",
  // method
  sayHi: function () {
    console.log(`Hi!!! ${this.name}`);
    return `Hi this is ${this.name}`;
  },
  // arrow functions
  print: () => {
    console.log('Hello employee');
  },
  // shorthand method
  yellHi () {
    console.log(`HI ${this.name.toUpperCase()}`);
  }
};
employee.sayHi();
employee.print();
employee.yellHi();
