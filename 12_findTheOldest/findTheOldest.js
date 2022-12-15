const findTheOldest = function (array) {
  let currentYear = new Date().getFullYear();
  let oldestPerson = array.reduce((oldest, nextPerson) => {
    let oldestDeath =
      'yearOfDeath' in oldest ? oldest.yearOfDeath : currentYear;
    let oldestAge = oldestDeath - oldest.yearOfBirth;
    let nextPersonDeath =
      'yearOfDeath' in nextPerson ? nextPerson.yearOfDeath : currentYear;
    let nextPersonAge = nextPersonDeath - nextPerson.yearOfBirth;
    return nextPersonAge > oldestAge ? nextPerson : oldest;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
