const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let num = 1;
  str.split('').forEach(
    (char, idx) => {
      if (char === str[idx + 1]) {
        num++;
      } else {
        result += `${num > 1 ? num : ''}${char}`;
        num = 1;
      }
    });
  return result;
}

module.exports = {
  encodeLine
};
