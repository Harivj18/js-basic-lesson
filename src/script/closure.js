/* eslint-disable no-unused-vars */
/* eslint-disable semi */
function dosomeTask () {
  const x = 100;
  const y = 20;
  console.log('x : ' + x + ' y : ' + y);
}
dosomeTask();
console.log('completed');

function outer () {
  const outerVar = 'Hey I am the Outer Var';
  console.log(outerVar);
  function inner () {
    const innerVar = 'Hey I am the inner Var'
    console.log(innerVar);
    console.log(outerVar);
  }
  //  console.log(innerVar);  undefined referrence error when using outside the block of scope
  //   inner();
  return inner;
}

outer();
let innerFunc = outer();
innerFunc();
innerFunc = null;

function createGreeting (greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  }
}
const closure = createGreeting('Hello');
console.log(closure('Hari'));

const closure1 = createGreeting('Hello')
console.log(closure1('Karthi'));
console.log(closure1('Hari'));

function createGame (gameName) {
  let score = 0;
  return function win () {
    score++;
    return `Your name ${gameName} score is ${score}`;
  }
}

const cricketgame = createGame('CSK');
console.log(cricketgame());
console.log(cricketgame());
console.log(cricketgame());
console.log(cricketgame());
