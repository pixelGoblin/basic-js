const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let biggestNumber = {num: 0, idx: -1};
  let temp = String(n).split('').map(Number);
  for (let i = 0; i < temp.length; i++) {
    const tempNum = +temp.slice(0, i).concat(temp.slice(i + 1, temp.length)).join('');
    if (tempNum > biggestNumber.num) {
      biggestNumber.num = tempNum;
      biggestNumber.idx = i;
    }
  }
  return +biggestNumber.num;
}

module.exports = {
  deleteDigit
};
