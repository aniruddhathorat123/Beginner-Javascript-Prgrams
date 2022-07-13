// String variable declaration types.
var firstName = "Aniruddha";
var sample1 = `Hello guys, `; 
let sample2 = 'my name is ';

console.log(sample1 + sample2 + firstName)
// OP : Hello guys, my name is Aniruddha

// Escape literals : \
/*****
CODE  OUTPUT
\'	  single quote
\"	  double quote
\\	  backslash
\n	  newline
\r	  carriage return
\t	  tab
\b	  backspace
\f	  form feed
*****/
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
var sample22 = "Hello \"guys\" ; ";
var sample3 = `allowed 'single quote' and "double quote"`;
var sample4 = "allowed 'single quote' and `backtick`";
var sample5 = 'allowd "double quote" and `backtick`';
var parag = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(myStr)      // OP: I am a "double quoted" string inside "double quotes".
console.log(sample22)   // OP: Hello "guys" ;
console.log(sample3)    // OP: allowed 'single quote' and "double quote"
console.log(sample4)    // OP: allowed 'single quote' and `backtick`
console.log(sample5)    // OP: allowd "double quote" and `backtick`
console.log(parag)      // OP: FirstLine
	                    //      \SecondLine
                        //     ThirdLine


                        
// String operations:

// concatination:
var start = "Hello guys, ";
var name = "my name is scott";
start += name;
console.log(start) // OP : Hello guys, my name is scott
// or , console..log(start + name);

// length of string.
console.log(name.length);       // OP: 17
console.log("Hi guys".length);  // OP: 7

// Traversing
// javascript is sero based indexing lang.
console.log("First letter of start : " + start[0]); //OP: First letter of start : H
console.log("Last letter of start : " + start[start.length - 1]); 
                        // OP: Last letter of start : t

// Strings are immutable in Javascript;
var str1 = "Jello guys";
// error: str1[0] =  "H"; // not possible.
// TO fix this,
str1 = "Hello guys";



