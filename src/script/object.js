/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const person = {
  first: 'Hari',
  last: 'Haran',
  age: 22
};
console.log(person.first);
console.log(person.last);
console.log(person.age);

person.first = 'Karthi';
person.last = 'keyan';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

const empty = {};
const point = { x: 10, y: 50 };
const point2 = { x: point.x, y: point.y + 1 };

const book = {
  'main title': 'Java script',
  'sub-title': 'Guide to java script for beginners',
  // eslint-disable-next-line quote-props
  'for': 'students',
  author: {
    first: 'Hari',
    last: 'Haran',
    age: 22
  }
}

console.log(book['main title']);
console.log(book['sub-title']);
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub-title);
// console.log(book.for);
