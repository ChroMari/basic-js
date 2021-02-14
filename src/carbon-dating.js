const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(sampleActivity) || typeof sampleActivity != 'string') return false;
  sampleActivity = parseFloat(sampleActivity);
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || isNaN(sampleActivity)) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  const A = MODERN_ACTIVITY / sampleActivity

  return Math.ceil(Math.log10(A / k));
};
