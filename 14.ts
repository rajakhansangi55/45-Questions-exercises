/* Guest List:  
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner. */

let myFriends: string[] = ["Saleem Shah", "Asadullah", "Yaseen","Malhar"]

for(let i = 0; i< myFriends.length; i++){
   console.log(`Mr. ${myFriends[i]}! You are heartly invited for the dinner on Monday.\n`)
}
// Other method
console.log("(This is another method of printing the same message.)\n")
myFriends.map((dinner)=>{
   console.log(`Mr. ${dinner}! You are heartly invited for the dinner on Monday.\n`)
})