/* You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following: 
• Tests for equality and inequality with strings 
• Tests using the lower case function 
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to 
• Tests using "and" and "or" operators 
• Test whether an item is in an array 
• Test whether an item is not in an array */

// Equality & unequality
let myName = "Rameez";
console.log(myName == "Rameez");
console.log(myName !== "rameez")
//Numberics
let myNumber = 10;
console.log(myNumber == 10);                      //true
console.log(myNumber !== 10);                     // false
console.log(myNumber > 5);                        //true
console.log(myNumber < 10);                      // false
console.log(myNumber <= 10);                     // true
console.log(myNumber <= 5);                     //false

// And (&) , Or(|)
let num1 = 10;
let num2 = 5;
console.log(num1 > 8 && num2 < 6);               // true
console.log(num1 <=10 && num2 >5);              //false
console.log(num1 >= 10 || num2 < 6);             //true
console.log(num1 > 10 || num2 > 5);             //false

// Array
let myArray = [3, 5, "Rameez", "Raja"];
let myString = "Shayan";

console.log(Array.isArray(myArray));                    //true
console.log(Array.isArray(myString));                    // false
