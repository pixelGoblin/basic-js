const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionStr = String(((options.addition !== undefined) ? options.addition : '') + '\\rb');
  const substring = String(str) + additionStr.repeat(options.additionRepeatTimes || 1).split('\\rb').filter(item => item !== '').join(options.additionSeparator || '|') + '\\rb';
  const repeatingString = substring.repeat(options.repeatTimes || 1).split('\\rb').filter(item => item !== '').join(options.separator || '+');
  return repeatingString;
}

module.exports = {
  repeater
};
