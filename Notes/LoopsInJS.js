// Loops in JS

// 1: While loop
var whileArray = [];
var i = 0;
while(i < 5) {
  whileArray.push(i);
  i++;
}
console.log("While loop : " + JSON.stringify(whileArray));
console.log("Sum in while array : " + sumOfElements(whileArray));


// for loop
var forArray = [];
for (var i = 1; i < 10; i += 2) {
  forArray.push(i);
}
console.log("For array : " + JSON.stringify(forArray));
console.log("Sum in For array : " + sumOfElements(forArray));

function sumOfElements(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//do-while loop
var doArray = [];
var i = 0;
do {
  doArray.push(i);
  i++;
} while (i < 5)
console.log("Do-while array : " + JSON.stringify(doArray));
console.log("Sum in Do-while array : " + sumOfElements(doArray));


// Nested array 
// calculate product of all element in given array
var arr = [[1,2],[3,4],[5,6,7]];

function findProduct(array) {
  var product = 1;
  if (array.length == 0) {
    return 0;
  }
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
       product *= array[i][j];
    }
   }
   return product;
}
console.log("Product of all element " + JSON.stringify(arr)+" is :" + findProduct(arr));
