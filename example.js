const NoDuplicates = require('./index');
/*
const numbers = [];
for (let i = 1; i < 11; i++) {
  numbers.push(i);
}

const nums = new NoDuplicates(numbers);
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 11; j++) {
    j < 10 ? console.log(nums.get()) : console.log('❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎');
  }
}
*/

const people = ['John Coltrane', 'Mary Lou Williams', 'Ornette Coleman', 'Nina Simone', 'Carla Bley', 'John Gilmore'];

const randomPeople = new NoDuplicates(people);
for (let i = 0; i < people.length; i++) {
  console.log(randomPeople.get());
}
