/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable semi */
const my_name = 'Hari';
const middle = 'Gabbar';
const last = 'Singh';

console.log(my_name);
console.log(middle);
console.log(last);

const sentence1 = 'she\'s so cool';
console.log(sentence1);

const sentence2 = ` she\'s so "cool" `;
console.log(sentence2);

const sentence3 = "she's so cool";
console.log(sentence3);

const sentence4 = ` 'she\'s so cool' `;
console.log(sentence4);

const sentence5 = "she's so \"cool\"";
console.log(sentence5);

// multiline  string

const song = `I like ARR 
and Anirudh 
songs`;
console.log(song);

const hello3 = 'Hello my name is ' + my_name + ". Nice to meet you";
console.log(hello3);

const hello4 = `Hello my name is  ${my_name} . Nice to meet you.I am ${1 + 21} years old `;
console.log(hello4);

const html = ` <div>
<h2>${my_name}</h2>
<p>hello</p>
</div>
`;
console.log(html);
// document.body.innerHTML = html;
