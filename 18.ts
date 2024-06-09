/*Think of at least five places in the world you’d like to visit. 
• Store the locations in an array. Make sure the array is not in alphabetical order. 
• Print your array in its original order. 
• Print your array in alphabetical order without modifying the actual list. 
• Show that your array is still in its original order by printing it. 
• Print your array in reverse alphabetical order without changing the order of the original list. 
• Show that your array is still in its original order by printing it again. 
• Reverse the order of your list. Print the array to show that its order has changed. 
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed. 
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed. 


*/

let locations:string[] = ["Islamabad", "KPK", "Dubai", "America","Saudi"]
console.log(locations)

//  Arranging in alphabetical order.
let copyOfArr = locations.slice()
let sortedArr  = copyOfArr.sort()
console.log(sortedArr)

//  Printing original Array
console.log(locations)

//  Arranging in reverse alphabetical order.
let copyOfArr2 = locations.slice()
let reversedArr = copyOfArr2.reverse()
console.log(reversedArr)

// printing original Array
console.log(locations)

// Reversing the order of my list & printing it in changed order.
let reversedlocations = locations.reverse()
console.log(reversedlocations)

// Again reversing the oder of my list & printing it in it's original order.
let againReversedlocation = reversedlocations.reverse()
// printing original array after reversing orignal twice.
console.log(againReversedlocation)

// Sorting the original Array
let sortedArray = locations.sort();
console.log(sortedArray)
// reversing the sorted Array
let reversedArray = sortedArray.reverse();
console.log(reversedArray)


