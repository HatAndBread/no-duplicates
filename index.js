function returner(arr, arr2) {
  let newItem = arr.splice(0, 1)[0];
  arr2.push(newItem);
  return newItem;
}
/**
 *
 * @param {array} arr - an array containing the elements you want to be randomized
 */
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

module.exports = NoDuplicates;
