const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  function countCharOccurrences(str) {
    const charCounts = {};
    for (const char of str) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
    return charCounts;
  }

  const s1Counts = countCharOccurrences(s1);
  const s2Counts = countCharOccurrences(s2);
  let commonCount = 0;

  for (const char in s1Counts) {
    if (s2Counts.hasOwnProperty(char)) {
      commonCount += Math.min(s1Counts[char], s2Counts[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
