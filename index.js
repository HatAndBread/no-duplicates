function returner(arr, arr2) {
  let newItem = arr.splice(0, 1)[0];
  arr2.push(newItem);
  return newItem;
}

function NoDuplicates(arr) {
  this.arr = [...arr];
  this.tempArr = [];
  /**
   * @returns - returns a random element from your array.
   */
  this.get = () => {
    if (this.tempArr.length > 0) {
      return returner(this.tempArr, this.arr);
    } else {
      while (this.arr.length > 0) {
        let num = Math.floor(Math.random() * this.arr.length);
        this.tempArr.push(this.arr.splice(num, 1)[0]);
      }
      return returner(this.tempArr, this.arr);
    }
  };
}

function randumb(...args) {
  let theArgs = args;
  if (typeof theArgs[0] === 'number' && theArgs.length === 1) {
    const theArr = new Array(theArgs[0]);
    let num = theArr.length + 1;
    for (let i = 0; i < num; i++) {
      theArr[i] = i;
    }
    const set = new NoDuplicates(theArr);
    return function a() {
      return set.get();
    };
  } else if (typeof theArgs[0] === 'number' && typeof theArgs[1] === 'number') {
    function smallest() {
      if (theArgs[0] <= theArgs[1]) {
        return [theArgs[0], theArgs[1]];
      } else {
        return [theArgs[1], theArgs[0]];
      }
    }
    const theArr = new Array(smallest()[1] - smallest()[0]);
    let num = theArr.length + 1;
    for (let i = 0; i < num; i++) {
      theArr[i] = i + smallest()[0];
    }
    const set = new NoDuplicates(theArr);
    return function a() {
      return set.get();
    };
  } else if (Array.isArray(theArgs[0])) {
    const set = new NoDuplicates(theArgs[0]);
    return function a() {
      return set.get();
    };
  } else {
    console.error('Type error @randumb');
  }
}

module.exports = randumb;
