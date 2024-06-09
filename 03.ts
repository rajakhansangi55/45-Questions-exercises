
/* Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase. */

let myName : string = "Raja Khan";
// lowerCase
console.log(myName.toLowerCase());
//UpperCase
console.log(myName.toUpperCase());
// titlecase

let firstLetter: string = myName.charAt(0).toUpperCase();
let restLetters: string = myName.slice(1).toLowerCase();

let titleCase = firstLetter + restLetters;

console.log(titleCase);