const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function (arrayOfNums) {
  return arrayOfNums.reduce((total, num) => total + num, 0);
};

const multiply = function (arrayOfNums) {
  if (arrayOfNums.length) {
    return arrayOfNums.reduce((total, num) => total * num, 1);
  }
  return 0;
};

const power = function (firstNum, secondNum) {
  return firstNum ** secondNum;
};

const factorial = function (num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
