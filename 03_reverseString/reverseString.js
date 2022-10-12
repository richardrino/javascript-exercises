const reverseString = function (stringToReverse) {
  let stringToReverseArray = Array.from(stringToReverse);
  let reverseString = "";

  for (let i = stringToReverse.length; i > 0; i--) {
    reverseString += stringToReverseArray.pop();
  }

  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
