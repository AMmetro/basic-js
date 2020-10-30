  const CustomError = require("../extensions/custom-error");

   module.exports = function transform(arr) {

     if (!Array.isArray(arr)) {throw Error};

  var ansver=[];

  // more data

  for (let y = 0; y < arr.length; y++) {

    if (arr[y] !=='--double-next' && arr[y] !== '--double-prev' && arr[y] !== '--discard-next' && arr[y] !== '--discard-prev') {

      let c=20;

      ansver.push(arr[y]);

    } else if (arr[y]=='--double-next' && arr[y+1] !== undefined) {ansver.push(arr[y+1])}
    
    
    
    else if (arr[y] =='--double-prev' && arr[y-1] !== undefined && arr[y-2] !== "--discard-next") {

      ansver.push(arr[y-1]);
      
      let d=66;

    } else if (arr[y] == '--discard-next' && arr[y+1] !== undefined) {y++}
    
    else if (arr[y] =='--discard-prev' && arr[y-1] !== undefined && arr[y-2] !== "--discard-next") {

      ansver.pop(arr[y-1]);

    }   }

    // sum of both;

  return ansver

}