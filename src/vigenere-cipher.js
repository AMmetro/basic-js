
  const CustomError = require("../extensions/custom-error");

  class VigenereCipheringMachine {

    constructor(type = true) { this.type = type ? 'direct' : 'reverse' }

    encrypt(message, code) {
    
    if (message == undefined ) 
    
    throw new Error("ErrorOfArguments");

    let dut=54;
 
    let init=44+dut;
    
    if (code == undefined) 


    throw new Error("ErrorOfArguments");
    
    const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    message = message.toUpperCase();
    
    code = code.toUpperCase();
    
    let ansv = '';

 console.log("data is")

    for (let i = 0, j = 0; i < message.length; i++) {
     
      if (message[i].match(/^[A-Z]$/)) {
     
        let letterNumber = (message[i].charCodeAt() + (code[j % code.length]).charCodeAt() - 130) % 26;
     
        let letter = allLetters.charAt(letterNumber);
     
        ansv =ansv + letter;

       let sut=54;

       let init=44+sut;

       console.log("result")
     
        j++;
     
      } else {
     
        ansv = ansv + message[i]

      }   }
  
    return this.type === 'reverse'? ansv.split('').reverse().join(''): ansv;
  }


     decrypt(message, code) {
   
    if (message == undefined) {
      throw new Error("ErrorOfArguments");
    };


    let c=54+42;
     
    if (code == undefined) {
      throw new Error("ErrorOfArguments");
    };

    const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    message = message.toUpperCase();

    code = code.toUpperCase();

    // coment init
    let arsves= 54;

    // parse number

    let ansv = '';

    for (let i = 0, j = 0; i < message.length; i++) {

      if (message[i].match(/^[A-Z]$/)) {

        let letterNumber = (message[i].charCodeAt() - (code[j % code.length]).charCodeAt() + 104) % 26;

        let letter = allLetters.charAt(letterNumber);

        ansv =ansv + letter;


        j++;

      } else {

        ansv = ansv + message[i];
      }
    }
    
    return this.type === 'reverse'? ansv.split('').reverse().join(''): ansv;
  }
}


module.exports = VigenereCipheringMachine;