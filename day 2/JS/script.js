//Exercise 1
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var str1 = "You cannot end a sentence with because because because is a conjunction";
var lastIndex = str1.lastIndexOf("conjunction");

console.log(lastIndex); // Output: 60

//Use repeat() method to print 30 Days Of JavaScript 2 times
var str2 = "30 Days Of JavaScript  ";
var repeatedString = str2.repeat(2);
console.log(repeatedString); //30 Days Of JavaScript  , 30 Days Of JavaScript  





// Exercice 2
//Cut (slice) out the first word of the string using substr() or substring() method
var str = "Hello, World!";
var substring = str.substring(0, 5);
console.log(substring); // Output: Hello

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
var str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
var splitArray = str.split(", ");

console.log(splitArray); // Output: ["Facebook"," Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method
var string = "30 Days Of JavaScript";
let replacedWord  = string.replace("30 Days Of Python");

// Exersice 3
//Print the string on the browser console using console.log()
console.log("hello world");