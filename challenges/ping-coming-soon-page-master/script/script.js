/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable quotes */
const Ealert = document.querySelector('.notify');
const Btnalert = document.querySelector('.btn');

const Req = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let error = [];

Btnalert.addEventListener('click', e => {
  error = [];
  e.preventDefault();
  const email = Ealert.value;
  const b = document.querySelector('.error');
  if (email == '' || email === undefined) {
    Ealert.classList.add('invalid');
    error.push('Please provide a valid email address !');
  } else if (!email.match(Req)) {
    Ealert.classList.add('invalid')
    error.push('Please provide a valid email address !')
  }
  b.innerText = error[0];

  if (!error.length > 0) {
    Ealert.classList.add('valid');
    b.classList.add('valid-text');
    b.innerText = 'Thanks for Subscribing !';
  }
});
