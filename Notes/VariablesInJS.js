/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

//var: can use all over the program.
//can change the value assigned to variable.
var myName = "Beau"
myName = 8

// usable withing the scope.
// can change the value of variable.
let ourName = "freeCodeCamp"
ourName = "NewName"

// const: variable values can never changed.
const pi = 3.14
// TypeError : pi = 345

// variable assignment and declaration.
var a;
var b = 2;
console.log(a)
a = 7;
b = a;
console.log(a)

// Declarations
// variables are case sensitive.
// use camel-case for variable name in javascript.
var studlyCapVar;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10; 
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;


// variable assignment styles
var sum = 10 + 10;  // sum
var diff = 12 - 33; // difference
/*
same for 
 * = Multiplication
 / = division
 % = remainder
 same applicatble for decimal values.
*/
var title = "Hello " + "World"; // concatination for stings.
var dub = 10.01 + 20; 
var sam  = 10 + " Hi" + 2.34;
var test1 = "H" * "I"
console.log(sum)    // OP : 20
console.log(diff)   // OP : -21
console.log(title)  // OP : Hello World
console.log(dub)    // OP : 30.009999999999998
console.log(sam)    // OP : 10 Hi2.34 (Concatination)
console.log(test1)  // OP : null


// Compound assignment with augumented operators.
var a = 48;
var b = 108;
var c = 33.23;
var d = 21.22;

a += 12;
b -= 4;
c *= 11;
d /= 2.2;

// += = concatinate string.

console.log(a)  // OP : 60
console.log(b)  // OP : 104
console.log(c)  // OP : 365.53
console.log(d)  // OP : 9.645454545454545
