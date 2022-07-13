// Functions:
// Precenden of local variable is higher htna global variable.
// if we did not define return value of function then return value of 
// function is `undefined`.
var globalVar;
var outerWear = "T-shirt";

function subFunction(arg1, arg2) {
  console.log(arg1 - arg2);
}

function addFunction(arg1, arg2) {
  console.log(arg1 + arg2);
}
subFunction(10, 5)  //OP: 5
addFunction(10, 5)  //OP: 15
addFunction("Hello ", "World"); //OP: Hello World
subFunction("Hello ", "World"); //OP: null or NaN

function varFunction() {
  if (typeof globalVar != "undefined") {
    console.log("global variable value: " + globalVar);
  } else {
    console.log("global variable is not initialised.")
  }
  var localVar = 10; // it can be without var.
  console.log("local variable : " + localVar)
}
varFunction()

function myWear(wear) {
  var outerWear = wear;
  return outerWear;
}
console.log(myWear("Jacket"));
console.log(outerWear);
