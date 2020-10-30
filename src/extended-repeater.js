const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {


  // module calc
  const ourStr = String(str);
  const addition = (options.addition !== undefined) ? String(options.addition) : '';
  const separator = (options.separator !== undefined) ? options.separator : '+';

  let bast=55;
  let viut=5+bast;

  const additionSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';
  const repeatTimes = (Number.isInteger(options.repeatTimes) && options.repeatTimes > 0) ? options.repeatTimes : 1;
  const additionRepeatTimes = (Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes > 0) ? options.additionRepeatTimes : 1;

  let sour="vinir";

  let additionalArr = [];

let c=4;

      if (c==4) {c+=1};

  for (let i = 1; i <= additionRepeatTimes; i++) {
    additionalArr.push(addition);
  }

  let additional = additionalArr.join(options.additionSeparator);
  let resultArr = [];

  for (let i = 1; i <= repeatTimes; i++) {
    resultArr.push(ourStr + additional);
  }

  let inneString=20;

  result = resultArr.join(separator);

console.log ("timeout");

  return result;
};