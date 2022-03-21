const names = ['John', 'Sam', 'Peter','hari'];

// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length-1]);

// // methods of arrays

// names.push('Suresh');
// console.log('After Push :' + names);
// // push will added at the end of item


// // ... is called as the spread operator
// // it represents the entire item in the array
// const names2 = [...names, 'Raj'];
// console.log(('names2 :' +names2));

// names.unshift('Poppy');
// console.log('Unshift :' + names);

// // it adds data to starting of the array

// const names3 = ['raj',...names];
// console.log(names3);

// //slicing

// const bikes = ['bianchi','miele','panasonic','miyata','RE'];
// const b2 = [...bikes.slice(2)];

// console.log(b2);

// const newBikes = [...bikes.slice(0,2),'benotto',...bikes.slice(2)];
// console.log('newBikes: ' +newBikes);

// const newBikes2 = [...newBikes.slice(0,2),...newBikes.slice(4)];
// console.log('newBikes2 :' +newBikes2);

// const indexOfSam = names.findIndex(names => names === 'Sam');
// console.log('indexOfSam :' +indexOfSam);

function deleteName (name) {
    const delName = names.findIndex(names => names === name );
    const del =[...names.slice(0,delName),...names.slice(delName+1)];
    console.log(del);
}
deleteName('Sam');

function deleteName1 (name,n1) {
    const delName = n1.findIndex(n1 => n1 === name );
    const del =[...names.slice(0,delName),...names.slice(delName+1)];
    console.log(del);

}
deleteName1('Sam',names);
console.log('Before deletion :' + names);
// console.log('After deletion :' + deleteName1('Sam',names));

const numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers);
numbers.splice(3,2);
console.log(numbers);

const pizzaSlice = numbers.slice(2,4);
console.log('pizzaSlices :' +pizzaSlice);
console.log('Original numbers :' + numbers);

const numbers1 = [1,2,3,4,5,6,7,8,9];
numbers1.reverse();
console.log(numbers1);

const numbers2 =[1,2,3,4,5,6,7,8,9];
const num2 = [...numbers].reverse();
console.log(num2);

// array iteration

const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

    const students = [
      {
        id: '11ce',
        first_name: 'Dall',
        last_name: 'Puckring',
      },
      {
        id: '2958',
        first_name: 'Margarete',
        last_name: 'Brandi',
      },
      {
        id: '565a',
        first_name: 'Bendicty',
        last_name: 'Woodage',
      },
      {
        id: '3a16',
        first_name: 'Micki',
        last_name: 'Mattes',
      },
      {
        id: 'f396',
        first_name: 'Flory',
        last_name: 'Gladeche',
      },
      {
        id: 'de5f',
        first_name: 'Jamill',
        last_name: 'Emilien',
      },
      {
        id: '54cb',
        first_name: 'Brett',
        last_name: 'Aizikowitz',
      },
      {
        id: '9135',
        first_name: 'Lorry',
        last_name: 'Smallman',
      },
      {
        id: '978f',
        first_name: 'Gilly',
        last_name: 'Flott',
      },
    ];

    const people = [
      {
        birthday: 'April 22, 1993',
        names: {
          first: 'Keith',
          last: 'Buckley'
        }
      },
      {
        birthday: 'January 3, 1975',
        names: {
          first: 'Larry',
          last: 'Heep'
        }
      },
      {
        birthday: 'February 12, 1944',
        names: {
          first: 'Linda',
          last: 'Bermeer'
        }
      }
    ];


    const buns = ['egg', 'wonder', 'brioche'];

    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7
    };

    const prices = {
      hotDog: 453,
      burger: 765,
      sausage: 634,
      corn: 234,
    };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

    const feedback = [
      { comment: 'Love the burgs', rating: 4 },
      { comment: 'Horrible Service', rating: 2 },
      { comment: 'Smoothies are great, liked the burger too', rating: 5 },
      { comment: 'Ambiance needs work', rating: 3 },
      { comment: 'I DONT LIKE BURGERS', rating: 1 },
    ];

    const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

    const inventory = [
      { type: 'shirt', price: 4000 },
      { type: 'pants', price: 4532 },
      { type: 'socks', price: 234 },
      { type: 'shirt', price: 2343 },
      { type: 'pants', price: 2343 },
      { type: 'socks', price: 542 },
      { type: 'pants', price: 123 },
    ];

// looping methods

function logItemsInArray(item,index,originalArray) {
    const nextitem = originalArray[index + 1];
    const previtem = originalArray[index - 1];
    console.log('CurrentItem :' +item);
    previtem ? console.log(previtem) : null;
    nextitem ? console.log(nextitem) : null;
    index === originalArray.length -1 ? console.log('Goodbye'): console.log('Getting the next item');
    console.log('-----------🍕-------------');
}

console.log(toppings);
toppings.forEach(logItemsInArray);

// function with one parameter
function displayToppings(item) {
    console.log('currentItems :' +item);
}
toppings.forEach(displayToppings);
//map
toppings.map(displayToppings);

function addArms(face) {
    return `👋${face} 👋`;
}
const toys = faces.map(addArms);
console.log(toys);

function hike (item) {
    return (item *25/100)+item;
}
const newTotalnumber =orderTotals.map(hike);
console.log(newTotalnumber);

function tallyNumbers(prvNumber, currentNumber) {
    console.log(`The Total so far is ${prvNumber}`);
    console.log(`The current Number is ${currentNumber}`);
    console.log('-------');
    return prvNumber + currentNumber;
}

const allOrders = orderTotals.reduce(tallyNumbers, 0);
console.log('allOrders :' + allOrders);