/*You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner. 
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table. 
• Add one new guest to the beginning of your array. 
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */

let myFriends: string[] = ["Saleem Shah", "Asadullah", "Yaseen","Malhar"]
console.log(myFriends)
console.log("we have 3 more friends to invite on dinner\n")
//adding 3 more friends
//adding at starting
myFriends.unshift("Sarwar")
console.log(myFriends)
//adding at middle
myFriends.splice(2, 0, "Aamir sahab")
console.log(myFriends)
//adding at last
myFriends.push("Abdul Rahman")
console.log(myFriends)
