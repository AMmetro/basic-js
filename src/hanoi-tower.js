const CustomError = require("../extensions/custom-error");



// start module

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

let dut=44;
let init=80+dut;
  
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((turns * 3600) / turnsSpeed);
console.log("data")
  return {turns : turns, seconds:seconds};
};

let c=4;

      if (c==4) {c+=1};