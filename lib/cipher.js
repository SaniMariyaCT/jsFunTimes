const randomKey = (length = 100) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let key = '';
  
    for (let i = 0; i < length; i += 1) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
  
    return key;
  };
  
  const isValid = (key) => {
    const regex = /[^a-z]/g;
    if (key.length === 0 || key.match(regex) !== null) return false;
  
    return true;
  };
  
  const lowercaseCyclicalAddition = (letter, offset) => {
    const letterIndex = letter.charCodeAt(0) - 97;
    const offsetIndex = offset.charCodeAt(0) - 97;
    const outputIndex = ((letterIndex + offsetIndex) % 26) + 97;
  
    return String.fromCharCode(outputIndex);
  };
  
  const lowercaseCyclicalSubtraction = (letter, offset) => {
    const letterIndex = letter.charCodeAt(0) - 97;
    const offsetIndex = offset.charCodeAt(0) - 97;
    let outputIndex = letterIndex - offsetIndex;
    if (outputIndex < 0) outputIndex += 26 + 97;
    else outputIndex += 97;
  
    return String.fromCharCode(outputIndex);
  };
  
  class Cipher {
    constructor(key = randomKey()) {
      if (!isValid(key)) throw new Error('Bad key');
  
      this.key = key;
    }
  
    encode(message) {
      return message.split('').map((letter, i) => {
        const keyIndex = i % this.key.length;
        return lowercaseCyclicalAddition(letter, this.key.charAt(keyIndex));
      }).join('');
    }
  
    decode(message) {
      return message.split('').map((letter, i) => {
        const keyIndex = i % this.key.length;
        return lowercaseCyclicalSubtraction(letter, this.key.charAt(keyIndex));
      }).join('');
    }
  }
  
  module.exports = Cipher;