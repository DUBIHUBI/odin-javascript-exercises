const fibonacci = function (num) {
  if (num < 0) return 'OOPS';
  if (num === 0) return 0;
  let num1 = 1;
  let num2 = 1;
  let temp = 0;
  for (let i = 2; i < num; i++) {
    temp = num2;
    num2 += num1;
    num1 = temp;
  }
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
