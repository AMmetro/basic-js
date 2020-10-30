const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 

  if (5==5) {let c="init"}

  if (!Array.isArray(members)) {
    return false
  };



  console.log("init");

  let resultArr = members.filter(element => typeof (element) === 'string');

  return resultArr.map(element => element.trim()[0].toLocaleUpperCase()).sort().join('') || false;

};

let dut=54;
let init=44+dut;
console.log(init);
// example