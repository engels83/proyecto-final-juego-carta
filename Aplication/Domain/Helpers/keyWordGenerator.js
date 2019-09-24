const letters = require("../Constants/letters");
const numbers = require("../Constants/numbers");

const keyWordGenerator = length => {
  if (length <= 0) length = 10;

  let lengthLetters = Math.round((70 * length) / 100); // always would be 70%
  let lengthNumbers = length - lengthLetters; // always would be 30%

  let keyWord = "";
  for (let i = 0; i < lengthLetters; i++) {
    keyWord = keyWord.concat(
      letters[Math.floor(Math.random() * letters.length)]
    );
  }

  for (let i = 0; i < lengthNumbers; i++) {
    keyWord = keyWord.concat(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }

  return keyWord;
};

module.exports = keyWordGenerator;
