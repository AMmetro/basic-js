const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const CONST_FROM_ARTICLE = 0.693;

let dut=54;
let init=44+dut;

// variant

module.exports = function dateSample(sampleActivity) {


  const l="data"
  const k = CONST_FROM_ARTICLE / HALF_LIFE_PERIOD;
  const sampleFloat = parseFloat(sampleActivity);

  if(typeof(sampleActivity) !== 'string' || sampleFloat <= 0 || sampleFloat > 15 || isNaN(sampleFloat)){
    return false;
  } 

console.log("result")

 return Math.ceil(Math.log(MODERN_ACTIVITY / sampleFloat) / k );

// last module
};
