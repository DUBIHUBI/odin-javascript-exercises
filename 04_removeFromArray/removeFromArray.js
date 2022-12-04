const removeFromArray = function (array, ...remove) {
  // for (const a of remove) {
  //   array = array.filter((element) => element !== a);
  //   array.includes(a);
  // }
  // return array;
  return array.filter((element) => !remove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
