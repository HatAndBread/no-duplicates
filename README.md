# no-duplicates

Get random elements from an array without duplicates. Will reset when all elements in the array have been used.

#Installation

```
npm install no-duplicates
```

#Examples

Example 1:

```javascript
const NoDuplicates = require('no-duplicates');

const fruits = ['🍎', '🍓', '🍉', '🍌'];
const fruitSet = new NoDuplicates([fruits]);
fruitSet.get(); // returns a random fruit
```

Example 2:

```javascript
const NoDuplicates = require('no-duplicates');

const people = ['John Coltrane', 'Mary Lou Williams', 'Ornette Coleman', 'Nina Simone', 'Carla Bley', 'John Gilmore'];

const randomPeople = new NoDuplicates(people);
for (let i = 0; i < people.length; i++) {
  console.log(randomPeople.get());
}

/* Example output...
Ornette Coleman
Carla Bley
John Gilmore
Nina Simone
John Coltrane
Mary Lou Williams
*/
```

Example 3:

```javascript
const NoDuplicates = require('no-duplicates');

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
```

outputs...

```
4
5
10
2
3
1
8
6
9
7
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
2
6
3
8
5
10
7
4
9
1
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
1
3
8
5
2
6
9
4
7
10
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
5
9
2
6
8
7
10
3
1
4
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
5
8
1
2
3
10
4
7
9
6
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
3
8
4
2
9
7
5
1
6
10
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
10
7
4
5
9
1
8
2
6
3
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
7
2
9
6
5
1
8
4
3
10
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
9
10
2
3
5
4
8
7
1
6
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
9
6
3
7
1
4
2
5
8
10
❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎
```
