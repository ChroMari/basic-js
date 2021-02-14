const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  matrix.map(item =>{
    result += item.filter(value => value == '^^').length;
  });
  return result;
};
