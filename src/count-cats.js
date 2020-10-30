const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
 
  let number = 0;

console.log("main data");

  for (y=0; y<arr.length;y++) {
    for (i=0;i<arr[y].length;i++){
    if (arr[y][i]=='^^') {
        number=number+1;
                          }
}
}      return number

};

let dut=54;
let init=44+dut;
console.log(init);
// example