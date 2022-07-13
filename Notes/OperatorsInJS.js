// Equality operator (==, ===).
function testEqual(val1, val2) {
    if (val1 == val2) { // normal equality converts val2 type into val1 type for comparision.
      if (val1 === val2) { // Strict equal operator.
        return "Equal and Strict Equal are true";
      } 
      return "Equal is true and strict equal is false";
    }
    return "Not Equal";
  }
  console.log(testEqual(10, '10')); //OP: Equal is true and strict equal is false
  console.log(testEqual('10', "10")); // OP: Equal and Strict Equal are true
  
  // Not-Equality operator (!=, !==).
  function testNotEqual(val1, val2) {
    if (val1 !== val2) {
      if (val1 != val2) {  // strict not-equal operator, opposite of strict equal.
        return "both not-equal and strict not-equal is true";
      }
      return "strict not-equal is true and not-equal is false";
    } 
    return "Equal";
  }
  console.log(testNotEqual(13, "13"));  //OP: strict not-equal is true and not-equal is false
  console.log(testNotEqual("23", '24'));//OP: both not-equal and strict not-equal is true
  
  // Other operators : 
  // <, <= - less than and less than or equal to.
  // > , >= - greater than and greater than or equal to.
  // && - logival AND operator.
  // || - logical OR operator.


// Conditional Operators: 
// Nested else-if ladder:
function testSize(num) {
    if (num < 5) {
      return "Tiny"
    } else if (num < 10) {
      return "Small"
    } else if (num < 15) {
      return "Medium"
    } else if (num < 20) {
      return "Large"
    } else {
      return "Huge"
    }
  }
  console.log(testSize(12));   //OP: Medium
  
  // Switch case:
  // switch cases are strict equals.
  function sequentialSizes(val) {
    var answer = "";
    switch(val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    return answer;  
  }
  console.log(sequentialSizes(1));
  
  function chainToSwitch(ch) {
    var ans = "";
    switch (ch) {
      case "bob":
        ans = "Marley";
        break;
      case 42:
        ans = "The Answer";
        break;
      case 1:
        ans = "There is no #1";
        break;
      case 99:
        ans = "Missed me by this much!";
        break;
      case 7:
        ans = "Ate Nine";
        break;
      default:
        ans = undefined;
        break;
    }
    return ans;
  }
  
  console.log(chainToSwitch(909)); //OP: Ate Nine
  
  
  