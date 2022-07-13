// Some imp functions.

// generate random number between 0-1 but it could not be 0 or 1.
console.log(Math.random());

// random whole number
// by *20 it gives random number between 1 to 20.
// it cannot be 20 but it can be 1.
console.log(Math.floor(Math.random() * 20));


// random number within the range.
var ourMax = 10;
var ourMin = 0;
console.log(Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin);

//parseInt(str) to convert string number into integer format.
// if string number can't convert into integer then it returns NaN(Not a Number).
console.log(parseInt("34"));
console.log(parseInt("w")); //OP: NaN
// can use radix to convert the base of given string number.
// default base of string number is 10.
console.log(parseInt("1001", /*binary*/ 2));    //OP: 9

// Multiple ternary operators or nested ternary operators.
function checkNum(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
} 
console.log(checkNum(23));
console.log(checkNum(-34));
console.log(checkNum(0));

 
