const palindromes = function (string) {
  let onlyLetters = string.toLowerCase().replace(/[^a-z]/g, '');
  let reversedString = onlyLetters.split('').reverse().join('');
  return reversedString === onlyLetters;
};

// Do not edit below this line
module.exports = palindromes;
