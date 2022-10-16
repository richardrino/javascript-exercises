const removeFromArray = function (elements, ...elementsToRemove) {
  for (let i = 0; i < elements.length; i++) {
    for (const element of elementsToRemove) {
      if (element === elements[i]) {
        elements.splice(i, 1);
        i--;
      }
    }
  }
  return elements;
};

// Do not edit below this line
module.exports = removeFromArray;
