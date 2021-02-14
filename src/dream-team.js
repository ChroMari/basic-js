const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) return false;

  return members.reduce((result, item) => {
    if (typeof item === 'string') {
      return result += item.trim()[0].toUpperCase();
    } else {
      return result;
    }
  }, '').split('').sort().join('');


};
