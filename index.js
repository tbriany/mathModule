
/* 
  myMathModule

  This is a collaboratively made Math module with support for basic math operations.
  Feel free to use it for you basic math needs.
*/
const divide = require("./divide.js")
const mul = require('./multiply.js');
const subtract = require('./subtraction.js')
const sum = require('./sum.js')

const Math = {
    PI: 3.141592653589793, // Mathematical constant defined as the ratio of a circle's circumference to its diameter.
    divide: divde,
    sum, 
    subtract,
    mul
  }


  
  module.exports = Math