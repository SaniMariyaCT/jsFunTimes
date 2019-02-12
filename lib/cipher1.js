function generate() {
  let randomKey = '';
  for (let i = 0; i < 100; i += 1) {
    randomKey += String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }
  return randomKey;
}

function checkKey(key) {
  const patt = new RegExp('^\\s|[0-9]|[A-Z]|[\\W]');
  const testKey = patt.test(key);
  if (key.length < 1 || testKey) {
    throw new Error('Bad key');
  } else {
    return key;
  }
}

export class Cipher {
  constructor(key = generate()) {
    this.key = checkKey(key);
  }

  encode(str) {
    let en = '';
    for (let i = 0; i < str.length; i += 1) {
      const keyIndex = i >= this.key.length ? i % this.key.length : i;
      const shifted = str.charCodeAt(i) + this.key.charCodeAt(keyIndex) - 97;
      en += String.fromCharCode(shifted > 122 ? shifted - 26 : shifted);
    }
    return en;
  }

  decode(str) {
    let de = '';
    for (let i = 0; i < str.length; i += 1) {
      const keyIndex = i >= this.key.length ? i % this.key.length : i;
      const shifted = str.charCodeAt(i) - this.key.charCodeAt(keyIndex) + 97;
      de += String.fromCharCode(shifted < 97 ? shifted + 26 : shifted);
    }
    return de;
  }
}