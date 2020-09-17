/**
 *
 * @param {array} arr - an array containing the elements you want to be randomized
 */
function NoDuplicates(arr) {
  this.arr = [...arr];
  this.tempArr = [];
  this.shuffle = () => {
    while (this.arr.length > 0) {
      let num = Math.floor(Math.random() * this.arr.length);
      this.tempArr.push(this.arr.splice(num, 1)[0]);
    }
  };
  this.shuffle();
  /**
   * @returns - returns a random element from your array.
   */
  this.get = () => {
    if (this.tempArr.length > 0) {
      let newItem = this.tempArr.splice(0, 1)[0];
      this.arr.push(newItem);
      return newItem;
    } else {
      this.shuffle();
      let newItem = this.tempArr.splice(0, 1)[0];
      this.arr.push(newItem);
      return newItem;
    }
  };
}

module.exports = NoDuplicates;
