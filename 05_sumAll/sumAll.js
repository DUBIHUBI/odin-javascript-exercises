const sumAll = function (smallNum, largeNum) {
  if (!Number.isInteger(smallNum) || !Number.isInteger(largeNum)) {
    return 'ERROR';
  }
  if (smallNum < 0 || largeNum < 0) return 'ERROR';
  let sum = 0;
  if (smallNum > largeNum) {
    let temp = smallNum;
    smallNum = largeNum;
    largeNum = temp;
  }
  for (let i = smallNum; i <= largeNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
