const repeatString = function (inputString, loopNum) {
  if (loopNum < 0) {
    return "ERROR";
  }

  let repeatString = "";

  for (let i = 0; i < loopNum; i++) {
    repeatString += inputString;
  }

  return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
