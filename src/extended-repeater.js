const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' }) {
  let result = str;

  if (str === null) str = 'null';
  if (addition === null) addition = 'null';

  if(addition != undefined) {
    let a1 = [];

    for (let i =0; i < additionRepeatTimes; i++) a1.push(addition);

    a1 = a1.join(additionSeparator);
    result = str + a1;
}

  let a2 = [];

  for (let i = 0; i < repeatTimes; i++) a2.push(result);
  
  a2 = a2.join(separator);

  return a2;

};
  