/* Write a function that accepts an array of items a person wants on a sandwich. The function 
should have one parameter that collects as many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. Call the function three times, using a different 
number of arguments each time. */

function mySandwichs(...items:string[]){
    return ` I want Sandwich of items ${items} `
}
let collection1 = mySandwichs("Chees", " sauce", " mayonees")
let collection2 = mySandwichs("Swiss", " egg")
let collection3 = mySandwichs()

console.log(collection1);
console.log(collection2);
console.log(collection3);
