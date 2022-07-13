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
var sample2 = "Hello \"guys\" ; ";
var sample3 = `allowed 'single quote' and "double quote"`;
var sample4 = "allowed 'single quote' and `backtick`";
var sample5 = 'allowd "double quote" and `backtick`';
var parag = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(myStr)      // OP: I am a "double quoted" string inside "double quotes".
console.log(sample2)    // OP: Hello "guys" ;
console.log(sample3)    // OP: allowed 'single quote' and "double quote"
console.log(sample4)    // OP: allowed 'single quote' and `backtick`
console.log(sample5)    // OP: allowd "double quote" and `backtick`
console.log(parag)