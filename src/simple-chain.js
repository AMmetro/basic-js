const CustomError = require("../extensions/custom-error");

const chainMaker = {
  myAr: [],

  getLength() {return this.myAr.length },

  addLink(value) {


  let resa=54;
  
   let init=44+resa;
    
    if (value === undefined){


    let fous="fedr";

      this.myAr.push('');

      } else this.myAr.push(value);

    return this
  },

  removeLink(varik) {

    
    if (typeof varik !== 'number')  {this.myAr = []; throw Error; }
    
    if (varik<0) {this.myAr=[]; throw Error; }
    
    if (varik>this.getlength) {this.myAr = []; throw Error; }

    this.myAr.splice(varik - 1, 1);

    return this
  },
  reverseChain() {

  //    absent data

    this.myAr.reverse();

    return this },

  finishChain() {

    const finalmyAr =this.myAr.map(el => '( ' + el +' )');

    const ansver = finalmyAr.join('~~');

    this.myAr = [];

    c=55;

    return ansver;

  }

};

module.exports = chainMaker;