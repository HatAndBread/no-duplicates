# no-duplicates

Get random numbers or random elements from an array without duplicates in JavaScript.
Will return a function that will return a random number or random array element without repeating until all elements in the array or all numbers in the range have been used.
A very useful function for game development and any other application that may require randomized sets.

# Installation

```
npm install no-duplicates
```

```javascript
const randumb = require('no-duplicates');

const randomizedSafari = randumb(['🐘', '🦁', '🦓', '🦒']);
randmoizedSafari();
/* ********************************************
 * will return a random animal without        *
 * repeating until all animals have been used.*
 ********************************************* */

const nums = randumb(10);
nums();
/* **********************************************
 * will return a random number between          *
 * 0 and 10 (including 10) without repeating    *
 * until all numbers in the range have been used*
 ********************************************** */

const between = randumb(5, 15);
between();
/* *********************************************
 * will return a random number between 5 and 15*
 * (including 5  & 15) without repeating until *
 * all numbers in the range have been used     *
 ********************************************* */

const returnArray = randumb(2, 10);
returnArray(true);
//[
//  10, 2, 7, 5, 6,
//   3, 8, 4, 9
//]

/* *********************************************
 * Passing a truthy value as an argument will  *
 * return all items or numbers in a randomized *
 * array without repeats.                      *
 ********************************************* */
```

# Examples

```javascript
const randumb = require('no-duplicates');

const fruit = ['🍎', '🍊', '🍉', '🍓', '🍇'];

const randomFruit = randumb(fruit);
for (let i = 0; i < 10; i++) {
  console.log(randomFruit());
}
/* Example output...
🍊
🍓
🍇
🍉
🍎
🍉
🍊
🍎
🍇
🍓
*/
```

```javascript
const randumb = require('no-duplicates');

const nums = randumb(1, 10);
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 11; j++) {
    j < 10 ? console.log(nums()) : console.log('❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎');
  }
}
```

example output...

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
