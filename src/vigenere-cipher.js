const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this._process(message, key, true);
  }
  decrypt(encryptedMessage, key) {
    return this._process(encryptedMessage, key, false);
  }

  _process(text, key, isEncrypting) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charCode = char.toUpperCase().charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyCharCode = keyChar.charCodeAt(0);
        let processedCharCode;

        if (isEncrypting) {
          processedCharCode = ((charCode - 65 + keyCharCode - 65) % 26) + 65;
        } else {
          processedCharCode = ((charCode - 65 - (keyCharCode - 65) + 26) % 26) + 65;
        }

        result += String.fromCharCode(processedCharCode);
        keyIndex++;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
