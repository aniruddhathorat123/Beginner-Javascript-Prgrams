
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
  }
  
  // Change the words here to test your function
  console.log(wordBlanks("dog", "big", "ran", "quickly"));
  console.log(wordBlanks("bike", "slow", "flew", "slowly"));

  //OP:
  // The big dog ran to the store quickly.
  // The slow bike flew to the store slowly.
  