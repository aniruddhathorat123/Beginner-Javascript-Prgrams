// Arrays:
// Mutable datatype.
var ourArray = [18,64,99];
var array1 = [19, "Hello", 45.44];
ourArray[1] = 45; // ourArray now equals [18,45,99].
console.log(ourArray);
console.log(array1);
console.log(array1[1]);

// multidimensional arrays
var multiArray1 = [[1,2,3], ["Hi", 243, 67.78], [[45,46,47], "Good", "Bye"]]
console.log(multiArray1[0][2])  // OP: 3
console.log(multiArray1[1][0])  // OP: Hi
console.log(multiArray1[2][0])  // OP: [45, 46, 47]
console.log(multiArray1[2][0][2])   // OP: 47

// push() : push the leement at end of the array.
array1.push(34);
console.log(array1) //OP: [19, "Hello", 45.44, 34]
array1.push([30,60,90,180])
console.log(array1) // OP: [19, "Hello", 45.44, 34, [30, 60, 90, 180]]

//pop(): delete element at end of arrray.
array1.pop()
console.log(array1) //OP: [19, "Hello", 45.44, 34]
array1.pop()
console.log(array1) //OP: [19, "Hello", 45.44]

//shift(): delete and return first element of array.
console.log("Deleted element: " + array1.shift()); // Deleted element: 19
console.log(array1) // OP: ["Hello", 45.44]

//unshift(ele): append the given element at beginning of array.
array1.unshift([23,56,8]);
array1.unshift(34.6);
console.log(array1)     //OP: [34.6, [23, 56, 8], "Hello", 45.44]

// example : shopping kart
var myList = [["cereal", 3, "unit"], ["milk", 2, "liter"], ["bananas", 3, "dozen"], ["juice", 2, "liter"], ["eggs", 12, "unit"]];

