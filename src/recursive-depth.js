const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(obj) {
    if (obj.length == 0) return 1;

    if (Array.isArray(obj)) return 1 + Math.max(...obj.map(t => this.calculateDepth(t)));
    
    else return 0
  
  }
};