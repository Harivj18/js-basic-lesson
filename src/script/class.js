/* eslint-disable semi */
class Pizza {
  constructor (toppings = [], customer) {
    this.toppings = toppings;
    this.customer = customer
  }
  static extraToppings = ['pepperoni', 'cheese'];
  static sayThankYou () {
      console.log('ThankYou!!');
  }
  slices = 10;
  get noOfSlices () {
      return this.slices;
  }
  set noOfSlices (value) {
      this.slices = value;
    //   slices = value;
  }
  getCokeorPepsi = () => {
      console.log('Coke');
      console.log('Pepsi');
      console.log(this);
  }
  eat () {
    console.log(this.toppings);
    console.log(this.customer);
  }
  #bankbalance = 10000;

  get balance() {
      return this.#bankbalance;
  }
  set balance (value) {
      return this.#bankbalance = value;
  }
}

const myLunch = new Pizza(['onion', 'tomato', 'capsicum'], 'Hari');
// console.log(myLunch);
myLunch.eat()
myLunch.toppings = ['carror', 'cabbage', 'chicken']
console.log(myLunch.toppings);
console.log(Pizza.extraToppings);
Pizza.extraToppings = ['paneer','lettuce'];
console.log(Pizza.extraToppings);
Pizza.sayThankYou();
console.log(myLunch.noOfSlices);
myLunch.noOfSlices = 6;
console.log(myLunch.noOfSlices)
myLunch.getCokeorPepsi();
myLunch.slices = 12;
console.log(myLunch.noOfSlices);
myLunch.#bankbalance = 5000;
console.log(myLunch.balance);
myLunch.#bankbalance = 2000;
console.log(myLunch.balance);
