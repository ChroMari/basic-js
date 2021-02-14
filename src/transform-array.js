const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arrResult = [];
  let arr2 = [...arr];

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == '--discard-next') { // исключает следующий элемент массива
      arr2[i + 1] = '--false';
    } else if (arr2[i] == '--discard-prev') { // исключает предыдущий элемент из массива
      if (arr2[i - 1] != '--false' && arr2[i - 1] !== undefined) arrResult.pop();
    } else if (arr2[i] == '--double-next') { //удваивает следующий элемент
      if (arr2[i + 1] != undefined) arrResult.push(arr2[i + 1]);
    } else if (arr2[i] == '--double-prev') { //удваивает предыдущий элемент
      if (arr2[i - 1] != undefined && arr2[i - 1] != '--false') arrResult.push(arr2[i - 1]);
    } else {
      if (arr2[i] != '--false') arrResult.push(arr2[i]);
    }
  }
  return arrResult;
};
