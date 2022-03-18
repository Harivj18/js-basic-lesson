/* eslint-disable semi */
function yell (name = 'Hari haran') {
  return `Hey ${name.toUpperCase}`
}

let greetings = yell('Venkat');
console.log(greetings);
greetings = yell();
console.log(greetings);
