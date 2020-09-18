const randumb = require('./index');

let ran = randumb(['joe', 'mike', 'Frank', 'William', 'Robot']);
for (let i = 0; i < 10; i++) {
  console.log(ran());
}
