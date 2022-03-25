/* eslint-disable eqeqeq */
const input = document.querySelector('#email')
const btn = document.querySelector('#submit')
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const iconError = document.querySelector('.icon-error')
const textError = document.querySelector('.text-error')
let errors = []

btn.addEventListener('click', e => {
  textError.classList.remove('text-success')

  errors = []
  e.preventDefault()
  const email = input.value

  if (email == '' || email === undefined) {
    errors.push('Please provide us your email')
    iconError.style.display = 'block'
    textError.innerText = errors[0]
  } else if (!email.match(RegEmail)) {
    errors.push('Please provide us your valid email')
    iconError.style.display = 'block'
    textError.innerText = errors[0]
  }

  if (!errors.length > 0) {
    iconError.style.display = 'none'
    textError.classList.add('text-success')
    textError.innerText = 'Thanks for subscribing.We\'ll keep in touch with mail.'
  }
})
