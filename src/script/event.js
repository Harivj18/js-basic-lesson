/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const btn1 = document.querySelector('.btn1');
const coolButton = document.querySelector('.btn2');

function handleClick () {
    console.log('😉 IT GOT CLICKED!!!!');
}
btn1.addEventListener('click', handleClick);
const hooray = () => console.log('HOORAY!!');
coolButton.addEventListener('click', hooray);

btn1.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick () {
    console.log('buy');
    const button = event.target; // reference to DOM elements
    console.log(button.textContent);
    console.log('Price :' + parseFloat(event.target.dataset.price));
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);
    // event.stopPropagation();
}

buyButtons.forEach(function (buyBtn) {
    buyBtn.addEventListener('click', handleBuyButtonClick)
});

const photoE1 = document.querySelector('.photo');

photoE1.addEventListener('mouseenter', e => {
    console.log(e.currentTarget);
    console.log(this);
});

window.addEventListener('click',
    function (e) {
        console.log('Window is clicked');
        e.stopPropagation();
        console.log('bubbles :' + e.bubbles);
    },
    { capture: true }
);
