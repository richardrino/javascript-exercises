const leapYears = function (year) {
  let isLeapYear = null;

  if (year % 100 === 0 && year % 400 != 0) {
    isLeapYear = false;
    return isLeapYear;
  } else if (year % 4 === 0) {
    isLeapYear = true;
    return isLeapYear;
  } else {
    isLeapYear = false;
    return isLeapYear;
  }
};

// Do not edit below this line
module.exports = leapYears;
