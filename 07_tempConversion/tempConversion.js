const ftoc = function (tempInFarenheit) {
  let tempInCelcius = (tempInFarenheit - 32) * (5 / 9);

  tempInCelcius = Math.round(tempInCelcius * 10) / 10;

  return tempInCelcius;
};

const ctof = function (tempInCelcius) {
  let tempInFarenheit = (tempInCelcius * 9) / 5 + 32;

  tempInFarenheit = Math.round(tempInFarenheit * 10) / 10;

  return tempInFarenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
