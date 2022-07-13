// Objects:
// - same like array but uses properties to access data in object.
var myCar = {
    name: "Ferriari Pista",
    color: "Red",
    engine: "7.1l Hybrid",
    cost : 457000,  
    "travelled countries" : ["India", "Japan"],
  };
  
  // Access objects's data
  // 1: Dot notation:
  var carname = myCar.name;
  
  //2: Bracket notation.
  // can use this notation when property name has space
  var visiedCountries = myCar["travelled countries"];
  console.log(carname + " : " + visiedCountries);
  
  // Update property value.
  var newColor =  `black`;
  myCar.color = newColor;
  console.log("color : " + myCar.color)
  
  // Add new property
  var horn = "long beep";
  myCar["horn"] = horn;
  
  console.log(myCar);
  
  // delete property
  delete myCar.horn  
  console.log(myCar);
  
  // check if object has given property
  var property = "horn"
  console.log("does car has horn? : " + myCar.hasOwnProperty(property))
  
  // Nested objects
  var school = {
    "name" : "Ancient modern school", 
    "students" : {
      "nos of students" : 250,
      "nos of boys" : 125,
      "any handicaped" : true, 
    }, 
    "teachers" : {
      "nos of teacher" : 20,
      "permanent" : 10,
    }
  }
  
  console.log("Nos of permanent teachers: " + school.teachers["permanent"]);
  
  
  // Array of objects 
  var cars = [
    {
      name : "Mclarne P1 GTR",
      color: "yellow-green",
      engine: "7.1l 3.48 V8 hybrid",
      cost : 123000,  
      "travelled countries" : ["India", "Japan", "USA", "Russia"],
    }
  ]
  
  // inset new object into array of objects.
  cars.push(myCar)
  console.log(cars)
  
  // Access nested array elements.
  console.log("ferrieri pista first visited to : " + cars[1]["travelled countries"][0])
     
  