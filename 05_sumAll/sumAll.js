const sumAll = function (startInt, endInt) {
  if (startInt > endInt) {
    let tempInt = null;
    tempInt = startInt;
    startInt = endInt;
    endInt = tempInt;
  }

  if (startInt < 0 || endInt < 0) {
    return "ERROR";
  }

  if (typeof startInt != "number" || typeof endInt != "number") {
    return "ERROR";
  }

  let sum = null;

  for (let i = startInt; i <= endInt; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
